
let user_array = [];

while (true)
{
    let number = Number(window.prompt("Number to add to array, 0 means finish"));
    if (number == 0)
    {
        break;
    }
    user_array.push(number);      
}

document.write("your array is: ");
document.write(user_array);