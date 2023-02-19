/* Ejercicio 3 - Validador de mensajes

Supongamos que recibimos un mensaje en una cadena de texto que sigue un patrón “Xsubcadena1Ysubcadena2” dónde X e Y son números y
subcadena1 y subcadena2 son cadenas de texto. Queremos comprobar la validez de un determinado mensaje en función de unas reglas preestablecidas. 
Para decidir si el mensaje es válido, debemos dividir la cadena de texto en números y subcadenas. Posteriormente, debemos comprobar que para 
cada número que encontramos, la longitud de la subcadena es igual al número anterior.

Por ejemplo:

“3hey5hello2hi” se debería dividir en 3, hey, 5, hello, 2, hi.
Defina una función isValid que reciba como parámetro una cadena de texto compuesta por números y letras y determine si es válida según 
las reglas anteriores. La función devolverá el resultado del cálculo mediante un valor de tipo booleano.

Notas:

Los mensajes solo tienen números y letras.
Los números pueden tener varios dígitos. Por ejemplo, la cadena “4code10helloworld” es un mensaje válido.
Cada número debe corresponder con la longitud de la subcadena que se encuentra a continuación, en cualquier otro caso el mensaje no será válido.
La cadena vacía se considera un mensaje válido. */

function isAValidMessage(mensaje) {
	const numero = mensaje.split(/[a-z]/i).filter(e => e !== '')
	const palabra = mensaje.split(/[0-9]/).filter(e => e !== '')
	const filtrado = palabra.map((x,i) => x.length == numero[i]).filter(e => e === true).length
	return !mensaje.length || (filtrado === numero.length && palabra.length === numero.length && mensaje.slice(0, 1).match(/[0-9]/) && !mensaje.slice(-1).match(/[0-9]/)) ? true : false

}

console.log("isAValidMessage('3hey5hello2hi') = " + isAValidMessage('3hey5hello2hi'));