const bgColorText = document.querySelector(".bg-color-text");
const btn = document.querySelector(".btn");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

////////////////////////////////////////////
/* Random RGB Color */
// btn.addEventListener("click", function () {
//   const body = document.querySelector("body");

//   let randomColorArr = [];
//   for (let i = 0; i < 3; i++) {
//     randomColorArr.push(getRandomNumber());
//   }
//   const randomColor = `rgb(${randomColorArr.join(", ")})`;

//   bgColorText.style.color = randomColor;
//   bgColorText.textContent = randomColor;
//   body.style.backgroundColor = randomColor;
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * 256);
// }

////////////////////////////////////////////
/* Random Hex code Color */
btn.addEventListener("click", function () {
  const body = document.querySelector("body");
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  bgColorText.style.color = hexColor;
  bgColorText.textContent = hexColor;
  body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
