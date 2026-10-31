"""
Efectos de sonido del vídeo demo de COMA Rebar Stock (sin música).
Lee cues.json (lo escribe render.cjs a partir de window.CUES de demo.html) y sintetiza cada efecto
en su instante: grúa (motor, imán, suelta), lecturas RFID, interfaz (toques, avisos) y transiciones.
Debajo, solo un ambiente de nave muy bajo mientras se ve el patio (cue "amb").
Uso: python sound.py cues.json salida.wav [duracion]
"""
import json
import sys
import wave
import numpy as np

SR = 44100
cues = json.load(open(sys.argv[1]))
DUR = float(sys.argv[3]) if len(sys.argv) > 3 else 126.0
N = int(SR * DUR)
rng = np.random.default_rng(7)
L, R = np.zeros(N), np.zeros(N)


def tt(d):
    return np.arange(int(d * SR)) / SR


def noise(d):
    return rng.standard_normal(int(d * SR))


def band(x, lo, hi):
    X = np.fft.rfft(x)
    f = np.fft.rfftfreq(len(x), 1 / SR)
    g = 1 / (1 + (lo / np.maximum(f, 1)) ** 4) / (1 + (f / hi) ** 4)
    return np.fft.irfft(X * g, len(x))


def env(n, a, r):
    e = np.ones(n)
    na, nr = max(1, min(n, int(a * SR))), max(1, min(n, int(r * SR)))
    e[:na] = np.sin(np.linspace(0, np.pi / 2, na)) ** 2
    e[-nr:] *= np.cos(np.linspace(0, np.pi / 2, nr)) ** 2
    return e


def add(t0, sig, g=1.0, pan=0.0):
    i = int(round(t0 * SR))
    if i >= N or i < 0:
        return
    s = sig[: N - i] * g
    L[i : i + len(s)] += s * np.sqrt((1 - pan) / 2) * np.sqrt(2)
    R[i : i + len(s)] += s * np.sqrt((1 + pan) / 2) * np.sqrt(2)


def sweep(d, lo, hi, up=True):
    """Aire filtrado que barre de grave a agudo (o al revés)."""
    n = noise(d)
    out = np.zeros_like(n)
    K = 18
    S = len(n) // K
    for c in range(K):
        k = c / (K - 1) if up else 1 - c / (K - 1)
        a, b = lo * (1 + 3 * k), hi * (0.5 + 0.8 * k)
        seg = band(n[c * S : (c + 1) * S + 512], a, b)[:S]
        out[c * S : c * S + len(seg)] = seg
    t = tt(d)
    return out * np.sin(np.pi * np.clip(t / d, 0, 1)) ** 1.5


def tone(f, d, dec=20.0, harm=((1, 1),)):
    t = tt(d)
    s = sum(a * np.sin(2 * np.pi * f * k * t) for k, a in harm)
    return s * np.exp(-t * dec) * env(len(t), 0.002, 0.02)


def glass(f, d=1.4):
    t = tt(d)
    s = np.zeros_like(t)
    for r, a, dec in ((1, 1, 2.2), (2.76, 0.3, 4), (5.4, 0.1, 7)):
        s += a * np.sin(2 * np.pi * f * r * t) * np.exp(-t * dec)
    return s * env(len(t), 0.003, 0.2)


# --------------------------------------------------------------------- efectos
def whoosh(v=1):
    d = 0.9
    s = sweep(d, 300, 3000) * 0.9
    t = tt(0.5)
    s[: len(t)] += np.sin(2 * np.pi * (70 - 30 * t) * t) * np.exp(-t * 8) * 0.5
    return s


def swish(v=1):
    return sweep(0.55, 900, 6000) * 0.55


def pop(v=1):
    t = tt(0.16)
    f = 900 * np.exp(-t * 6)
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 28) * 0.7
    k = tone(1800, 0.05, 80) * 0.15
    s[: len(k)] += k
    return s


def tap(v=1):
    t = tt(0.09)
    return np.sin(2 * np.pi * 1700 * t) * np.exp(-t / 0.012) + band(noise(0.09), 2500, 9000) * np.exp(-t / 0.0025) * 0.4


def click(v=1):
    return tap() * 0.8


def key(v=1):
    t = tt(0.05)
    return band(noise(0.05), 1500, 7000) * np.exp(-t / 0.004) * 0.7 + np.sin(2 * np.pi * 380 * t) * np.exp(-t / 0.008) * 0.3


def tick(v=1):
    t = tt(0.06)
    return np.sin(2 * np.pi * 2400 * t) * np.exp(-t / 0.006) * 0.5 + band(noise(0.06), 3000, 9000) * np.exp(-t / 0.002) * 0.3


def scan(v=1):
    t = tt(0.16)
    return np.sign(np.sin(2 * np.pi * 2700 * t)) * 0.18 * env(len(t), 0.005, 0.02)


def blip(v=1):
    t = tt(0.07)
    return np.sin(2 * np.pi * 2300 * t) * env(len(t), 0.003, 0.03) * 0.35


def blips(d=1.0):
    out = np.zeros(int((d + 0.2) * SR))
    x = 0.0
    while x < d:
        s = blip() * (0.6 + 0.4 * rng.random())
        j = int(x * SR)
        out[j : j + len(s)] += s
        x += 0.13 * (1 - 0.6 * x / d) + 0.02
    return out


def radio(d=1.0):
    t = tt(d)
    n = band(noise(d), 2500, 7000) * (0.6 + 0.4 * np.sin(2 * np.pi * 9 * t))
    return n * env(len(t), 0.15, 0.3) * 0.25


def buzz(v=1):
    t = tt(0.4)
    s = np.sign(np.sin(2 * np.pi * 150 * t)) * 0.12 + np.sin(2 * np.pi * 300 * t) * 0.1
    return band(s, 80, 2500) * env(len(t), 0.01, 0.08)


def clunk(v=1):
    """Imán que agarra el acero: golpe grave, resonancia metálica y zumbido eléctrico."""
    d = 1.2
    t = tt(d)
    s = np.sin(2 * np.pi * (55 + 40 * np.exp(-t * 30)) * t) * np.exp(-t * 9) * 0.9
    for f, a, dec in ((310, 0.25, 6), (733, 0.18, 9), (1290, 0.12, 12), (2210, 0.06, 16)):
        s += a * np.sin(2 * np.pi * f * t) * np.exp(-t * dec)
    s += band(noise(d), 300, 3000) * np.exp(-t * 40) * 0.5
    s += np.sin(2 * np.pi * 100 * t) * 0.06 * env(len(t), 0.05, 0.4)
    return s


def release(v=1):
    d = 0.9
    t = tt(d)
    s = np.sin(2 * np.pi * (48 + 30 * np.exp(-t * 25)) * t) * np.exp(-t * 11) * 0.8
    for f, a, dec in ((260, 0.2, 8), (640, 0.12, 12), (1450, 0.06, 16)):
        s += a * np.sin(2 * np.pi * f * t) * np.exp(-t * dec)
    s += band(noise(d), 200, 2500) * np.exp(-t * 30) * 0.45
    return s


def motor(d, base):
    """Motor de grúa: zumbido con armónicos, rampa de arranque y parada."""
    d = max(d, 0.3)
    t = tt(d)
    ramp = np.clip(t / 0.4, 0, 1) * np.clip((d - t) / 0.4, 0, 1)
    f = base * (0.85 + 0.15 * ramp)
    ph = 2 * np.pi * np.cumsum(f) / SR
    s = sum(a * np.sin(k * ph) for k, a in ((1, 1), (2, 0.5), (3, 0.3), (4, 0.15), (6, 0.08)))
    s = band(s, 60, 1800) * 0.12
    s += band(noise(d), 60, 400) * 0.25
    return s * env(len(t), 0.25, 0.3)


def hoist(d):
    return motor(d, 118) * 0.9


def travel(d):
    s = motor(d, 74)
    t = tt(max(d, 0.3))
    s += band(noise(max(d, 0.3)), 30, 160) * 0.5 * env(len(t), 0.4, 0.4)
    return s


def verified(v=1):
    out = np.zeros(int(1.2 * SR))
    for i, f in enumerate((1318.5, 1975.5)):
        s = glass(f / 2, 1.0) * 0.5
        j = int(i * 0.1 * SR)
        out[j : j + len(s)] += s
    return out


def chime(v=1):
    out = np.zeros(int(2.0 * SR))
    for i, f in enumerate((1046.5, 1568.0, 2093.0)):
        s = glass(f / 2, 1.6) * 0.42
        j = int(i * 0.09 * SR)
        out[j : j + len(s)] += s
    return out


def drop(v=1):
    t = tt(0.3)
    f = 1500 * np.exp(-t * 9) + 300
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 12) * 0.5


def send(v=1):
    d = 0.4
    t = tt(d)
    f = 500 + 1100 * (t / d) ** 1.5
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.sin(np.pi * t / d) ** 2 * 0.35 + sweep(d, 1500, 7000) * 0.3


def notif(v=1):
    out = np.zeros(int(0.8 * SR))
    for i, f in enumerate((1174.7, 1568.0)):
        s = glass(f / 2, 0.6) * 0.32
        j = int(i * 0.07 * SR)
        out[j : j + len(s)] += s
    return out


def ask(v=1):
    out = np.zeros(int(1.0 * SR))
    for i, f in enumerate((880, 880)):
        s = tone(f, 0.25, 9, ((1, 1), (2, 0.25))) * 0.4
        j = int(i * 0.22 * SR)
        out[j : j + len(s)] += s
    return out


def alert(v=1):
    out = np.zeros(int(1.0 * SR))
    for i in range(3):
        t = tt(0.13)
        s = band(np.sign(np.sin(2 * np.pi * 960 * t)), 300, 4000) * 0.16 * env(len(t), 0.005, 0.02)
        j = int(i * 0.18 * SR)
        out[j : j + len(s)] += s
    return out


def printer(v=1):
    d = 0.7
    t = tt(d)
    n = band(noise(d), 1500, 6000) * (0.5 + 0.5 * np.sign(np.sin(2 * np.pi * 38 * t)))
    return n * env(len(t), 0.02, 0.08) * 0.22


def ffwd(v=1):
    d = 1.6
    t = tt(d)
    f = 300 + 1800 * (t / d)
    s = band(noise(d), 600, 6000) * 0.4 + np.sin(2 * np.pi * np.cumsum(f) / SR) * 0.08
    return s * np.sin(np.pi * t / d) ** 2


def geiger(v=1):
    t = tt(0.06)
    return np.sin(2 * np.pi * 1850 * t) * env(len(t), 0.002, 0.02) * 0.35


def down(v=1):
    t = tt(0.5)
    f = 700 * np.exp(-t * 3)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(len(t), 0.01, 0.15) * 0.3


def sync(v=1):
    out = np.zeros(int(1.4 * SR))
    for i in range(10):
        s = tick() * 0.8
        j = int(i * 0.1 * SR)
        out[j : j + len(s)] += s
    s = notif()
    j = int(1.0 * SR)
    out[j : j + len(s)] += s[: len(out) - j]
    return out


def amb(d):
    """Ambiente de nave, muy bajo, mientras se ve el patio."""
    t = tt(d)
    return (band(noise(d), 40, 900) * 0.05 + np.sin(2 * np.pi * 50 * t) * 0.006) * env(len(t), 0.8, 0.8)


def count(d=1.8):
    out = np.zeros(int((d + 0.1) * SR))
    x = 0.0
    while x < d:
        s = tick() * 0.6
        j = int(x * SR)
        out[j : j + len(s)] += s
        x += 0.05 + 0.1 * (x / d) ** 2
    return out


FX = {
    "whoosh": (whoosh, 0.55), "swish": (swish, 0.45), "pop": (pop, 0.35), "tap": (tap, 0.4), "click": (click, 0.4),
    "key": (key, 0.3), "tick": (tick, 0.35), "scan": (scan, 0.5), "blip": (blip, 0.6), "blips": (blips, 0.45),
    "radio": (radio, 0.6), "buzz": (buzz, 0.5), "clunk": (clunk, 0.75), "release": (release, 0.65),
    "hoist": (hoist, 0.55), "travel": (travel, 0.6), "verified": (verified, 0.55), "chime": (chime, 0.5),
    "drop": (drop, 0.4), "send": (send, 0.45), "notif": (notif, 0.45), "ask": (ask, 0.5), "alert": (alert, 0.6),
    "print": (printer, 0.6), "ffwd": (ffwd, 0.45), "geiger": (geiger, 0.6), "down": (down, 0.5),
    "sync": (sync, 0.5), "count": (count, 0.45), "amb": (amb, 1.0),
}
DURATIONAL = {"blips", "radio", "hoist", "travel", "count", "amb"}

for c in cues:
    fn, g = FX[c["k"]]
    v = c.get("v", 1)
    sig = fn(v) if c["k"] in DURATIONAL else fn()
    gain = g * (v if c["k"] not in DURATIONAL else 1)
    pan = {"alert": 0.15, "ask": 0.2, "tap": 0.2, "notif": 0.25}.get(c["k"], 0.0)
    add(c["t"], sig, gain, pan)

mix = np.stack([L, R], axis=1)
mix = np.tanh(mix / (np.max(np.abs(mix)) * 0.75)) * 0.89
with wave.open(sys.argv[2], "wb") as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes((mix * 32767).astype(np.int16).tobytes())
print(f"{DUR:.0f} s de sonido en {sys.argv[2]}")
