export default class View {
  /**
   * Class representing a generic view.
   */
  _data;

  /**
   * Renders the view with the provided data.
   * @param {object} data - The data to render.
   */
  render(data) {
    this._data = data;

    const markup = this._generateMarkup();
    this._clearParent();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  /**
   * Clears the parent element.
   */
  _clearParent() {
    this._parentElement.innerHTML = "";
  }

  /**
   * Generates the markup for a span element.
   * @param {string} item - The text content of the span element.
   * @returns {string} - The HTML markup for the span element.
   */
  _generateSpanMarkup(item) {
    return `
    <span>${item}</span>
    `;
  }

  /**
   * Generates the main markup for the view.
   * Must be implemented in the child class.
   * @returns {string} - The HTML markup.
   */
  _generateMarkup() {
    return !this._data.length
      ? this._clearParent()
      : this._data
          .map((element) => this._generateElementMarkup(element))
          .join("");
  }

  /**
   * Renders a spinner while data is being loaded.
   */
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
