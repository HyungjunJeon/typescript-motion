import { BaseComponent } from "./../../component.js";
export class MediaSectionInput extends BaseComponent {
    constructor() {
        super(`<form>
        <div class="form__constainer">
          <label for="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div class="form__constainer">
          <label for="url">URL</label>
          <input type="text" id="url" />
        </div>
      </form>`);
    }
    get title() {
        const element = this.element.querySelector("#title");
        return element.value;
    }
    get url() {
        const element = this.element.querySelector("#url");
        return element.value;
    }
}
