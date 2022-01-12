export class ImageComponent {
    constructor() {
        this.element = document.createElement("div");
        this.element.setAttribute("class", "div");
        this.element.innerHTML = `
        <image src=${"https://picsum.photos/200"} alt="image"></image>
        <p>My Imgae</p>
    `;
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
