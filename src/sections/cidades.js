import { config } from '../config.js'
import { conversarEm } from '../lib/contatos.js'

// RF-06: cidades atendidas, na lista e no formulário de diária.
export function init() {
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

  conversarEm(document.getElementById('cidades'))
}
