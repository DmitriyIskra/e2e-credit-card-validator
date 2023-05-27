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

        if(this.widget.lastCardIcon) {
            this.widget.clearCards();
        }

        // Получаем значение из поля
        const value = this.widget.getValue();
        // Валидируем значение из поля
        const resultValidate = this.validate.validateNum(value);
        // получаем значение какая платежная система, если найдено
        let typeSystem = this.system.getSystem(value);
        
        // Если все данные true отрисовываем иконку платежной системы
        if(typeSystem && resultValidate) {    
            this.widget.renderPaySystem(typeSystem);
        }

        // Подсвечиваем рамку поля ввода соответствующим цветом
        this.widget.renderInput(resultValidate);    
    }

    // проверка крайнего символа на цифру при вводе  
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