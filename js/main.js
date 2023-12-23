var elSlider = document.querySelector(".slider");
var elItems = document.querySelectorAll(".slider__items");
var count = 0;
console.log(elSlider.lenght);
function fnNext() {
  count = count + 1;
  if (count == 4) {
    count = 0;
  }

  elSlider.style.transform = `translateX(-${1720 * count}px)`;
}
function fnPrevious() {
  count = count - 1;
  if (count == -1) {
    count = 3;
  }

  elSlider.style.transform = `translateX(-${1720 * count}px)`;
}
