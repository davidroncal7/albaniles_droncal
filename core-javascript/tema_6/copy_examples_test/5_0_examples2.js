
// let this_module = require('./5_0_examples2');

function area_circle(radio)
{
    return Math.PI*(radio**2);
}


function is_radio(radio)
{
    let output = true;
    if (radio == 0)
    {
        output = false;
    }
    return output;
}


function super_area_circle(radio)
{
    let area = 0;
    if (this.is_radio(radio))
    {
        area = Math.PI*(radio**2);
    }
    else
    {
        area = 21;
    }
    return area;
}


class Range
{
    constructor(from, to){
        this.from = from;
        this.to = to;
    }

    includes(x) {
        return this.from <= x && x <= this.to;
    }

    toString() {
        return `(${this.from}...${this.to})`;
    }

}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

//media
// x = [1, 2, 3, 4]
// avg = (1 + 2 + 3 + 4)/4
// avg = (x1 + ... + xN)/N

//desviacion tipica
// x = [1, 2, 3, 4]
// avg = 2.5
// sd = square(((1-2.5)² + ... + (4-2.5)²) / N)
// sd = square( (x1 - avg)² + ... + (xn - avg)² / N )


// 6. Crea una función que comprueba si dos arrays son idénticos.

// function array_identity(array1, array2)
// {
//     let are_equal = true;
//     if (array1.length != array2)
//     {
//         are_equal = false
//     }
//     else {
//         for(let element of array1)
//         {

//         }
//     }

//     return are_equal;
// }

// 4.9 Crea una clase llamada círculo que tenga como entrada el radio.
// Debería
// tener dos métodos, uno para calcular el perímetro y otro para calcular el área.
// También debería poder calcular el volumen del cilindro que quedaría dada una
// altura.

class Circle{
    constructor(radio){
        this.radio = radio
    }

    get_perimeter(){
        return 2*Math.PI*this.radio;
    }

    get_area(){

    }

    get_volume(height){

    }
}


function return_random(multiplier)
{

    let random_data = this.getRandomInt(0, 10);
    return multiplier * random_data
}


module.exports = {
    super_area_circle,
    area_circle,
    is_radio,
    Range,
    getRandomInt,
    return_random,
}