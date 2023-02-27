/* Cree una clase Hexadecimal, cuyo constructor toma un número entero positivo. Cree métodos toString y valueOf que devuelvan, respectivamente, la representación en cadena en hexadecimal del número entero, o el propio número entero. Algunos ejemplos de cosas que podría hacer con su clase serían:
const myHexNumber = new Hexadecimal(38)
myHexNumber.toString() // returns the string "0x26"
myHexNumber.valueOf() // returns the number 38
Cree también dos métodos add y substract que permitan sumar y restar, respectivamente, dos números hexadecimales, esto es, dos instancias de la clase Hexadecimal:

let myFirstHexValue = new Hexadecimal(23)
let mySecondHexValue = new Hexadecimal(15)
myFirstHexValue.add(mySecondHexValue).valueOf() // returns the number 38
myFirstHexValue.add(mySecondHexValue).toString() // returns the string "0x26"
Por último, incluya en la clase Hexadecimal un método denominado parse que reciba una cadena de caracteres representando un número en hexadecimal y que devuelva el número entero correspondiente:

Hexadecimal.parse("0x26") // returns the number 38 */
