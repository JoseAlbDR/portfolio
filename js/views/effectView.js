export default class EffectView {
  _letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  _randomEffect() {
    let iterations = 0;
    const event = document.querySelector(".hack");
    const interval = setInterval(() => {
      event.textContent = event.textContent
        .split("")
        .map((_, index) => {
          if (index < iterations) {
            return event.dataset.value[index];
          }
          return this._letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (iterations >= event.dataset.value.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 50);
  }
  // Random letters on load
  showRdmLettersOnLoad() {
    window.addEventListener("load", () => this._randomEffect());
  }

  // Random letters on mouseover
  showRdmLettersMouseOver() {
    document.querySelector(".hack").onmouseover = () => this._randomEffect();
  }

  _obsHero() {
    const bezier = document.querySelector(".hero-text");
    const intersectionHero = function (entries) {
      const [entry] = entries;
      if (entry.isIntersecting) {
        bezier.classList.add("bezier");
        bezier.classList.remove("opacity-0");
        // console.log(bezier.style);
      }
    };
    // Blur effect in Hero Section
    const obsHero = new IntersectionObserver(intersectionHero, {
      root: null,
      threshold: 0.5,
    });

    obsHero.observe(bezier);
  }

  showHero() {
    this._obsHero();
  }
}
