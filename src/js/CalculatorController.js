import view from './CalculatorView.js';
import model from './Calculator.js';

class CalculatorController {

    _controlKeyPress(keyPressed) {

        switch (keyPressed) {
            case 'reset': this._handlerReset(); break;
            case 'del': this._handlerDelete(); break;
            case '=': this._handlerEqual(); break;
            default: view.renderExpression(keyPressed); this._handlerAnalize(); break;
        }

    }

    _controlThemeToggler(themeNumber) {

        model.setThemeNumber(themeNumber);

        view.renderTheme(model.getThemeName());
    }

    _handlerAnalize() {
        try {

            model.analize(view.getExpression());

            view.renderResult(model.getResult());

        } catch (e) {

            view.renderResult('');

        }
    }

    _handlerDelete() {
        view.delete();
        this._handlerAnalize();
    }

    _handlerReset() {
        model.setExpression('');
        model.setResult('');
        view.setExpression(model.getExpression());
        view.renderResult(model.getResult());
    }

    _handlerEqual() {
        model.setExpression(model.getResult());
        model.setResult('');
        view.setExpression(model.getExpression());
        view.renderResult(model.getResult());
    }

    _handerTheme() {
        model.loadTheme();
        view.renderTheme(model.getThemeName());
        view.setTogglerPosition(model.getThemeNumber());
    }

    init() {
        view.addHandlerKeyPress(this._controlKeyPress.bind(this));
        view.addHandlerThemeToggler(this._controlThemeToggler.bind(this));
        this._handerTheme();
    }
}

new CalculatorController().init();


