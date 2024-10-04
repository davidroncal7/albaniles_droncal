
function is_subset(set_original, subset)
{
    let is_subset = true;
    let subset_values = subset.values()
    for (var it = subset_values, val= null; val=it.next().value; ) 
    {
        if (!set_original.has(val))
        {
            is_subset = false;
            break;
        }
    }
    return is_subset;
}

let a = new Set([1, 2, 3]);
let b = new Set([4, 5, 6]);
let c = new Set([4]);

console.log(is_subset(a, b)); // false
console.log(is_subset(b, c)); // true

