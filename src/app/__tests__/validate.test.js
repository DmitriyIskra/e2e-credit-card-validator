import Validate from "../validate";
const validate = new Validate();

test('validate number card - valid', () => {
    const result = validate.validateNum('4716429952877957');

    expect(result).toBe(true);
})


test('validate number card - invalid', () => {
    const result = validate.validateNum('4716324952877957');

    expect(result).toBe(false);
})

test('validate number card - empty string', () => {
    const result = validate.validateNum('');

    expect(result).toBe(false);
})
