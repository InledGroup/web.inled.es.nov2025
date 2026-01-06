import { defineMiddleware } from 'astro:middleware';
import redirectsData from './redirects.json';

// Lista blanca de dominios permitidos para redirecciones
const ALLOWED_DOMAINS = [
  'inled.es',
  'apps.inled.es',
  'hosted.inled.es',
  'start.inled.es',
  'mdpdf.inled.es',
  'inlinked.inled.es',
  'inmd.inled.es'
];

/**
 * Valida que una URL sea segura para redirección
 * @param targetUrl - URL a validar
 * @returns true si la URL es segura, false en caso contrario
 */
function isSecureRedirect(targetUrl: string): boolean {
  try {
    const url = new URL(targetUrl);

    // Solo permitir HTTP/HTTPS
    if (!['http:', 'https:'].includes(url.protocol)) {
      console.warn(`[Security] Blocked redirect with invalid protocol: ${url.protocol}`);
      return false;
    }

    // Validar que el dominio esté en la lista blanca
    const hostname = url.hostname;
    const isAllowed = ALLOWED_DOMAINS.some(domain =>
      hostname === domain || hostname.endsWith(`.${domain}`)
    );

    if (!isAllowed) {
      console.warn(`[Security] Blocked redirect to unauthorized domain: ${hostname}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error('[Security] Invalid URL format:', targetUrl);
    return false;
  }
}

/**
 * Sanitiza un path para prevenir path traversal
 * @param path - Path a sanitizar
 * @returns Path sanitizado
 */
function sanitizePath(path: string): string {
  // Remover secuencias de path traversal
  const cleaned = path
    .replace(/\.\./g, '') // Remover ..
    .replace(/\/\//g, '/') // Normalizar slashes dobles
    .replace(/^\/+/, ''); // Remover slashes iniciales

  // Detectar intentos de path traversal
  if (path !== cleaned) {
    console.warn(`[Security] Path traversal attempt detected: ${path} -> ${cleaned}`);
  }

  return cleaned;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Regla 1: Redirigir /upload/* a hosted.inled.es/*
  if (pathname.startsWith('/upload/')) {
    const elemento = pathname.replace('/upload/', '');

    // Sanitizar el path para prevenir ataques
    const sanitizedElement = sanitizePath(elemento);

    // Validar que no esté vacío después de sanitizar
    if (!sanitizedElement) {
      console.warn(`[Security] Empty path after sanitization from: ${pathname}`);
      return next();
    }

    const targetUrl = `https://hosted.inled.es/${sanitizedElement}`;

    // Validar que la URL de destino sea segura
    if (!isSecureRedirect(targetUrl)) {
      return next();
    }

    return Response.redirect(targetUrl, 301);
  }

  // Regla 2: Buscar en la lista de redirecciones personalizadas
  const redirects = redirectsData.redirects as Record<string, string>;
  const redirectTarget = redirects[pathname];
  if (redirectTarget) {
    // Validar que la URL de destino sea segura
    if (!isSecureRedirect(redirectTarget)) {
      console.error(`[Security] Blocked unsafe redirect from ${pathname} to ${redirectTarget}`);
      return next();
    }

    return Response.redirect(redirectTarget, 301);
  }

  // Si no hay redirección, continuar con la solicitud normal
  return next();
});
