document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions=document.querySelectorAll("[data-faq-question]")

  const heroSection=document.querySelectorAll('.hero')
  const alturaHero=heroSection.clientHeight

  window.addEventListener('scroll',function() {
   const posicaoAtual=this.window.scrollY
   if (posicaoAtual < alturaHero) {
    ocultaElementos()
   }else{
    exibeElementos()
   }
  })

  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function (botao) {
      abaAlvo = botao.target.dataset.tabButton;
      aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeAbas();
      aba.classList.add("shows__list--is-active");
      removeBotaoAtivo();
      botao.target.classList.add("shows__tabs__buttons--is-active");
    });
  }
  for (let index = 0; index < questions.length; index++) {
    questions[index].addEventListener('click',abreOuFecha)
   }
});

function abreOuFecha(elemento){
  const classe='faq__questions__item--is-open'
 const elementoPai=elemento.target.parentNode
 elementoPai.classList.toggle(classe)
}

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]");
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].classList.remove("shows__tabs__buttons--is-active");
  }
}

function ocultaElementos() {
  const header=document.querySelector('header')
  header.classList.add("header--is-hidden")
}

function exibeElementos() {
  const header=document.querySelector('header')
  header.classList.remove("header--is-hidden")
}

function escondeAbas() {
  ulsContainer = document.querySelectorAll("[data-tab-id]");
  for (let index = 0; index < ulsContainer.length; index++) {
    ulsContainer[index].classList.remove("shows__list--is-active");
  }
}
