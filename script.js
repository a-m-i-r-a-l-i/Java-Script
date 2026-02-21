const increaseEl = document.querySelector(".counter_button--increase");
const counterValueEl = document.querySelector(".counter_value");
const decreasebuttonEl = document.querySelector(".counter_button--decrease");
const resetValue = document.querySelector(".counter_reset_button");
const A10_20 = document.querySelector(".counter");
const bodyA10_20 = document.querySelector("body");
const buttenA10 = document.querySelector(".counter_buttons");
const h1A10 = document.querySelector(".counter_title");

document.addEventListener("keydown", pluse);
increaseEl.addEventListener("click", pluse);
decreasebuttonEl.addEventListener("click", mines);
resetValue.addEventListener("click", function () {
  counterValueEl.textContent = "0";
  A10_20.classList.remove("counterA10_20");
  bodyA10_20.classList.remove("bodyA10_20");
  buttenA10.classList.remove("buttonA10_20");

});

function pluse() {
  const currentvalue = +counterValueEl.textContent;
  let newvalue = +currentvalue + 1;
    if(newvalue >= 20)
    {
        newvalue = 20;
    }
  counterValueEl.textContent = newvalue;

  if (newvalue > 10) {
    A10_20.classList.add("counterA10_20");
    bodyA10_20.classList.add("bodyA10_20");
    buttenA10.classList.add("buttonA10_20");
  }
  
}
function mines() {
  const currentvalue = +counterValueEl.textContent;
  const newvalue = +currentvalue - 1;
  if (newvalue >= 0) {
    counterValueEl.textContent = newvalue;
  }
  if (newvalue <= 10) {
    A10_20.classList.remove("counterA10_20");
    bodyA10_20.classList.remove("bodyA10_20");
    buttenA10.classList.remove("buttonA10_20");

  }
}
