/* Ejercicio 6 - Conversor ISBN

El proceso de verificación ISBN-10 se usa para validar la identificación de números. Normalmente contienen guiones y siguen un patrón como: 
3-598-21508-8.

El formato ISBN-10 está compuesto por 9 dígitos (0-9) y un caracter de comprobación que puede ser un dígito (0-9) o una X. 
En caso de que el caracter de comprobación sea una X, se representa con el valor ‘10. Estos valores su pueden comunicar con o sin guiones, 
y se puede comprobar su validez con la siguiente fórmula:

(x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) mod 11 == 0

Si el resultado es 0, entonces el código ISBN-10 es válido. En cualquier otro caso, el código se considera no válido.

El código ISBN-10 3-598-21508-8 da como resultado 0 y por lo tanto es un código ISBN válido:

(3 * 10 + 5 * 9 + 9 * 8 + 8 * 7 + 2 * 6 + 1 * 5 + 5 * 4 + 0 * 3 + 8 * 2 + 8 * 1) mod 11 == 0

Para resolver este ejercicio, defina una función isValidISBN que compruebe la validez de un código ISBN-10. La función recibirá como 
argumento una cadena de caracteres compuesta por un posible código ISBN-10 separado o no por guiones. Como resultado, la función devolverá 
verdadero o falso según corresponda con la validez del código ISBN-10. Tenga en cuenta que la cadena de entrada a la función puede ser del 
tipo “3-598-21508-8” o “3598215088”. Para ambos casos el valor devuelto debe ser el mismo.

Nota: Un ejemplo usando el caracter X sería “3-598-21507-X” o “359821507X”. Ambos casos representan un ISBN-10 válido. */

function isValidISBN(isbn: string): boolean {
    // Eliminar los guiones si los hay
    isbn = isbn.replace(/-/g, '');
  
    // Verificar si la longitud de la cadena es válida
    if (isbn.length !== 10) {
      return false;
    }
  
    // Verificar si los primeros 9 caracteres son dígitos
    const first9Chars = isbn.slice(0, 9);
    if (!/^\d+$/.test(first9Chars)) {
      return false;
    }
  
    // Calcular la suma de los productos de los dígitos
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(isbn[i]) * (10 - i);
    }
  
    // Verificar si el último carácter es un dígito o una X
    const lastChar = isbn[9];
    if (!/^\d$/.test(lastChar) && lastChar !== 'X') {
      return false;
    }
  
    // Verificar si el dígito de comprobación es correcto
    const expectedCheckDigit = sum % 11 === 0 ? 0 : 11 - (sum % 11);
    const actualCheckDigit = lastChar === 'X' ? 10 : parseInt(lastChar);
    return expectedCheckDigit === actualCheckDigit;
  }

  console.log("isValidISBN('3-598-21508-8') = " + isValidISBN('3-598-21508-8')); // true
  console.log("isValidISBN('3598215088') = " + isValidISBN('3598215088')); // true
  console.log("isValidISBN('3-598-21507-X') = " + isValidISBN('3-598-21507-X')); // true
  console.log("isValidISBN('359821507X') = " + isValidISBN('359821507X')); // true
  console.log("isValidISBN('3-598-21507-9') = " + isValidISBN('3-598-21507-9')); // false
  console.log("isValidISBN('1234567890') = " + isValidISBN('1234567890')); // false
  console.log("isValidISBN('12345') = " + isValidISBN('12345')); // false