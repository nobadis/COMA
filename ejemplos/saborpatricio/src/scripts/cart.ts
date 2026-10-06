export type Cart = Record<string, number>;

const KEY = 'sp-cart';
const EVENT = 'cart:change';

export function readCart(): Cart {
  try {
    const raw = localStorage.getItem(KEY);
    const data = raw ? JSON.parse(raw) : {};
    return data && typeof data === 'object' ? data : {};
  } catch {
    return {};
  }
}

export function writeCart(cart: Cart) {
  for (const k of Object.keys(cart)) if (!cart[k] || cart[k] < 0) delete cart[k];
  try {
    localStorage.setItem(KEY, JSON.stringify(cart));
  } catch {
    /* sin almacenamiento: el carrito vive solo en esta página */
  }
  document.dispatchEvent(new CustomEvent(EVENT, { detail: cart }));
}

export function setQty(id: string, qty: number) {
  const cart = readCart();
  cart[id] = Math.max(0, Math.min(99, qty));
  writeCart(cart);
}

export const total = (cart: Cart) => Object.values(cart).reduce((a, b) => a + b, 0);

function paintCount(cart: Cart) {
  const n = total(cart);
  document.querySelectorAll<HTMLElement>('[data-cart-count]').forEach((el) => {
    el.textContent = String(n);
    el.hidden = n === 0;
  });
  document.documentElement.toggleAttribute('data-has-cart', n > 0);
}

let toastTimer: number | undefined;
function toast(html: string) {
  const el = document.querySelector<HTMLElement>('[data-toast]');
  if (!el) return;
  el.innerHTML = html;
  el.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el.classList.remove('is-on'), 2200);
}

document.addEventListener(EVENT, (e) => paintCount((e as CustomEvent<Cart>).detail));
paintCount(readCart());

document.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-add]');
  if (!btn) return;
  const id = btn.dataset.add!;
  const cart = readCart();
  cart[id] = (cart[id] ?? 0) + 1;
  writeCart(cart);
  btn.classList.remove('is-pop');
  void btn.offsetWidth;
  btn.classList.add('is-pop');
  const name = btn.dataset.name ?? 'Empanada';
  toast(`+1 ${name} · <a href="/pedir">Ver pedido (${total(cart)})</a>`);
  navigator.vibrate?.(12);
});

// Sincroniza entre pestañas
window.addEventListener('storage', (e) => {
  if (e.key === KEY) paintCount(readCart());
});
