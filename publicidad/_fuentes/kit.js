// Motor de las piezas animadas: window.render(t) dibuja el fotograma del segundo t.
// ?f=916 (1080x1920, Reels/Stories/TikTok) · ?f=45 (1080x1350, feed) · ?f=11 (1080x1080)
(function () {
  const F = new URLSearchParams(location.search).get("f") || "916";
  const SIZES = { 916: [1080, 1920], 45: [1080, 1350], 11: [1080, 1080] };
  const [W, H] = SIZES[F];
  document.body.classList.add("f" + F);
  const stage = document.getElementById("stage");
  stage.style.width = W + "px";
  stage.style.height = H + "px";
  window.FORMAT = F;
  window.SIZE = { w: W, h: H };

  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const K = {
    $: (id) => document.getElementById(id),
    clamp,
    p: (t, a, b) => clamp((t - a) / (b - a)),
    ease: (x) => 1 - Math.pow(1 - clamp(x), 3),
    smooth: (x) => { x = clamp(x); return x * x * (3 - 2 * x); },
    back: (x) => { x = clamp(x); const c = 1.9; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); },
    lerp: (a, b, k) => a + (b - a) * k,
    // aparece subiendo
    rise(el, t, start, dur = 0.5, dist = 40) {
      const k = K.ease(K.p(t, start, start + dur));
      el.style.opacity = k;
      el.style.transform = `translateY(${(1 - k) * dist}px)`;
    },
    // golpe de escala (precios, palabras clave)
    slam(el, t, start, dur = 0.35, from = 1.6) {
      const k = K.p(t, start, start + dur);
      el.style.opacity = k > 0 ? 1 : 0;
      el.style.transform = `scale(${K.lerp(from, 1, K.back(k))})`;
    },
    scenes: [],
    S(id, a, z, upd) { K.scenes.push({ el: K.$(id), a, z, upd }); },
  };
  window.K = K;

  window.start = (DURATION) => {
    window.DURATION = DURATION;
    window.render = (t) => {
      for (const s of K.scenes) {
        const a = s.a === 0 ? 0 : s.a - 0.1;
        const on = t >= a && t < s.z;
        s.el.style.display = on ? "block" : "none";
        if (!on) continue;
        const k = s.a === 0 ? 1 : K.smooth(K.p(t, a, s.a + 0.06));
        s.el.style.zIndex = Math.round(s.a * 10);
        s.el.style.opacity = k;
        s.upd(Math.max(0, t - s.a));
      }
    };
    if (!navigator.webdriver) {
      const t0 = performance.now();
      const loop = () => { window.render(((performance.now() - t0) / 1000) % DURATION); requestAnimationFrame(loop); };
      document.fonts.ready.then(loop);
    } else window.render(0);
  };
})();
