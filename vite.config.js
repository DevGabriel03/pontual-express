import { defineConfig } from 'vite'

export default defineConfig({
  // Endereço do GitHub Pages: https://devgabriel03.github.io/pontual-express/
  base: '/pontual-express/',
  // "mpa": arquivo que não existe responde 404 (no "spa" viria o index.html com 200)
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacidade: 'privacidade.html',
      },
    },
  },
})
