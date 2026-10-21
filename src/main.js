import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'

import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/sections.css'
import './styles/cena.css'

import { iniciarContatos } from './sections/conversa.js'
import { iniciarPedido } from './sections/pedido.js'
import { iniciarDiaria } from './sections/diaria.js'
import { iniciarCena } from './animation/cena.js'

iniciarContatos()
iniciarPedido()
iniciarDiaria()
iniciarCena()
