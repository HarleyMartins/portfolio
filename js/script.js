document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("header")
  var lastScrollPosition = 0

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY

    // Verifica se o usuário está rolando para baixo
    if (scrollPosition > lastScrollPosition) {
      header.style.backgroundColor = "#111111" // Preto
      header.style.padding = "1.2rem 0rem"
    } else {
      // Volta à cor original quando atingir o topo
      if (scrollPosition === 0) {
        header.style.backgroundColor = ""
        header.style.padding = ""
      }
    }

    // Atualiza a posição de rolagem
    lastScrollPosition = scrollPosition
  })
})
