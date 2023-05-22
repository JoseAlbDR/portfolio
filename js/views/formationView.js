import View from "./View.js";

class FormationView extends View {
  /**
   * Class representing the view of the formation section.
   */
  _parentElement = document.querySelector(".formation");

  /**
   * Generates the markup for a formation section.
   * @param {Object} item - Object containing the information for the formation section.
   * @returns {string} - The generated markup.
   */
  _generateSection(item) {
    return `
    ${item.titulation
      .map((element) => {
        return `
    <div class="col-lg-6">
      <h3 class="resume-title">${item.name}</h3>
      <div class="resume-item">
      
        <h4>${element.title}</h4>
        <h5>${element.date}</h5>
        <p><em>${element.institution}${
          element.certificate ? element.certificate : ""
        }</em></p>
        
        <p>
          ${element.text}
        </p>
      </div>
    </div>
          `;
      })
      .join("")}
    `;
  }

  /**
   * Generates the complete markup for the formation view.
   * @returns {string} - The generated markup.
   */
  _generateMarkup() {
    return `
      <div class="bg-white">
        <div class="container py-5 px-4">
          <div class="section-title mt-5">
            <h1 class="hero-text display-5 fw-bold lh-1 mb-3 lh-base">
              ${this._data[0].resumen.title
                .split(" ")
                .map((element) => this._generateSpanMarkup(element))
                .join("")}
            </h1>
            <p class="lead">
              ${this._data[0].resumen.text}
            </p>
          </div>
        </div>
      </div>
      <div class="container py-5 px-4">
        <div class="row">
          ${this._generateSection(this._data[0].education)}
          ${this._generateSection(this._data[0].formation)}

        </div>

  
  `;
  }
}

export default new FormationView();
