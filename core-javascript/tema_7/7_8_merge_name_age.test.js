/*
*/

const merge_utils = require('./7_8_merge_name_age.js');




describe("check_input_names_ages()", () => {

    test("normal execution", () => {

        expect(merge_utils.check_input_names_ages(["David", "Mariana", "Uxue", "Javier"], [33, 24, 27, 30])).toBe(true);
        expect(merge_utils.check_input_names_ages(["David", "Mariana", "Uxue", "Javier"], [33, 27, 30])).toBe(false);
        expect(merge_utils.check_input_names_ages(["David", "Mariana", "Javier"], [33, 24, 27, 30])).toBe(false);

    });
});



describe("print_name_plus_age()", () => {

    test("normal execution", () => {

        let result = "David tiene 33 años, Mariana tiene 24 años, Uxue tiene 27 años, Javier tiene 30 años";
        expect(merge_utils.print_name_plus_age(["David", "Mariana", "Uxue", "Javier"], [33, 24, 27, 30])).toBe(result);

        jest.spyOn(merge_utils, "check_input_names_ages").mockReturnValue(false);
        expect(merge_utils.print_name_plus_age(["David", "Mariana", "Uxue", "Javier"], [33, 24, 27, 30])).toBe(result);

    });
});



// describe("print_name_plus_age2()", () => {

//     test("normal execution", () => {

//         let result = "David tiene 33 años, Mariana tiene 24 años, Uxue tiene 27 años, Javier tiene 30 años";
//         expect(merge_utils.print_name_plus_age_2(["David", "Mariana", "Uxue", "Javier"], [33, 24, 27, 30])).toBe(result);

//     });
// });
