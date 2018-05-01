var sliderItem = document.querySelectorAll(".slider__item");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var currentSlide = document.querySelector(".slider__item")
var currentSlide = 0;

prevBtn.addEventListener("click", prev);
  function prev() {
    prevBtn.style.display = "block";
    sliderItem[currentSlide].style.display = "none";
    sliderItem[--currentSlide].style.display = "block";
    if (currentSlide === 0) {
      prevBtn.disabled = "disabled";
  } else {
      prevBtn.removeAttribute = "disabled";
  }
};

nextBtn.addEventListener("click", next);
  function next() {
    nextBtn.style.display = "block";
    sliderItem[currentSlide].style.display = "none";
    sliderItem[++currentSlide].style.display = "block";
    if ( currentSlide === sliderItem.length - 1) {
      nextBtn.disabled = "disabled";
  }
};
