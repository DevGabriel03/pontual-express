# Pontual Express

Site de entregas de motoboy: entregas avulsas, diárias para empresas e cadastro de motoboys.
Feito com Vite, JavaScript e CSS puros, GSAP (animação da rua) e a fonte Inter. Não usa CDN.

Documentos do projeto: [brief](docs/brief.md), [requisitos](docs/requisitos.md) e [plano](docs/plano.md).

## Rodar no computador

```bash
npm install
npm run dev
```

Abra http://localhost:5173/pontual-express/

## Trocar os dados da empresa

Todos os dados provisórios ficam em [src/config.js](src/config.js): WhatsApp, telefone, link do Google Forms e cidades.

## Publicar no GitHub Pages

O site publicado fica na branch `gh-pages`. Para atualizar:

```bash
npm run build
```

Depois, envie o conteúdo da pasta `dist/` para a branch `gh-pages`.
