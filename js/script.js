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

const buttonLight = document
  .getElementById("btnLight")
  .addEventListener("click", modoClaro)

function modoClaro() {
  header.style.backgroundColor = "#FFFF"
  const h1 = document.querySelectorAll("h1").forEach((item) => {
    item.style.color = "#000"
  })
  const h2 = document.querySelectorAll("h2").forEach((item) => {
    item.style.color = "#000"
  })

  const h3 = document.querySelectorAll("h3").forEach((item) => {
    item.style.color = "#000"
  })

  const p = document.querySelectorAll("p").forEach((item) => {
    item.style.color = "#000"
  })

  const headerLinks = document
    .querySelectorAll(".header__links__link")
    .forEach((item) => {
      item.style.color = "#000"
    })

  const sectionInicio = document.getElementById("inicio")
  sectionInicio.style.backgroundColor = "#f4fcff"

  const sectionSobre = document.getElementById("sobre")
  sectionSobre.style.backgroundColor = "#FFFFFF"

  const sectionProjetos = document.getElementById("projetos")
  sectionProjetos.style.backgroundColor = "#f4fcff"

  const sectionContato = document.getElementById("contato")
  sectionContato.style.backgroundColor = "#FFFFFF"

  const footer = document.querySelector("footer")
  footer.style.backgroundColor = "#f9fdff"

  const inicioCard = document.querySelector(".inicio__card")
  inicioCard.style.backgroundColor = "#FFF"
  inicioCard.style.border = "0.5px solid #66c190"

  const cardProjetos = document
    .querySelectorAll(".projetos__cards__card")
    .forEach((item) => {
      item.style.backgroundColor = "#FFFF"
      item.style.border = "none"
    })

  const formularioContato = document.querySelector(".formulario")
  formularioContato.style.backgroundColor = "#f4fcff"

  const formularioLabel = document.querySelectorAll("label").forEach((item) => {
    item.style.color = "#000"
  })

  const formularioInput = document
    .querySelectorAll(".formulario__name > input, .formulario__email > input")
    .forEach((item) => {
      item.style.backgroundColor = "#FFFFFF"
      item.style.border = "none"
      item.style.color = "#000"
    })

  const formularioTextarea = document.querySelector("textarea")
  formularioTextarea.style.background = "#FFF"
  formularioTextarea.style.border = "none"

  const footerRedes = document
    .querySelectorAll(".footer__content__redes__a > i")
    .forEach((item) => {
      item.style.color = "#000"
    })
}

const formularioButton = document.querySelector(".formulario__submitbtn")
formularioButton.style.backgroundColor = "#66c190"
