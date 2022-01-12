import {
    LOCAL_THEME_NUMBER,
    THEME_1,
    THEME_2,
    THEME_3
} from './config.js';

class Calculator {

    _expression;
    _result;
    _themeNumber;

    analize(expression) {

        this._expression = expression;

        try {

            this._result = math.evaluate(this._expression);

        } catch (e) {

            throw new Error('Invalid expression');

        }

    }

    setThemeNumber(themeNumber) {

        this._themeNumber = themeNumber;

        this._saveTheme(themeNumber);
    }

    getThemeNumber() {
        return this._themeNumber;
    }

    getThemeName() {

        const themeNumber = this._themeNumber;

        let theme;

        switch (themeNumber) {
            case 1: theme = THEME_1; break;
            case 2: theme = THEME_2; break;
            case 3: theme = THEME_3; break;
            default: theme = THEME_1; break;
        }

        return theme;
    }

    _saveTheme(themeNumber) {
        localStorage.setItem(LOCAL_THEME_NUMBER, themeNumber);
    }

    loadTheme() {
        const themeNumber = +localStorage.getItem(LOCAL_THEME_NUMBER);
        this.setThemeNumber(themeNumber);
    }

    setExpression(value) {
        this._expression = value;
    }

    setResult(value) {
        this._result = value;
    }

    getResult() {
        return this._result;
    }

    getExpression() {
        return this._expression;
    }
}

export default new Calculator();
