
function without(object_data, property)
{

    delete object_data[property];
    return object_data;
}


console.log(without({a: "suerte", b: "yepe"}, "a"));
console.log(without({"gepeto": "pinocho", "aladdin": "genio", "peter": "campanilla"}, "aladdin"));
