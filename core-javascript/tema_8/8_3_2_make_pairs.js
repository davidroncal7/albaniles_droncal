
function make_pairs(object_data)
{
    let new_array = [];
    for (let data_key in object_data){
        new_array.push([data_key.toString(), object_data[data_key]]);
    }
    return new_array;
}


console.log(make_pairs({a: "suerte", b: "yepe"}));
console.log(make_pairs({"gepeto": "pinocho", "aladdin": "genio", "peter": "campanilla"}));
console.log(make_pairs({a: undefined, b: null}));