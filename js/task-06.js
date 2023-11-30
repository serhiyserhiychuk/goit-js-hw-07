function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const box = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
createBtn.addEventListener("click", () => {
  createBoxes(+input.value);
});
function createBoxes(amount) {
  if (amount >= input.min && amount <= input.max) {
    box.replaceChildren();
    for (let i = 1; i <= amount; i++) {
      const div = document.createElement("div");
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = "20px";
      div.style.height = "20px";
      div.style.width = parseInt(div.style.width) + 10 * i + "px";
      div.style.height = parseInt(div.style.height) + 10 * i + "px";
      box.appendChild(div);
    }
    input.value = "";
  }
}
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
function destroyBoxes() {
  box.replaceChildren();
}
