/* Ejercicio 2 - Notación decimal y factorial

Codificar números decimales con factoriales es una forma de escribir números en un sistema base que depende de factoriales, en lugar de potencias. 
En este sistema, el último dígito siempre es 0 y está en base 0!. El dígito anterior pueder ser 0 o 1 y está en base 1!. Del mismo modo, el 
dígito anterior es 0, 1 o 2 y está en base 2!. De manera más general, el enésimo dígito respecto al último es siempre 0, 1, 2, ..., n y está 
en base n!. Para más información consulte el Sistema Factorial.

Para resolver este ejercicio, defina dos funciones decimalToFactorial y factorialToDecimal. La primera, recibirá 
un entero positivo y devolverá como resultado una cadena de texto con la representación factorial del número 
recibido. Por el contrario, la función factorialToDecimal realizará la operación opuesta. Esto es, recibirá como 
paŕametro una cadena de texto en notación factorial y devolverá el número entero que representa.

Ejemplo:

El número 463 codificado en notación factorial sería: 341010 ya que:
463 = 3 x 5! + 4 x 4! + 1 x 3! + 0 x 2! + 1 x 1! + 0 x 0! */

function factorial(num_decimal: number) : number {
    if (num_decimal === 0 || num_decimal === 1) {
        return 1;
    } else {
        return num_decimal * factorial(num_decimal - 1);
    }
}

function decimaltofactorial(num_decimal: number): string {
    let aux: number = 0;
    let num: number = num_decimal;
    // Calculate the highest factorial that is less than or equal to num
    while (num > factorial(aux)) {
        aux++;
    }
    // Subtract as many multiples of that factorial as possible and store the digits
    let greater: number = aux - 1;
    let counter: number = 0;
    let control: any = greater;
    let result: string = "";
    while (control >= 0) {
        let fact = factorial(control);
        while (num >= fact) {
            num -= fact;
            counter++;
        }
        result += counter.toString();
        counter = 0;
        control--;
    }
    return result;
}

function factorialToDecimal(num_factorial: string): number {
    let num_decimal = 0;
    let factorials = num_factorial.split(' + ');
    for (let i = 0; i < factorials.length; i++) {
      let aux_factorial = factorials[i].split(' x ');
      let term = parseInt(aux_factorial[0]);
      let factor = parseInt(aux_factorial[1]);
      num_decimal += term * factorial(factor);
    }
    return num_decimal;
  }

console.log("decimaltofactorial(463) = " + decimaltofactorial(463)); // 341010
console.log("factorialToDecimal('3 x 5! + 4 x 4! + 1 x 3! + 0 x 2! + 1 x 1! + 0 x 0!') = " + factorialToDecimal('3 x 5! + 4 x 4! + 1 x 3! + 0 x 2! + 1 x 1! + 0 x 0!')); // 463
