import characterImg from "../images/image.png";

const GRID_SIZE = 4;
let character = null;
let currentCellIndex = -1;

function createGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    grid.append(cell);
  }

  return grid.querySelectorAll(".cell");
}

function getRandomCellIndex(excludeIndex) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * GRID_SIZE * GRID_SIZE);
  } while (newIndex === excludeIndex);
  return newIndex;
}

function placeCharacterInCell(cellIndex) {
  const cells = document.querySelectorAll(".cell");
  const targetCell = cells[cellIndex];

  if (!character) {
    character = document.createElement("img");
    character.src = characterImg;
    character.alt = "Персонаж";
    character.className = "character";
  }

  targetCell.append(character);
  currentCellIndex = cellIndex;
}

function moveCharacter() {
  const newIndex = getRandomCellIndex(currentCellIndex);
  placeCharacterInCell(newIndex);
}

export function initGame() {
  createGrid();

  const startIndex = Math.floor(Math.random() * GRID_SIZE * GRID_SIZE);
  placeCharacterInCell(startIndex);

  setInterval(moveCharacter, 1500);
}
