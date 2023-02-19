/* Ejercicio 10 - Validador de nombre usuario

Cree una función isValidUsername que compruebe la validez de un nombre de usuario. La función recibirá como parámetro una cadena con un 
nombre de usuario y devolverá verdadero o falso según las siguientes condiciones:

El nombre de usuario tiene que tener al menos 4 caracteres y no más de 30.
El nombre de usuario no puede empezar ni terminar con un guión bajo.
El nombre de usuario tiene que contener al menos una letra mayúscula, una letra minúscula, un número y algún símbolo especial ($,-,_).
No se permite la repetición de un mismo tipo de caracter más de dos veces seguidas.
Por ejemplo, el nombre de usuario "u__hello$122__" no sería válida ya que aparecen cinco letras seguidas y tres números seguidos. 
Además, termina por _ y no contiene ninguna letra mayúscula. */

function isValidUsername(username) {
  // Comprobar longitud del nombre de usuario
  if (username.length < 4 || username.length > 30) {
    return false;
  }
  
  // Comprobar si el nombre de usuario empieza o termina con un guión bajo
  if (username.startsWith('_') || username.endsWith('_')) {
    return false;
  }
  
  // Comprobar si el nombre de usuario contiene al menos una letra mayúscula, una letra minúscula, un número y algún símbolo especial
  if (!/[A-Z]/.test(username) || !/[a-z]/.test(username) || !/\d/.test(username) || !/[$\-_#]/.test(username)) {
    return false;
  }
  
  // Comprobar si el nombre de usuario contiene repetición de un mismo tipo de caracter más de dos veces seguidas
  if (/([a-zA-Z]{3,}|[\d]{3,}|[$\-_#]{3,})/.test(username)) {
    return false;
  }
  return true;
}

console.log("j0hN_D03: True", isValidUsername("j0hN_D03")) // true
console.log("$u$p3r_u$eR: True", isValidUsername("$u$p3r_u$eR")) // true
console.log("uS3er#Te3St: True", isValidUsername("uS3er#Te3St")); // true

console.log("UsEr_12$3: False", isValidUsername("UsEr_12$3")); // false porque contiene letras seguidas
console.log("_user123$: False", isValidUsername("_usr123$")); // false porque empieza por _
console.log("User_1234: False", isValidUsername("Usr_12")) // false porque contiene 3 letras seguidas
console.log("user123456: False", isValidUsername("usr123456")); // false
console.log("user__Test: False", isValidUsername("usr__Test")); // false
console.log("us&e2r_: False", isValidUsername("us&e2r_")); // false porque termina por _
console.log("_us&e2r: False", isValidUsername("_us&e2r")); // false porque empieza por _
console.log("u2A: False", isValidUsername("u2A")); // false porque la longitud es menor de 4
console.log("u2Aaaaaaaaaaaaaaaaaaaaaaaaaaaaa$: False", isValidUsername("u2Aaaaaaaaaaaaaaaaaaaaaaaaaaaaa$")); // false porque la longitud es mayor de 30