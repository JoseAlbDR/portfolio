import View from "./View.js";

class ProjectView extends View {
  _parenElement = document.querySelector(".projects-container");

  _generateProjectMarkup(project) {
    return `
    <div class="portfolio col">
      <p class="project-title">${project.name}</p>
      <div class="card shadow-sm">
        <div class="card-img">
          <img
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            src="${project.thumbnail}"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
        <title>${project.name}</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>

        <div class="card-body">
          <p class="card-text">
            ${project.text}
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <!-- Linkedin -->
              <a
                href="${project.gitHubUrl}"
                target="_blank"
                ><button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  <img
                    src="assets/logos/github.svg"
                    class="img-fluid"
                    alt=""
                  />
                  GitHub
                </button>
              </a>
              <a href="${project.netlifyUrl}" target="_blank"
                ><button
                  type="button"
                  class="btn btn-sm btn-outline-secondary ms-2"
                >
                  <img
                    src="assets/logos/browser-chrome.svg"
                    class="img-fluid"
                    alt=""
                  />
                  Web
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  `;
  }
}

export default new ProjectView();
