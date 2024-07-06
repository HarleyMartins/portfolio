document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("header")
  var lastScrollPosition = 0

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY

    // Verifica se o usuário está rolando para baixo
    if (scrollPosition > lastScrollPosition) {
      header.style.backgroundColor = "#1f1f1f" // Preto
      header.style.padding = ""
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

const butttonDropdown = document
  .getElementById("btnDropdown")
  .addEventListener("click", showDropdown)

function showDropdown(ev) {
  ev.preventDefault()
  const dropdownContent = document.getElementById("dropdown-content")
  dropdownContent.classList.toggle("open")
}
