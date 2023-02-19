/* Ejercicio 1 - Tipos de triángulos

Cree una función getTypeTriangle que determine si un triángulo es equilátero, isósceles o escaleno. Recuerde que un triángulo es equilátero 
cuando sus tres lados tienen la misma longitud. Un triángulo isósceles tiene, al menos, dos lados de igual longitud. Por último, en un 
triángulo escaleno todos los lados tienen diferente longitud.

En primer lugar, la función deberá comprobar que los tres lados del triángulo tienen una longitud mayor que cero. Además, la suma de las
longitudes de cualesquiera dos lados debe ser mayor que la longitud del tercer lado. Lo anterior cumple con el principio de desigualdad 
triangular.

La función recibirá tres argumentos numéricos y devolverá una cadena de caracteres indicando el tipo de triángulo correspondiente o undefined 
en el caso de que los tres lados del triángulo no cumplan con el principio de desigualdad triangular.

Ejemplos:

La invocación a getTypeTriangle(7, 7, 7) deberá devolver la cadena "Equilátero".
La invocación a getTypeTriangle(5, 5, 9.5) deberá devolver la cadena "Isósceles".
La invocación a getTypeTriangle(5, 6, 7) deberá devolver la cadena "Escaleno".
La invocación a getTypeTriangle(3, 1, 1) deberá devolver el valor undefined. */

function getTypeTriangle(a: number, b: number, c: number): string | undefined {
    // Check that all sides are greater than 0
    if (a <= 0 || b <= 0 || c <= 0) {
      return undefined;
    }
    
    // Check the triangle inequality
    if (a + b <= c || b + c <= a || c + a <= b) {
      return undefined;
    }
  
    if (a === b && b === c) {
      return "Equilátero";
    } else if (a === b || b === c || c === a) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }

console.log("getTypeTriangle(7, 7, 7) = " + getTypeTriangle(7, 7, 7))
console.log("getTypeTriangle(5, 5, 9.5) = " + getTypeTriangle(5, 5, 9.5))
console.log("getTypeTriangle(5, 6, 7) = " + getTypeTriangle(5, 6, 7))
console.log("getTypeTriangle(3, 1, 1) = " + getTypeTriangle(3, 1, 1))