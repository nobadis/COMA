"""
Sonido del vídeo general de COMA (34 s, 120 BPM): efectos de interfaz que mandan sobre un pulso
suave (bombo redondo, shaker, bajo y colchón cálido). Mismos tiempos que promo.html.
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


# ----------------------------------------------------------------------- música
mus = Bus()
chords = [
    (0.0, 3.7, ["A2", "E3", "C4", "G4"]), (3.6, 3.5, ["F2", "C3", "A3", "E4"]),
    (7.0, 3.7, ["C3", "G3", "D4", "E4"]), (10.6, 2.9, ["A2", "E3", "C4", "G4"]),
    (13.4, 3.1, ["F2", "C3", "A3", "E4"]), (16.4, 3.1, ["G2", "D3", "A3", "E4"]),
    (19.4, 3.7, ["C3", "G3", "E4", "B4"]), (23.0, 3.1, ["F2", "C3", "A3", "E4"]),
    (26.0, 2.9, ["G2", "D3", "B3", "E4"]), (28.8, 5.2, ["C3", "G3", "C4", "E4", "D5"]),
]
roots = {7.0: "C2", 10.6: "A1", 13.4: "F1", 16.4: "G1", 19.4: "C2", 26.0: "G1", 28.8: "C2"}
for t0, d, notes in chords:
    mus.add(t0, pad(notes, d + 1.0), 0.07)

# Pulso suave: servicios (7–19.4) completo; «lo que ganas» (19.4–23) solo bombo y bajo;
# la filosofía (23–26) en silencio rítmico; vuelve en la prueba y el cierre (26–30.8).
for i in range(80):
    b = 7.0 + i * 0.5
    if b >= 30.8:
        break
    if 23.0 <= b < 26.0:
        continue
    full = b < 19.4 or b >= 26.0
    if i % 2 == 0:
        mus.add(b, kick(), 0.17)
        root = max(k for k in roots if k <= b)
        mus.add(b, bass(hz(roots[root]) * 2, 0.9), 0.09)
    elif full:
        mus.add(b, rim(), 0.05, pan=0.2)
    if full:
        mus.add(b + 0.25, shaker(), 0.035, pan=-0.3)
        mus.add(b, shaker(), 0.02, pan=0.3)
arp = {7.0: ["C4", "E4", "G4", "D5"], 10.6: ["A3", "C4", "E4", "G4"], 13.4: ["F4", "A4", "C5", "E5"],
       16.4: ["G4", "A4", "D5", "E5"]}
for t0, notes in arp.items():
    for j in range(6):
        mus.add(t0 + j * 0.5 + 0.25, pluck(hz(notes[j % 4])), 0.05, pan=(-0.4, 0.4)[j % 2])

# Piano: la promesa, la filosofía y el cierre
for t0, n in ((3.75, "A4"), (4.75, "C5"), (4.75, "E4"),
              (23.15, "F3"), (23.15, "C4"), (23.15, "A4"), (23.2, "E5"), (24.0, "G5"),
              (28.9, "C3"), (28.9, "G3"), (28.9, "E4"), (28.95, "C5"), (29.6, "G5")):
    mus.add(t0, felt(hz(n), 3.5), 0.14)

# ----------------------------------------------------------------------- efectos
fx = Bus()
# 1 · el día a día: un golpe por cada problema
for i, n in enumerate(("A3", "C4", "E4", "G4")):
    t0 = 0.15 + i * 0.85
    fx.add(t0, thock(), 0.35)
    fx.add(t0, felt(hz(n), 1.8), 0.13)
# notificaciones que se acumulan, lejanas
for t0, pn in ((0.5, -0.6), (1.35, 0.6), (2.2, -0.4), (2.6, 0.5), (3.0, -0.2)):
    fx.add(t0, received(), 0.035, pan=pn)

# 2 · la promesa
fx.add(3.75, thock(), 0.22)
fx.add(4.75, thock(), 0.22)
fx.add(4.75, glass(hz("E6")), 0.06)

# Cambios de plano
for t0 in (3.6, 7.0, 10.6, 13.4, 16.4, 19.4, 23.0, 26.0, 28.8):
    fx.add(t0 - 0.2, swish(0.45), 0.08, pan=rng.uniform(-0.3, 0.3))

# 3 · web: aparece, se desplaza, llega el móvil y la etiqueta de precio
fx.add(7.15, swish(0.7, 300, 3000), 0.1, pan=0.3)
# la bombilla se enciende: clic de interruptor, parpadeo y un zumbido cálido muy suave
fx.add(7.55, tap(700, 0.09), 0.22, pan=0.4)
fx.add(7.68, tap(900, 0.05), 0.08, pan=0.4)
hum_t = tt(2.6)
hum = (np.sin(2 * np.pi * 100 * hum_t) + 0.3 * np.sin(2 * np.pi * 200 * hum_t)) * np.sin(np.pi * hum_t / 2.6) ** 2
fx.add(7.6, hum, 0.03, pan=0.4)
fx.add(7.62, glass(hz("E6")), 0.05, pan=0.4)
fx.add(8.6, swish(1.0, 400, 3000), 0.07, pan=0.3)
fx.add(8.35, thud(), 0.16, pan=0.6)
fx.add(9.35, thud(), 0.2, pan=0.5)
fx.add(9.37, glass(hz("C6")), 0.07, pan=0.5)

# 4 · SEO y GEO: teclear la búsqueda, resultado, respuesta de la IA
for i in range(0, 17, 2):
    fx.add(11.05 + i * 0.035, key(), 0.16, pan=0.3)
fx.add(11.75, tap(1700, 0.07), 0.14, pan=0.3)
fx.add(12.25, received(), 0.08, pan=0.3)

# 5 · agente: conversación de madrugada
fx.add(13.95, sent(), 0.18, pan=0.35)
fx.add(14.7, received(), 0.08, pan=0.35)
fx.add(15.3, sent(), 0.16, pan=0.35)
fx.add(15.75, received(), 0.08, pan=0.35)

# 6 · automatización: cada paso hecho sube una nota
for i, n in enumerate(("C5", "E5", "G5", "C6")):
    fx.add(17.15 + i * 0.5, pluck(hz(n), 0.6), 0.16, pan=0.35)
    fx.add(17.15 + i * 0.5, tap(2200, 0.05), 0.06, pan=0.35)

# 7 · lo que ganas: cada palabra, una nota cálida
for i, n in enumerate(("E4", "G4", "C5", "E5")):
    t0 = 19.6 + i * 0.8
    fx.add(t0, thock(), 0.2)
    fx.add(t0, felt(hz(n), 2.0), 0.13)
fx.add(22.0, glass(hz("C6")), 0.06)

# 9 · +100
fx.add(26.1, rise_tone(1.0), 0.05)
for i in range(10):
    fx.add(26.1 + 1.0 * (1 - (1 - i / 10) ** 2), tap(1800 + 60 * i, 0.04), 0.05)
fx.add(27.1, glass(hz("C6"), 2.2), 0.09)
fx.add(27.1, thud(), 0.15)

# 10 · cierre
fx.add(28.9, glass(hz("C6"), 2.8), 0.08)
fx.add(30.15, thud(), 0.12)
# clic del botón de contacto
fx.add(31.4, tap(900, 0.1), 0.22)
fx.add(31.42, received(), 0.07)

music = np.stack([reverb(mus.L, 2.6, 0.45), reverb(mus.R, 2.6, 0.45)], 1)
sfx = np.stack([reverb(fx.L, 1.4, 0.18), reverb(fx.R, 1.4, 0.18)], 1)
mix = sfx + music
t = np.arange(N) / SR
mix *= (np.clip((DUR - t) / 2.5, 0, 1) ** 1.5)[:, None]
mix *= np.clip(t / 0.03, 0, 1)[:, None]
mix /= np.max(np.abs(mix))
mix = np.tanh(1.8 * mix) / np.tanh(1.8) * 0.9

out = sys.argv[1] if len(sys.argv) > 1 else "sound.wav"
with wave.open(out, "wb") as f:
    f.setnchannels(2)
    f.setsampwidth(2)
    f.setframerate(SR)
    f.writeframes((mix * 32767).astype("<i2").tobytes())
print("ok", out)
