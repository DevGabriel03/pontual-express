# Stack — Pontual Express

Data da decisão: 2026-10-21. Base: [requisitos.md](requisitos.md) e [plano.md](plano.md).

## Decisão
**Vite com HTML, CSS e JavaScript puros, mais GSAP (ScrollTrigger) e a fonte Inter (`@fontsource/inter`).**
- O site é estático: não tem servidor nem banco de dados.
- Fica hospedado de graça no GitHub Pages.
- Nada vem de CDN (servidor externo de arquivos): tudo é instalado pelo npm e vai junto no build.

## Dependências
Versão e licença conferidas com `npm view <pacote> version license` em 2026-10-21. Ambiente: Node v24.11.1 e npm 11.6.2.

| Pacote | Versão | Licença | Para quê | Requisito que justifica |
|---|---|---|---|---|
| vite (só no desenvolvimento) | 8.3.4 | MIT | Servidor local e geração do build | Base do projeto e RNF-09 (sem CDN) |
| create-vite (usado só na criação) | 9.3.1 | MIT | Criar a estrutura inicial | Não fica no projeto |
| gsap | 3.15.0 | Standard "no charge" license ([gsap.com/standard-license](https://gsap.com/standard-license)) | Ligar a animação à rolagem e ter versões diferentes para celular e para reduced-motion | RF-07, RNF-05 e RNF-08 |
| @fontsource/inter | 5.3.0 | OFL-1.1 | Fonte Inter guardada dentro do projeto | Escolha de identidade do cliente e RNF-09. Nenhum requisito exige esta fonte |

**Licença da GSAP:** o uso comercial é gratuito e o ScrollTrigger está incluído. É proibido:
- usar a GSAP em ferramentas que concorram com as de animação do Webflow;
- remover os avisos de direitos do código.

Nenhuma dessas proibições afeta este site.

## Alternativas descartadas
| Opção | Por que ficou de fora |
|---|---|
| **A. Vite + HTML/CSS/JS puro, sem bibliotecas** | É a mais leve. Mas a animação ligada à rolagem precisaria ser escrita à mão, com mais código e mais risco de travar no celular. Fazer só com CSS (`animation-timeline`) não serve: segundo o [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline), isso ainda não é "Baseline", ou seja, não funciona em todos os navegadores. Assim a RNF-08 falharia. |
| **C. Astro + GSAP** | Precisa da mesma GSAP e ainda acrescenta uma ferramenta nova para aprender (componentes `.astro`). O site de uma página não ganha nada com isso. |

## Peso medido no build atual
- **JavaScript:** cerca de 46 KB comprimido, já com a GSAP.
- **Fonte:** cerca de 24 KB por peso em woff2. Usamos 3 pesos (400, 500 e 700).
- **Conferência sem CDN:** o build não chama nenhum domínio externo, exceto o link do WhatsApp.

## Comandos exatos de criação (numa pasta vazia)
Estes comandos foram rodados nesta sessão e funcionaram sem erro.

```bash
npm create vite@latest pontual-express -- --template vanilla --no-interactive
cd pontual-express
npm install
npm install gsap@3.15.0 @fontsource/inter@5.3.0
```

Para ver o site:

```bash
npm run dev
```

Abra http://localhost:5173/pontual-express/. O caminho `/pontual-express/` vem do `base` definido em `vite.config.js`, que é o endereço usado no GitHub Pages.

Para gerar a versão de publicação:

```bash
npm run build
```

## O que exigiria servidor no futuro
| Funcionalidade | Requisito | O que muda |
|---|---|---|
| Escolha automática do melhor motoboy | RF-13 | Exige servidor, banco de dados e app ou painel para os motoboys |
| Login dos 3 mestres no próprio site | RF-05 (hoje resolvido com a planilha) | Exige autenticação e controle de acesso |
| Rastreio em tempo real | RF-14 | Exige servidor e localização dos motoboys |
| Pagamento online | RF-14 | Exige servidor e contrato com um intermediador de pagamento |

**Impacto de qualquer item acima:**
- O site deixa de caber no GitHub Pages grátis, e passa a ter custo mensal de hospedagem [a confirmar].
- Passa a ser preciso cuidar de segurança, backups e LGPD dos dados guardados.
- O projeto passa a ter duas partes: o site e o servidor.

## Quando rever esta decisão
- Quando algum item da tabela acima entrar no escopo.
- Se a animação travar em celulares simples mesmo com o plano B do [plano.md](plano.md). Aí avaliar a opção A.
- Se o site passar de uma página para muitas, por exemplo com blog ou uma página por cidade. Aí avaliar o Astro.
- Se a licença da GSAP mudar. Conferir em [gsap.com/standard-license](https://gsap.com/standard-license).
- Se a `animation-timeline` virar Baseline. Aí a GSAP pode sair e a animação passa a ser só CSS.
- A cada atualização grande do Vite ou da GSAP: rodar `npm view <pacote> version license` de novo e atualizar a tabela.
