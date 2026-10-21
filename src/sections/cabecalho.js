import { ligarEm } from '../lib/contatos.js'

// Cabeçalho: botão "Ligar" (RF-03).
export function init() {
  ligarEm(document.getElementById('cabecalho'))
}
