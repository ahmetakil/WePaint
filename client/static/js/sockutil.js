function connect(ip, port) {
    console.log("Connecting to " + ip + ":" + port);
    return new WebSocket("ws://" + ip + ":" + port + "/");
}

function send(connection, obj) {
    connection.send(JSON.stringify(obj));
}