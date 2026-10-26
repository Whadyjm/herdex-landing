import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5290, strictPort: true, open: false },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacidad: resolve(__dirname, 'privacidad.html'),
        eliminarCuenta: resolve(__dirname, 'eliminar-cuenta.html'),
        cuentaConfirmada: resolve(__dirname, 'cuenta-confirmada.html'),
      },
    },
  },
})
