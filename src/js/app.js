import Character from "./character.js";

document.addEventListener("DOMContentLoaded", () => {
  const field = document.querySelector(".field");
  const cells = document.querySelectorAll(".field-cell");
  let goblinIsMissed = false;
  const character = new Character(field);

  let goblinCounter = 0;
  let userCounter = 0;

  character.addCharacter();

  setInterval(() => {
    character.deleteCharacter();
    character.addCharacter();
    if (goblinIsMissed) {
      goblinCounter++;
    }
    if (goblinCounter === 5) {
      alert("You lost. Your score: " + userCounter);
      goblinCounter = 0;
      userCounter = 0;
    }
    cells.forEach((cell) => {
      if (cell.classList.contains("cell-active")) {
        cell.addEventListener("click", () => {
          if (cell.classList.contains("cell-active")) {
            userCounter++;
          }
          character.deleteCharacter();
          goblinIsMissed = false;
        })
      } else {
        goblinIsMissed = true;
      }
    });
  }, 1000);
});

