import { defineConfig } from 'vite'

export default defineConfig({
  // Endereço do GitHub Pages: https://devgabriel03.github.io/pontual-express/
  base: '/pontual-express/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacidade: 'privacidade.html',
      },
    },
  },
})
