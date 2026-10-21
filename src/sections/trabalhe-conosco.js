import { config } from '../config.js'

// RF-04: cadastro de motoboy pelo Google Forms.
// Sem link configurado, o botão fica desativado com o aviso "abre em breve".
export function init() {
  const botao = document.querySelector('[data-formulario-motoboy]')
  if (!botao) return

  if (config.formularioMotoboy) {
    botao.href = config.formularioMotoboy
    return
  }

  botao.removeAttribute('href')
  botao.setAttribute('role', 'link')
  botao.setAttribute('aria-disabled', 'true')
  document.querySelector('[data-formulario-aviso]')?.removeAttribute('hidden')
}
