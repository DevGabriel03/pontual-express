import { config } from '../config.js'
import { linkWhatsApp } from '../lib/whatsapp.js'

// Preenche os links que dependem dos dados da empresa (config.js).
export function iniciarContatos() {
  // RF-02: conversa com a central
  const conversa = linkWhatsApp(config.whatsapp, 'Olá! Quero saber mais sobre os serviços da Pontual Express.')
  document.querySelectorAll('[data-conversa]').forEach((link) => {
    link.href = conversa
    link.target = '_blank'
    link.rel = 'noopener'
  })

  // RF-03: ligar para a central
  document.querySelectorAll('[data-ligar]').forEach((link) => {
    link.href = `tel:${config.telefone}`
  })
  document.querySelectorAll('[data-ligar-texto]').forEach((link) => {
    link.textContent = config.telefoneVisivel
  })

  // RF-06: cidades atendidas, na lista e no formulário de diária
  document.querySelectorAll('[data-lista-cidades]').forEach((lista) => {
    lista.replaceChildren(
      ...config.cidades.map((cidade) => {
        const item = document.createElement('li')
        item.textContent = cidade
        return item
      }),
    )
  })
  document.querySelectorAll('[data-cidades]').forEach((select) => {
    select.append(...config.cidades.map((cidade) => new Option(cidade, cidade)))
  })

  // RF-04: cadastro de motoboy pelo Google Forms
  const botao = document.querySelector('[data-formulario-motoboy]')
  if (botao && config.formularioMotoboy) {
    botao.href = config.formularioMotoboy
  } else if (botao) {
    botao.removeAttribute('href')
    botao.setAttribute('role', 'link')
    botao.setAttribute('aria-disabled', 'true')
    document.querySelector('[data-formulario-aviso]')?.removeAttribute('hidden')
  }
}
