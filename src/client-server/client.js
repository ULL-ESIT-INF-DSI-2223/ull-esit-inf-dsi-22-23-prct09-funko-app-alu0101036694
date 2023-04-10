var net = require('net');
var readline = require('readline');
// Crear la interfaz de línea de comandos
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Crear el socket del cliente
var client = new net.Socket();
// Conectar el cliente al servidor
var port = 8084;
var host = 'localhost';
client.connect(port, host, function () {
    console.log("Conectado al servidor ".concat(host, ":").concat(port));
    // Pedir al usuario que introduzca el comando
    rl.question('Introduce el comando a ejecutar: ', function (command) {
        // Enviar el comando al servidor
        client.write(command);
    });
});
// Manejar la respuesta del servidor
client.on('data', function (data) {
    console.log("Respuesta del servidor: ".concat(data));
    // Cerrar el socket del cliente
    client.end();
});
// Manejar la desconexión del servidor
client.on('end', function () {
    console.log('Desconectado del servidor');
    // Cerrar la interfaz de línea de comandos
    rl.close();
});
