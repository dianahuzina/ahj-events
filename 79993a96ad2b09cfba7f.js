export default class Character {
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