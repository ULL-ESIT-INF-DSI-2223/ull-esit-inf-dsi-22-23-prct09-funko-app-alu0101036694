"use strict";
exports.__esModule = true;
var net = require('net');
var child_process_1 = require("child_process");
var server = net.createServer(function (socket) {
    console.log('Cliente conectado');
    // Manejar los datos recibidos desde el cliente
    socket.on('data', function (data) {
        // Procesar los datos recibidos desde el cliente
        var command = data.toString().trim();
        console.log("Comando recibido: ".concat(command));
        // Ejecutar el comando en el servidor
        (0, child_process_1.exec)(command, function (error, stdout, stderr) {
            if (error) { // Error al ejecutar el comando
                console.error("Error al ejecutar el comando: ".concat(error.message));
                socket.write("Error: ".concat(error.message));
                return;
            }
            if (stderr) { // Salida de error del comando
                console.error("Error en la ejecuci\u00F3n del comando: ".concat(stderr));
                socket.write("Error: ".concat(stderr));
                return;
            }
            console.log("Resultado del comando: ".concat(stdout));
            socket.write(stdout);
        });
    });
    // Manejar la desconexión del cliente
    socket.on('end', function () {
        console.log('Cliente desconectado');
    });
});
// Iniciar el servidor
var port = 8084;
server.listen(port, function () {
    console.log("Servidor iniciado en el puerto ".concat(port));
});
