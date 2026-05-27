# Publicar en Dinahosting (Hosting Profesional Linux)

Guía para sustituir WordPress por el sitio estático del repositorio COMA.

## Arquitectura en el servidor

Tu dominio apunta a la carpeta raíz web (normalmente `public_html` o `www`).

Debes subir **el contenido de la carpeta `site/`**, no la carpeta `site` entera:

```
public_html/
├── .htaccess
├── index.html
├── coma-static.js
├── coma-fixes.css
├── robots.txt
├── sitemap.xml
├── aviso-legal/
│   └── index.html
├── cookies/
│   └── index.html
├── privacidad/
│   └── index.html
└── wp-content/
    └── ...
└── wp-includes/
    └── ...
```

## Paso 1: Backup de WordPress (importante)

1. Entra al panel de Dinahosting.
2. Haz copia de seguridad completa (archivos + base de datos MySQL).
3. Guarda la copia en local antes de borrar nada.

## Paso 2: Preparar archivos en tu Mac

En el proyecto:

```bash
cd /Users/paulvictormoramorgant/Dev/COMA
npm run postprocess
```

Genera ZIP listo para subir:

```bash
./scripts/pack-dinahosting.sh
```

Se crea `dist/coma-dinahosting.zip`.

## Paso 3: Subir por FTP/SFTP o Administrador de archivos

### Opción A — FileZilla / SFTP (recomendado)

1. En Dinahosting: **Hosting → FTP/SFTP** y anota host, usuario y contraseña.
2. Conéctate al servidor.
3. Entra en `public_html` (o la carpeta raíz de `comunicacionenmallorca.com`).
4. **Borra** el WordPress antiguo (`wp-config.php`, carpetas `wp-admin`, etc.) o muévelo a una carpeta `_backup-wp/`.
5. Sube y descomprime `coma-dinahosting.zip` dentro de `public_html`.
6. Comprueba que `index.html` y `.htaccess` quedan en la raíz.

### Opción B — Administrador de archivos del panel

1. Comprime `site/` en ZIP.
2. Súbelo a `public_html`.
3. Extrae el ZIP en el panel.
4. Verifica permisos: carpetas `755`, archivos `644`.

## Paso 4: Base de datos MySQL

El sitio estático **no usa MySQL**. Puedes:

- Dejar la base de datos (no consume si no hay WordPress), o
- Eliminarla más adelante cuando confirmes que todo funciona.

## Paso 5: SSL/HTTPS

En Dinahosting:

1. **Dominios → SSL**
2. Activa certificado gratuito Let's Encrypt para `comunicacionenmallorca.com`.
3. El `.htaccess` ya fuerza HTTPS.

## Paso 6: Comprobar que funciona

Abre en el navegador:

- https://comunicacionenmallorca.com/
- https://comunicacionenmallorca.com/aviso-legal/
- https://comunicacionenmallorca.com/cookies/
- https://comunicacionenmallorca.com/privacidad/

Checklist:

- [ ] Home con carrusel e imágenes
- [ ] Menú: Soluciones, Kit Digital, Contacto
- [ ] Sin teléfono en contacto
- [ ] Año actual en el pie de página
- [ ] Banner de cookies (Aceptar / Denegar)
- [ ] Páginas legales cargan
- [ ] Candado HTTPS verde

## Paso 7: DNS (si cambiaste de servidor)

Si el dominio ya apuntaba a Dinahosting, no toques DNS.

Si migras desde otro proveedor, en Dinahosting usa los nameservers que te indiquen y espera propagación (hasta 24–48 h).

## Actualizar la web en el futuro

```bash
npm run mirror      # re-descarga desde WP si aún existe
npm run postprocess # aplica fixes
./scripts/pack-dinahosting.sh
```

Sube solo los archivos cambiados por FTP, o el ZIP completo.

## Problemas frecuentes

| Problema | Solución |
|----------|----------|
| CSS roto / web sin diseño | `wp-content` debe estar en la raíz junto a `index.html` |
| 403 / 500 | Revisa que `.htaccess` esté en `public_html` y `mod_rewrite` activo |
| Página legal 404 | La URL debe llevar barra final: `/aviso-legal/` |
| Sigue saliendo WordPress | Borra archivos viejos de WP en `public_html` |
| Imágenes no cargan | Sube carpeta `wp-content/uploads` completa |

## Soporte Dinahosting

Si `mod_rewrite` no está activo, abre ticket pidiendo activar **AllowOverride All** para tu dominio en Apache.
