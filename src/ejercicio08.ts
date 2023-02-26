/* Ejercicio 8 - Palabras encadenadas en un array

Dado un array que contiene exclusivamente cadenas de texto, comprobar que las palabras del array están encadenadas. 
Esto es, una o más letras del final de una cadena coinciden con el comienzo de la siguiente cadena del array.

Ejemplos de palabras encadenadas:

“apply” and “plywood”
“apple” and “each”
“behemoth” and “mother”

Ejemplos de palabras no encadenadas:

“apply” and “playground”
“apple” and “peggy”
“behemoth” and “mathematics

Para resolver este ejercicio, escriba una función meshArray que compruebe si las cadenas del array están 
encadenadas o no. La función recibirá como parámetro un array de cadenas de texto y devolverá:

“Error al encadenar” si las cadenas del array no están encadenadas.
Una cadena de texto que contenga las letras que encadenan las palabras del array. 
A priori no sabe cuantas letras encadenadas tendrán en común, pero al menos será una.

Ejemplos de ejecución del programa:

1: [“allow”, “lowering”, “ringmaster”, “terror”] –> “lowringter”

Este array está encadenado porque:

Las letras “low” de la primera palabra encadenan con la palabra “lowering”.
Las letras “ring” en la segunda y tercera palabras están encadenadas.
Por último, las letras “ter” en las dos últimas palabras también están encadenadas.
2: [“kingdom”, “dominator”, “notorious”, “usual”, “allegory”] –> “Error al encadenar”

En este caso, aunque las palabras “dominator” y “notorious” comparten letras en el mismo orden, las últimas 
letras de la primera palabra no encadenan con las primeras letras de la segunda. */

export function meshArray(words: string[]): string | "Error al encadenar" {
     
    let meshedLetters = "";
  
    for (let i = 1; i < words.length; i++) {
      const currentWord = words[i];
      const previousWord = words[i - 1];
      const commonLetters = findCommonLetters(previousWord, currentWord);
      
      if (commonLetters === "") {
        return "Error al encadenar";
      }
  
      meshedLetters += commonLetters;
    }
  
    return meshedLetters;
  }  
  
  function findCommonLetters(str1: string, str2: string): string {
    const maxLength = Math.min(str1.length, str2.length);
    let commonLetters = "";
  
    for (let i = 1; i <= maxLength; i++) {
      const suffix = str1.slice(str1.length - i);
      const prefix = str2.slice(0, i);
  
      if (suffix === prefix) {
        commonLetters = suffix;
      }
    }
  
    return commonLetters;
  }
  