// Write a JavaScript program that displays the largest integer among two integers.

// Two variables: num1 and num2

// TC1: num1 = 5, num2 = 10 ->  10
// TC2: num1 = 10, num2 = 5 ->  10
// TC3: num1 = 5, num2 = 5 ->  5
// TC4: num1 = -5, num2 = -10 ->  -5



function get_largest_integer(num1, num2) {
    let result;
    if (num1 > num2) {
        result = num1;
        if (typeof num1 !== "number" || typeof num2 !== "number") {
            result = "Error: Not a number";
        }
        else{
            
        }
    }
    else {
        result = num2;
    }
    return result;
}

console.log(get_largest_integer(5, 10));
console.log(get_largest_integer(10, 5));
console.log(get_largest_integer(5, 5));
console.log(get_largest_integer(-5, -10));
console.log(get_largest_integer("a", "b"));