"""
Sonido del vídeo general de COMA (34 s, 120 BPM). Mismos tiempos que promo.html.
La coma cae con un golpe grave, la promesa va a ritmo de palabra, el ritmo entra completo cuando se
enciende la luz, se para para la vuelta («por fuera / por dentro»), vuelve más oscuro dentro de la
máquina, se queda en piano para «lo que ganas», sube con la prueba, golpea en cada línea sin riesgo y
resuelve en el acorde final del logo. Todo sintetizado con numpy (sin derechos de autor).
Uso: python sound.py salida.wav
"""
import sys
import wave
import numpy as np

SR = 44100
DUR = 34.0
N = int(SR * DUR)
rng = np.random.default_rng(23)
NOTE = {"C": 0, "D": 2, "E": 4, "F": 5, "G": 7, "A": 9, "B": 11}


def m(name):
    n, o = name[:-1], int(name[-1])
    return 12 * (o + 1) + NOTE[n[0]] + (1 if "#" in n else 0)


def hz(x):
    return 440.0 * 2 ** (((m(x) if isinstance(x, str) else x) - 69) / 12)


def tt(d):
    return np.arange(int(d * SR)) / SR


def noise(d):
    return rng.standard_normal(int(d * SR))


def band(x, lo, hi):
    X = np.fft.rfft(x)
    f = np.fft.rfftfreq(len(x), 1 / SR)
    g = 1 / (1 + (lo / np.maximum(f, 1)) ** 4) / (1 + (f / hi) ** 4)
    return np.fft.irfft(X * g, len(x))


def fade(n, a, r):
    e = np.ones(n)
    na, nr = max(1, int(a * SR)), max(1, int(r * SR))
    e[:na] = np.sin(np.linspace(0, np.pi / 2, na)) ** 2
    e[-nr:] *= np.cos(np.linspace(0, np.pi / 2, nr)) ** 2
    return e


def reverb(x, secs=2.4, wet=0.3):
    n = int(secs * SR)
    t = np.arange(n) / SR
    ir = band(rng.standard_normal(n) * np.exp(-t / (secs / 6.5)), 300, 7000)
    ir[: int(0.02 * SR)] = 0
    ir /= np.sqrt(np.sum(ir**2))
    M = len(x) + n
    return x + wet * np.fft.irfft(np.fft.rfft(x, M) * np.fft.rfft(ir, M), M)[: len(x)]


class Bus:
    def __init__(self):
        self.L, self.R = np.zeros(N), np.zeros(N)

    def add(self, t0, sig, g=1.0, pan=0.0):
        i = int(round(t0 * SR))
        if i >= N:
            return
        s = sig[: N - i] * g
        self.L[i : i + len(s)] += s * np.sqrt(1 - pan)
        self.R[i : i + len(s)] += s * np.sqrt(1 + pan)


# ---------------------------------------------------------------------- sonidos
def felt(f, d=2.5):
    t = tt(d)
    s = sum(a * np.sin(2 * np.pi * f * k * t) * np.exp(-t * (0.9 + 0.9 * k)) for k, a in ((1, 1), (2, 0.35), (3, 0.12), (4, 0.05)))
    return s * fade(len(t), 0.01, 0.3)


def pluck(f, d=0.5):
    t = tt(d)
    s = np.sin(2 * np.pi * f * t) + 0.3 * np.sin(4 * np.pi * f * t) * np.exp(-t * 18)
    return s * np.exp(-t * 7) * fade(len(t), 0.003, 0.05)


def glass(f, d=1.8):
    t = tt(d)
    s = sum(a * np.sin(2 * np.pi * f * r * t) * np.exp(-t * dec) for r, a, dec in ((1, 1, 1.8), (2.76, 0.3, 3.5), (5.4, 0.1, 7)))
    return s * fade(len(t), 0.003, 0.3)


def tap(f=1600, d=0.08):
    t = tt(d)
    return np.sin(2 * np.pi * f * t) * np.exp(-t / 0.011) + band(noise(d), 2500, 9000) * np.exp(-t / 0.0025) * 0.3


def thock(d=0.2):
    """Corte de palabra: golpe grave, redondo, sin agresividad."""
    t = tt(d)
    f = 110 + 90 * np.exp(-t / 0.015)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.045) + band(noise(d), 1500, 6000) * np.exp(-t / 0.004) * 0.15


def thud(d=0.25):
    t = tt(d)
    f = 90 + 60 * np.exp(-t / 0.02)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.05) + band(noise(d), 800, 5000) * np.exp(-t / 0.03) * 0.25


def swish(d=0.45, lo=600, hi=5000):
    t = tt(d)
    n = noise(d)
    out = np.zeros_like(n)
    K = 12
    S = len(n) // K
    for c in range(K):
        k = c / (K - 1)
        seg = band(n[c * S : (c + 1) * S + 512], lo * (1 + 2 * k), hi * (0.6 + 0.6 * k))[:S]
        out[c * S : c * S + len(seg)] = seg
    return out * np.sin(np.pi * np.clip(t / d, 0, 1)) ** 2


def sent():
    d = 0.28
    t = tt(d)
    f = 500 + 900 * (t / d) ** 1.5
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.sin(np.pi * t / d) ** 2 * 0.5 + swish(d, 1200, 6000) * 0.4


def received():
    out = np.zeros(int(0.9 * SR))
    for i, n in enumerate(("E5", "A5")):
        s = glass(hz(n), 0.8) * (1 if i else 0.8)
        j = int(i * 0.08 * SR)
        out[j : j + len(s)] += s
    return out


def key():
    t = tt(0.05)
    return band(noise(0.05), 1200, 7000) * np.exp(-t / 0.005) + np.sin(2 * np.pi * 430 * t) * np.exp(-t / 0.008) * 0.5


def kick(d=0.4):
    t = tt(d)
    f = 48 + 60 * np.exp(-t / 0.03)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.16) * fade(len(t), 0.002, 0.05)


def shaker(d=0.08):
    t = tt(d)
    return band(noise(d), 5000, 13000) * np.sin(np.pi * t / d) ** 2


def rim(d=0.12):
    t = tt(d)
    return (np.sin(2 * np.pi * 820 * t) * np.exp(-t / 0.012) + band(noise(d), 1500, 7000) * np.exp(-t / 0.006) * 0.4)


def bass(f, d):
    t = tt(d)
    return (np.sin(2 * np.pi * f * t) + 0.15 * np.sin(4 * np.pi * f * t)) * np.exp(-t * 1.6) * fade(len(t), 0.005, 0.08)


def pad(notes, d):
    t = tt(d)
    s = np.zeros_like(t)
    for n in notes:
        f = hz(n)
        for det, a in ((-4, 0.5), (0, 1), (5, 0.5)):
            ff = f * 2 ** (det / 1200)
            s += a * (np.sin(2 * np.pi * ff * t) + 0.12 * np.sin(4 * np.pi * ff * t))
    return s * fade(len(t), 0.8, 1.2) / len(notes)


def rise_tone(d):
    t = tt(d)
    f = 300 + 500 * (t / d) ** 1.3
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.sin(np.pi * t / d) ** 2




def clap(d=0.25):
    """Palmas: tres ráfagas muy juntas y una cola corta."""
    t = tt(d)
    env = sum(np.exp(-np.maximum(t - o, 0) / 0.006) * (t >= o) for o in (0, 0.011, 0.022))
    env = env + 0.5 * np.exp(-np.maximum(t - 0.03, 0) / 0.08) * (t >= 0.03)
    return band(noise(d), 900, 5200) * env


def hat(d=0.06, open_=False):
    t = tt(d)
    return band(noise(d), 7000, 15000) * np.exp(-t / (0.12 if open_ else 0.018))


def boom(d=1.6, f0=62, f1=31):
    """Golpe subgrave para los impactos grandes (la coma, la vuelta, el barrido)."""
    t = tt(d)
    f = f1 + (f0 - f1) * np.exp(-t / 0.12)
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.45)
    return np.tanh(1.6 * s) * fade(len(t), 0.002, 0.2)


def crash(d=1.8):
    t = tt(d)
    return band(noise(d), 3500, 15000) * np.exp(-t / 0.55) * fade(len(t), 0.002, 0.3)


def riser(d, lo=300, hi=6000):
    """Subida de ruido que se abre y crece hasta el golpe."""
    n = noise(d)
    K = 16
    S_ = len(n) // K
    out = np.zeros_like(n)
    for c in range(K):
        k = c / (K - 1)
        seg = band(n[c * S_ : (c + 1) * S_ + 512], lo * (1 + 6 * k), hi * (0.3 + 0.7 * k))[:S_]
        out[c * S_ : c * S_ + len(seg)] = seg
    t = tt(d)[: len(out)]
    return out * (t / d) ** 2.2 * fade(len(out), 0.01, 0.015)


def drop_sweep(d=0.8):
    """Barrido que baja: la pantalla roja se recoge en la coma del logo."""
    t = tt(d)
    f = 1400 * np.exp(-t / (d / 3)) + 90
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.sin(np.pi * np.clip(t / d, 0, 1)) ** 1.5


def stab(notes, d=0.5):
    """Acorde corto con brillo (dientes de sierra suaves) para las líneas sin riesgo."""
    t = tt(d)
    s = np.zeros_like(t)
    for n in notes:
        f = hz(n)
        for k in range(1, 7):
            s += np.sin(2 * np.pi * f * k * t) / k * np.exp(-t * (5 + 2.2 * k))
    return s * fade(len(t), 0.003, 0.08) / len(notes)


def zap(d=0.8):
    """El dato que viaja por el cable: tono que sube con un leve trémolo."""
    t = tt(d)
    f = 400 + 1400 * (t / d) ** 1.6
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * (0.7 + 0.3 * np.sin(2 * np.pi * 18 * t)) * np.sin(np.pi * t / d) ** 2


# ----------------------------------------------------------------------- música
mus = Bus()
# (inicio, duración, notas del colchón, raíz del bajo)
chords = [
    (1.38, 3.0, ["A2", "E3", "C4", "G4"], "A1"),       # la promesa
    (5.0, 2.0, ["C3", "G3", "E4", "B4"], "C2"),        # se enciende la luz: entra el ritmo
    (7.0, 2.0, ["A2", "E3", "C4", "G4"], "A1"),
    (9.0, 2.0, ["F2", "C3", "A3", "E4"], "F1"),
    (11.0, 1.0, ["G2", "D3", "B3", "D4"], "G1"),
    (12.0, 1.3, ["F2", "C3", "A3", "E4"], None),        # por fuera: sin batería
    (13.25, 2.25, ["D2", "A2", "F3", "C4"], "D1"),      # por dentro: más oscuro
    (15.5, 2.0, ["A1", "E2", "C3", "G3"], "A1"),
    (17.5, 2.0, ["F2", "C3", "A3", "E4"], "F1"),
    (19.5, 3.0, ["C3", "G3", "E4", "D5"], None),        # lo que ganas: piano y colchón
    (22.45, 2.05, ["F2", "C3", "A3", "E4"], "F1"),      # la prueba
    (24.5, 2.35, ["G2", "D3", "B3", "E4"], "G1"),
    (26.85, 2.55, ["A2", "E3", "C4", "G4"], "A1"),      # sin riesgo
    (29.4, 4.6, ["C3", "G3", "C4", "E4", "D5"], None),  # cierre
]
for t0, d, notes, _ in chords:
    mus.add(t0, pad(notes, d + 0.9), 0.065)


def root_at(b):
    r = None
    for t0, d, _, root in chords:
        if t0 <= b + 1e-6:
            r = root
    return r


def groove(a, z, kick_g=0.2, clap_g=0.09, hats=True, bass_g=0.1, open_hats=False):
    b = a
    while b < z - 1e-6:
        i = int(round((b - a) / 0.5))
        mus.add(b, kick(), kick_g)
        r = root_at(b)
        if r and bass_g:
            mus.add(b, bass(hz(r) * 2, 0.45), bass_g)
            mus.add(b + 0.25, bass(hz(r) * 2, 0.22), bass_g * 0.6)
        if clap_g and i % 2 == 1:
            mus.add(b, clap(), clap_g, pan=0.05)
        if hats:
            mus.add(b + 0.25, hat(0.12 if open_hats else 0.06, open_hats), 0.05, pan=0.3)
            mus.add(b, hat(), 0.025, pan=-0.3)
            mus.add(b + 0.125, shaker(), 0.02, pan=-0.4)
            mus.add(b + 0.375, shaker(), 0.02, pan=0.4)
        b += 0.5


# la promesa: bombo a negras bajo las palabras
groove(1.5, 4.2, kick_g=0.17, clap_g=0, hats=False, bass_g=0.07)
# se enciende la luz: ritmo completo hasta la vuelta
groove(5.0, 12.0, open_hats=False)
# dentro de la máquina: más oscuro, con hi-hat abierto
groove(13.5, 19.4, kick_g=0.2, clap_g=0.08, open_hats=True, bass_g=0.11)
# lo que ganas: solo un latido suave
for b in np.arange(19.5, 22.4, 1.0):
    mus.add(b, kick(), 0.1)
# la prueba y sin riesgo: todo arriba
groove(22.5, 29.4, kick_g=0.21, clap_g=0.1, open_hats=True)
# el cierre: pulso ligero que se apaga
for b in np.arange(30.5, 33.0, 0.5):
    mus.add(b + 0.25, hat(), 0.025, pan=0.3)
    mus.add(b, shaker(), 0.02, pan=-0.3)

# arpegios que empujan cada bloque
arp = {5.0: ["C4", "E4", "G4", "B4"], 7.0: ["A3", "C4", "E4", "G4"], 9.0: ["F4", "A4", "C5", "E5"],
       13.5: ["D4", "F4", "A4", "C5"], 15.5: ["A3", "C4", "E4", "G4"], 17.5: ["F4", "A4", "C5", "E5"],
       22.5: ["F4", "A4", "C5", "E5"], 24.5: ["G4", "B4", "D5", "E5"], 26.85: ["A4", "C5", "E5", "G5"]}
for t0, notes in arp.items():
    for j in range(8 if t0 not in (26.85,) else 4):
        tj = t0 + j * 0.25
        mus.add(tj, pluck(hz(notes[j % 4])), 0.04, pan=(-0.45, 0.45)[j % 2])

# piano: la vuelta, lo que ganas y el cierre
for t0, n in ((12.1, "F3"), (12.1, "C4"), (12.1, "A4"), (12.27, "E5"),
              (19.55, "C3"), (19.55, "G3"), (19.6, "E4"),
              (29.95, "C3"), (29.95, "G3"), (30.3, "C3"), (30.3, "G3"), (30.3, "E4"), (30.33, "C5"), (30.9, "G5"), (31.5, "E5")):
    mus.add(t0, felt(hz(n), 3.5), 0.14)

# ----------------------------------------------------------------------- efectos
fx = Bus()
# 1 · la coma cae, golpea y la cámara entra en ella
fx.add(0.0, swish(0.42, 300, 3500), 0.14)
fx.add(0.42, boom(1.8), 0.5)
fx.add(0.42, thud(), 0.3)
fx.add(0.42, glass(hz("A5"), 2.2), 0.08)
fx.add(0.42, felt(hz("A1"), 3.0), 0.18)
fx.add(0.42, crash(1.6), 0.03)
fx.add(0.95, riser(0.43, 400, 9000), 0.22)
fx.add(0.98, rise_tone(0.4), 0.05)
fx.add(1.38, boom(1.0, 70, 40), 0.32)
fx.add(1.38, clap(), 0.12)
fx.add(1.38, crash(1.2), 0.05)
# la promesa: cada palabra, un golpe y una nota que sube
fx.add(1.42, thock(), 0.2)
fx.add(1.58, thock(), 0.16)
for i, n in enumerate(("A3", "C4", "E4", "A4")):
    t0 = 2.0 + i * 0.5
    fx.add(t0, thock(), 0.32)
    fx.add(t0, felt(hz(n), 1.8), 0.13 + 0.03 * (i == 3))
fx.add(3.5, glass(hz("E6"), 2.0), 0.07)
fx.add(3.5, boom(0.8, 70, 45), 0.18)
# la cortina sube
fx.add(3.85, riser(0.35, 500, 7000), 0.1)
fx.add(4.18, swish(0.5, 200, 2500), 0.2)

# 2 · se enciende la luz y la cámara se aleja hasta ver la web
fx.add(4.75, tap(700, 0.09), 0.3, pan=0.3)
fx.add(4.8, tap(900, 0.05), 0.12, pan=0.3)
fx.add(4.86, tap(800, 0.05), 0.1, pan=0.3)
hum_t = tt(2.6)
hum = (np.sin(2 * np.pi * 100 * hum_t) + 0.3 * np.sin(2 * np.pi * 200 * hum_t)) * np.sin(np.pi * hum_t / 2.6) ** 2
fx.add(4.86, hum, 0.035, pan=0.3)
fx.add(4.88, glass(hz("E6")), 0.07, pan=0.3)
fx.add(5.0, boom(1.0, 66, 40), 0.25)
fx.add(5.0, crash(1.6), 0.04)
fx.add(5.1, swish(1.2, 250, 2200), 0.1, pan=-0.2)
fx.add(6.15, swish(0.6, 400, 4000), 0.12, pan=0.6)
fx.add(6.75, swish(0.9, 500, 3000), 0.05, pan=0.2)
fx.add(7.15, thud(), 0.26, pan=0.5)
fx.add(7.16, glass(hz("C6")), 0.08, pan=0.5)
fx.add(7.75, received(), 0.11, pan=0.25)
# barrido hacia la búsqueda
fx.add(8.38, swish(0.42, 400, 6000), 0.22, pan=-0.5)

# 3 · teclear la búsqueda, el resultado, la chincheta y la respuesta de la IA
for i in range(0, len("electricista urgente Palma"), 2):
    fx.add(9.0 + i * 0.032, key(), 0.17, pan=0.35)
fx.add(9.9, tap(1700, 0.07), 0.15, pan=0.3)
fx.add(10.1, swish(0.2, 2000, 8000), 0.05, pan=0.45)
fx.add(10.3, thud(0.15), 0.14, pan=0.45)
fx.add(10.3, pluck(hz("E6"), 0.3), 0.08, pan=0.45)
fx.add(10.4, received(), 0.07, pan=0.3)
for i in range(12):
    fx.add(10.55 + i * 0.055, tap(2600 + 40 * i, 0.03), 0.025, pan=0.3)
fx.add(11.05, glass(hz("G6"), 1.2), 0.05, pan=0.3)
# golpe de zoom
fx.add(11.88, swish(0.3, 800, 7000), 0.13)

# 4 · la vuelta
fx.add(12.1, thock(), 0.24)
fx.add(12.26, thock(), 0.24)
fx.add(12.35, riser(0.6, 300, 8000), 0.2)
fx.add(12.95, swish(0.6, 150, 3000), 0.26)
fx.add(13.25, boom(1.8, 64, 30), 0.48)
fx.add(13.25, crash(2.0), 0.05)
fx.add(13.25, clap(), 0.1)
for i, n in enumerate(("D5", "F5", "A5", "C6")):
    fx.add(13.55 + i * 0.12, pluck(hz(n), 0.5), 0.12, pan=(-0.5, 0.5, -0.4, 0.4)[i])
    fx.add(13.55 + i * 0.12, tap(2200, 0.04), 0.05, pan=(-0.5, 0.5, -0.4, 0.4)[i])
fx.add(14.36, riser(0.42, 300, 6000), 0.12)
fx.add(14.78, boom(0.9, 60, 38), 0.2)

# 5 · el agente contesta de madrugada; la reserva viaja por el cable y la factura sale sola
fx.add(15.0, sent(), 0.18, pan=0.25)
fx.add(15.3, tap(1300, 0.04), 0.03, pan=0.25)
fx.add(15.75, received(), 0.1, pan=0.25)
fx.add(16.2, sent(), 0.16, pan=0.25)
fx.add(16.6, received(), 0.1, pan=0.25)
fx.add(16.62, glass(hz("C6"), 1.2), 0.05, pan=0.25)
fx.add(16.75, zap(0.8), 0.07, pan=0.2)
fx.add(16.85, swish(0.85, 300, 3500), 0.13, pan=0.6)
for i, n in enumerate(("C5", "E5", "G5", "C6")):
    fx.add(17.6 + i * 0.36, pluck(hz(n), 0.6), 0.17, pan=0.35)
    fx.add(17.6 + i * 0.36, tap(2200, 0.05), 0.06, pan=0.35)
fx.add(18.7, glass(hz("E6"), 1.6), 0.06, pan=0.35)
fx.add(19.3, swish(0.5, 300, 2500), 0.1)

# 6 · lo que ganas: cada palabra, una nota cálida, y brillos que pasan
for i, n in enumerate(("E4", "G4", "C5")):
    t0 = 19.95 + i * 0.75
    fx.add(t0, thock(), 0.2)
    fx.add(t0, felt(hz(n), 2.2), 0.15)
    fx.add(t0 - 0.05, swish(0.3, 1500, 7000), 0.03, pan=(-0.4, 0.4, 0)[i])
for t0, f, pn in ((20.2, "E6", -0.6), (20.9, "B6", 0.6), (21.6, "G6", -0.3), (22.0, "D7", 0.4)):
    fx.add(t0, glass(hz(f), 1.0), 0.025, pan=pn)

# 7 · la coma barre la pantalla: golpe grande; el contador sube y aparecen las marcas
fx.add(21.95, riser(0.5, 400, 9000), 0.2)
fx.add(22.2, swish(0.55, 150, 4000), 0.28, pan=-0.2)
fx.add(22.45, boom(1.6, 66, 32), 0.45)
fx.add(22.45, crash(1.8), 0.06)
fx.add(22.45, clap(), 0.12)
fx.add(22.6, rise_tone(0.9), 0.04)
for i in range(12):
    fx.add(22.6 + 0.9 * (1 - (1 - i / 12) ** 2), tap(1800 + 60 * i, 0.04), 0.06)
fx.add(23.5, glass(hz("C6"), 2.2), 0.1)
fx.add(23.5, thud(), 0.18)
for i in range(6):
    fx.add(24.1 + i * 0.12, pluck(hz(("C5", "D5", "E5", "G5", "A5", "C6")[i]), 0.4), 0.06, pan=-0.6 + i * 0.24)

# 8 · sin riesgo: el rojo sube y cada línea es un golpe
fx.add(26.62, riser(0.3, 500, 8000), 0.12)
fx.add(26.85, swish(0.35, 300, 4000), 0.16)
for i, (t0, notes) in enumerate(((27.5, ["A3", "C4", "E4"]), (28.0, ["F3", "A3", "C4"]), (28.5, ["G3", "B3", "D4", "G4"]))):
    fx.add(t0, stab(notes, 0.6), 0.22)
    fx.add(t0, boom(0.6, 70, 45), 0.18)
    fx.add(t0, thock(), 0.2)
fx.add(28.85, tap(1400, 0.05), 0.06)
fx.add(28.95, riser(0.45, 300, 9000), 0.2)

# 9 · cierre: el rojo se recoge en la coma, acorde final y clic en el botón
fx.add(29.4, drop_sweep(0.9), 0.1)
fx.add(29.4, swish(0.9, 300, 6000), 0.14)
fx.add(30.3, boom(2.0, 60, 30), 0.35)
fx.add(30.3, glass(hz("C6"), 3.0), 0.1)
fx.add(30.32, glass(hz("G6"), 2.4), 0.05)
fx.add(30.65, thock(), 0.12)
fx.add(31.3, swish(0.4, 600, 4000), 0.04, pan=0.4)
fx.add(32.15, tap(900, 0.1), 0.26)
fx.add(32.17, received(), 0.08)
for t0 in (33.0,):
    fx.add(t0, glass(hz("E6"), 1.0), 0.025)

music = np.stack([reverb(mus.L, 2.4, 0.38), reverb(mus.R, 2.4, 0.38)], 1)
sfx = np.stack([reverb(fx.L, 1.4, 0.2), reverb(fx.R, 1.4, 0.2)], 1)
mix = sfx + music
t = np.arange(N) / SR
mix *= (np.clip((DUR - t) / 2.0, 0, 1) ** 1.5)[:, None]
mix *= np.clip(t / 0.01, 0, 1)[:, None]
mix /= np.max(np.abs(mix))
mix = np.tanh(2.2 * mix) / np.tanh(2.2) * 0.73  # ≈ -14 LUFS, pico por debajo de -2 dBTP

out = sys.argv[1] if len(sys.argv) > 1 else "sound.wav"
with wave.open(out, "wb") as f:
    f.setnchannels(2)
    f.setsampwidth(2)
    f.setframerate(SR)
    f.writeframes((mix * 32767).astype("<i2").tobytes())
print("ok", out)
