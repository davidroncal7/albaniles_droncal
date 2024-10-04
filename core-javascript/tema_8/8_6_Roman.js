

class RomanTransformer {

    roman_map = [
        "I",
        "IV",
        "V",
        "IX",
        "X",
        "XL",
        "L",
        "XC",
        "C",
        "CD",
        "D",
        "CM",
        "M"
    ].reverse();

    natural_map = [
        1,
        4,
        5,
        9,
        10,
        40,
        50,
        90,
        100,
        400,
        500,
        900,
        1000
    ].reverse();

    convert_roman_to_natural(roman)
    {
        
    }

    convert_natural_to_roman(natural)
    {
        let result = "";

        if (natural > 1000)
        {
            result = "Natural number is more than 1000";
        }
        else if (natural == 0)
        {
            result = "Romans had no 0!";
        }
        else{
            let aux_natural = natural;

            while (aux_natural > 0)
            {
                for (let value in this.natural_map)
                {
                    // console.log("aux natural is " + aux_natural);

                    let number = this.natural_map[value];
                    // console.log("number is " + number);

                    let aux_remainder = aux_natural % number;
                    // console.log("remainder aux " + aux_remainder);

                    if (aux_remainder != aux_natural)
                    {
                        let roman_value = this.roman_map[value];
                        result = result.concat(roman_value);
                        // console.log("RESULT NOW " + result);
                        aux_natural -= number;
                        break;
                    }
                }
            }

        }

        return result;
    }
}

let roman_tool = new RomanTransformer();
console.log(roman_tool.convert_natural_to_roman(1200));
console.log(roman_tool.convert_natural_to_roman(0));
console.log(roman_tool.convert_natural_to_roman(300));
console.log(roman_tool.convert_natural_to_roman(334));
console.log(roman_tool.convert_natural_to_roman(923));
console.log(roman_tool.convert_natural_to_roman(1000));
console.log(roman_tool.convert_natural_to_roman(888));