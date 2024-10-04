
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// https://cors-anywhere.herokuapp.com/corsdemo


function convert_data_into_list(response) {
    let list_data = []

    console.log("response in convert");
    console.log(response);
    
    for (let i = 0; i < response.length; i++) {
        // console.log("inside lop");
        // console.log(response[i].title);
        list_data.push(response[i].title);
    } 
    
    console.log("list data");
    console.log(list_data)
    return list_data;
}

// https://getbutterfly.com/generate-html-list-from-javascript-array/
function make_list(list_data) {

    console.log("inside make list");
    console.log(list_data);
    // Make a container element for the list
    listContainer = document.createElement('div'),

    // Make the list
    listElement = document.createElement('ul'),

    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < list_data.length; ++i) {

        console.log("inside list data");
        console.log(list_data[i]);
        // Create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = list_data[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}



function print_json_list()
{
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    fetch(corsAnywhere + "https://jsonplaceholder.typicode.com/posts", 
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
        }).then(function(response) {
            let response_json = response.json();
            console.log(response_json);
            return response_json
        }).then(function(response_json){
            let list_data = convert_data_into_list(response_json);
            make_list(list_data);
        }).catch(error => {
            console.log(error);
            if (error.name == "TypeError")
            {
                window.alert("Please connect to internet");
            }
            else
            {
                throw(error);
            }
        })

}

print_json_list();
