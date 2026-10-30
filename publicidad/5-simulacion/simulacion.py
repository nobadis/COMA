"""
Simulación Monte Carlo del plan de 800 € de COMA (9 nov 2026 - 7 feb 2027).

No predice el futuro: reparte la incertidumbre. Cada coste por clic, conversión y tasa de cierre se
sortea entre un mínimo, un valor probable y un máximo (rangos de mercado en España). Se repite
20.000 veces en dos mundos: el BASE (mis estimaciones) y el PESIMISTA (la mitad de conversión y un
30 % menos de cierre). Incluye los dos cortes del plan: si no hay señal, se para y no se gasta más.

También compara el plan con otras formas de gastar (más dinero, otros canales) para justificar la
elección. Precios: los de src/data/pricing.ts.
Uso: python3 simulacion.py  ->  resultados.json y resultados.csv junto a este archivo.
"""
import csv
import json
import os
from datetime import date, timedelta

import numpy as np

N = 20_000
HERE = os.path.dirname(os.path.abspath(__file__))

# Fases: nombre, inicio, días, multiplicadores (conversión, CPM de Meta, CPC de Google)
FASES = [
    ("T1", "Validar", date(2026, 11, 9), 28, 1.00, 1.08, 1.03),
    ("T2", "Confirmar", date(2026, 12, 7), 14, 0.95, 1.05, 1.00),
    ("NAV", "Navidad: pausa", date(2026, 12, 21), 17, 0.65, 0.95, 0.92),
    ("T3", "Rentabilizar", date(2027, 1, 7), 32, 1.15, 0.85, 1.00),
]
# EL PLAN: € al día por campaña y fase (T1, T2, NAV, T3)
PLAN = {"G2": (10, 9, 0, 10), "M3": (0, 0, 0, 2)}
NOMBRE = {"G2": "Google · Web Mallorca", "M3": "Meta · Remarketing", "G4": "Google · SEO local", "M2": "Meta · Mallorca (frío)", "G1": "Google · España"}

# Alternativas que se descartan (mismos supuestos, mismos cortes)
ALTERNATIVAS = {
    "El plan (Google Mallorca + remarketing en enero)": PLAN,
    "Mismo dinero, mitad en Meta Mallorca": {"G2": (7, 6, 0, 7), "M2": (3, 3, 0, 3), "M3": (0, 0, 0, 2)},
    "Mismo dinero, parte en Google España": {"G2": (7, 6, 0, 7), "G1": (3, 3, 0, 3), "M3": (0, 0, 0, 2)},
    "+160 €: Google Mallorca a tope (12 €/día)": {"G2": (12, 12, 0, 12), "M3": (0, 0, 0, 2)},
    "+190 €: añadir SEO local en enero": {"G2": (10, 9, 0, 10), "M3": (0, 0, 0, 2), "G4": (0, 0, 0, 6)},
    "+440 €: añadir Meta Mallorca": {"G2": (10, 9, 0, 10), "M3": (0, 0, 0, 2), "M2": (6, 6, 0, 6)},
}
MARGEN_PUNTUAL, MARGEN_RECURRENTE = 0.50, 0.75  # supuesto: cámbialo con tus costes reales


def simular(plan, pesimista=False, seed=2026):
    rng = np.random.default_rng(seed)
    tri = lambda a, b, c: rng.triangular(a, b, c, N)
    landing = rng.lognormal(0, 0.25, N) * (0.5 if pesimista else 1)
    seguimiento = rng.lognormal(0, 0.15, N) * (0.7 if pesimista else 1)
    extras = np.clip(rng.lognormal(0, 0.25, N), 0.4, 2.0)  # cuántos extras se venden de verdad
    F = {
        "G2": dict(cap=9.0, cpc=tri(0.8, 1.4, 2.6), cvr=tri(0.05, 0.08, 0.12), q=tri(0.55, 0.68, 0.80), close=tri(0.18, 0.27, 0.36), one=253, rec=332),
        "G1": dict(cpc=tri(0.9, 1.6, 2.8), cvr=tri(0.03, 0.05, 0.08), q=tri(0.40, 0.55, 0.68), close=tri(0.12, 0.20, 0.30), one=218, rec=300),
        "G4": dict(cpc=tri(1.2, 2.0, 3.5), cvr=tri(0.025, 0.045, 0.075), q=tri(0.5, 0.62, 0.75), close=tri(0.12, 0.20, 0.30), one=124, rec=782),
        "M2": dict(cpm=tri(4, 6.5, 10), ctr=tri(0.007, 0.012, 0.018), lpv=tri(0.65, 0.75, 0.85), cvr=tri(0.015, 0.028, 0.045), q=tri(0.40, 0.55, 0.68), close=tri(0.14, 0.22, 0.32), one=253, rec=332),
        "M3": dict(cpm=tri(6, 9, 14), ctr=tri(0.010, 0.016, 0.025), lpv=tri(0.70, 0.80, 0.88), cvr=tri(0.03, 0.055, 0.09), q=tri(0.50, 0.62, 0.74), close=tri(0.18, 0.26, 0.36), one=253, rec=332),
    }
    T = {k: np.zeros(N) for k in ("spend", "leads", "q", "cl", "rev1", "rev12")}
    por = {k: {m: np.zeros(N) for m in T} for k in plan}
    visitas = np.zeros(N)
    vivo = np.ones(N, bool)
    corte1 = corte2 = None
    for i, (fid, _, _, dias, conv, cpm_m, cpc_m) in enumerate(FASES):
        if fid == "T2":  # corte 1 (7 dic): 1 cliente, o 5 leads cualificados a 35 € o menos
            vivo = (T["cl"] >= 1) | ((T["q"] >= 5) & (T["spend"] / np.maximum(T["q"], 0.5) <= 35))
            corte1 = vivo.copy()
        if fid == "T3":  # corte 2 (7 ene): al menos 1 cliente firmado
            vivo = vivo & (T["cl"] >= 1)
            corte2 = vivo.copy()
        for k, b in plan.items():
            if b[i] == 0:
                continue
            f = F[k]
            gasto = np.full(N, float(b[i] * dias))
            if k[0] == "G":
                cpc = f["cpc"] * cpc_m
                clics = gasto / cpc
                if "cap" in f:  # en Mallorca hay las búsquedas que hay: no se puede gastar más
                    clics = np.minimum(clics, f["cap"] * dias)
                    gasto = clics * cpc
                vis = clics
            else:
                vis = gasto / (f["cpm"] * cpm_m) * 1000 * f["ctr"] * f["lpv"]
                if k == "M3":  # el remarketing solo alcanza a quien ya visitó la web
                    vis = np.minimum(vis, visitas * 0.35)
            gasto, vis = gasto * vivo, vis * vivo
            if k != "M3":
                visitas += vis
            leads = rng.poisson(np.maximum(vis * f["cvr"] * conv * landing, 0))
            q = rng.binomial(leads, np.clip(f["q"], 0, 1))
            cl = rng.binomial(q, np.clip(f["close"] * seguimiento, 0, 0.9))
            e1 = f["one"] if k == "G4" else 99 + (f["one"] - 99) * extras
            r12 = cl * (e1 + f["rec"] * extras)
            for dst in (T, por[k]):
                dst["spend"] += gasto
                dst["leads"] += leads
                dst["q"] += q
                dst["cl"] += cl
                dst["rev1"] += cl * e1
                dst["rev12"] += r12
    T["benef12"] = T["rev1"] * MARGEN_PUNTUAL + (T["rev12"] - T["rev1"]) * MARGEN_RECURRENTE - T["spend"]
    return T, por, corte1, corte2


def pct(x):
    return {"p10": float(np.percentile(x, 10)), "p50": float(np.percentile(x, 50)), "p90": float(np.percentile(x, 90)), "media": float(np.mean(x))}


out = {"iteraciones": N, "plan": PLAN, "nombres": NOMBRE,
       "fases": [{"id": f[0], "nombre": f[1], "inicio": f[2].isoformat(), "fin": (f[2] + timedelta(days=f[3] - 1)).isoformat(), "dias": f[3]} for f in FASES],
       "tope": 800, "asignado": sum(b[i] * FASES[i][3] for b in PLAN.values() for i in range(4))}
for mundo, pes in (("base", False), ("pesimista", True)):
    T, por, c1, c2 = simular(PLAN, pes)
    out[mundo] = {
        "total": {m: pct(v) for m, v in T.items()},
        "roi_primer_encargo": pct(T["rev1"] / np.maximum(T["spend"], 1)),
        "roi_12m": pct(T["rev12"] / np.maximum(T["spend"], 1)),
        "cpl_cualificado": pct(T["spend"] / np.maximum(T["q"], 0.5)),
        "prob": {
            "pasa_corte_1": float(np.mean(c1)), "pasa_corte_2": float(np.mean(c2)),
            "primer_encargo_cubre_anuncios": float(np.mean(T["rev1"] >= T["spend"])),
            "beneficio_12m_positivo": float(np.mean(T["benef12"] > 0)),
            "al_menos_1_cliente": float(np.mean(T["cl"] >= 1)), "al_menos_10_clientes": float(np.mean(T["cl"] >= 10)),
        },
        "peor_caso_bolsillo_p95": float(np.percentile(T["spend"] - T["rev1"], 95)),
        "por_campana": {k: {"gasto": float(np.median(v["spend"])), "leads_cualificados": float(np.median(v["q"])), "clientes": float(np.mean(v["cl"])),
                             "cpl_cualificado": float(np.nanmedian(np.where(v["q"] > 0, v["spend"] / np.maximum(v["q"], 1), np.nan)))} for k, v in por.items()},
    }
    if mundo == "base":
        h, e = np.histogram(T["benef12"], bins=24)
        out["histograma_benef12"] = {"conteos": h.tolist(), "bordes": [round(float(x)) for x in e]}

out["alternativas"] = []
for nombre, plan in ALTERNATIVAS.items():
    fila = {"nombre": nombre}
    for mundo, pes in (("base", False), ("pesimista", True)):
        T, _, _, _ = simular(plan, pes)
        fila[mundo] = {"gasto": float(np.median(T["spend"])), "clientes": float(np.median(T["cl"])), "benef12": float(np.median(T["benef12"])),
                       "prob_beneficio": float(np.mean(T["benef12"] > 0)), "prob_10_clientes": float(np.mean(T["cl"] >= 10)),
                       "roi12": float(np.median(T["rev12"] / np.maximum(T["spend"], 1)))}
    out["alternativas"].append(fila)

semanas = []
d0 = FASES[0][2]
for w in range(13):
    g = m = 0.0
    for dd in range(7):
        dia = d0 + timedelta(days=7 * w + dd)
        for i, f in enumerate(FASES):
            if f[2] <= dia < f[2] + timedelta(days=f[3]):
                g += sum(b[i] for k, b in PLAN.items() if k[0] == "G")
                m += sum(b[i] for k, b in PLAN.items() if k[0] == "M")
    semanas.append({"semana": w + 1, "lunes": (d0 + timedelta(days=7 * w)).isoformat(), "google": g, "meta": m})
out["semanas"] = semanas

with open(os.path.join(HERE, "resultados.json"), "w", encoding="utf-8") as fh:
    json.dump(out, fh, ensure_ascii=False, indent=1)
with open(os.path.join(HERE, "resultados.csv"), "w", newline="", encoding="utf-8") as fh:
    w = csv.writer(fh, delimiter=";")
    w.writerow(["EL PLAN (800 € de tope)", "peor 10 %", "típico", "mejor 10 %", "", "mundo pesimista: típico"])
    for k, lab in [("spend", "gasto €"), ("leads", "leads"), ("q", "leads cualificados"), ("cl", "clientes"), ("rev1", "facturación primer encargo €"), ("rev12", "facturación 12 meses €"), ("benef12", "beneficio 12 meses tras anuncios €")]:
        b, p = out["base"]["total"][k], out["pesimista"]["total"][k]
        w.writerow([lab, round(b["p10"]), round(b["p50"]), round(b["p90"]), "", round(p["p50"])])
    w.writerow([])
    w.writerow(["ALTERNATIVAS", "gasto €", "clientes", "beneficio 12 m €", "prob. de ganar dinero", "prob. de 10+ clientes", "ROI 12 m", "pesimista: prob. de ganar dinero"])
    for a in out["alternativas"]:
        b = a["base"]
        w.writerow([a["nombre"], round(b["gasto"]), round(b["clientes"]), round(b["benef12"]), f"{b['prob_beneficio']:.0%}", f"{b['prob_10_clientes']:.0%}", f"{b['roi12']:.1f}", f"{a['pesimista']['prob_beneficio']:.0%}"])

b, p = out["base"], out["pesimista"]
print("asignado", out["asignado"])
for k in ("spend", "q", "cl", "rev1", "rev12", "benef12"):
    print(f"{k:8s}", {x: round(y) for x, y in b["total"][k].items()}, "| pes p50", round(p["total"][k]["p50"]))
print("prob base", {k: round(v, 2) for k, v in b["prob"].items()})
print("prob pes ", {k: round(v, 2) for k, v in p["prob"].items()})
print("roi1", round(b["roi_primer_encargo"]["p50"], 2), "roi12", round(b["roi_12m"]["p50"], 2), "cplq", round(b["cpl_cualificado"]["p50"]), "peor bolsillo p95 base/pes", round(b["peor_caso_bolsillo_p95"]), round(p["peor_caso_bolsillo_p95"]))
print("por campaña", b["por_campana"])
for a in out["alternativas"]:
    print(a["nombre"], {k: round(v, 2) for k, v in a["base"].items()}, "| pes", round(a["pesimista"]["prob_beneficio"], 2))
