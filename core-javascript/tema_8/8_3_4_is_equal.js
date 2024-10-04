

// This function is the simplest, now the refactoring part should be done: attention to cyclomatic complexity!!
function is_equal(object_data_1, object_data_2)
{
    let objects_equal = true;
    if (Object.keys(object_data_1).length != Object.keys(object_data_2).length)
    {
        objects_equal = false;
    }
    else
    {
        for (let data_key in object_data_1){
            if (data_key in object_data_2)
            {
                if (object_data_1[data_key] != object_data_2[data_key])
                {
                    objects_equal = false;
                    break;
                }
            }
            else 
            {
                objects_equal = false;
                break;
            }
        }
    }

    return objects_equal;
}


console.log(is_equal({a: "suerte", b: "yepe"}, {a: "suerte", b: "yepe"}));
console.log(is_equal({"gepeto": "pinocho", "aladdin": "genio", "peter": "campanilla"}, {"aladdin": "genio", "gepeto": "pinocho","peter": "campanilla"}));
console.log(is_equal({"gepeto": "pinocho", "aladdin": "genio", "peter": "campanilla"}, {"gepeto": "pinocho","peter": "campanilla"}));
console.log(is_equal({"gepeto": "pinocho","peter": "campanilla"}, {"gepeto": "pinocho", "aladdin": "genio", "peter": "campanilla"}, ));
console.log(is_equal({a: "suerte", b: "yepe"}, {a: "asdf", b: "yepe"}));