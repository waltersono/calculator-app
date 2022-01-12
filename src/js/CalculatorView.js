class CalculatorView {
  _containerToggler = document.querySelector(".calculator__theme-toggler");
  _containerNumber = document.querySelector(".calculator__number-container");
  _inputNumber = document.querySelector(".calculator__display-input");
  _labelResult = document.querySelector(".calculator__display-result");
  _themeNumber = 1;
  _toggler = document.querySelector(".calculator__theme-pointer");

  addHandlerThemeToggler(handler) {
    this._containerToggler.addEventListener("click", (e) => {
      document
        .querySelector(`.calculator__theme-pointer--${this._themeNumber}`)
        .classList.remove(`calculator__theme-pointer--${this._themeNumber}`);

      if (this._themeNumber === 3) {
        this._themeNumber = 1;
      } else {
        this._themeNumber++;
      }

      this._toggler.classList.add(
        `calculator__theme-pointer--${this._themeNumber}`
      );

      handler(this._themeNumber);
    });
  }

  renderTheme(theme) {
    document.body.setAttribute("class", theme);
  }

  setTogglerPosition(themeNumber) {
    document
      .querySelector(".calculator__theme-pointer--1")
      .classList.remove(".calculator__theme-pointer--1");

    this._themeNumber = themeNumber;

    this._toggler.classList.add(
      `calculator__theme-pointer--${this._themeNumber}`
    );
  }

  addHandlerKeyPress(handler) {
    this._containerNumber.addEventListener("click", (e) => {
      this.keyPressed(e, handler);
    });
  }

  keyPressed(e, handler) {
    const btn = e.target.closest(".calculator__btn");

    if (!btn) return;

    const keyPressed = btn.textContent;

    handler(keyPressed);
  }

  setExpression(value) {
    this._inputNumber.value = value;
  }

  renderExpression(value) {
    this._inputNumber.value += value + "";
  }

  getExpression() {
    return this._inputNumber.value;
  }

  renderResult(result) {
    this._labelResult.value = result;
  }

  getResult() {
    return this._labelResult.value;
  }

  delete() {
    this._inputNumber.value = this._inputNumber.value.substring(
      0,
      this._inputNumber.value.length - 1
    );
  }
}

export default new CalculatorView();
