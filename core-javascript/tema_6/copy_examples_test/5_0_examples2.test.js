


// import {super_area_circle} from './5_0_examples2';

let examples = require("./5_0_examples2");

// describe("area_circle()", () => {

//     test("calculates area correctly", () => {

//         expect(examples.area_circle(1)).toBe(Math.PI);
//         // expect(examples.area_circle(2)).toBe(4*Math.PI);
//         // expect(examples.area_circle(0)).toBe(0);
//         // expect(examples.area_circle(Infinity)).toBe(Infinity);
//     });
// });

// let examples_utils = require("./5_0_examples_utils.js");

afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
});

describe("super_area_circle()", () => {

    test("calculates area finger way", () => {

        expect(examples.super_area_circle(1)).toBe(Math.PI);

        jest.spyOn(examples, "is_radio").mockReturnValue(false);
        expect(examples.super_area_circle(1)).toBe(21);

    });
});



describe("call class Range", () => {

    test("checks constructor", () => {

        let test_range = new examples.Range(1, 9);
        expect(test_range.from).toBe(1);
        expect(test_range.to).toBe(9);

        let test_range_str = new examples.Range("hola", "suerte");
        expect(test_range_str.from).toBe("hola");
        expect(test_range_str.to).toBe("suerte");
    });

    test("checks include function", () => {

        let test_range = new examples.Range(1, 9);
        expect(test_range.includes(3)).toBe(true);
        expect(test_range.includes(5)).toBe(true);

        expect(test_range.includes(1)).toBe(true);
        expect(test_range.includes(9)).toBe(true);

        expect(test_range.includes(0.99)).toBe(false);
        expect(test_range.includes(0)).toBe(false);
        expect(test_range.includes(10)).toBe(false);

        expect(test_range.includes("hola")).toBe(false);

    });

    test("checks toString function", () => {

        let test_range = new examples.Range(1, 9);
        expect(test_range.toString()).toBe("(1...9)");

        let test_range_str = new examples.Range("hola", "suerte");
        expect(test_range_str.toString()).toBe("(hola...suerte)");

    });

    // test("checks iterator ", () => {

    //     let test_range = new examples.Range(1, 9);
    //     expect(test_range.toString()).toBe("(1...9)");

    // });
});

describe("return random function()", () => {

    test("mocks random data", () => {
        // jest.spyOn(Math, "random").mockReturnValue(0.30);
        // expect(examples.return_random(1)).toBe(3);
        // expect(examples.return_random(3)).toBe(9);

        // jest.spyOn(Math, "random").mockReturnValue(0.50);
        // expect(examples.return_random(1)).toBe(5);

        // jest.spyOn(Math, "floor").mockReturnValue(5);
        // expect(examples.return_random(1)).toBe(5);

        jest.spyOn(examples, "getRandomInt").mockReturnValue(3);
        expect(examples.return_random(1)).toBe(3);
    });
});
