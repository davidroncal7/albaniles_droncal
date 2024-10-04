
function* array_product_generator(array_data)
{
    let product_result = 1;
    for (let value in array_data)
    {
        product_result *= array_data[value];
        yield product_result;
    }
}

let product_generator = array_product_generator([1, 1, 1]);
console.log(product_generator.next().value);
console.log(product_generator.next().value);
console.log(product_generator.next().value);
console.log(product_generator.next().value);

let product_generator_2 = array_product_generator([1, 2, 3]);
console.log(product_generator_2.next().value);
console.log(product_generator_2.next().value);
console.log(product_generator_2.next().value);
console.log(product_generator_2.next().value);
