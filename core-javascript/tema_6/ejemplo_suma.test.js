//Function to change sum or substract depending on symbol of first argument


const ejemplo_suma = require('./ejemplo_suma.js');

describe("sum_or_subtract()", () => {

    test('the first number is positive', () => {
        expect(ejemplo_suma.sum_or_subtract(1, 2)).toBe(3);
        expect(ejemplo_suma.sum_or_subtract(10, 27)).toBe(37);
    });

    test('the first number is negative', () => {
        expect(ejemplo_suma.sum_or_subtract(-23, 2)).toBe(-25);
        expect(ejemplo_suma.sum_or_subtract(-10, 27)).toBe(-37);
    });

    test('the first number is 0', () => {
        expect(ejemplo_suma.sum_or_subtract(0, 2)).toBe(2);
    });

    test('the first number is string', () => {
        expect(ejemplo_suma.sum_or_subtract("a", 3)).toBe("a3");
    });
});