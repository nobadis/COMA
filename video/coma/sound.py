"""
Sonido del vídeo general de COMA (40 s, 104 BPM: un tiempo = 0,575 s). Mismos tiempos que promo.html.
Tono de consultora: cálido, claro y sin golpes. Piano, colchón suave, marimba y una percusión
discreta que entra con los servicios. Los cambios de escena llevan un soplo de aire, no un impacto;
los detalles de interfaz (teclas, avisos, revisiones) suenan pequeños y limpios.
Todo sintetizado con numpy (sin derechos de autor).
Uso: python sound.py salida.wav
"""
import sys
import wave
import numpy as np

SR = 44100
DUR = 40.0
N = int(SR * DUR)
BEAT = 0.575
rng = np.random.default_rng(29)
NOTE = {"C": 0, "D": 2, "E": 4, "F": 5, "G": 7, "A": 9, "B": 11}


def m(name):
    n, o = name[:-1], int(name[-1])
    return 12 * (o + 1) + NOTE[n[0]] + (1 if "#" in n else 0) - (1 if n.endswith("b") else 0)


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
    ir = band(rng.standard_normal(n) * np.exp(-t / (secs / 6.5)), 250, 6500)
    ir[: int(0.025 * SR)] = 0
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


# ---------------------------------------------------------------------- instrumentos
def piano(f, d=3.0, bright=1.0):
    """Piano de fieltro: ataque suave, armónicos que se apagan antes que la fundamental."""
    t = tt(d)
    s = sum(a * np.sin(2 * np.pi * f * k * t * (1 + 0.0004 * k * k)) * np.exp(-t * (0.7 + 1.1 * k))
            for k, a in ((1, 1), (2, 0.42 * bright), (3, 0.16 * bright), (4, 0.07 * bright), (5, 0.03 * bright)))
    return s * fade(len(t), 0.006, 0.4)


def marimba(f, d=0.7):
    t = tt(d)
    s = np.sin(2 * np.pi * f * t) * np.exp(-t * 6) + 0.25 * np.sin(2 * np.pi * f * 4 * t) * np.exp(-t * 26)
    return s * fade(len(t), 0.002, 0.08)


def chime(f, d=2.2):
    t = tt(d)
    s = sum(a * np.sin(2 * np.pi * f * r * t) * np.exp(-t * dec) for r, a, dec in ((1, 1, 1.6), (2.76, 0.22, 3.2), (5.4, 0.06, 6)))
    return s * fade(len(t), 0.004, 0.4)


def pad(notes, d, att=0.9, rel=1.4):
    t = tt(d)
    s = np.zeros_like(t)
    for n in notes:
        f = hz(n)
        for det, a in ((-5, 0.5), (0, 1), (6, 0.5)):
            ff = f * 2 ** (det / 1200)
            s += a * (np.sin(2 * np.pi * ff * t) + 0.08 * np.sin(4 * np.pi * ff * t))
    trem = 1 + 0.05 * np.sin(2 * np.pi * 0.3 * t)
    return s * trem * fade(len(t), att, rel) / len(notes)


def kick(d=0.35):
    """Bombo redondo y corto, sin chasquido."""
    t = tt(d)
    f = 52 + 38 * np.exp(-t / 0.025)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.11) * fade(len(t), 0.003, 0.05)


def rim(d=0.08):
    t = tt(d)
    return (np.sin(2 * np.pi * 1700 * t) * np.exp(-t / 0.006) * 0.5 + band(noise(d), 2500, 8000) * np.exp(-t / 0.004) * 0.35)


def shaker(d=0.09):
    t = tt(d)
    return band(noise(d), 6000, 13000) * np.sin(np.pi * t / d) ** 3


def bass(f, d):
    t = tt(d)
    return (np.sin(2 * np.pi * f * t) + 0.12 * np.sin(4 * np.pi * f * t)) * np.exp(-t * 1.1) * fade(len(t), 0.01, 0.1)


def air(d=0.95, lo=250, hi=2600):
    """Soplo suave para los cambios de panel."""
    t = tt(d)
    return band(noise(d), lo, hi) * np.sin(np.pi * np.clip(t / d, 0, 1)) ** 2.4


def swell(d, lo=300, hi=5000):
    """Aire que crece despacio y se abre (entrada en la coma)."""
    n = noise(d)
    K = 14
    S_ = len(n) // K
    out = np.zeros_like(n)
    for c in range(K):
        k = c / (K - 1)
        seg = band(n[c * S_ : (c + 1) * S_ + 512], lo * (1 + 2 * k), hi * (0.4 + 0.6 * k))[:S_]
        out[c * S_ : c * S_ + len(seg)] = seg
    t = tt(d)[: len(out)]
    return out * np.sin(np.pi / 2 * np.clip(t / d, 0, 1)) ** 3 * fade(len(out), 0.05, 0.25)


def tick(f=2400, d=0.05):
    t = tt(d)
    return np.sin(2 * np.pi * f * t) * np.exp(-t / 0.008) + band(noise(d), 3000, 9000) * np.exp(-t / 0.003) * 0.25


def key():
    t = tt(0.045)
    return band(noise(0.045), 1500, 6500) * np.exp(-t / 0.005) + np.sin(2 * np.pi * 380 * t) * np.exp(-t / 0.007) * 0.4


def scan(d):
    t = tt(d)
    return band(noise(d), 4000, 9000) * (0.5 + 0.5 * np.sin(2 * np.pi * 6 * t)) * np.sin(np.pi * t / d) ** 2


# ----------------------------------------------------------------------- música
mus = Bus()
B = lambda k: 9.95 + k * BEAT  # tiempo k contado desde la llegada del primer panel (9,95 s)

# acordes: (inicio, fin, notas del colchón, raíz)
chords = [
    (0.0, 2.45, ["C3", "G3", "B3", "E4"], "C2"),           # portada
    (2.45, 4.4, ["A2", "E3", "G3", "C4"], "A1"),
    (4.4, 5.92, ["F2", "C3", "E3", "A3"], "F1"),           # entrada en la coma
    (5.92, 7.65, ["F2", "C3", "E3", "G3", "A3"], "F1"),    # cómo pensamos
    (7.65, 9.95, ["G2", "D3", "F3", "B3"], "G1"),
    (B(0), B(4), ["A2", "E3", "G3", "C4"], "A1"),          # 01
    (B(4), B(8), ["F2", "C3", "E3", "A3"], "F1"),
    (B(8), B(12), ["D3", "A3", "C4", "F4"], "D2"),         # 02
    (B(12), B(16), ["G2", "D3", "F3", "B3"], "G1"),
    (B(16), B(20), ["C3", "G3", "B3", "E4"], "C2"),        # 03
    (B(20), B(24), ["E2", "B2", "D3", "G3"], "E1"),
    (B(24), B(28), ["F2", "C3", "E3", "A3"], "F1"),        # 04
    (B(28), B(32), ["G2", "D3", "F3", "B3"], "G1"),
    (B(32), B(36), ["A2", "E3", "G3", "C4"], "A1"),        # cómo trabajamos
    (B(36), B(40), ["F2", "C3", "E3", "A3"], "F1"),
    (B(40), B(44), ["E2", "B2", "D3", "G3"], "E1"),        # quiénes somos
    (B(44), 35.825, ["D3", "A3", "C4", "F4"], "D2"),
    (35.825, 40.0, ["C3", "G3", "B3", "D4", "E4"], "C2"),  # tu próximo paso
]
for a, z, notes, _ in chords:
    mus.add(a, pad(notes, z - a + 1.2), 0.06)


def root_at(x):
    r = None
    for a, z, _, root in chords:
        if a <= x + 1e-6:
            r = root
    return r


# percusión discreta: entra con los servicios, baja en «quiénes somos» y vuelve suave al final
def groove(a, z, kick_g=0.16, rim_g=0.035, sh_g=0.022, bass_g=0.085):
    k = 0
    x = a
    while x < z - 1e-6:
        beat = k % 4
        if beat in (0, 2):
            mus.add(x, kick(), kick_g)
        if beat in (1, 3) and rim_g:
            mus.add(x, rim(), rim_g, pan=0.15)
        if sh_g:
            mus.add(x + BEAT / 2, shaker(), sh_g, pan=0.35)
            mus.add(x, shaker(), sh_g * 0.6, pan=-0.35)
        r = root_at(x)
        if r and bass_g and beat in (0, 2):
            mus.add(x, bass(hz(r) * 2, BEAT * 1.9), bass_g)
        x += BEAT
        k += 1


groove(7.65, 9.95, kick_g=0, rim_g=0, sh_g=0.014, bass_g=0)       # el shaker anuncia lo que viene
groove(B(0), B(32), kick_g=0.19, rim_g=0.036, sh_g=0.025, bass_g=0.1)
groove(B(32), B(40), kick_g=0.19, rim_g=0.036, sh_g=0.025, bass_g=0.1)
groove(35.825, 39.0, kick_g=0.12, rim_g=0, sh_g=0.018, bass_g=0.08)

# marimba en corcheas durante los servicios: dibuja cada acorde
arps = {
    B(0): ["A4", "C5", "E5", "G5"], B(4): ["F4", "A4", "C5", "E5"],
    B(8): ["D5", "F5", "A5", "C6"], B(12): ["G4", "B4", "D5", "F5"],
    B(16): ["C5", "E5", "G5", "B5"], B(20): ["E4", "G4", "B4", "D5"],
    B(24): ["F4", "A4", "C5", "E5"], B(28): ["G4", "B4", "D5", "F5"],
    B(32): ["A4", "C5", "E5", "G5"], B(36): ["F4", "A4", "C5", "E5"],
}
order = (0, 1, 2, 3, 2, 1, 2, 3)
for t0, notes in arps.items():
    for j in range(8):
        mus.add(t0 + j * BEAT / 2, marimba(hz(notes[order[j]])), 0.045 if j % 2 else 0.058, pan=(-0.4, 0.4)[j % 2])

# piano: el motivo de la marca (sube y se abre) en la portada, en la coma y en el cierre
motif = [("E4", 0.0), ("G4", 0.29), ("B4", 0.575), ("D5", 0.86)]
for t0 in (0.15, 2.45):
    for n, dt in motif:
        mus.add(t0 + dt, piano(hz(n), 2.6), 0.09)
for n in ("C3", "G3", "E4"):
    mus.add(0.15, piano(hz(n), 4.0, 0.8), 0.08)
for n in ("A2", "E3", "C4"):
    mus.add(2.45, piano(hz(n), 3.5, 0.8), 0.07)
# florece al entrar en la coma
for n, dt in (("F3", 0), ("C4", 0.02), ("E4", 0.04), ("A4", 0.06), ("G5", 0.35), ("E5", 0.62)):
    mus.add(5.92 + dt, piano(hz(n), 4.0), 0.085)
# cómo pensamos: el piano sigue la frase mientras se lee
for t0, n in ((7.65, "D4"), (7.65, "B3"), (7.94, "F4"), (8.225, "A4"), (8.8, "G4"), (9.375, "B4")):
    mus.add(t0, piano(hz(n), 2.8), 0.075)
# quiénes somos: piano solo, reflexivo
for t0, n in ((B(40), "E4"), (B(40), "B3"), (B(41), "G4"), (B(42), "D5"), (B(44), "F4"), (B(44), "C4"), (B(45), "A4"), (B(46), "E5")):
    mus.add(t0, piano(hz(n), 3.0), 0.1)
# tu próximo paso: el motivo resuelto
for n, dt in (("C3", 0), ("G3", 0.02), ("E4", 0.04), ("B4", 0.06)):
    mus.add(35.825 + dt, piano(hz(n), 5.0), 0.08)
for n, dt in (("E5", 0.575), ("G5", 0.86), ("B5", 1.15), ("D6", 1.44)):
    mus.add(35.825 + dt, piano(hz(n), 3.0), 0.07)
for n, dt in (("C4", 0), ("G4", 0.03), ("E5", 0.06)):
    mus.add(38.125 + dt, piano(hz(n), 3.5), 0.07)

# ----------------------------------------------------------------------- efectos
fx = Bus()
# portada: cada palabra, una nota limpia
for t0, n in ((0.75, "E6"), (1.9, "G6"), (3.05, "C7")):
    fx.add(t0, chime(hz(n), 1.6), 0.035, pan=-0.2)
    fx.add(t0, tick(1800, 0.04), 0.03, pan=-0.2)
fx.add(0.8, air(0.8, 300, 2200), 0.03, pan=0.3)  # sube la franja de servicios
# entrada en la coma: aire que crece y se abre
fx.add(4.25, swell(1.7, 250, 4500), 0.11)
fx.add(5.92, chime(hz("A6"), 2.4), 0.04, pan=0.2)
fx.add(5.92, chime(hz("E6"), 2.4), 0.03, pan=-0.2)

# cambios de panel: un soplo
for t0 in (9.0, 13.6, 18.2, 22.8, 27.4, 31.4, 34.875):
    fx.add(t0, air(0.95), 0.05, pan=rng.uniform(-0.2, 0.2))

# 01 · cada paso hecho: marimba que sube y un clic
for i, (t0, n) in enumerate(((11.1, "C6"), (11.675, "E6"), (12.25, "G6"), (12.825, "C7"))):
    fx.add(t0, marimba(hz(n), 0.6), 0.09, pan=-0.3 + 0.2 * i)
    fx.add(t0, tick(2600, 0.04), 0.04, pan=-0.3 + 0.2 * i)

# 02 · el agente lee (escaneo suave), rellena campos y tu equipo aprueba
fx.add(14.9, scan(2.05), 0.018, pan=-0.2)
for i in range(4):
    fx.add(15.125 + i * BEAT, tick(2100 + 150 * i, 0.04), 0.05, pan=0.3)
fx.add(17.425, tick(1300, 0.05), 0.07, pan=0.3)
fx.add(17.43, chime(hz("G6"), 1.6), 0.045, pan=0.3)
fx.add(17.5, chime(hz("D7"), 1.4), 0.025, pan=0.3)

# 03 · la web baja: soplos cortos en cada parada
for t0 in (19.45, 20.25, 21.05):
    fx.add(t0, air(0.75, 400, 3200), 0.035, pan=0.25)

# 04 · teclear, el resultado y la respuesta de la IA
for i in range(0, len("reformas de cocina en Palma"), 2):
    fx.add(23.9 + i * 0.036, key(), 0.07, pan=0.25)
fx.add(24.9, tick(1900, 0.05), 0.05, pan=0.25)
fx.add(25.475, chime(hz("E6"), 1.4), 0.035, pan=0.25)
for i in range(10):
    fx.add(25.65 + i * 0.1, tick(3000 + 80 * i, 0.03), 0.012, pan=0.25)

# cómo trabajamos: un paso, una nota; «Acompañamos» con calma
for i, n in enumerate(("C5", "D5", "E5", "G5")):
    fx.add(28.35 + i * BEAT, marimba(hz(n), 0.7), 0.08, pan=-0.45 + 0.3 * i)
fx.add(30.65, chime(hz("C6"), 2.2), 0.04)

# tu próximo paso: el cursor llega, pasa por encima y pulsa
fx.add(37.0, air(0.75, 600, 4000), 0.02, pan=0.4)
fx.add(37.6, air(0.45, 900, 5000), 0.02, pan=0.1)
fx.add(38.125, tick(1100, 0.06), 0.09)
fx.add(38.13, chime(hz("G6"), 1.8), 0.035)

music = np.stack([reverb(mus.L, 2.8, 0.42), reverb(mus.R, 2.8, 0.42)], 1)
sfx = np.stack([reverb(fx.L, 1.6, 0.25), reverb(fx.R, 1.6, 0.25)], 1)
mix = sfx + music
t = np.arange(N) / SR
mix *= (np.clip((DUR - t) / 2.2, 0, 1) ** 1.4)[:, None]
mix *= np.clip(t / 0.02, 0, 1)[:, None]
mix /= np.max(np.abs(mix))
mix = np.tanh(1.4 * mix) / np.tanh(1.4) * 0.65  # ≈ -16 LUFS, como el vídeo anterior

out = sys.argv[1] if len(sys.argv) > 1 else "sound.wav"
with wave.open(out, "wb") as f:
    f.setnchannels(2)
    f.setsampwidth(2)
    f.setframerate(SR)
    f.writeframes((mix * 32767).astype("<i2").tobytes())
print("ok", out)
