

while (true)
{
    let suerte = prompt()
    let is_numeric = parseFloat()
    let is_integer = Number.isInteger()

    if (!is_numeric)
    {}
    else if (!is_integer)
    {}
    else
    {
        break
    }

}



// let n = parseFloat(prompt ("Introduce el número de operandos de la operación"))
// while (is_not_numeric(n)){
//     alert ("Error: Dato no numérico. Por favor, introduzca de nuevo")
//     n = parseFloat(prompt ("Introduce el número de operandos de la operación"))
// }

// while (is_not_integer(n)){
//     alert ("Error: Dato no integer. Por favor, introduzca de nuevo")
//     n = parseInt(prompt ("Introduce el número de operandos de la operación"))
// }

// while (n % 1 == !0){}

let suma = 0;
for (let i = 0; i < n; i++){
        let operandos = parseInt(prompt ("Introduce un número"))
        while (isNaN(operandos)){
            alert ("Error: Dato no numérico. Por favor, introduzca de nuevo")
            operandos = parseInt(prompt ("Introduce un número"))
        }

        suma = (suma + operandos)
}
document.write ("El resultado final es " + suma)
