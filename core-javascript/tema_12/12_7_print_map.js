
function print_map(map_data)
{
    for (const [key, value] of map_data) {
        console.log(key, value);
    }
}

let a = new Map([["hola", 1], ["super_hola", 2], ["mega_hola", 3]]);

print_map(a);
