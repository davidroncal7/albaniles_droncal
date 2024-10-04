
const UNWANTED_ELEMENTS = ["", null, undefined, false]

function get_average(list_data)
{
    let length_array = list_data.length;
    let sum_array = 0;
    for (let i = 0; i < length_array; i++)
    {
        sum_array += list_data[i];
    }
    let average = sum_array/length_array;
    return average;
}

let list_test_1 = [1, 1, 1];
let list_test_2 = [1, 2, 3];
let list_test_3 = [];
let list_test_4 = [undefined, false];

console.log("result are");
console.log(get_average(list_test_1));
console.log(get_average(list_test_2));
console.log(get_average(list_test_3));
console.log(get_average(list_test_4));