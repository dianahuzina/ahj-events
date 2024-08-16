import Character from "./character.js";

document.addEventListener("DOMContentLoaded", () => {
  const field = document.querySelector(".field");
  const cells = document.querySelectorAll(".field-cell");
  const userScore = document.querySelector(".user-score-number");
  const goblinScore = document.querySelector(".goblin-score-number");
  const character = new Character(field);

  let goblinCounter = 0;
  let userCounter = 0;
  let flag = false;

  cells.forEach(cell => {
    cell.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) {
        userCounter++;
      } else {
        goblinCounter++;
      } 
      flag = true;
    });
  });

  setInterval(() => {
    character.deleteCharacter();
    character.addCharacter();

    if (flag === false) goblinCounter++;
    
    userScore.textContent = `${userCounter}`;
    goblinScore.textContent = `${goblinCounter}`;

    if (goblinCounter >= 5) {
      alert("You lost. Your score: " + userCounter);
      goblinCounter = 0;
      userCounter = 0;
    }

    flag = false;
  }, 1000);
});

