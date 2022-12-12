const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All fields needs to be filled!");
  }
  console.log(
    `${email.name}: ${email.value}, ${password.name}: ${password.value}`
  );
  form.reset();
}
