export class PageComponent {
  private element: HTMLUListElement
  constructor() {
    this.element = document.createElement("ul")
    this.element.setAttribute("class", "page")
    this.element.textContent = "This is PageComponent"
  }

  attachTo(parent: HTMLElement, positon: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(positon, this.element)
  }
}
