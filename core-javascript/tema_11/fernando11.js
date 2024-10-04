//Tema 11 Ej. 6 Pide info con fetch a url logea status petición e imprime pantalla art recibido

function seis() {
    let url = 'https://jsonplaceholder.typicode.com/posts/1';
    fetch(url)
        .then(response => response.json() )
        .then(data => mostrarData(data) )
        .catch(error => console.log(error) )
    const mostrarData = (data) => {
        console.log(data)
        let body = ""
        for (let i = 0; i < data.length; i++) {
           body+=`<tr><td>${data[i].id}</td><td>${data[i].title}</td><td>${data[i].body}</td></tr>`
        }
        document.getElementById('data').innerHTML = body
        //console.log(body)
};
};

//Tema 11 Ej. 7 Modifica ejercicio anterior o crea nuevo que permita cambiar artículo que recibe

function siete() {
        let url = 'https://jsonplaceholder.typicode.com/posts/1';
        fetch(url)
            .then(response => response.json() )
            .then(data => mostrarData(data) )
            .catch(error => console.log(error) )
        data.id = 2;
        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (let i = 0; i < data.length; i++) {
               body+=`<tr><td>${data[i].id}</td><td>${data[i].title}</td><td>${data[i].body}</td></tr>`
            }
            document.getElementById('data').innerHTML = body
            // console.log(body)
    };
    };
//Tema 11 Ej.8 Recibir lista de todos los artículos ¿cuántos hay? ¿listar títulos? ¿tabla con títulos y contenido?

function ocho() {
    let url = 'https://jsonplaceholder.typicode.com/posts/';
  fetch(url)
      .then(response => response.json() )
      .then(data => mostrarData(data) )
      .catch(error => console.log(error) )
  const mostrarData = (data) => {
      console.log(data)
      let body = ""
      for (let i = 0; i < data.length; i++) {
         body+=`<tr><td>${data[i].id}</td><td>${data[i].title}</td><td>${data[i].body}</td></tr>`
      }
      document.getElementById('data').innerHTML = body
    //   console.log(body)
}
};
