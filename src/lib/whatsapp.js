// Monta o link que abre uma conversa no WhatsApp com a mensagem já escrita.
export function linkWhatsApp(numero, mensagem) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
}
