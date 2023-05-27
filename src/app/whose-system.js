export default class System {
    constructor() {
        this.systems = ['mir', 'american-express', 'visa', 'master-card'];
    }

  
    // Возвращаем строку с системой соответственно индексу, индекс соответствует принятому стандарту соотношения цифры к системе оплаты
    getSystem(value) {
        value = value.split('');

        let num = value.shift();

        if(+num >=2 && +num <= 5) {
            return this.systems[+num - 2];
        }
    }
}