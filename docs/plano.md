# Plano de implementação — Pontual Express

Base: [brief.md](brief.md) e [requisitos.md](requisitos.md).

**Stack:** Vite + JavaScript puro + CSS puro + GSAP (ScrollTrigger) + Inter via `@fontsource/inter`. Tudo pelo npm, sem CDN.
**Sem backend:** pedido, diária e conversa vão por link de WhatsApp. O cadastro de motoboy vai por Google Forms (link), com as respostas numa planilha compartilhada só com os 3 mestres.
**Hospedagem:** GitHub Pages, com repositório público.

## 1. Mapa de seções
| # | Seção | Objetivo | Ativo visual |
|---|---|---|---|
| 1 | Cabeçalho | Navegar e ligar | Logo provisório em texto |
| 2 | Primeira tela | Entender o negócio e "Solicitar entrega" | Começo da cena animada |
| 3 | Como funciona | 3 passos: pedido → central escolhe o motoboy → entrega | Ícones |
| 4 | Solicitar entrega | RF-01 | Cena ao fundo |
| 5 | Diária para empresas | RF-08 | Cena ao fundo |
| 6 | Cidades atendidas | RF-06 | — |
| 7 | Trabalhe conosco | RF-04 | — |
| 8 | Perguntas frequentes | RF-12 | — |
| 9 | Rodapé | Contato e privacidade | — |
| — | Botão flutuante | RF-02 | Ícone do WhatsApp |

## 2. Arquivos
- `index.html`: todas as seções.
- `privacidade.html`: política de privacidade (RF-09).
- `vite.config.js`: as 2 páginas e o endereço base do GitHub Pages.
- `src/config.js`: WhatsApp, telefone, link do Forms e cidades, num lugar só.
- `src/lib/whatsapp.js`: monta o link `wa.me` com a mensagem.
- `src/lib/contatos.js`: preenche os links "Ligar" e "Conversar" dentro de um elemento.
- `src/lib/formulario.js`: validação compartilhada pelos formulários.
- `src/lib/cena.js`: a animação com GSAP.
- `src/sections/<secao>.js`: um arquivo por seção, cada um exporta `init()`. São eles: cabecalho, inicio, como-funciona, pedido, diaria, cidades, trabalhe-conosco, perguntas-frequentes, rodape e conversa.
- `public/img/`, `public/frames/`, `public/fonts/`: arquivos servidos como estão. Por enquanto, vazios.
- `src/assets/cena/*.svg`: as camadas da ilustração.
- `src/styles/`: tokens, base, layout, seções e cena.

## 3. Animação
- **Técnica:** parallax com GSAP ScrollTrigger em modo *scrub*, ou seja, a animação acompanha a rolagem nos dois sentidos.
- **Cena:** camadas em SVG fixas atrás do conteúdo. O motoboy avança pela rua.
- **No celular** (até 767 px): 3 camadas e menos deslocamento.
- **Com `prefers-reduced-motion`:** a GSAP não é ativada e a cena fica parada.

## 4. Ativos
| Arquivo | Formato | Tamanho | Quem gera |
|---|---|---|---|
| ceu, casas-fundo, casas-frente, rua | SVG | 3840×1080 | Dev |
| motoboy | SVG | 400×300 | Dev |
| logo | SVG | 240×60 | Cliente (por enquanto, texto) |
| favicon | SVG | 64×64 | Dev |
| Inter 400 e 700 | woff2 | — | npm |

## 5. Passos
| # | Passo | Como testar |
|---|---|---|
| 1 | Salvar este plano | Abrir o arquivo |
| 2 | Criar o projeto Vite e copiar `docs/` | `npm run dev` abre a página |
| 3 | Criar a árvore de arquivos e o `config.js` | A página abre sem erros no Console |
| 4 | Criar os tokens e instalar a fonte | Na aba Network, nenhum pedido externo |
| 5 | Montar o cabeçalho, a primeira tela e o botão "Ligar" | Em 375 e 1920 px nada fica cortado, e o link `tel:` funciona |
| 6 | Criar as seções de serviço, cidades e rodapé | Cada seção tem seu botão |
| 7 | Montar o formulário de entrega | Campo vazio mostra erro. Completo, abre o WhatsApp com o texto |
| 8 | Montar o formulário de diária | Mesmo teste do passo 7 |
| 9 | Adicionar o consentimento e a página de privacidade | Sem marcar, o envio fica bloqueado |
| 10 | Adicionar o botão flutuante | Aparece em todas as seções e é alcançável com Tab |
| 11 | Criar Trabalhe conosco com o link do Forms | Abre numa aba nova |
| 12 | Desenhar a cena SVG parada | A cena aparece e o leitor de tela a ignora |
| 13 | Animar a cena com GSAP | Rolando para baixo, o motoboy avança. Para cima, volta |
| 14 | Ajustar celular e reduced-motion | Com "reduce motion" ligado, a cena fica parada |
| 15 | Criar as perguntas frequentes | Abrem com o teclado |
| 16 | Revisar acessibilidade e desempenho | Lighthouse: acessibilidade ≥ 90 e LCP ≤ 2,5 s |
| 17 | Gerar o build e testar nos navegadores, inclusive sem rede externa | `npm run build` e `npm run preview` |
| 18 | Publicar no GitHub Pages | O endereço `https://` abre o site |

## 6. Riscos e plano B
- **A animação trava no celular:** só o motoboy se move. Se ainda travar, a cena fica parada.
- **Os SVGs ficam pesados:** simplificar. A meta é até 200 KB [proposta].
- **Faltam dados reais:** ficam valores provisórios no `config.js`, e o site não é divulgado até eles serem trocados.

## 7. Fora desta versão
Estimativa de preço, mapa, escolha automática do motoboy, rastreio, pagamento, login, analytics, painel e vídeo.
