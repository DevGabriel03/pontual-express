# Identidade visual — Pontual Express

Escolha: **Direção A, "Asfalto e faixa"** (2026-10-21).
Tokens em [src/styles/tokens.css](../src/styles/tokens.css). Página de conferência: `estilo.html` (só no `npm run dev`).

## Conceito
A cidade como ela é: asfalto grafite e o amarelo da sinalização de trânsito, usado com a precisão de uma faixa pintada no chão. O tom é direto, confiável e ágil (ver o brief).

## Clichê do segmento e como fugimos dele
- **O clichê em entregas:**
  - vermelho ou laranja vibrante;
  - motoboy em desenho animado;
  - linhas de velocidade e raio;
  - letras itálicas "rápidas".
- **O que fazemos no lugar:**
  - não usamos vermelho, laranja nem itálico;
  - o amarelo aparece só em pontos de ação (botão principal, faixa do logo e dos cartões), nunca como fundo inteiro;
  - a ilustração é plana, com cores da própria rua.
- **Clichês de "site feito por IA" que evitamos:**
  - degradê roxo;
  - vidro fosco (tiramos o `backdrop-filter` da primeira tela);
  - emoji como ícone;
  - sombras. A direção A não usa nenhuma: a separação vem de bordas de 1 px e da troca entre Papel e Branco.

## Paleta
| Nome | Token | Hex | Papel |
|---|---|---|---|
| Papel | `--cor-fundo` | #F6F5F1 | Fundo |
| Branco | `--cor-superficie` | #FFFFFF | Cartões, painéis e formulários |
| Asfalto | `--cor-texto` | #1C1F23 | Texto e fundos escuros (rodapé, botões escuros) |
| Concreto | `--cor-texto-sec` | #565C64 | Texto secundário |
| Faixa | `--cor-destaque` | #F2C200 | Botão principal e detalhes |
| Meio-fio | `--cor-borda` | #7A8088 | Bordas de cartões, campos e botões |
| Freio | `--cor-erro` | #B3261E | Mensagens de erro |

**Cores derivadas.** São feitas com `color-mix` a partir das cores acima, sem hex novo:
- `--cor-topo`: Papel a 94%, no fundo do cabeçalho;
- `--cor-texto-hover`: Asfalto a 85% com Branco (#3E4144), no hover dos botões escuros;
- `--cor-aviso`: Faixa a 18% com Branco (#FDF4D1), no aviso de rascunho.

`--cor-ceu` (#CFE6F7) é a cor de fundo da ilustração e não é usada em texto.

**Regras:**
- O amarelo Faixa **nunca** é cor de texto sobre fundo claro (1,5:1) e nunca leva texto branco por cima (1,68:1). Sobre ele, o texto é sempre Asfalto.
- Links ficam na cor do texto e são sempre sublinhados. A cor não é o único sinal de que algo é um link.

## Contraste (WCAG 2.x, AA)
Cálculo: razão = (L1 + 0,05) / (L2 + 0,05), sendo L a luminância relativa de cada cor. O mínimo é 4,5:1 para texto normal e 3:1 para texto grande e bordas.

| Par (frente / fundo) | Razão | Mínimo | Resultado |
|---|---|---|---|
| Asfalto / Papel (texto) | 15,16:1 | 4,5 | ✅ |
| Asfalto / Branco (texto em cartões) | 16,54:1 | 4,5 | ✅ |
| Concreto / Papel (texto secundário) | 6,19:1 | 4,5 | ✅ |
| Concreto / Branco | 6,75:1 | 4,5 | ✅ |
| **Asfalto / Faixa (botão principal)** | **9,84:1** | 4,5 | ✅ |
| Branco / Faixa (proibido) | 1,68:1 | 4,5 | ❌ não usar |
| Branco / Asfalto (botão escuro, botão de conversa) | 16,54:1 | 4,5 | ✅ |
| Branco / Asfalto 85% (hover do botão escuro) | 10,27:1 | 4,5 | ✅ |
| Papel / Asfalto (rodapé, painel escuro, selo) | 15,16:1 | 4,5 | ✅ |
| Faixa / Asfalto (botão amarelo no painel escuro) | 9,84:1 | 3 (borda) | ✅ |
| Asfalto / aviso #FDF4D1 | 14,99:1 | 4,5 | ✅ |
| Freio / Branco (erro) | 6,54:1 | 4,5 | ✅ |
| Freio / Papel | 5,99:1 | 4,5 | ✅ |
| Meio-fio / Papel (borda) | 3,65:1 | 3 | ✅ |
| Meio-fio / Branco (borda de campo e cartão) | 3,98:1 | 3 | ✅ |
| Contorno de foco Asfalto / Papel | 15,16:1 | 3 | ✅ |

## Tipografia
| Uso | Fonte | Pesos | Licença | Origem |
|---|---|---|---|---|
| Títulos, logotipo e botões | Archivo | 800 (títulos), 700 (botões) | OFL-1.1 | npm `@fontsource/archivo` 5.3.0 |
| Texto | Inter | 400 (texto), 600 (destaques) | OFL-1.1 | npm `@fontsource/inter` 5.3.0 |

As fontes são importadas em `src/main.js`, `src/privacidade.js` e `src/estilo.js`. O Vite copia os `.woff2` para o build, sem CDN. O @fontsource já declara o `@font-face` com `font-display: swap`.

**Escala (proporção 1,25):** 14 · 16 · 20 · 25 · 31 · 39 · 49 · 61 px, nos tokens `--tamanho-1` a `--tamanho-8`.
- `h1`: de 39 a 61 px;
- `h2`: de 31 a 39 px;
- `h3`: 20 px;
- texto: 16 px.

**Logotipo:** só tipográfico. É "Pontual Express" em Archivo 800, com uma faixa amarela de 4 px embaixo (classe `.logo`).

## Espaços, cantos e formas
- **Espaços:** escala de 8 px, com 4 px para ajustes finos: 4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 (`--espaco-1` a `--espaco-8`).
- **Cantos:** 4 px (`--raio`), quase retos como sinalização.
- **Sombras:** nenhuma.
- **Controles** (botões e campos): pelo menos 48 px de altura.

## Componentes
- **Botão principal:**
  - fundo Faixa, texto Asfalto em Archivo 700;
  - cantos de 4 px e altura de 48 px;
  - no hover, ganha uma borda Asfalto de 2 px.
- **Botão escuro:** fundo Asfalto e texto Branco. No hover, o fundo fica Asfalto 85%.
- **Botão claro:** fundo Branco, borda e texto Asfalto.
- **Cartão** (`.cartao`):
  - fundo Branco, borda Meio-fio de 1 px e cantos de 4 px;
  - sem sombra;
  - no topo, uma faixa amarela de 48 × 4 px.

## Direção de arte das imagens
- **Luz:** natural, de dia nublado, sem sombra dura e sem pôr do sol dramático.
- **Fundo:** ruas reais de bairro, com casas baixas, calçada e meio-fio. Sem prédios de vidro nem fundo de estúdio.
- **Enquadramento:** lateral e baixo, na altura da moto. Horizonte reto e espaço livre para texto à esquerda.
- **Materiais:** asfalto, concreto, pintura de faixa, capacete fosco, jaqueta escura com faixa refletiva e caixa de entrega amarela Faixa.
- **Proibido:** desfoque de movimento, linhas de velocidade, motoboy sorrindo para a câmera e logotipos de marcas reais.
