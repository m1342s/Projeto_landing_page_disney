document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");

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
});

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]");
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].classList.remove("shows__tabs__buttons--is-active");
  }
}

function escondeAbas() {
  ulsContainer = document.querySelectorAll("[data-tab-id]");
  for (let index = 0; index < ulsContainer.length; index++) {
    ulsContainer[index].classList.remove("shows__list--is-active");
  }
}
