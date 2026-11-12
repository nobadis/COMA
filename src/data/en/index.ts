import { site } from "../site";
import { enPages } from "./pages";

export { enPages };
export type { EnPage } from "./types";

export const enPath = (slug: string) => (slug ? `/en/${slug}/` : "/en/");
export const enBySlug = (slug: string) => enPages.find((p) => p.slug === slug);

/**
 * Enlaces hreflang de una ruta: si la página tiene versión en el otro idioma, se declaran las
 * dos (y x-default en español). Si no, null y la página se declara solo en español.
 */
export function alternatesFor(pathname: string): { hreflang: string; href: string }[] | null {
  const pair =
    enPages.find((p) => enPath(p.slug) === pathname) ?? enPages.find((p) => p.es === pathname);
  if (!pair) return null;
  const es = new URL(pair.es, site.url).href;
  return [
    { hreflang: "es-ES", href: es },
    { hreflang: "en", href: new URL(enPath(pair.slug), site.url).href },
    { hreflang: "x-default", href: es },
  ];
}
