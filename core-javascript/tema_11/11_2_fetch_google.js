
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// https://cors-anywhere.herokuapp.com/corsdemo

function print_google_page()
{
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    let google_page = fetch(corsAnywhere + "http://www.google.es", 
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
        }).then(function(response) {
            let response_text = response.text();
            console.log(response_text);
            return response_text
        }).then(function(string){
            document.writeln(string)
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

// {mode: "no-cors"}