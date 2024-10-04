/**/

let price_iva = require("./5_15_price_iva.js")

describe("calculate_iva()", () => {

    test("calculate different prices and ivas", () => {

        expect(price_iva.calculate_iva(10, 0)).toBe(10);
        expect(price_iva.calculate_iva(10)).toBe(12.1);
        expect(price_iva.calculate_iva(10, 4)).toBe(10.4);
        expect(price_iva.calculate_iva(0, 21)).toBe(0);
        expect(price_iva.calculate_iva(2.5, 10)).toBe(2.75);
    });
});
