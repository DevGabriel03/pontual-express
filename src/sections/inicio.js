import { ligarEm } from '../lib/contatos.js'

// Primeira tela: botão "Ligar para a central" (RF-03).
export function init() {
  ligarEm(document.getElementById('inicio'))
}
