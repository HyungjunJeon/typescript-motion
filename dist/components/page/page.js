export class PageComponent {
    constructor() {
        this.element = document.createElement("ul");
        this.element.setAttribute("class", "page");
        this.element.textContent = "This is PageComponent";
    }
    attachTo(parent, positon = "afterbegin") {
        parent.insertAdjacentElement(positon, this.element);
    }
}
