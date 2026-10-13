# Gas Guerrero

Tu gas, a un clic.

Sitio público: https://gas-guerrero.riosdigitali.chatgpt.site

Aplicación Vinext/React para solicitudes de gas LP en Aragón. Incluye cuenta, historial e imágenes generadas con IA. Stripe, calendario, tarifas y administrador están pendientes de configuración. GitHub aloja el código; la aplicación utiliza Cloudflare Workers y D1, no GitHub Pages.

## Desarrollo

```bash
npm install
npm run dev
```

La autenticación de clientes usa la integración de ChatGPT Sites. Las solicitudes requieren una base D1 y las migraciones en `drizzle/`. No contiene claves secretas ni datos de clientes.
