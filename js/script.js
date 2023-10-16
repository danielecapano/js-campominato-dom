const btnPlay = document.querySelector(".btn");
const levelSelect = document.getElementById("level-select");
const gridElement = document.querySelector(".grid");

btnPlay.addEventListener("click", () => {
  const matrixGrid = parseInt(levelSelect.value ** 2);

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
  this.classList.add("selected");
  console.log(this.innerHTML);
}
