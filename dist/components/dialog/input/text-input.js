import { BaseComponent } from "./../../component.js";
export class TextSectionInput extends BaseComponent {
    constructor() {
        super(`<form>
        <div class="form__constainer">
          <label for="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div class="form__constainer">
          <label for="body">Body</label>
          <textarea type="text" row="3" id="body"></textarea>
        </div>
      </form>`);
    }
    get title() {
        const element = this.element.querySelector("#title");
        return element.value;
    }
    get body() {
        const element = this.element.querySelector("#body");
        return element.value;
    }
}
