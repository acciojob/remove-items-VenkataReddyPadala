//your JS code here. If required.
const selectList = document.querySelector("#colorSelect");
const input = document.querySelector("input");
let colors = ["Red", "Green", "White", "Black"];

function renderList() {
  selectList.innerHTML = colors
    .map((color) => {
      return `<option>${color}</option>`;
    })
    .join("");
}

input.addEventListener("click", () => {
  const value = selectList.value;
  colors = colors.filter((color) => color != value);
  renderList();
});

renderList();
