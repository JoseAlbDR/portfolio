// Class to handle dinamic effects with eventListeners and intersectionObservers
export default class EffectView {
  _nav = document.querySelector(".navbar");

  /**
   * Generates a random effect with changing letters
   */
  _randomEffect() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;
    const event = document.querySelector(".hack");
    const interval = setInterval(() => {
      event.textContent = event.textContent
        .split("")
        .map((_, index) => {
          if (index < iterations) {
            return event.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (iterations >= event.dataset.value.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 50);
  }

  /**
   * Observes the hero section for intersection and applies a CSS class when it is intersecting
   */
  _obsHero() {
    const bezier = document.querySelectorAll(".hero-text");

    const intersectionHero = function (entries) {
      const [entry] = entries;

      if (entry.isIntersecting) {
        entry.target.classList.add("bezier");
        entry.target.classList.remove("opacity-0");
      }
    };
    // Blur effect in Hero Section
    const obsHero = new IntersectionObserver(intersectionHero, {
      root: null,
      threshold: 0.5,
    });

    bezier.forEach((element) => obsHero.observe(element));
  }

  /**
   * Returns an IntersectionObserver object for observing the header element
   * @param {Function} stickyNav - Callback function to be called when intersection occurs
   * @returns {IntersectionObserver} - The IntersectionObserver object
   */
  _headerObserver(stickyNav) {
    const navHeight = this._nav.getBoundingClientRect().height;

    return new IntersectionObserver(stickyNav.bind(this), {
      root: null,
      threshold: 1,
      rootMargin: `+${navHeight}px`,
    });
  }

  /**
   * Callback function for the sticky navigation behavior
   * @param {IntersectionObserverEntry[]} entries - Array of intersection observer entries
   */
  _stickyNav(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      this._nav.classList.add("sticky");
      this._nav.classList.add("shadow");
    } else {
      this._nav.classList.remove("sticky");
      this._nav.classList.remove - "shadow";
    }
  }

  /**
   * Adds the "active" and "underline" classes to the specified element
   * @param {HTMLElement} element - The element to add the classes to
   */
  _addActive(element) {
    element.classList.add("active");
    element.classList.add("underline");
  }

  /**
   * Removes the "active" and "underline" classes from the specified element
   * @param {HTMLElement} element - The element to remove the classes from
   */
  _removeActive(element) {
    element.classList.remove("active");
    element.classList.remove("underline");
  }

  /**
   * Callback function for handling the active menu item
   */
  _activeMenuItem() {
    this._addActive(event.target);
    const siblings = document.querySelectorAll(".nav-link");
    siblings.forEach((sib) => {
      if (event.target === sib) return;
      this._removeActive(event.target);
    });
  }

  /**
   * Returns an IntersectionObserver object for observing sections
   * @param {Function} revealSection - Callback function to be called when intersection occurs
   * @returns {IntersectionObserver} - The IntersectionObserver object
   */
  _sectionObserver(revealSection) {
    return new IntersectionObserver(revealSection.bind(this), {
      root: null,
      threshold: 0.15,
    });
  }

  /**
    Callback function for revealing sections when they intersect
    @param {IntersectionObserverEntry[]} entries - Array of intersection observer entries
  */
  _revealSection(entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section-hidden");
    const siblings = document.querySelectorAll(".nav-link");
    siblings.forEach((sib) => {
      const navHref = sib.getAttribute("href").slice(1);
      if (entry.target.id === navHref) {
        this._addActive(sib);
      } else {
        this._removeActive(sib);
      }
    });
  }

  /**
   * Initializes the blur effect in the hero section
   */
  showBlur() {
    this._obsHero();
  }

  /**
   * Shows random letters effect on page load
   */

  showRdmLettersOnLoad() {
    window.addEventListener("load", () => this._randomEffect());
  }

  /**
   * Shows random letters effect on mouseover
   */
  showRdmLettersMouseOver() {
    document.querySelector(".hack").onmouseover = () => this._randomEffect();
  }

  /**
   * Adds click event listener to the navigation menu for active item behavior
   */
  showActiveMenu() {
    this._nav.addEventListener("click", this._activeMenuItem.bind(this));
  }

  /**
   * Observes all sections and activates menu item when they intersect
   */
  showActiveMenuScroll() {
    const allSections = document.querySelectorAll(".section");
    const sectionObserver = this._sectionObserver(this._revealSection);
    allSections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /**
   * Observes the header for intersection and applies sticky navigation behavior
   */
  showStickyNav() {
    const observer = this._headerObserver(this._stickyNav);
    observer.observe(hero);
  }

  /**
   * Muestra el efecto de tipografía.
   */
  showDataType() {
    window.onload = () => {
      const elements = document.getElementsByClassName("typewrite");
      for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute("data-type");
        const period = elements[i].getAttribute("data-period");
        if (toRotate) {
          this._applyTypewriteEffect(elements[i], JSON.parse(toRotate), period);
        }
      }
      this._injectCSS();
    };
  }

  /**
   * Aplica el efecto de tipografía a un elemento específico.
   * @param {HTMLElement} el - El elemento HTML donde se aplicará el efecto.
   * @param {Array} toRotate - Arreglo de textos a rotar.
   * @param {number} period - Período de tiempo entre cambios de texto.
   * @private
   */
  _applyTypewriteEffect(el, toRotate, period) {
    let loopNum = 0;
    let txt = "";
    let isDeleting = false;

    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];

      if (isDeleting) {
        txt = fullTxt.substring(0, txt.length - 1);
      } else {
        txt = fullTxt.substring(0, txt.length + 1);
      }

      el.innerHTML = '<span class="wrap">' + txt + "</span>";

      let delta = 200 - Math.random() * 100;

      if (isDeleting) {
        delta /= 2;
      }

      if (!isDeleting && txt === fullTxt) {
        delta = period;
        isDeleting = true;
      } else if (isDeleting && txt === "") {
        isDeleting = false;
        loopNum++;
        delta = 500;
      }

      setTimeout(tick, delta);
    };

    tick();
  }

  /**
   * Inyecta la hoja de estilos CSS necesaria para el efecto de tipografía.
   * @private
   */
  _injectCSS() {
    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  }
}
