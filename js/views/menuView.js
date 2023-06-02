import View from "./View.js";

class MenuView extends View {
  /**
   * Class representing the view of the menu.
   */
  _parentElement = document.querySelector(".navbar-nav");

  /**
   * Generates the markup for a menu element.
   * @param {object} element - The menu element object.
   * @returns {string} - The HTML markup for the menu element.
   */
  _generateElementMarkup(element) {
    return `
    <li class="nav-item">
      <a
        class="nav-link active underline hover-underline-animation"
        aria-current="page"
        href="${element.href}"
        ${element.name === "Blog" ? "target='_blank'" : ""}
        >${element.name}</a
      >
    </li>
  
  `;
  }
}

export default new MenuView();
