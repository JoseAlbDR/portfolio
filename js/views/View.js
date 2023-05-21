export default class View {
  _data;

  render(data) {
    this._data = data;

    const markup = this._generateMarkup();
    console.log(this._parentElement);
    this._clearParent();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clearParent() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup() {
    return !this._data.length
      ? this._clearParent()
      : this._data
          .map((element) => this._generateElementMarkup(element))
          .join("");
  }
}
