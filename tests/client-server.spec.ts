import { describe, it } from 'mocha';
import { assert } from "chai";
const net = require('net');
const readline = require('readline');;

describe('Cliente-Servidor', function () {
  let client;
  let server;

  // Iniciar el servidor antes de cada prueba
  beforeEach(function (done) {
    server = net.createServer(function (socket) {
      socket.on('data', function (data) {
        const command = data.toString().trim();
        if (command === 'exit') {
          socket.end('Adiós');
        } else {
          socket.write('Respuesta del servidor: ' + command);
        }
      });
    });

    server.listen(0, 'localhost', function () {
      done();
    });
  });

  // Conectar al servidor antes de cada prueba
  beforeEach(function (done) {
    client = net.connect(server.address().port, function () {
      done();
    });
  });

  // Cerrar la conexión del cliente después de cada prueba
  afterEach(function () {
    client.end();
  });

  // Cerrar el servidor después de cada prueba
  afterEach(function () {
    server.close();
  });

  // Prueba para verificar la respuesta del servidor
  it('debería recibir respuesta del servidor', function (done) {
    client.write('echo test');
    client.on('data', function (data) {
      assert.equal(data.toString().trim(), 'Respuesta del servidor: echo test');
      done();
    });
  });
});
