import type { AiSector, UseCase } from "./ia/types";
import { iaTurismo } from "./ia/turismo";
import { iaServicios } from "./ia/servicios";

export type { AiSector, UseCase };

/** Páginas «Inteligencia artificial para <sector>» en /ia/<slug>/. */
export const aiSectors: AiSector[] = [...iaTurismo, ...iaServicios];

export const aiBySlug = (slug: string) => aiSectors.find((a) => a.slug === slug);

/** Página de IA que corresponde a un sector de /sectores/, si la hay. */
export const aiForNiche = (niche: string) => aiSectors.find((a) => a.niche === niche);
