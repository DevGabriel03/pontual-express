import { config } from '../config.js'
import { linkWhatsApp } from '../lib/whatsapp.js'
import { prepararFormulario } from './formulario.js'

// RF-01: o pedido de entrega abre o WhatsApp da central com a mensagem pronta.
export function iniciarPedido() {
  const form = document.getElementById('form-pedido')
  if (!form) return

  prepararFormulario(form, (dados) => {
    const linhas = [
      'Olá! Quero solicitar uma entrega.',
      `Nome: ${dados.nome}`,
      `Telefone: ${dados.telefone}`,
      `Retirada: ${dados.origem}`,
      `Entrega: ${dados.destino}`,
      `O que vai: ${dados.item}`,
    ]
    if (dados.observacoes) linhas.push(`Observações: ${dados.observacoes}`)

    window.open(linkWhatsApp(config.whatsapp, linhas.join('\n')), '_blank', 'noopener')
  })
}
