var modal = document.querySelector(".modal");
var modalClose = document.querySelector(".modal__overlay");
var cardLink = document.querySelectorAll(".card__order-link");

if ( cardLink && modal ) {
  for (var i = 0; i < cardLink.length; i++) {
    cardLink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal--opened");
    });
  }
}

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
