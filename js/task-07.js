const inputID = document.getElementById("font-size-control");

const minSize = inputID.getAttribute("min");
const span = document.querySelector("#text");

inputID.addEventListener("input", () => {
  span.style.fontSize = `${inputID.value}px`;
});
