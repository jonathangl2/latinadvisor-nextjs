/**
 * Helper para manejar URLs dinámicas
 * Usa las variables de entorno automáticamente
 */

// ✅ Base path desde variables de entorno
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

/**
 * Obtiene la URL completa para assets (imágenes, CSS, JS)
 * @param path - Ruta relativa (ej: "/assets/images/logo.png")
 * @returns URL completa con base path
 */
export function getAssetUrl(path: string): string {
  // Asegura que el path empiece con /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Obtiene solo el base path (útil para Links internos)
 * Next.js ya maneja esto automáticamente con <Link>
 * @param path - Ruta relativa
 * @returns Ruta con base path
 */
export function getRoutePath(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}

/**
 * Verifica si estamos en producción
 */
export const isProd = process.env.NODE_ENV === "production";