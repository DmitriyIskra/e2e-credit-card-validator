import System from "../whose-system";
const system = new System();

test('get payment system mir', () => {
    const result = system.getSystem('2')

    expect(result).toBe('mir')
})

test('get payment system american-express', () => {
    const result = system.getSystem('3')

    expect(result).toBe('american-express')
})

test('get payment system visa', () => {
    const result = system.getSystem('4')

    expect(result).toBe('visa')
})

test('get payment system master-card', () => {
    const result = system.getSystem('5')

    expect(result).toBe('master-card')
})