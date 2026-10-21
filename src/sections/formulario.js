// Validação compartilhada pelos formulários de pedido e de diária.
// Mostra a mensagem de erro embaixo do campo e leva o foco ao primeiro erro.

function mensagemDeErro(campo) {
  if (campo.type === 'checkbox') return 'Marque esta opção para continuar.'
  if (campo.validity.valueMissing) return 'Preencha este campo.'
  if (campo.validity.rangeUnderflow) return `O mínimo é ${campo.min}.`
  return 'Confira este campo.'
}

function limparErro(campo) {
  campo.removeAttribute('aria-invalid')
  campo.removeAttribute('aria-describedby')
  document.getElementById(`${campo.id}-erro`)?.remove()
}

function mostrarErro(campo) {
  limparErro(campo)
  const erro = document.createElement('p')
  erro.className = 'erro'
  erro.id = `${campo.id}-erro`
  erro.textContent = mensagemDeErro(campo)
  campo.setAttribute('aria-invalid', 'true')
  campo.setAttribute('aria-describedby', erro.id)
  campo.closest('.campo').append(erro)
}

// Liga um formulário: valida no envio e, se tudo estiver certo,
// chama aoEnviar com os dados preenchidos.
export function prepararFormulario(form, aoEnviar) {
  const campos = [...form.querySelectorAll('input, select, textarea')]

  campos.forEach((campo) => {
    const evento = campo.type === 'checkbox' || campo.tagName === 'SELECT' ? 'change' : 'input'
    campo.addEventListener(evento, () => {
      if (campo.checkValidity()) limparErro(campo)
    })
  })

  form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const invalidos = campos.filter((campo) => !campo.checkValidity())
    campos.forEach(limparErro)
    invalidos.forEach(mostrarErro)

    if (invalidos.length > 0) {
      invalidos[0].focus()
      return
    }

    aoEnviar(Object.fromEntries(new FormData(form)))
  })
}
