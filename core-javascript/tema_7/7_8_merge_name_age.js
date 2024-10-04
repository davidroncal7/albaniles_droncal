/* Crea una función a la cual le metas dos arrays uno con nombres y otro
con edades y printee las frases con el nombre más los años que tiene.


input: dos arrays [nombres] [edades]
output: texto con las frases de los nombres mas las edades

TC1: ["David", "Mariana", "Uxue", "Javier"], [33, 24, 27, 30] -> "David tiene 33 años, Mariana tiene 24 años, Uxue tiene 27 años, Javier tiene 30 años"
TC2: [], [] -> ""

extra
TC3: [22], ["Paco"] -> "Te equivocaste con los valores de entrada!"
TC4: ["Paco", "Anabel"], [22] -> "No concuerdan el número de nombres con el de edades"
*/


function check_input_names_ages(names, ages)
{
    let is_right = true;
    if (names.length != ages.length)
    {
        is_right = false;
    }
    return is_right;
}


function print_name_plus_age(names, ages)
{
    let input_is_right = check_input_names_ages(names, ages);
    let text = "";

    if (input_is_right)
    {
        let array_result = [];
        for (let i = 0; i < names.length; i++)
        {
            let name = names[i];
            let age = ages[i];
            array_text = name + " tiene " + age + " años";
            array_result.push(array_text);
        }
        text = array_result.join(", ");
    }
    else
    {
        text = "No concuerdan el número de nombres con el de edades";
    }

    return text;
}


function print_name_plus_age_2(names, ages)
{
    let text = "";
    for (let i = 0; i < names.length; i++)
    {
        let name = names[i];
        let age = ages[i];
        text += name + " tiene " + age + " años, ";
    }

    return text.slice(0, -2);
}


export const mapWithCb = (array, callback) => {
    if (!Array.isArray(array) || typeof callback !== 'function') {
      throw Error();
    }
    return array.map(item => callback(item));
  };

function mapWithCb(array, callback)
{
    if (!Array.isArray(array) || typeof callback !== 'function')
    {
        throw Error();
    }
    return array.map(item => callback(item));
}

function suerte(value)
{
    let result = value*2
    return result;
}

mapWithCb([1, 2, 3], suerte)


export const fizzBuzz = () => {
    return;
  };

function fizzBuzz(){
    return;
}


module.exports = {
    print_name_plus_age,
    print_name_plus_age_2,
    check_input_names_ages,
    mapWithCb,
    fizzBuzz
}