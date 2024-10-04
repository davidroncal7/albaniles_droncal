
function join_sets(set_a, set_b)
{
    let set3 = new Set([...set_a, ...set_b]);
    return set3;
}

let a = new Set([1, 2, 3]);
let b = new Set([4, 5, 6]);

console.log(join_sets(a, b));

// IS NECESSARY A FUNCTION?