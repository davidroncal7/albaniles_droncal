
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// https://cors-anywhere.herokuapp.com/corsdemo



// const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

const fetch = require('isomorphic-fetch');
// const fetch = require("node-fetch");

async function getInfo(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    // let data = await response.json();
    // console.log("data")
    // console.log(data);
    // return data;
    return response;
};


let data_json = await getInfo(1).json();
// const sleep = ms => new Promise(r => setTimeout(r, ms));
// sleep(10000).then()

// let data2 = fetch(`https://jsonplaceholder.typicode.com/posts/1/`)

console.log("ending")
console.log(data_json)
