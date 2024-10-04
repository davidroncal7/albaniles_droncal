function sumNums(listNums){
    let sum = 0;
    for (let number of listNums){
        sum += number;
    }
    return sum;
}

// function get_number_of_numbers()
// {
//     while (true)
//     {
//         let countNums = parseFloat(prompt('Inserte los números a sumar', 0));
//         console.log(typeof countNums);

//         if (Number.isInteger(parseFloat(countNums)))
//         {
//             break;
//         }
//     }
//     return parseInteger(countNums);
// }

function sumApp(){

    let number_of_nums = get_number_of_numbers()
    let listNums = [];

    for(counter = 0; counter < countNums; counter++){
        listNums.push(+prompt('Inserte un número'));
        console.log(listNums);
    }

    window.confirm('El resultado de la suma es: ' + sumNums(listNums));
}
