const inputID = document.querySelector("#validation-input");
const dataLength = inputID.getAttribute("data-length");

inputID.addEventListener("blur", () => {
  if (parseInt(dataLength) === inputID.value.length) {
    inputID.classList.add("valid");
    inputID.classList.remove("invalid");
  } else {
    inputID.classList.add("invalid");
    inputID.classList.remove("valid");
  }
});
