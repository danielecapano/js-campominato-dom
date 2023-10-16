const btnPlay = document.querySelector(".btn");
const levelSelect = document.getElementById("level-select");
const gridElement = document.querySelector(".grid");

btnPlay.addEventListener("click", () => {
  const matrixGrid = parseInt(levelSelect.value ** 2);

  const bombsArray = getArrayofIntRandom(1, matrixGrid, 16);

  console.log(bombsArray);

  gridElement.innerHTML = "";

  createGrid(matrixGrid);

  const boxGrid = document.querySelectorAll(".box");
  const columns = parseInt(levelSelect.value);

  createBox(boxGrid, columns);
});

function createGrid(matrix) {
  for (let i = 0; i < matrix; i++) {
    const n = i + 1;

    const htmlContent = `<div class="box">${n}</div>`;

    gridElement.innerHTML += htmlContent;
  }
}

function createBox(parent, columnsGrid) {
  for (let i = 0; i < parent.length; i++) {
    const boxElement = parent[i];
    boxElement.style.width = `calc(100% / ${columnsGrid})`;

    boxElement.addEventListener("click", boxOnClick);
  }
}

function boxOnClick() {
  this.classList.add("bad");
  console.log(this.innerHTML);
}

function getArrayofIntRandom(min, max, number) {
  const array = [];

  while (array.length < number) {
    const n = getRandomInt(min, max);

    if (!array.includes(n)) {
      array.push(n);
    }
  }
  return array;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
