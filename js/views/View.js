export default class View {
  _data;

  render(data) {
    this._data = data;

    const markup = this._generateMarkup();
    this._clearParent();
    this._parenElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clearParent() {
    this._parenElement.innerHTML = "";
  }

  _generateMarkup() {
    return !this._data.length
      ? this._clearParent()
      : this._data
          .map((project) => this._generateProjectMarkup(project))
          .join("");
  }
}
