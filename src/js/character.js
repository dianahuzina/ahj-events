export default class Character {
  constructor(element) {
    this.element = element;
  }

  deleteCharacter() {
    const cellActive = this.element.querySelector(".active");

    if (cellActive) {
      cellActive.classList.remove("active");
    }
  }

  addCharacter() {
    const cells = this.element.querySelectorAll(".field-cell");
    const number = Math.floor(Math.random() * cells.length);

    cells[number].classList.add("active");
  }
}
