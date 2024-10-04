

const wss_url = 'wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self';
let wss_socket = 0;

function start_socket_connection()
{
    wss_socket = new WebSocket(wss_url);

    wss_socket.onopen = function(e){
        alert("connection established");
    }

    wss_socket.onmessage = function(event){
        console.log("message received " + event.data);
    }

    wss_socket.onclose = function(event) {
        alert("connection closed");
    }

}

function send_message()
{
    let name = window.prompt("what is your name");
    wss_socket.send(name);
}

function close_connection()
{
    wss_socket.close();
}

