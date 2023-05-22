import View from "./View.js";

class TechsView extends View {
  /**
   * Class representing the view of technologies.
   */
  _parentElement = document.querySelector(".techs-items");

  /**
   * Generates the markup for a technology element.
   * @param {object} element - The technology element object.
   * @returns {string} - The HTML markup for the technology element.
   */
  _generateElementMarkup(element) {
    return `
    <div
      class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
    >
      <img
        src="${element.src}"
        class="img-fluid"
        alt="${element.alt}"
      />
    </div>
  
  `;
  }
}

export default new TechsView();
