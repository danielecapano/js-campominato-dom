const btnPlay = document.querySelector(".btn");
const levelSelect = document.getElementById("level-select");
const gridElement = document.querySelector(".grid");

btnPlay.addEventListener("click", () => {
  const matrixGrid = parseInt(levelSelect.value ** 2);
  const bombsArray = getArrayofIntRandom(1, matrixGrid, 16);
  console.log(bombsArray);

  // console.log(bombsArray);

  gridElement.innerHTML = "";

  createGrid(matrixGrid);

  const boxGrid = document.querySelectorAll(".box");
  const columns = parseInt(levelSelect.value);

  createBox(boxGrid, columns, bombsArray, matrixGrid);
});

function createGrid(matrix) {
  for (let i = 0; i < matrix; i++) {
    const n = i + 1;

    const htmlContent = `<div class="box">${n}</div>`;

    gridElement.innerHTML += htmlContent;
  }
}

function createBox(parent, columnsGrid, bombsArray, matrixGrid) {
  let counter = 0;

  for (let i = 0; i < parent.length; i++) {
    const boxElement = parent[i];
    boxElement.style.width = `calc(100% / ${columnsGrid})`;
    gridElement.classList.remove("noclick");

    boxElement.addEventListener("click", function () {
      let isNumberFoud = false;
      for (let i = 0; i < bombsArray.length; i++) {
        const bomb = bombsArray[i];

        const numberBox = parseInt(boxElement.innerHTML);

        if (numberBox === bomb) {
          isNumberFoud = true;
        }
      }

      if (counter === matrixGrid - 16) {
        console.log(counter);

        console.log("Complimenti hai vinto");
      } else if (!isNumberFoud) {
        boxElement.classList.add("good");
        boxElement.classList.add("noclick");
        counter++;
      } else {
        boxElement.classList.add("bad");
        gridElement.classList.add("noclick");
        console.log("Mi dispiace, hai perso");
      }
    });
  }
}

// function boxOnClick() {
//   this.classList.add("bad");
//   console.log(this.innerHTML);
// }

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

function boxOnClick(array) {
  for (let i = 0; i < array; i++) {
    const bomb = array[i];
    if (this.innerHTML === bomb) {
      this.classList.add("bad");
    } else {
      this.classList.add("good");
    }
  }
}
