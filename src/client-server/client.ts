const net = require('net');
const readline = require('readline');

// Crear la interfaz de línea de comandos
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Crear el socket del cliente
const client = new net.Socket();

// Conectar el cliente al servidor
const port = 8084;
const host = 'localhost';
client.connect(port, host, () => {
  console.log(`Conectado al servidor ${host}:${port}`);

  // Pedir al usuario que introduzca el comando
  rl.question('Introduce el comando a ejecutar: ', (command) => {
    // Enviar el comando al servidor
    client.write(command);
  });
});

// Manejar la respuesta del servidor
client.on('data', (data) => {
  console.log(`Respuesta del servidor: ${data}`);
  // Cerrar el socket del cliente
  client.end();
});

// Manejar la desconexión del servidor
client.on('end', () => {
  console.log('Desconectado del servidor');
  // Cerrar la interfaz de línea de comandos
  rl.close();
});
