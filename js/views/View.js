export default class View {
  _data;

  render(data) {
    this._data = data;

    const markup = this._generateMarkup();
    this._clearParent();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clearParent() {
    this._parentElement.innerHTML = "";
  }

  _generateSpanMarkup(item) {
    return `
    <span>${item}</span>
    `;
  }

  _generateMarkup() {
    return !this._data.length
      ? this._clearParent()
      : this._data
          .map((element) => this._generateElementMarkup(element))
          .join("");
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;

    // Clear parent
    this._clear();

    // Render markup
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
