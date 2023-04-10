const net = require('net');
import { exec } from 'child_process';

const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  // Manejar los datos recibidos desde el cliente
  socket.on('data', (data) => {
    // Procesar los datos recibidos desde el cliente
    const command = data.toString().trim();
    console.log(`Comando recibido: ${command}`);

    // Ejecutar el comando en el servidor
    exec(command, (error, stdout, stderr) => {
      if (error) { // Error al ejecutar el comando
        console.error(`Error al ejecutar el comando: ${error.message}`);
        socket.write(`Error: ${error.message}`);
        return;
      }
      if (stderr) { // Salida de error del comando
        console.error(`Error en la ejecución del comando: ${stderr}`);
        socket.write(`Error: ${stderr}`);
        return;
      }
      console.log(`Resultado del comando: ${stdout}`);
      socket.write(stdout);
    });
  });

  // Manejar la desconexión del cliente
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

// Iniciar el servidor
const port = 8084;
server.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
