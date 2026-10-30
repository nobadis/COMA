"""
Banda sonora de los anuncios (sintetizada: sin derechos de autor ni licencias).
Pulso a 120 BPM, acordes cálidos, golpe en cada precio, barrido en cada cambio de escena y clic
en el botón final. Uso: python3 musica.py <A|B|C> salida.wav
"""
import sys
import wave

import numpy as np

SR = 44100
rng = np.random.default_rng(7)

# duración, cortes de escena, golpes (precio) y clic del botón: mismos tiempos que cada HTML
PIEZAS = {
    "A": dict(dur=15.0, cuts=[2.2, 7.4, 10.6], hits=[0.3, 10.9], click=13.2, key=0),
    "B": dict(dur=12.0, cuts=[2.6, 5.2, 8.6], hits=[1.0, 2.85], click=10.9, key=-3),
    "CP": dict(dur=15.0, cuts=[2.6, 8.0, 10.8], hits=[0.3, 3.2, 4.7, 6.2], click=13.7, key=2),  # C con ?pack=1
    "E": dict(dur=15.0, cuts=[2.4, 7.6, 11.0], hits=[0.7, 3.4, 4.6, 5.8], click=13.4, key=5),
    "C": dict(dur=15.0, cuts=[2.6, 8.0, 10.8], hits=[0.3, 3.2, 4.35, 5.5, 6.65], click=13.7, key=2),
}


def tt(d):
    return np.arange(int(d * SR)) / SR


def hz(m):
    return 440.0 * 2 ** ((m - 69) / 12)


def lowpass(x, fc):
    X = np.fft.rfft(x)
    f = np.fft.rfftfreq(len(x), 1 / SR)
    return np.fft.irfft(X / (1 + (f / fc) ** 4), len(x))


def add(buf, x, at, g=1.0):
    i = int(at * SR)
    if i >= len(buf):
        return
    n = min(len(x), len(buf) - i)
    buf[i : i + n] += g * x[:n]


def kick():
    t = tt(0.35)
    f = 50 + 90 * np.exp(-t * 30)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 9)


def hat():
    t = tt(0.06)
    n = rng.standard_normal(len(t))
    n = n - lowpass(n, 7000)
    return n * np.exp(-t * 70)


def pluck(m, d=0.45):
    t = tt(d)
    x = sum(np.sin(2 * np.pi * hz(m) * k * t) / k ** 1.4 for k in range(1, 6))
    return x * np.exp(-t * 7) * (1 - np.exp(-t * 300))


def pad(ms, d):
    t = tt(d)
    x = sum(np.sin(2 * np.pi * hz(m) * t * (1 + det)) for m in ms for det in (-0.003, 0.003))
    env = np.minimum(1, t / 0.4) * np.minimum(1, (d - t) / 0.4)
    return lowpass(x * env, 1800)


def whoosh(d=0.5):
    t = tt(d)
    n = rng.standard_normal(len(t))
    env = np.sin(np.pi * t / d) ** 2
    # barrido: mezcla de ruido oscuro a brillante
    k = t / d
    return ((1 - k) * lowpass(n, 900) + k * lowpass(n, 6000)) * env


def boom():
    t = tt(0.9)
    sub = np.sin(2 * np.pi * np.cumsum(40 + 80 * np.exp(-t * 18)) / SR) * np.exp(-t * 4)
    n = lowpass(rng.standard_normal(len(t)), 2500) * np.exp(-t * 14)
    return sub + 0.35 * n


def click():
    t = tt(0.09)
    return np.sin(2 * np.pi * 1700 * t) * np.exp(-t * 60) + 0.5 * np.sin(2 * np.pi * 2600 * t) * np.exp(-t * 90)


def main(pid, out):
    P = PIEZAS[pid]
    D = P["dur"]
    buf = np.zeros(int(D * SR) + SR)
    beat = 0.5
    k0 = 48 + P["key"]
    prog = [[0, 7, 12, 16], [-3, 4, 9, 12], [5, 9, 12, 17], [7, 11, 14, 19]]  # I vi IV V
    nb = int(D / beat)
    for b in range(nb):
        at = b * beat
        bar = (b // 4) % 4
        if at >= 0.25:
            add(buf, kick(), at, 0.55)
            add(buf, hat(), at + beat / 2, 0.12)
        add(buf, pluck(k0 + 12 + prog[bar][1 + b % 3], 0.4), at + (0.25 if b % 2 else 0), 0.1)
        if b % 2 == 0:
            add(buf, pluck(k0 - 12 + prog[bar][0], 0.9), at, 0.32)
    for bar in range(int(D / 2) + 1):
        add(buf, pad([k0 + 12 + x for x in prog[bar % 4][1:]], 2.05), bar * 2.0, 0.035)
    for c in P["cuts"]:
        add(buf, whoosh(0.45), c - 0.4, 0.22)
    for h in P["hits"]:
        add(buf, boom(), h, 0.7)
    add(buf, click(), P["click"], 0.6)
    x = buf[: int(D * SR)]
    fade = np.ones(len(x))
    nf = int(0.6 * SR)
    fade[-nf:] = np.linspace(1, 0, nf) ** 2
    x = np.tanh(1.3 * x * fade)
    x /= np.max(np.abs(x)) / 0.89
    st = np.stack([x, x], axis=1)
    with wave.open(out, "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes((st * 32767).astype("<i2").tobytes())


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
