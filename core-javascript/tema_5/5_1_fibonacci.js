
function fibonacci(number)
{
    if (number == 0)
    {
        output = 0;
    }
    else if (number == 1)
    {
        output = 1;
    }
    else
    {
        output = fibonacci(number-2) + fibonacci(number-1);
    }
    return output;
}

let number = Number(window.prompt("print fibonacci secuence until... (int)"));

for (let i = 0; i <= number; i++)
{
    let fibo = fibonacci(i);
    document.write(fibo + " ");
}
