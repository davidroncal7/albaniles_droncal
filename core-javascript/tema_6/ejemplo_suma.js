//Function to change sum or substract depending on symbol of first argument


function sum_or_subtract(number_one, number_two) {
    let result;
    if (number_one < 0) {
        result = number_one - number_two;
    }
    else {
        result = number_one + number_two;
    }
    return result;
}

module.exports = {
    sum_or_subtract,
}