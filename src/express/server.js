/* Desarrolle el siguiente ejercicio en el repositorio de su práctica.

Implemente un servidor Express en el que se exponga un punto de acceso JSON en la ruta '/execmd'. Al mismo tiempo, haga que el servidor devuelva,
por defecto, un código de respuesta 404 cuando se intente acceder a una ruta no válida (vea el uso del método status de un objeto respuesta de
Express).

Se espera que la URL que permite acceder a dicho punto de acceso contenga dos parámetros. El primer parámetro, denominado 'cmd', consistirá en
un comando Unix/Linux, mientras que el segundo, denominado args, consistirá en las opciones con las que se desea ejecutar el comando. Tenga en
cuenta que ambos parámetros son cadenas de caracteres. El primer parámetro correspondiente al comando a ejecutar es obligatorio, mientras que
el de los argumentos es opcional. En caso de que la URL no contenga el parámetro 'cmd', se deberá devolver al cliente un código de respuesta 400.

En el resto de casos, el servidor deberá contestar con un objeto JSON:

En caso de que se produzca un error durante la ejecución del comando y sus posibles argumentos, un objeto JSON con una propiedad error que contenga
información acerca del error que ha ocurrido.

Tenga en cuenta que, en los casos en los que el comando especificado no llegara a ejecutarse, por
ejemplo, porque no existe, o se ejecutara produciendo una salida no satisfactoria, por ejemplo, porque se le pasan argumentos no válidos a un
comando que si existe, el error correspondiente deberá devolverse en este tipo de objeto JSON. El código de respuesta asociado a este tipo de
error sería un 500.

En el caso de que el comando, con sus correspondientes argumentos, se ejecute correctamente, un objeto JSON con una propiedad output que contenga
la salida emitida por el comando. El código asociado a esta respuesta, que es el valor por defecto, es el 200 (OK). */
var express = require('express');
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var app = express();
app.get('/execmd', function (req, res) {
    var parsedUrl = url.parse(req.url);
    var _a = querystring.parse(parsedUrl.query), cmd = _a.cmd, args = _a.args;
    console.log(req.query);
    console.log(cmd);
    console.log(args);
    if (!cmd) {
        return res.status(400).json({ error: 'The "cmd" parameter is required' });
    }
    if (!args) {
        return res.status(500).json({ error: 'The "args" parameter is not correct' });
    }
    // Ejecuta el comando con los correspondientes argumentos
    return res.status(200).json({ error: 'OK' });
});
var server = http.createServer(app);
server.listen(3000, function () {
    console.log('Server listening on port 3000');
});
