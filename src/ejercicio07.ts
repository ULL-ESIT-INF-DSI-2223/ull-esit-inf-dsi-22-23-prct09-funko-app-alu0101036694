/* Ejercicio 7 - Mensaje secreto

Cree una función encodeMessage que reciba como parámetro una cadena de caracteres que debe ser cifrada mediante un algoritmo de sustitución 
en el que cada letra del alfabeto de entrada (abcdefghijklmnopqrstuvwxyz) sea sustituida por la letra correspondiente del mismo alfabeto pero 
ordenado de manera inversa (zyxwvutsrqponmlkjihgfedcba). De este modo, por ejemplo, todas las apariciones de la letra ‘a’ en la cadena de 
entrada se sustituirían por la letra ‘z’, las apariciones de la ‘b’ por ‘y’, y así sucesivamente.

El resultado de la invocación a la función debe ser la cadena codificada. Al mismo tiempo, la función deberá devolver undefined en el caso de 
que hayan caracteres no permitidos en la cadena de entrada.

De un modo similar al anterior, también implemente la función decodeMessage, la cual lleva a cabo la operación de decodificación. */

function encodeMessage(message: string): string | undefined {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const reversedAlphabet = alphabet.split('').reverse().join('');
  let encodedMessage = '';

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    if (char === ' ') {
      encodedMessage += ' ';
    } else {
      const index = alphabet.indexOf(char.toLowerCase());
      if (index >= 0) {
        const encodedChar = reversedAlphabet.charAt(index);
        encodedMessage += char === char.toLowerCase() ? encodedChar : encodedChar.toUpperCase();
      } else {
        return undefined;
      }
    }
  }
  return encodedMessage;
}

function decodeMessage(message: string): string | undefined {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const reversedAlphabet = alphabet.split('').reverse().join('');
  let decodedMessage = '';

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    if (char === ' ') {
      decodedMessage += ' ';
    } else {
      const index = reversedAlphabet.indexOf(char.toLowerCase());
      if (index >= 0) {
        const decodedChar = alphabet.charAt(index);
        decodedMessage += char === char.toLowerCase() ? decodedChar : decodedChar.toUpperCase();
      } else {
        return undefined;
      }
    }
  }
  return decodedMessage;
}

console.log(encodeMessage("Este mensaje es secreto")); // "Vhfg nzmbnv vzh hxpivg"
console.log(decodeMessage("Vhgv nvmhzqv vh hvxivgl")); // "Este mensaje es secreto"

console.log(encodeMessage("La lluvia en Sevilla es una maravilla")); // "Oz ooferz vm Hverooz vh fmz nzizerooz"
console.log(decodeMessage("Oz ooferz vm Hverooz vh fmz nzizerooz")); // "La lluvia en Sevilla es una maravilla"

console.log(encodeMessage("¡Hola, mundo!")); // undefined
console.log(decodeMessage("¡Hola, mundo!")); // undefined
 