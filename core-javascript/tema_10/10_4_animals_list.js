
function* generate_animal(animals_list)
{
    for (let i in animals_list)
    {
        console.log("this is animal");
        console.log(animals_list[i]);
        yield animals_list[i];
    }

}

let animals_list = generate_animal(["perro", "gato", "tiburon", "pez espada", "garrapata"]);

function print_animal()
{
    document.writeln(animals_list.next().value);
}



setInterval(print_animal, 2000);