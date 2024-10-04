
function reverse_local(list_data)
{
    let new_array = []
    let length_array = list_data.length;
    for (let i = 0; i < length_array; i++)
    {
        let new_item = list_data.pop();
        new_array.push(new_item);
    }
    return new_array;
}

let list_test_1 = [5, 4, 3, 2, 1];
let list_test_2 = [];
let list_test_3 = [5, 4, 1];

console.log("result are");
console.log(reverse_local(list_test_1));
console.log(reverse_local(list_test_2));
console.log(reverse_local(list_test_3));