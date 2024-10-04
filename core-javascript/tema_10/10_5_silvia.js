
let interval_data = "";
let user_input = 0;

function start() {
    user_input = document.getElementById(`user_input`).value;
    interval_data = setInterval(print, 1000);
}

function print() {
    if (user_input > 0) {
        document.getElementById(`cuenta_regresiva`)
        cuenta_regresiva.innerHTML = (user_input--)
        console.log(user_input)
    } else {
        alert("la cuenta atrás ha terminado")
        console.log("la cuenta atrás ha terminado")
        clearInterval(interval_data)
    }
}





// let user_input = document.getElementById(`user_input`).value;
// let print = setInterval(function () {
//     if (user_input > 0) {
//         document.getElementById(`cuenta_regresiva`)
//         cuenta_regresiva.innerHTML = (user_input--)
//         console.log(user_input--)
//     } else {
//         alert("la cuenta atrás ha terminado")
//         console.log("la cuenta atrás ha terminado")
//         clearInterval(print)
//     };
// }, 1000);
