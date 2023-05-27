export default class AppControl {
    constructor(WidgetControl, Validate, System) {
        this.widget = WidgetControl;
        this.validate = Validate;
        this.system = System;
    }

    registerEvents() {
        this.widget.button.addEventListener('click', this.clickValidate.bind(this));
        this.widget.input.addEventListener('input', this.validateOnlyNumbers.bind(this));
        this.widget.input.addEventListener('input', this.resetIconsCard.bind(this));
    } 
   
    // действия по клику на кнопку
    clickValidate(e) {
        e.preventDefault();

        const value = this.widget.getValue();

        let typeSystem = this.system.getSystem(value);

        if(typeSystem) {
            this.widget.renderPaySystem(typeSystem)
        }
    }

    // проверка крайнего символа при вводе на цифру 
    validateOnlyNumbers() {
        let value = this.widget.getValue();

        // Проверяем является ли крайнее введенное значение цифрой
        if(this.widget.onlyNumbers(value) === false) {
            value = this.widget.clear(value);
            this.widget.input.value = value;
        }
    }

    resetIconsCard() {
        let value = this.widget.getValue();

        if(value.length === 0) {
            this.widget.clearCards();
        }
    }
}