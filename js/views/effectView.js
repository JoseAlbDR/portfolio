export default class EffectView {
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Random letters on load
  rdmLettersOnLoad() {
    window.addEventListener("load", () => {
      let iterations = 0;
      const event = document.querySelector(".hack");
      const interval = setInterval(() => {
        event.textContent = event.textContent
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return event.dataset.value[index];
            }
            return this.letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        if (iterations >= event.dataset.value.length) clearInterval(interval);
        iterations += 1 / 3;
      }, 50);
    });
  }

  // Random letters on mouseover
  rdmLettersMouseOver() {
    document.querySelector(".hack").onmouseover = (event) => {
      let iterations = 0;
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return event.target.dataset.value[index];
            }
            return this.letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        if (iterations >= event.target.dataset.value.length)
          clearInterval(interval);
        iterations += 1 / 3;
      }, 50);
    };
  }
}
