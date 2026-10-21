import { config } from '../config.js'
import { linkWhatsApp } from '../lib/whatsapp.js'
import { prepararFormulario } from '../lib/formulario.js'

function formatarData(iso) {
  const [ano, mes, dia] = iso.split('-')
  return `${dia}/${mes}/${ano}`
}

// RF-08: o pedido de diária vai pelo mesmo canal do pedido de entrega.
export function init() {
  const form = document.getElementById('form-diaria')
  if (!form) return

  prepararFormulario(form, (dados) => {
    const linhas = [
      'Olá! Quero contratar diária de motoboy.',
      `Empresa: ${dados.empresa}`,
      `Nome: ${dados.nome}`,
      `Telefone: ${dados.telefone}`,
      `Cidade: ${dados.cidade}`,
      `A partir de: ${formatarData(dados.inicio)}`,
      `Período: ${dados.periodo}`,
      `Motoboys: ${dados.quantidade}`,
    ]
    if (dados.observacoes) linhas.push(`Observações: ${dados.observacoes}`)

    window.open(linkWhatsApp(config.whatsapp, linhas.join('\n')), '_blank', 'noopener')
  })
}
