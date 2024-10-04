

class EZArray extends Array {
    get first() {return this[0];}
}

let first_ez = new EZArray(1, 2, 3);
let second_ez = new EZArray(4, 4, 4);
first_ez.suerte = "hola";

console.log(first_ez);
console.log(first_ez.suerte);
console.log(EZArray);
console.log(second_ez.suerte);