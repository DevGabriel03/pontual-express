import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'

import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/sections.css'
import './styles/cena.css'

import * as cabecalho from './sections/cabecalho.js'
import * as inicio from './sections/inicio.js'
import * as comoFunciona from './sections/como-funciona.js'
import * as pedido from './sections/pedido.js'
import * as diaria from './sections/diaria.js'
import * as cidades from './sections/cidades.js'
import * as trabalheConosco from './sections/trabalhe-conosco.js'
import * as perguntasFrequentes from './sections/perguntas-frequentes.js'
import * as rodape from './sections/rodape.js'
import * as conversa from './sections/conversa.js'
import { iniciarCena } from './lib/cena.js'

// Na mesma ordem em que aparecem na página
const secoes = [
  cabecalho,
  inicio,
  comoFunciona,
  pedido,
  diaria,
  cidades,
  trabalheConosco,
  perguntasFrequentes,
  rodape,
  conversa,
]

secoes.forEach((secao) => secao.init())
iniciarCena()
