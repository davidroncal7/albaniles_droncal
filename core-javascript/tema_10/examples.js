
// namespace  suerte {

async function get_chrome(){
    console.log("holi1");
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    let response = await fetch(corsAnywhere + "http://www.google.es",
    {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            // '': ""
        })});
    console.log("holi2");
    let profiles = await response.text();
    console.log("holi3");
    return profiles
}

async function call_function(){
    let profiles = await get_chrome();
    console.log("holi4");
    console.log(profiles);
}


// }

call_function()