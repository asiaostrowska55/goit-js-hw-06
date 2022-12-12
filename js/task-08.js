const form = document.querySelector(".login-form");
const formEmail = form.elements.email;
const formPassword = form.elements.password;

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let elements = {
    email: formEmail.value,
    password: formPassword.value,
  };
  if (elements.email === "" || elements.password === "") {
    return alert("All fields needs to be filled!");
  }
  console.log(elements);
  form.reset();
}
