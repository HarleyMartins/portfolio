const botaoEnviaContato = document.getElementById("botaoEnviarContato")

function capturaInformacoes(ev) {
  ev.preventDefault()
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let mensagem = document.getElementById("mensagem").value
  if (name == "" && email == "" && mensagem == "") {
    alert("Preencha todos os campos")
    return
  }

  enviaMensagem(name, email, mensagem)
}

botaoEnviaContato.addEventListener("click", capturaInformacoes)

function enviaMensagem(name, email, mensagem) {
  const informacoes = `${name} \n ${email} \n ${mensagem}`
  const notificacao = "NOVA MENSAGEM"
  const mensagemCodificada = encodeURI(informacoes)
  const phone = "+5588998415485"
  window.open(
    `https://wa.me/${phone}?text=${notificacao}%0A ${mensagemCodificada}`
  )
}
