import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve('dist');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2', '.webmanifest': 'application/manifest+json' };
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
    const body = await readFile(file);
    res.writeHead(found ? 200 : 404, {
      'Content-Type': types[extname(file)] ?? 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': found && path.startsWith('/_astro/') ? 'public, max-age=31536000, immutable' : 'public, max-age=0, must-revalidate',
      ...(!found ? { 'X-Robots-Tag': 'noindex' } : {}),
    });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch { res.writeHead(400); res.end(); }
}).listen(Number(process.env.PORT || 8080), '0.0.0.0');
