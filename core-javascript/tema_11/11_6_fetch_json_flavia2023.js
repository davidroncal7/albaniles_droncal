//Script.js
//Pide información con fetch a la url:
//https://jsonplaceholder.typicode.com/posts/1.
//Loguea el status de la petición e
//imprime por pantalla el contenido del artículo que has recibido.

const url = "https://jsonplaceholder.typicode.com/posts/1";

const fetchData = async () => {
    try {
        const response = await fetch(url);

        const statusCode = response.status;
        if (statusCode !== 200) {
            const errorMessage = await response.text();
            // console.error(errorMessage);
        } else {
            const textContent = await response.text();
            // console.log("Contenido del artículo:", textContent);
            return textContent;
        }
    } catch (error) {
        // console.error(error.message);
    }
};

// fetchData();

module.exports = {
    fetchData
}
