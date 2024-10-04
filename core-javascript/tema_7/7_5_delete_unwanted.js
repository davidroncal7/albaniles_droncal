
const UNWANTED_ELEMENTS = ["", null, undefined, false]

function delete_unwanted(list_data)
{
    let length_array = list_data.length;
    for (let i = 0; i < length_array; i++)
    {
        let item_to_check = list_data[i];

        if (UNWANTED_ELEMENTS.includes(item_to_check))
        {
            if (list_data.length == 1)
            {
                list_data.pop()
            }
            else
            {
                list_data.splice(i, 1);
            }
        }
    }
    return list_data;
}

let list_test_1 = [5, 4, 3, null, 2, "", 1];
let list_test_2 = ["", false, undefined];
let list_test_3 = [5, 4, 1, undefined];

console.log("result are");
console.log(delete_unwanted(list_test_1));
console.log(delete_unwanted(list_test_2));
console.log(delete_unwanted(list_test_3));