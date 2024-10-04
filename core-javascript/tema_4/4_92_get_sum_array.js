
///////////////// ORIGINAL PROGRAM ////////////////////////////////////////////
function get_input()
{

    let total_numbers = parseInt(prompt("Enter total numbers: "));

    let array_of_numbers = [];
    for (let i=0; i<total_numbers; i++)
    {
        let number = parseInt(prompt("Enter number: "));
        array_of_numbers.push(number);
    }

    return array_of_numbers;
}

function get_sum(array_of_numbers)
{
    let sum = 0;
    for (let element=0; element<array_of_numbers.length; element++)
    {
        sum += array_of_numbers[element];
    }
    return sum;
}


let data_numbers = get_input();
let sum = get_sum(data_numbers);
alert("Sum of all numbers is: " + sum);

///////////////////////////////////////////////////////////////////////////////


///////////////// ERROR PROGRAM ///////////////////

let total_is_wrong = true;
while (total_is_wrong)
{

    ///// get input of total number with error
    let total_numbers = parseInt(prompt("Enter total numbers: "));
    if (!Number.isInteger(total_numbers))
    {
        alert("Please enter a valid number. I will reload the prompt for you :)");
        continue;
    }
    else
    {
        total_is_wrong = false;
    }

    ///// get input of several numbers
    let array_of_numbers = [];
    for (let i=0; i<total_numbers; i++)
    {

        let some_number_is_wrong = true;
        while (some_number_is_wrong)
        {
            let number = parseInt(prompt("Enter number: "));
            if (!Number.isInteger(number))
            {
                alert("Please enter a valid number. I will reload the prompt for you :)");
                continue;
            }
            else
            {
                array_of_numbers.push(number);
                some_number_is_wrong = false;
            }
        }

    }

    /// calculate sum and display data
    let sum = get_sum(array_of_numbers)
    alert("Sum of all numbers is: " + sum);
}