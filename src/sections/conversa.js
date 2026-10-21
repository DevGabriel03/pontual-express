import { conversarEm } from '../lib/contatos.js'

// RF-02: botão flutuante de conversa com a central.
export function init() {
  conversarEm(document.querySelector('.conversa'))
}
