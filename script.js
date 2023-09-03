const colorButton = document.getElementById("colorButton");
const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff33f9", "#33fff5"];

colorButton.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
