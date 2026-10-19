"""
Sonido del vídeo (48 s): diseño de sonido de interfaz sobre un colchón musical muy suave.
Los efectos mandan; la música solo acompaña. Mismos tiempos que promo.html.
Uso: python sound.py salida.wav
"""
import sys
import wave
import numpy as np

SR = 44100
DUR = 48.0
N = int(SR * DUR)
rng = np.random.default_rng(11)


def tt(d):
    return np.arange(int(d * SR)) / SR


def hz(m):
    return 440.0 * 2 ** ((m - 69) / 12)


NOTE = {"C": 0, "D": 2, "E": 4, "F": 5, "G": 7, "A": 9, "B": 11}


def m(name):
    n, o = name[:-1], int(name[-1])
    return 12 * (o + 1) + NOTE[n[0]] + (1 if "#" in n else 0)


def noise(d):
    return rng.standard_normal(int(d * SR))


def band(x, lo, hi):
    X = np.fft.rfft(x)
    f = np.fft.rfftfreq(len(x), 1 / SR)
    # flancos suaves para que el ruido no suene a filtro de ladrillo
    g = 1 / (1 + (lo / np.maximum(f, 1)) ** 4) / (1 + (f / hi) ** 4)
    return np.fft.irfft(X * g, len(x))


def fade(n, a, r):
    e = np.ones(n)
    na, nr = max(1, int(a * SR)), max(1, int(r * SR))
    e[:na] = np.sin(np.linspace(0, np.pi / 2, na)) ** 2
    e[-nr:] *= np.cos(np.linspace(0, np.pi / 2, nr)) ** 2
    return e


L, R = np.zeros(N), np.zeros(N)


def add(t0, sig, g=1.0, pan=0.0):
    i = int(round(t0 * SR))
    if i >= N:
        return
    s = sig[: N - i] * g
    L[i : i + len(s)] += s * np.sqrt((1 - pan) / 2) * np.sqrt(2)
    R[i : i + len(s)] += s * np.sqrt((1 + pan) / 2) * np.sqrt(2)


# --------------------------------------------------------------------- sonidos
def felt(f, d=3.0):
    """Piano de fieltro: pocos armónicos, ataque blando, cola larga."""
    t = tt(d)
    s = np.zeros_like(t)
    for k, a in ((1, 1), (2, 0.35), (3, 0.12), (4, 0.05)):
        s += a * np.sin(2 * np.pi * f * k * t) * np.exp(-t * (0.7 + 0.8 * k))
    s += 0.25 * np.sin(2 * np.pi * f * 1.002 * t) * np.exp(-t * 0.9)
    return s * fade(len(t), 0.012, 0.4)


def glass(f, d=2.2):
    """Campanita de cristal: parciales inarmónicos, muy limpia."""
    t = tt(d)
    s = np.zeros_like(t)
    for r, a, dec in ((1, 1, 1.6), (2.76, 0.35, 3.2), (5.4, 0.12, 6), (8.9, 0.05, 9)):
        s += a * np.sin(2 * np.pi * f * r * t) * np.exp(-t * dec)
    return s * fade(len(t), 0.003, 0.3)


def tap(f=1800, d=0.09):
    """Toque de interfaz: clic corto y redondo."""
    t = tt(d)
    body = np.sin(2 * np.pi * f * t) * np.exp(-t / 0.012)
    tick = band(noise(d), 2500, 9000) * np.exp(-t / 0.0025) * 0.35
    return body + tick


def thud(d=0.25):
    """Papel que se posa: golpe grave y suave con un roce."""
    t = tt(d)
    f = 90 + 60 * np.exp(-t / 0.02)
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.05)
    s += band(noise(d), 800, 5000) * np.exp(-t / 0.03) * 0.25
    return s


def rustle(d=0.45):
    """Roce de papel / aire."""
    t = tt(d)
    return band(noise(d), 1500, 7000) * np.sin(np.pi * t / d) ** 2


def swish(d=0.6, lo=500, hi=4000):
    """Aire muy suave para cambios de plano."""
    t = tt(d)
    n = noise(d)
    out = np.zeros_like(n)
    K = 16
    S = len(n) // K
    for c in range(K):
        k = c / (K - 1)
        a, b = lo * (1 + 2 * k), hi * (0.6 + 0.6 * k)
        seg = band(n[c * S : (c + 1) * S + 512], a, b)[:S]
        out[c * S : c * S + len(seg)] = seg
    return out * np.sin(np.pi * np.clip(t / d, 0, 1)) ** 2


def key(f=1):
    t = tt(0.06)
    s = band(noise(0.06), 1200, 7000) * np.exp(-t / 0.005) + np.sin(2 * np.pi * 420 * f * t) * np.exp(-t / 0.008) * 0.5
    return s


def sent():
    """Mensaje enviado: un 'fuu' ascendente corto."""
    d = 0.32
    t = tt(d)
    f = 500 + 900 * (t / d) ** 1.5
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.sin(np.pi * t / d) ** 2 * 0.5
    return s + swish(d, 1200, 6000) * 0.4


def received():
    """Mensaje recibido: dos notas suaves."""
    out = np.zeros(int(1.0 * SR))
    for i, n in enumerate(("E6", "A6")):
        s = glass(hz(m(n)) / 2, 0.8) * (1 if i else 0.8)
        j = int(i * 0.09 * SR)
        out[j : j + len(s)] += s
    return out


def marimba(f, d=0.6):
    t = tt(d)
    s = np.sin(2 * np.pi * f * t) * np.exp(-t * 7) + 0.2 * np.sin(2 * np.pi * f * 4 * t) * np.exp(-t * 25)
    return s * fade(len(t), 0.002, 0.05)


def scan(d):
    t = tt(d)
    n = band(noise(d), 2500, 8000) * 0.5
    tone = np.sin(2 * np.pi * (220 + 60 * t / d) * t) * 0.25 + np.sin(2 * np.pi * 440 * t) * 0.08
    return (n * 0.6 + tone) * np.sin(np.pi * t / d) ** 2


def rise_tone(d):
    t = tt(d)
    f = 300 + 300 * (t / d)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.sin(np.pi * t / d) ** 2


def pad(notes, d):
    """Colchón cálido: senos y triángulos levemente desafinados, sin brillo."""
    t = tt(d)
    s = np.zeros_like(t)
    for n in notes:
        f = hz(m(n))
        for det, a in ((-4, 0.5), (0, 1), (5, 0.5)):
            ff = f * 2 ** (det / 1200)
            s += a * (np.sin(2 * np.pi * ff * t) + 0.12 * np.sin(2 * np.pi * 2 * ff * t))
    lfo = 1 + 0.08 * np.sin(2 * np.pi * 0.15 * t)
    return s * lfo * fade(len(t), 2.2, 2.5) / len(notes)


def reverb(x, secs=2.8, wet=0.35):
    n = int(secs * SR)
    t = np.arange(n) / SR
    ir = rng.standard_normal(n) * np.exp(-t / (secs / 6.5))
    ir = band(ir, 300, 7000)
    ir[: int(0.025 * SR)] = 0
    ir /= np.sqrt(np.sum(ir**2))
    M = len(x) + n
    y = np.fft.irfft(np.fft.rfft(x, M) * np.fft.rfft(ir, M), M)[: len(x)]
    return x + wet * y


# ------------------------------------------------------------- música de fondo
chords = [
    (0.0, 8.6, ["C3", "G3", "D4", "E4"]),
    (8.2, 7.2, ["A2", "E3", "C4", "G4"]),
    (15.0, 10.8, ["F2", "C3", "A3", "E4"]),
    (25.6, 9.8, ["C3", "G3", "E4", "B4"]),
    (35.0, 8.8, ["D3", "A3", "C4", "F4"]),
    (43.4, 4.6, ["C3", "G3", "C4", "E4", "D5"]),
]
padbus = np.zeros(N)
for t0, d, notes in chords:
    s = pad(notes, d + 1.6)
    i = int(t0 * SR)
    padbus[i : i + len(s)] += s[: N - i]
# Notas sueltas de piano en los momentos clave
pianos = [
    (0.3, "E4"), (1.15, "G4"), (2.0, "D5"),
    (9.3, "A3"), (9.3, "E4"), (9.3, "C5"),
    (11.7, "G4"), (12.7, "E5"),
    (40.45, "C5"), (41.15, "A4"), (41.85, "F4"),
    (43.6, "C3"), (43.6, "G3"), (43.6, "E4"), (43.65, "C5"), (44.3, "G5"),
]
pianobus = np.zeros(N)
for t0, n in pianos:
    s = felt(hz(m(n)), 3.5)
    i = int(t0 * SR)
    pianobus[i : i + len(s)] += s[: N - i]

music = reverb(padbus * 0.065, 3.2, 0.6) + reverb(pianobus * 0.13, 3.0, 0.55)

# --------------------------------------------------------------- efectos (eje)
# Cambios de plano: aire muy suave
for t0 in (4.6, 8.2, 11.4, 15.0, 20.2, 25.6, 30.4, 35.0, 40.2, 43.4):
    add(t0 - 0.15, swish(0.7), 0.05, pan=rng.uniform(-0.3, 0.3))

# 1 · las facturas se posan
for i, t0 in enumerate((0.45, 1.3, 2.15)):
    add(t0, rustle(0.5), 0.07, pan=(-0.5, 0, 0.5)[i])
    add(t0 + 0.42, thud(), 0.22, pan=(-0.5, 0, 0.5)[i])

# 2 · teclear, una a una
for i in range(9):
    add(4.6 + 1.4 + i * 0.16 + rng.uniform(-0.01, 0.01), key(1 + 0.05 * (i % 3)), 0.3, pan=0.1)

# 3 · la coma cae y se asienta
add(9.3, glass(hz(m("E6"))), 0.09)
add(9.3, thud(0.3), 0.14)
add(9.45, glass(hz(m("B6"))), 0.07, pan=0.3)

# 5 · WhatsApp
add(15.25, swish(0.8, 300, 2500), 0.08)
add(16.0, sent(), 0.22, pan=0.35)
add(17.0, received(), 0.08, pan=0.35)
add(18.0, sent(), 0.2, pan=0.35)
add(18.8, received(), 0.08, pan=0.35)

# 6 · lectura y comprobaciones
add(21.2, scan(1.6), 0.12, pan=0.2)
for i in range(5):
    add(21.5 + i * 0.3, tap(2400, 0.05), 0.07, pan=0.4)
for i, n in enumerate(("C6", "E6", "G6", "C7")):
    add(23.2 + i * 0.32, marimba(hz(m(n)) / 2), 0.13, pan=0.4)

# 7 · bandeja de revisión
for i in range(5):
    add(26.4 + i * 0.22, tap(1500, 0.06), 0.08, pan=0.3)
add(28.0, glass(hz(m("A5"))), 0.08, pan=0.3)
add(28.18, glass(hz(m("F5"))), 0.07, pan=0.3)

# 8 · exportación
for i in range(3):
    add(31.2 + i * 0.2, tap(1600, 0.06), 0.08, pan=0.3)
add(32.5, tap(900, 0.1), 0.32, pan=0.3)
add(33.1, received(), 0.08, pan=0.3)

# 9 · panel del cierre
add(35.8, rise_tone(1.4), 0.05, pan=0.3)
add(37.2, sent(), 0.18, pan=0.5)
add(38.9, glass(hz(m("C6"))), 0.1, pan=0.3)
add(39.0, glass(hz(m("G6"))), 0.08, pan=0.3)

# 10 · promesas: un toque por línea
for i in range(3):
    add(40.45 + i * 0.7, tap(1100, 0.08), 0.12)

# 11 · cierre
add(43.6, glass(hz(m("C6")), 3.0), 0.07)
add(45.3, tap(800, 0.1), 0.18)

sfx = np.stack([L, R], 1)
sfx[:, 0] = reverb(sfx[:, 0], 1.6, 0.18)
sfx[:, 1] = reverb(sfx[:, 1], 1.6, 0.18)

mix = sfx + np.stack([music, music], 1)
t = np.arange(N) / SR
mix *= np.clip((DUR - t) / 2.5, 0, 1)[:, None] ** 1.5  # fundido final largo
mix *= np.clip(t / 0.05, 0, 1)[:, None]
mix /= np.max(np.abs(mix))
mix = np.tanh(1.8 * mix) / np.tanh(1.8)  # limitador suave: iguala picos
mix *= 0.9

out = sys.argv[1] if len(sys.argv) > 1 else "sound.wav"
with wave.open(out, "wb") as f:
    f.setnchannels(2)
    f.setsampwidth(2)
    f.setframerate(SR)
    f.writeframes((mix * 32767).astype("<i2").tobytes())
print("ok", out)
