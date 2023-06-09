import View from "./View.js";

class FooterView extends View {
  _parentElement = document.querySelector(".footer");

  /**
   * Generates the markup for a social item.
   * @param {object} item - The social item data.
   * @returns {string} - The HTML markup for the social item.
   */
  _generateSocialMarkup(item) {
    return `
      <li class="ms-3">
        <a
          class="text-body-secondary"
          href="${item.href}"
          target="_blank"
          ><img
            src="${item.src}"
            height="30px"
            width="30px"
            class="img-fluid"
            alt=""
        /></a>
      </li>
    `;
  }

  /**
   * Generates the markup for a menu item.
   * @param {object} item - The menu item data.
   * @returns {string} - The HTML markup for the menu item.
   */
  _generateMenuMarkup(item) {
    return `
    <li class="nav-item">
        <a
          href="${item.href}"
          ${item.name === "Blog" ? "target='_blank'" : ""}
          class="nav-link footer-text fs-5 px-2 hover-underline-animation"
          >${item.name}</a
        >
    `;
  }

  /**
   * Generates the main markup for the footer view.
   * @returns {string} - The HTML markup.
   */
  _generateMarkup() {
    return `
    <div class="d-flex border-bottom justify-content-around">
      <ul class="nav col-md-4 list-unstyled d-flex mt-2">
        ${this._data[0].social
          .map((element) => this._generateSocialMarkup(element))
          .join("")}
      </ul>

      <ul
        class="nav d-flex justify-content-evenly pb-3 mb-3 align-items-center"
      >
        ${this._data[0].menu
          .map((element) => this._generateMenuMarkup(element))
          .join("")}
      </ul>
    </div>
  <p class="text-center fs-4">${this._data[0].copyright}</p>
  
  `;
  }
}

export default new FooterView();
