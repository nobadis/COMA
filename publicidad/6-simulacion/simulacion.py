"""
Simulación Monte Carlo de la campaña COMA (nov 2026 - feb 2027).

No predice el futuro: reparte la incertidumbre. Cada coste por clic, CTR, conversión y tasa de
cierre se sortea entre un mínimo, un valor probable y un máximo (rangos de mercado en España para
servicios de diseño web y pymes). Se repite 20.000 veces y se mira qué pasa en el peor 10 %, en
el caso típico y en el mejor 10 %.

Precios: los de src/data/pricing.ts (web 99 €, idiomas 49 €, reservas 149 €, tienda 349 €...).
Uso: python3 simulacion.py   ->  escribe resultados.json y resultados.csv junto a este archivo.
"""
import csv
import json
import os
from datetime import date, timedelta

import numpy as np

N = 20_000
rng = np.random.default_rng(2026)
HERE = os.path.dirname(os.path.abspath(__file__))


def tri(lo, mode, hi, n=N):
    return rng.triangular(lo, mode, hi, n)


# ------------------------------------------------------------------ calendario y presupuesto
FASES = [
    # id, nombre, inicio, días, multiplicadores (conversión, CPM Meta, CPC Google)
    ("F1", "Aprender", date(2026, 11, 9), 28, 1.00, 1.08, 1.03),  # incluye Black Friday (CPM sube)
    ("F2", "Optimizar", date(2026, 12, 7), 14, 0.95, 1.05, 1.00),
    ("NAV", "Navidad: frenar", date(2026, 12, 21), 17, 0.65, 0.95, 0.92),
    ("F3", "Escalar: año nuevo", date(2027, 1, 7), 32, 1.15, 0.85, 1.00),
]

# €/día por campaña y fase (F1, F2, NAV, F3). Mallorca pesa más: es donde COMA juega en casa.
BUDGET = {
    "G1": (10, 10, 5, 12),
    "G2": (12, 12, 7, 14),
    "G3": (1, 1, 1, 1),
    "G4": (0, 0, 0, 6),
    "M1": (7, 7, 3, 10),
    "M2": (8, 8, 4, 12),
    "M3": (0, 4, 3, 5),
}
# Semáforo: tras la fase 1, si una campaña de España cuesta más que esto por lead cualificado,
# se apaga: el 30 % de su dinero refuerza Meta Mallorca y el resto se ahorra (Mallorca se satura
# si le echas todo). Ver PLAN-DE-CAMPANA.txt, "reglas".
UMBRAL = {"G1": 45.0, "M1": 40.0}
NOMBRE = {
    "G1": "Google · Web 99 España",
    "G2": "Google · Web Mallorca",
    "G3": "Google · Marca COMA",
    "G4": "Google · SEO local",
    "M1": "Meta · Web 99 España (frío)",
    "M2": "Meta · Temporada Mallorca (frío)",
    "M3": "Meta · Remarketing",
}

# ------------------------------------------------------------------ embudo por campaña
# Factor común de calidad de la landing y del seguimiento comercial: si la landing convierte
# peor de lo previsto, lo hace en todos los canales a la vez (no son independientes).
landing = rng.lognormal(0, 0.25, N)
followup = rng.lognormal(0, 0.15, N)  # rapidez y calidad de la respuesta al lead
attach = np.clip(rng.lognormal(0, 0.25, N), 0.4, 2.0)  # cuántos extras se venden de verdad

FUNNEL = {
    # Google: CPC y conversión de clic a formulario
    "G1": dict(cpc=tri(0.9, 1.6, 2.8), cvr=tri(0.03, 0.05, 0.08), q=tri(0.40, 0.55, 0.68), close=tri(0.12, 0.20, 0.30)),
    "G2": dict(cap=9.0, cpc=tri(0.8, 1.4, 2.6), cvr=tri(0.05, 0.08, 0.12), q=tri(0.55, 0.68, 0.80), close=tri(0.18, 0.27, 0.36)),
    "G3": dict(cpc=tri(0.2, 0.35, 0.7), cvr=tri(0.08, 0.14, 0.22), q=tri(0.6, 0.75, 0.9), close=tri(0.25, 0.35, 0.45), cap=0.5),
    "G4": dict(cpc=tri(1.2, 2.0, 3.5), cvr=tri(0.025, 0.045, 0.075), q=tri(0.5, 0.62, 0.75), close=tri(0.12, 0.20, 0.30)),
    # Meta: CPM, CTR de enlace, % que carga la landing, conversión
    "M1": dict(cpm=tri(3.5, 5.5, 8.5), ctr=tri(0.006, 0.011, 0.017), lpv=tri(0.65, 0.75, 0.85), cvr=tri(0.010, 0.022, 0.040), q=tri(0.30, 0.45, 0.58), close=tri(0.10, 0.16, 0.25)),
    "M2": dict(cpm=tri(4.0, 6.5, 10.0), ctr=tri(0.007, 0.012, 0.018), lpv=tri(0.65, 0.75, 0.85), cvr=tri(0.015, 0.028, 0.045), q=tri(0.40, 0.55, 0.68), close=tri(0.14, 0.22, 0.32)),
    "M3": dict(cpm=tri(6.0, 9.0, 14.0), ctr=tri(0.010, 0.016, 0.025), lpv=tri(0.70, 0.80, 0.88), cvr=tri(0.03, 0.055, 0.09), q=tri(0.50, 0.62, 0.74), close=tri(0.18, 0.26, 0.36)),
}

# ------------------------------------------------------------------ valor de un cliente (pricing.ts)
# Probabilidad de que el cliente añada cada extra. España vs Mallorca (más idiomas, más reservas).
def ticket(mallorca):
    idi = 0.60 if mallorca else 0.30
    one_off = (
        99
        + idi * 1.6 * 49  # idiomas (49 €/idioma)
        + (0.20 if mallorca else 0.12) * 149  # reservas
        + 0.08 * 349  # tienda
        + 0.30 * 99  # contenido propio
        + 0.12 * 79  # blog
        + 0.35 * 29  # configuración de correo
    )
    recurring_12m = (
        0.70 * 9 * 12  # alojamiento y mantenimiento
        + 0.35 * 2.2 * 60  # buzones (60 €/año)
        + (0.22 if mallorca else 0.18) * 99 * 8  # SEO local, 8 meses de media
        + 0.06 * 99 * 6  # GEO
    )
    return one_off, recurring_12m


T_ES = ticket(False)
T_MLL = ticket(True)
T_SEO = (99 + 0.25 * 99, 99 * 7 + 0.15 * 99 * 6)  # 1.er mes (+ algo de web) y 12 meses
VALOR = {"G1": T_ES, "G2": T_MLL, "G3": T_ES, "G4": T_SEO, "M1": T_ES, "M2": T_MLL, "M3": T_ES}
# Supuestos de margen (edítalos con tus costes reales): lo puntual deja la mitad, lo mensual 3/4
MARGEN_PUNTUAL, MARGEN_RECURRENTE = 0.50, 0.75

# ------------------------------------------------------------------ simulación
def simular(reglas):
    res = {k: {m: np.zeros(N) for m in ("spend", "clicks", "leads", "qleads", "clients", "rev1", "rev12")} for k in BUDGET}
    mover = {k: np.zeros(N, bool) for k in UMBRAL}
    for fi, (fid, _, _, days, conv_m, cpm_m, cpc_m) in enumerate(FASES):
        if reglas and fi == 1:  # fin de la fase 1: se mira el coste por lead cualificado
            for k, lim in UMBRAL.items():
                mover[k] = res[k]["spend"] / np.maximum(res[k]["qleads"], 0.5) > lim
        budget = {k: np.full(N, float(b[fi])) for k, b in BUDGET.items()}
        for k in UMBRAL:
            moved = np.where(mover[k], budget[k], 0.0)
            budget[k] -= moved
            budget["M2"] += moved * 0.3  # una parte refuerza Mallorca; el resto no se gasta
        for k in BUDGET:
            f = FUNNEL[k]
            spend = budget[k] * days
            if k.startswith("G"):
                cpc = f["cpc"] * cpc_m
                clicks = spend / cpc
                if "cap" in f:  # volumen de búsquedas limitado: no se puede gastar más
                    clicks = np.minimum(clicks, f["cap"] * days)
                    spend = clicks * cpc
                visits = clicks
            else:
                # más presupuesto sobre la misma audiencia = más frecuencia = CPM más caro
                sat = np.maximum(budget[k] / max(BUDGET[k][fi], 1), 1) ** 0.3
                imps = spend / (f["cpm"] * cpm_m * sat) * 1000
                clicks = imps * f["ctr"] / sat ** 0.5
                visits = clicks * f["lpv"]
            leads = rng.poisson(np.maximum(visits * f["cvr"] * conv_m * landing, 0))
            q = rng.binomial(leads, np.clip(f["q"], 0, 1))
            cl = rng.binomial(q, np.clip(f["close"] * followup, 0, 0.9))
            one, rec = VALOR[k]
            extra1 = 99 + (one - 99) * attach  # la web base siempre; los extras varían
            r = res[k]
            r["spend"] += spend
            r["clicks"] += clicks
            r["leads"] += leads
            r["qleads"] += q
            r["clients"] += cl
            r["rev1"] += cl * extra1
            r["rev12"] += cl * (extra1 + rec * attach)
    tot = {m: sum(res[k][m] for k in res) for m in res["G1"]}
    margin12 = sum(res[k]["rev1"] * MARGEN_PUNTUAL + (res[k]["rev12"] - res[k]["rev1"]) * MARGEN_RECURRENTE for k in res)
    tot["contrib12"] = margin12 - tot["spend"]
    tot["rev1_minus_spend"] = tot["rev1"] - tot["spend"]
    return res, tot, mover


sin_res, sin_tot, _ = simular(False)
res, tot, mover = simular(True)


def pct(x):
    return {"p10": float(np.percentile(x, 10)), "p50": float(np.percentile(x, 50)), "p90": float(np.percentile(x, 90)), "mean": float(np.mean(x))}


safe = lambda a, b: np.where(b > 0, a / np.maximum(b, 1e-9), np.nan)
out = {
    "iteraciones": N,
    "fases": [{"id": f[0], "nombre": f[1], "inicio": f[2].isoformat(), "fin": (f[2] + timedelta(days=f[3] - 1)).isoformat(), "dias": f[3]} for f in FASES],
    "presupuesto_dia": BUDGET,
    "nombres": NOMBRE,
    "ticket": {"espana": {"primer_encargo": round(T_ES[0]), "recurrente_12m": round(T_ES[1])}, "mallorca": {"primer_encargo": round(T_MLL[0]), "recurrente_12m": round(T_MLL[1])}, "seo": {"primer_encargo": round(T_SEO[0]), "recurrente_12m": round(T_SEO[1])}},
    "total": {m: pct(v) for m, v in tot.items()},
    "ratios": {
        "cpl": pct(np.nan_to_num(safe(tot["spend"], tot["leads"]), nan=999)),
        "cpl_cualificado": pct(np.nan_to_num(safe(tot["spend"], tot["qleads"]), nan=999)),
        "cac": pct(np.nan_to_num(safe(tot["spend"], tot["clients"]), nan=9999)),
        "roas_primer_encargo": pct(tot["rev1"] / tot["spend"]),
        "roas_12m": pct(tot["rev12"] / tot["spend"]),
    },
    "probabilidades": {
        "recupera_inversion_con_primer_encargo": float(np.mean(tot["rev1_minus_spend"] >= 0)),
        "contribucion_12m_positiva": float(np.mean(tot["contrib12"] > 0)),
        "al_menos_15_clientes": float(np.mean(tot["clients"] >= 15)),
    },
    "por_campana": {},
    "reglas": {
        "prob_mover_google_espana": float(np.mean(mover["G1"])),
        "prob_mover_meta_espana": float(np.mean(mover["M1"])),
        "sin_reglas": {m: pct(sin_tot[m]) for m in ("clients", "rev12", "contrib12")},
        "con_reglas": {m: pct(tot[m]) for m in ("clients", "rev12", "contrib12")},
    },
}
for k in res:
    r = res[k]
    out["por_campana"][k] = {
        "nombre": NOMBRE[k],
        "gasto": round(float(np.median(r["spend"]))),
        "clics": round(float(np.median(r["clicks"]))),
        "leads": float(np.median(r["leads"])),
        "leads_cualificados": float(np.median(r["qleads"])),
        "clientes": float(np.mean(r["clients"])),
        "cpl_cualificado": round(float(np.nanmedian(safe(r["spend"], r["qleads"]))), 1),
        "facturacion_12m": round(float(np.mean(r["rev12"]))),
    }

# histograma de la contribución a 12 meses
h, edges = np.histogram(tot["contrib12"], bins=24)
out["histograma_contrib12"] = {"conteos": h.tolist(), "bordes": [round(float(e)) for e in edges]}

# gasto semanal por plataforma (para el calendario)
weeks = []
d0 = FASES[0][2]
for w in range(13):
    g = m = 0.0
    for dd in range(7):
        day = d0 + timedelta(days=7 * w + dd)
        for fi, f in enumerate(FASES):
            if f[2] <= day < f[2] + timedelta(days=f[3]):
                g += sum(BUDGET[k][fi] for k in BUDGET if k.startswith("G"))
                m += sum(BUDGET[k][fi] for k in BUDGET if k.startswith("M"))
    weeks.append({"semana": w + 1, "lunes": (d0 + timedelta(days=7 * w)).isoformat(), "google": g, "meta": m})
out["semanas"] = weeks

with open(os.path.join(HERE, "resultados.json"), "w", encoding="utf-8") as fh:
    json.dump(out, fh, ensure_ascii=False, indent=2)

with open(os.path.join(HERE, "resultados.csv"), "w", newline="", encoding="utf-8") as fh:
    w = csv.writer(fh, delimiter=";")
    w.writerow(["campaña", "gasto €", "clics", "leads", "leads cualificados", "clientes (media)", "€ por lead cualificado", "facturación 12 meses €"])
    for k, c in out["por_campana"].items():
        w.writerow([c["nombre"], c["gasto"], c["clics"], c["leads"], c["leads_cualificados"], round(c["clientes"], 1), c["cpl_cualificado"], c["facturacion_12m"]])
    w.writerow([])
    w.writerow(["TOTAL", "peor 10 %", "típico", "mejor 10 %"])
    for m, lab in [("spend", "gasto €"), ("leads", "leads"), ("qleads", "leads cualificados"), ("clients", "clientes"), ("rev1", "facturación primer encargo €"), ("rev12", "facturación 12 meses €"), ("contrib12", "beneficio 12 meses tras anuncios € (supuesto de margen)")]:
        t = out["total"][m]
        w.writerow([lab, round(t["p10"]), round(t["p50"]), round(t["p90"])])

print(json.dumps({k: out[k] for k in ("ticket", "ratios", "probabilidades", "reglas")}, indent=1, ensure_ascii=False))
for m in ("spend", "leads", "qleads", "clients", "rev1", "rev12", "contrib12"):
    t = out["total"][m]
    print(f"{m:10s} p10 {t['p10']:8.0f}  p50 {t['p50']:8.0f}  p90 {t['p90']:8.0f}")
for k, c in out["por_campana"].items():
    print(k, c)
