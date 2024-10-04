
function* array_minmax_generator(array_data)
{
    let min_data = undefined;
    let max_data = undefined;
    for (let value in array_data)
    {
        let new_value = array_data[value];
        if (min_data == undefined)
        {
            min_data = new_value;
            max_data = new_value;
        }
        else
        {
            if (new_value > max_data)
            {
                max_data = new_value;
            }
            else if (new_value < min_data) 
            {
                min_data = new_value;
            }
        }
        yield {min_data, max_data};
    }
}

let product_generator = array_minmax_generator([1, 1, 1]);
console.log(product_generator.next().value);
console.log(product_generator.next().value);
console.log(product_generator.next().value);
console.log(product_generator.next().value);

let product_generator_2 = array_minmax_generator([1, 2, 3, 5, 10, 0]);
console.log(product_generator_2.next().value);
console.log(product_generator_2.next().value);
console.log(product_generator_2.next().value);
console.log(product_generator_2.next().value);
console.log(product_generator_2.next().value);
console.log(product_generator_2.next().value);
