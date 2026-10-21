# Requisitos — Pontual Express

Base: [brief.md](brief.md). Versão 1, ainda sem código.

## Glossário (1 linha cada)
- **Backend**: a parte do site que roda num servidor e guarda dados, como um banco de cadastros ou um login.
- **Site estático**: um site só de páginas prontas, sem servidor próprio. É mais barato e mais simples.
- **CDN**: um serviço externo que entrega arquivos como fontes e scripts. Se ele cair, o site pode quebrar.
- **LCP**: o tempo até o maior elemento da primeira tela aparecer.
- **Lighthouse**: uma ferramenta gratuita do Chrome que dá notas de 0 a 100 ao site.
- **WCAG**: as regras internacionais de acessibilidade. "AA" é o nível mais exigido.
- **prefers-reduced-motion**: uma configuração do celular ou do computador para quem quer menos animação.
- **alt**: o texto que descreve uma imagem para quem usa leitor de tela.
- **LGPD**: a lei brasileira que regula como guardar e usar dados pessoais.

## 1. Escopo

**Dentro desta versão:**
- uma página única que apresenta os serviços (entrega avulsa e diária);
- pedido de entrega e conversa com a central pelo WhatsApp;
- botão para ligar para a central;
- cadastro de motoboys ("Trabalhe conosco");
- fundo animado com o motoboy.

**Fora desta versão:**
- escolha automática do motoboy;
- rastreio em tempo real;
- pagamento online;
- login de cliente;
- painel administrativo próprio;
- aplicativo de celular.

## 2. Requisitos funcionais

| ID | Descrição | Prioridade | Critério de aceitação (Dado / Quando / Então) |
|---|---|---|---|
| RF-01 | **Solicitar entrega** (ação principal). A pessoa informa nome, telefone, endereço de origem, endereço de destino e o que vai ser entregue. [precisa de backend] Alternativa: o botão abre o WhatsApp da central com a mensagem já preenchida. Coleta dado pessoal. [LGPD: confirmar] | Precisa | Dado que estou na página, quando preencho os campos e clico em "Solicitar entrega", então o WhatsApp abre com todos os dados no texto. Dado que deixo um campo obrigatório vazio, quando clico no botão, então vejo uma mensagem de erro e nada é enviado. |
| RF-02 | **Conversar pelo site** sobre os serviços. O botão de conversa fica visível em qualquer ponto da página. [precisa de backend] Alternativa: botão flutuante de WhatsApp ou um chat de serviço externo. | Precisa | Dado que estou em qualquer seção, quando clico no botão de conversa, então se abre uma conversa com a central. |
| RF-03 | **Ligar para a central**. Serve de alternativa quando não há motoboy disponível ou quando o WhatsApp falha. | Precisa | Dado que estou no celular, quando toco em "Ligar", então o discador abre com o número da central já digitado. |
| RF-04 | **Cadastro de motoboy ("Trabalhe conosco")**. Campos: nome, cidade, telefone/WhatsApp, endereço, se tem CNH categoria A e se tem moto própria. [precisa de backend] Alternativa: formulário externo que salva as respostas numa planilha privada. Coleta dado pessoal. [LGPD: confirmar] | Precisa | Dado que sou motoboy, quando envio o cadastro completo, então vejo uma confirmação e o registro aparece na planilha. Dado que deixo um campo obrigatório vazio, quando tento enviar, então o envio é bloqueado. |
| RF-05 | **Telefone, WhatsApp e endereço dos motoboys visíveis só para as 3 contas mestre.** Nenhuma página pública mostra esses dados. [precisa de backend] Alternativa: planilha compartilhada apenas com os e-mails dos 3 mestres. | Precisa | Dado que não sou mestre, quando abro o link da planilha ou procuro no site, então não vejo telefone nem endereço. Dado que sou um dos 3 mestres, quando abro a planilha com meu e-mail, então vejo todos os dados. |
| RF-06 | **Seções de serviço**: entrega avulsa, diária de motoboy para empresas e cidades atendidas, cada uma com seu botão de ação. | Precisa | Dado que vejo só a primeira tela, então leio o que a empresa faz e vejo o botão "Solicitar entrega". Dado que rolo a página, então encontro as 3 seções, cada uma com um botão que funciona. |
| RF-07 | **Fundo animado**: o motoboy anda por uma rua com casas conforme a pessoa rola a página. | Deveria | Dado que rolo a página para baixo, então o motoboy avança. Dado que rolo para cima, então ele volta. Dado que paro de rolar, então ele para. |
| RF-08 | **Pedir diária**. Campos: empresa, cidade, data ou período, e quantos motoboys. Vai para o mesmo canal da RF-01. [LGPD: confirmar] | Deveria | Dado que estou na seção "Diária", quando envio o pedido, então o WhatsApp abre com todos os campos no texto. |
| RF-09 | **Aviso de privacidade e consentimento** nos formulários das RF-01, RF-04 e RF-08. [LGPD: confirmar] | Deveria | Dado que não marquei "Li e concordo com a política de privacidade", quando tento enviar, então o envio é bloqueado. Dado que clico no link da política, então ela abre. |
| RF-10 | **Estimativa de preço** a partir da origem e do destino. Depende da regra de preço [a confirmar]. | Poderia | Dado que informo origem e destino, então vejo um valor estimado com o aviso "valor sujeito a confirmação". |
| RF-11 | **Mapa das cidades atendidas.** | Poderia | Dado que abro a seção "Cidades", então vejo cada cidade atendida no mapa ou numa lista. |
| RF-12 | **Perguntas frequentes.** | Poderia | Dado que clico numa pergunta, então a resposta aparece. Isso também deve funcionar pelo teclado. |
| RF-13 | Escolha automática do melhor motoboy disponível. [precisa de backend] | Fora | Por enquanto, a central escolhe manualmente pelo WhatsApp. |
| RF-14 | Rastreio em tempo real, pagamento online e login de cliente. [precisa de backend] | Fora | Ficam para uma versão futura. |

## 3. Requisitos não funcionais

| ID | Descrição | Prioridade | Critério de aceitação |
|---|---|---|---|
| RNF-01 | O site funciona no celular e no computador, de 375 px a 1920 px de largura. | Precisa | Dado que abro o site em 375, 768, 1280 e 1920 px, então não aparece rolagem horizontal e nenhum texto ou botão fica cortado. |
| RNF-02 | Dá para usar tudo só com o teclado. | Precisa | Dado que navego só com Tab e Enter, então chego a todos os botões e campos, e o foco fica sempre visível. |
| RNF-03 | O contraste entre o texto e o fundo é de pelo menos 4,5:1 (WCAG AA). | Precisa | Dado que meço as cores com um verificador de contraste, então todo texto passa de 4,5:1. |
| RNF-04 | Toda imagem que transmite informação tem texto alternativo (alt). | Precisa | Dado que uso um leitor de tela, então cada imagem é descrita. As imagens só decorativas são ignoradas. |
| RNF-05 | Com o prefers-reduced-motion ligado, a animação é desligada. | Precisa | Dado que ativo "reduzir movimento" no sistema, quando rolo a página, então o fundo fica parado. |
| RNF-06 | A primeira tela aparece em até 2,5 s (LCP). [proposta: limite "bom" das métricas do Google] | Deveria | Dado que rodo o Lighthouse no modo celular, então o LCP fica em até 2,5 s. |
| RNF-07 | Nota de acessibilidade no Lighthouse de pelo menos 90. [proposta] | Deveria | Dado que rodo o Lighthouse, então a nota de acessibilidade é 90 ou mais. |
| RNF-08 | O site funciona em Chrome, Edge, Safari e Firefox. | Precisa | Dado que testo as duas últimas versões de cada um, então todos os RF "Precisa" passam. |
| RNF-09 | O site funciona sem CDN: fontes, scripts e imagens ficam no próprio site. | Deveria | Dado que bloqueio os domínios externos no navegador, então a página carrega completa. Só os links de WhatsApp e do formulário externo deixam de abrir. |
| RNF-10 | O site usa HTTPS, o cadeado do navegador. | Precisa | Dado que acesso o endereço com http, então sou redirecionado para https. |

## 4. Conteúdo necessário

| Item | Quem fornece | Até quando |
|---|---|---|
| Textos: serviços, diária, "Trabalhe conosco" | Cliente, com rascunho do dev | Antes da etapa de código [a confirmar] |
| Logo e cores | Cliente | Antes da identidade visual [a confirmar] |
| Imagem ou ilustração do motoboy numa rua com casas, para a animação | Cliente ou banco de imagens com licença [a confirmar] | Antes da etapa de código |
| Ícones: WhatsApp, telefone, moto | Dev, com biblioteca de licença livre | Na etapa de código |
| Número de WhatsApp e telefone da central | Cliente | Antes da etapa de código |
| Lista de cidades atendidas | Cliente | Antes da etapa de código |
| Política de privacidade | Cliente, com revisão jurídica [LGPD: confirmar] | Antes de publicar |
| E-mails dos 3 mestres | Cliente | Antes de criar a planilha |
| Vídeo | Não previsto nesta versão | — |

## 5. Dependências externas

| Dependência | Para quê | Risco |
|---|---|---|
| WhatsApp (link de conversa) | RF-01, RF-02 e RF-08 | O número pode ser bloqueado ou trocado. Fora do horário, ninguém responde. |
| Formulário externo e planilha | RF-04 e RF-05 | Os dados podem ficar fora do Brasil (LGPD). Pode haver limite de envios. Se um mestre compartilhar o link, o acesso deixa de ser restrito. |
| Chat externo (opcional) | RF-02 | Custo mensal [a confirmar] e um script que deixa a página mais pesada. |
| Mapa | RF-11 | Deixa a página mais pesada e usa cookies, o que exige consentimento. |
| Analytics, para medir pedidos (métrica do brief) | Contar os cliques em "Solicitar entrega" | Exige aviso de cookies pela LGPD. A ferramenta é [a confirmar]. |

## 6. Riscos e perguntas em aberto
- Quais cidades e estados são atendidos? [a confirmar]
- Qual é o horário da central? O que o site mostra fora desse horário? [a confirmar]
- Qual é a regra de preço? Sem ela, a RF-10 não sai. [a confirmar]
- Quem são os 3 mestres? O que fazer quando alguém sai da equipe? [a confirmar]
- A empresa tem CNPJ? O nome foi checado no INPI (ver o brief)? [a confirmar]
- Os motoboys recrutados são CLT, MEI ou freelancers? Isso muda o texto e os campos do cadastro. [a confirmar]
- Risco: o pedido pelo WhatsApp depende de uma pessoa responder. Se a demanda crescer, a RF-13 volta a ser prioridade.
