import View from "./View.js";

class ProjectView extends View {
  /**
   * Class representing the view of projects.
   */
  _parentElement = document.querySelector(".projects-container");

  _generateButtonsMarkup(item) {
    return `
      <a
        href="${item.url}"
        target="_blank"
        ><button
          type="button"
          class="btn btn-sm btn-outline-secondary me-3"
        >
          <img
            src="${item.src}"
            class="img-fluid"
            alt="${item.alt}"
          />
          ${item.name}
        </button>
      </a>
    
    `;
  }
  /**
   * Generates the markup for a project element.
   * @param {object} element - The project element object.
   * @returns {string} - The HTML markup for the project element.
   */
  _generateElementMarkup(element) {
    return `
    <div class="portfolio col">
      <p class="element-title">${element.name}</p>
      <div class="card shadow-sm">
        <div class="card-img">
          <img
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            src="${element.thumbnail}"
            alt="${element.alt}"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
        <title>${element.name}</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>

        <div class="card-body">
          <p class="card-text">
            ${element.text}
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
            ${element.buttons
              .map((btn) => this._generateButtonsMarkup(btn))
              .join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  
  `;
  }
}

export default new ProjectView();
