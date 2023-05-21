export default class EffectView {
  _nav = document.querySelector(".navbar");

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

  _obsHero() {
    const bezier = document.querySelectorAll(".hero-text");
    console.log(bezier);

    const intersectionHero = function (entries) {
      const [entry] = entries;

      if (entry.isIntersecting) {
        entry.target.classList.add("bezier");
        entry.target.classList.remove("opacity-0");
        observer.unobserve(entry.target);
      }
    };
    // Blur effect in Hero Section
    const obsHero = new IntersectionObserver(intersectionHero, {
      root: null,
      threshold: 0.5,
    });

    bezier.forEach((element) => obsHero.observe(element));
  }

  _headerObserver(stickyNav) {
    const navHeight = this._nav.getBoundingClientRect().height;

    return new IntersectionObserver(stickyNav.bind(this), {
      root: null,
      threshold: 1,
      rootMargin: `+${navHeight}px`,
    });
  }

  _stickyNav(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) this._nav.classList.add("sticky");
    else this._nav.classList.remove("sticky");
  }

  _addActive(element) {
    element.classList.add("active");
    element.classList.add("underline");
  }

  _removeActive(element) {
    element.classList.remove("active");
    element.classList.remove("underline");
  }

  _activeMenuItem() {
    this._addActive(event.target);
    const siblings = document.querySelectorAll(".nav-link");
    siblings.forEach((sib) => {
      if (event.target === sib) return;
      this._removeActive(event.target);
    });
  }

  _sectionObserver(revealSection) {
    return new IntersectionObserver(revealSection.bind(this), {
      root: null,
      threshold: 0.15,
    });
  }

  _revealSection(entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    console.log(entry.target.id);

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

  showBlur() {
    this._obsHero();
  }

  // Random letters on load
  showRdmLettersOnLoad() {
    window.addEventListener("load", () => this._randomEffect());
  }

  // Random letters on mouseover
  showRdmLettersMouseOver() {
    document.querySelector(".hack").onmouseover = () => this._randomEffect();
  }

  showActiveMenu() {
    this._nav.addEventListener("click", this._activeMenuItem.bind(this));
  }

  showActiveMenuScroll() {
    const allSections = document.querySelectorAll(".section");
    const sectionObserver = this._sectionObserver(this._revealSection);
    allSections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  showStickyNav() {
    const observer = this._headerObserver(this._stickyNav);
    observer.observe(hero);
  }

  showDataType() {
    class TxtType {
      constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
      }
      tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

        const that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function () {
          that.tick();
        }, delta);
      }
    }

    window.onload = function () {
      const elements = document.getElementsByClassName("typewrite");
      for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute("data-type");
        const period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      const css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };
  }
}
