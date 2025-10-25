import { defineConfig } from 'astro/config';
// Se elimina la importación de 'vercel' ya que está fallando en el entorno local.

export default defineConfig({
  // Se elimina 'output: server' y 'adapter: vercel()' para que el servidor inicie correctamente
  // y las Actions de Supabase puedan ejecutarse en modo 'hybrid'.
});
