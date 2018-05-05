var modal = document.querySelector(".modal");
var orderBtn = document.querySelector(".product__link");
var modalClose = document.querySelector(".modal__overlay");
var cardLink = document.querySelector(".card__order-link");

orderBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal--closed");
  modal.classList.add("modal--opened");
});

modalClose.addEventListener("click", function () {
  modal.classList.remove("modal--opened");
  modal.classList.add("modal--closed");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--opened")) {
      modal.classList.remove("modal--opened");
      modal.classList.add("modal--closed");
    }
  }
});
