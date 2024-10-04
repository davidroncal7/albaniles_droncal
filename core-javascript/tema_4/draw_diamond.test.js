

const diamond = require('./draw_diamond.js');

describe("draw_diamond with different sizes", () => {

    test('size 0', () => {
        expect(diamond.draw_diamond(0)).toBe("");
    });

    test('size 1', () => {
        expect(diamond.draw_diamond(1)).toBe("/\\\n\\/");
    });

    test('size 2', () => {
        expect(diamond.draw_diamond(2)).toBe(" /\\ \n/  \\\n\\  /\n \\/ ");
    });

});