import { config } from '../config.js'
import { linkWhatsApp } from './whatsapp.js'

// RF-03: preenche os links "Ligar" (e o número visível) dentro de raiz.
export function ligarEm(raiz) {
  raiz?.querySelectorAll('[data-ligar]').forEach((link) => {
    link.href = `tel:${config.telefone}`
  })
  raiz?.querySelectorAll('[data-ligar-texto]').forEach((link) => {
    link.textContent = config.telefoneVisivel
  })
}

// RF-02: preenche os links de conversa com a central dentro de raiz.
// Aceita o próprio link como raiz (caso do botão flutuante).
export function conversarEm(raiz) {
  if (!raiz) return
  const href = linkWhatsApp(config.whatsapp, 'Olá! Quero saber mais sobre os serviços da Pontual Express.')
  const links = raiz.matches('[data-conversa]') ? [raiz] : [...raiz.querySelectorAll('[data-conversa]')]
  links.forEach((link) => {
    link.href = href
    link.target = '_blank'
    link.rel = 'noopener'
  })
}
