export default class WidgetControl {
    constructor(str) {
        if(typeof(str) === 'string') {
            this.widget = document.querySelector(str);
        }
        
        this.iconsCards = this.widget.querySelectorAll('.widget__card-img-item');
        this.input = this.widget.querySelector('.widget__form-input');
        this.button = this.widget.querySelector('.widget__form-button');
        this.lastCardIcon = null;
        this.lastTypeCard = null;
    }

    // Убирает крайний символ если он не цифра и возвращает чистую строку
    clear(value) {
        value = value.split('');

        value.pop();

        return value.join('');
    }

    // возвращает введенное значение
    getValue() {
        return this.input.value;
    }

    // проверяет цифра введена  или нет
    onlyNumbers(value) {
        value = value.split('');

        value = value[value.length - 1];
        if(isNaN(parseInt(value))) {
            return false
        }
    }

    // Подсвечивает систему оплаты
    renderPaySystem(value) {
        this.lastTypeCard = value;

        for( let i = 0; i < this.iconsCards.length; i += 1) {
            if(this.iconsCards[i].matches(`.widget__card-img-${value}`)) {
            this.iconsCards[i].classList.add(`${value}_active`);

            this.lastCardIcon = this.iconsCards[i];
            }
        }
    }

    // Убирает подсветку системы оплаты 
    clearCards() {
        if(this.lastCardIcon) {
            this.lastCardIcon.classList.remove(`${this.lastTypeCard}_active`);
            this.lastCardIcon = null;
            this.lastTypeCard = null;
        }
    }


    renderInput(value) {
        console.log(value)
        if(value) {
            this.input.classList.remove('invalid');
            this.input.classList.add('valid');
        } else {
            this.input.classList.remove('valid');
            this.input.classList.add('invalid');
        }
        
    }
}