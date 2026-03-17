import characterImg from "../images/image.png";

export function initGame() {
  const gameArea = document.getElementById("game-area");

  const character = document.createElement("div");
  character.className = "character";
  character.style.left = "365px";
  character.style.top = "265px";

  const img = document.createElement("img");
  img.src = characterImg;
  img.alt = "Персонаж";
  character.appendChild(img);

  gameArea.appendChild(character);

  let isDragging = false;
  let startX, startY, initialLeft, initialTop;

  character.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = character.offsetLeft;
    initialTop = character.offsetTop;
    character.style.transition = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    let newLeft = initialLeft + dx;
    let newTop = initialTop + dy;

    const maxX = gameArea.clientWidth - character.clientWidth;
    const maxY = gameArea.clientHeight - character.clientHeight;

    newLeft = Math.max(0, Math.min(newLeft, maxX));
    newTop = Math.max(0, Math.min(newTop, maxY));

    character.style.left = `${newLeft}px`;
    character.style.top = `${newTop}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    character.style.transition = "transform 0.1s";
  });

  const instructions = document.createElement("div");
  instructions.className = "instructions";
  instructions.textContent = "Перетащи персонажа мышью";
  gameArea.appendChild(instructions);
}
