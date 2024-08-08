/******/ (function() { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/character.js
class Character {
  constructor(element) {
    this.element = element;
  }
  deleteCharacter() {
    const cellActive = this.element.querySelector(".cell-active");
    const characterImage = this.element.querySelector(".character");
    if (cellActive && characterImage) {
      cellActive.classList.remove("cell-active");
      characterImage.remove();
    }
  }
  addCharacter() {
    const cells = this.element.querySelectorAll(".field-cell");
    const image = document.createElement("img");
    const number = Math.floor(Math.random() * cells.length);
    for (let cell of cells) {
      if (cell.dataset.id === number.toString()) {
        cell.classList.add("cell-active");
        image.classList.add("character");
        image.src = '../img/goblin.png';
        cell.appendChild(image);
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

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
    cells.forEach(cell => {
      if (cell.classList.contains("cell-active")) {
        cell.addEventListener("click", () => {
          if (cell.classList.contains("cell-active")) {
            userCounter++;
          }
          character.deleteCharacter();
          goblinIsMissed = false;
        });
      } else {
        goblinIsMissed = true;
      }
    });
  }, 1000);
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map