const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const formInput = event.target;
  const email = formInput.elements.email.value;
  const password = formInput.elements.password.value;
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const filledForm = { email: email.trim(), password: password.trim() };
  console.log(filledForm);
  formInput.reset();
}
