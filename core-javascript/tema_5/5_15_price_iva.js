/**/


/* inputs: price , iva
output: price_iva

TC1 10, 0 ->>>>>>>> 10
TC2 10. null ->>>>> 12.1
TC3 10, 4    ->>>>> 10.4
TC4 0, 21    ->>>>> 0
TC5 2.5, 10 ------> 2.75

extra:
TC5 -5, 4 ---------------> ERROR!
TC6 "suerte", "suerte" --> ERROR */


function calculate_iva(price, iva=21)
{
    let final_price = 0;
    final_price = price + price * iva/100;
    return final_price;
}


module.exports = {
    calculate_iva
}
