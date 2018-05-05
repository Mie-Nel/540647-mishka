var modal = document.querySelector(".modal");
var modalClose = document.querySelector(".modal__overlay");
var cardLink = document.querySelector(".card__order-link");

cardLink.addEventListener("click", function(evt) {
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
