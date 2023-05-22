import View from "./View.js";

// About Section
class AboutView extends View {
  _parentElement = document.querySelector(".about-items");

  /**
   * Generates the HTML markup for a view element
   * @param {Object} element - Object containing the element data
   * @returns {string} - The generated HTML markup for the element
   */
  _generateElementMarkup(element) {
    return `
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="${element.imageSrc}"
          class="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      <div class="col-lg-6">
        <h1 class="asdf hero-text display-5 fw-bold lh-1 mb-3 lh-base opacity-0">
        ${element.title
          .split(" ")
          .map((item) => this._generateSpanMarkup(item))
          .join("")}
        </h1>

        <p class="lead">
          ${element.text}
        </p>
      </div>
  
  `;
  }
}

export default new AboutView();
