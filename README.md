# Gas Guerrero

**Tu gas, a un clic.**

Web pública: https://gas-guerrero.riosdigitali.chatgpt.site

Aplicación React/Vinext para solicitudes de gas LP en Aragón, con cuenta, historial, panel e imágenes generadas con IA.

## Desarrollo

```bash
npm install
npm run dev
```

Servidor Cloudflare Workers y base D1; migraciones en `drizzle/`. Autenticación mediante ChatGPT Sites. GitHub aloja el código; el sitio completo no se ejecuta directamente en GitHub Pages.

## Pendiente para operación comercial

Stripe, calendario del dueño, precios, ubicación exacta de la base y `ADMIN_USER_ID` (variable de entorno protegida). Las solicitudes se guardan como pendientes; no se cobran ni confirman entregas automáticamente.

No se incluyen secretos, datos de clientes, historial Git interno ni identificador del proyecto de hosting. Imágenes optimizadas en `public/images/`.
