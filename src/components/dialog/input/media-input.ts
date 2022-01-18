import { BaseComponent } from "./../../component.js"

export class MediaSectionInput extends BaseComponent<HTMLElement> {
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
      </form>`)
  }

  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement
    return element.value
  }

  get url(): string {
    const element = this.element.querySelector("#url")! as HTMLInputElement
    return element.value
  }
}
