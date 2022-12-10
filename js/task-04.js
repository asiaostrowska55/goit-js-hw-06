let span = document.querySelector("#value");
let counterValue = parseInt(span.textContent);

const btnIncrease = document.querySelector('[data-action="increment"]');

const btnDecrease = document.querySelector('[data-action="decrement"]');

const decreaseValue = () => {
  counterValue -= 1;
  span.innerHTML = `<span id="value">${counterValue}</span>`;
};
const increaseValue = () => {
  counterValue += 1;
  span.innerHTML = `<span id="value">${counterValue}</span>`;
};

btnDecrease.addEventListener("click", decreaseValue);
btnIncrease.addEventListener("click", increaseValue);
