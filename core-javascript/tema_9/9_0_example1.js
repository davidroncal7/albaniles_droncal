
function* power_generator(base)
{
    let initial_value = 1;
    while(true)
    {
        initial_value *= base;
        yield initial_value;
    }
}


let generator = power_generator(5);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
