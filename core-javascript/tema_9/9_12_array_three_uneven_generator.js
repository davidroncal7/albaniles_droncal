
function* three_uneven_multiple()
{
    let aux_number = 0;
    while (true)
    {
        do 
        {
            aux_number += 3;
        }
        while (aux_number % 2 != 1)
        
        yield aux_number;
    }
}

let three_uneven_multiple_gen = three_uneven_multiple([1, 1, 1]);
console.log(three_uneven_multiple_gen.next().value);
console.log(three_uneven_multiple_gen.next().value);
console.log(three_uneven_multiple_gen.next().value);
console.log(three_uneven_multiple_gen.next().value);
