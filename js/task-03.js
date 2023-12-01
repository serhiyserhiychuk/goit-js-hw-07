const textInput = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
// textInput.addEventListener("input", (event) => {
//   span.textContent = event.currentTarget.value;
// });
function greet(name = "Anonymous") {
  if (span.textContent) {
    textInput.addEventListener("input", (event) => {
      name = event.currentTarget.value.trim();
      span.textContent = name;
    });
  }
}
greet();
