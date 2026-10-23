import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { brotliCompressSync, gzipSync, constants } from 'node:zlib';
const root = resolve('dist');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2', '.webmanifest': 'application/manifest+json' };
// Texto comprimido una sola vez por archivo y codificación (el contenido de dist/ no cambia en caliente).
const compressible = new Set(['.html', '.css', '.js', '.json', '.xml', '.txt', '.svg', '.webmanifest']);
const packed = new Map();
const pack = (file, body, enc) => {
  const key = `${enc}:${file}`;
  if (!packed.has(key)) packed.set(key, enc === 'br' ? brotliCompressSync(body, { params: { [constants.BROTLI_PARAM_QUALITY]: 9 } }) : gzipSync(body, { level: 9 }));
  return packed.get(key);
};
http.createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  try {
    const url = new URL(req.url, 'http://localhost');
    const path = decodeURIComponent(url.pathname);
    // Use the same target as the generated redirect page, keeping the phone in site.ts.
    if (/^\/pedir\/?$/.test(path)) {
      const page = await readFile(resolve(root, 'pedir/index.html'), 'utf8');
      const target = page.match(/href="(https:\/\/wa\.me\/[^\"]+)"/)?.[1];
      if (target) { res.writeHead(302, { Location: target.replaceAll('&amp;', '&'), 'X-Robots-Tag': 'noindex' }); res.end(); return; }
    }
    let file = resolve(root, '.' + path);
    if (file !== root && !file.startsWith(root + sep)) { res.writeHead(400); res.end(); return; }
    let info = await stat(file).catch(() => null);
    if (info?.isDirectory()) {
      if (!path.endsWith('/')) { res.writeHead(301, { Location: url.pathname + '/' + url.search }); res.end(); return; }
      file = resolve(file, 'index.html');
      info = await stat(file).catch(() => null);
    }
    const found = info?.isFile();
    if (!found) file = resolve(root, '404.html');
    let body = await readFile(file);
    const accept = String(req.headers['accept-encoding'] ?? '');
    const enc = compressible.has(extname(file)) && body.length > 1024 ? (/\bbr\b/.test(accept) ? 'br' : /\bgzip\b/.test(accept) ? 'gzip' : '') : '';
    if (enc) body = pack(file, body, enc);
    res.writeHead(found ? 200 : 404, {
      ...(enc ? { 'Content-Encoding': enc } : {}),
      ...(compressible.has(extname(file)) ? { Vary: 'Accept-Encoding' } : {}),
      'Content-Type': types[extname(file)] ?? 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': found && path.startsWith('/_astro/') ? 'public, max-age=31536000, immutable' : 'public, max-age=0, must-revalidate',
      ...(!found ? { 'X-Robots-Tag': 'noindex' } : {}),
    });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch { res.writeHead(400); res.end(); }
}).listen(Number(process.env.PORT || 8080), '0.0.0.0');
