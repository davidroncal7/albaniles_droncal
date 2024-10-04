
function safe_int(i)
{
    let result = null;
    try
    {
        result = parseInt(i);
    }
    catch (err)
    {
        console.log("there was an error, sorry");
    }

    if (isNaN(result))
    {
        result = null;
    }
    return result;
}


console.log(safe_int("23344"));
console.log(safe_int(11211));
console.log(safe_int(null));
console.log(safe_int(" "));
