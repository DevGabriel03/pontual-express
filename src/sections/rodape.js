import { ligarEm } from '../lib/contatos.js'

// Rodapé: telefone da central (RF-03).
export function init() {
  ligarEm(document.getElementById('rodape'))
}
