const inputID = document.getElementById("font-size-control");
const span = document.querySelector("#text");

inputID.setAttribute("value", "16");

inputID.addEventListener("input", () => {
  span.style.fontSize = inputID.value + "px";
});
