# [PRÁCTICA 3](github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-21-22-prct03-static-types-functions-CarlaOvalTorres). TIPOS DE DATOS ESTÁTICOS Y FUNCIONES

## Carla Oval Torres

## Índice <a name="índice"></a>
1. [Introducción](#introducción)
2. [Ejercicios propuestos](#ejercicios-propuestos)
    1. [Ejercicio 1 - Tipos de triángulos](#ejercicio-1---tipos-de-triángulos)
    2. [Ejercicio 2 - Notación decimal y factorial](#ejercicio-2---notación-decimal-y-factorial)
    3. [Ejercicio 3 - Validador de mensajes](#ejercicio-3---validador-de-mensajes)
    4. [Ejercicio 4 - Concersor de estilo](#ejercicio-4---conversor-de-estilo)
    5. [Ejercicio 5 - Un solo golpe](#ejercicio-5---un-solo-golpe)
    6. [Ejercicio 6 - Conversor ISBN](#ejercicio-6---conversor-isbn)
    7. [Ejercicio 7 - Mensaje secreto](#ejercicio-7---mensaje-secreto)
    8. [Ejercicio 8 - Wonder Woman](#ejercicio-8---wonder-woman)
    9. [Ejercicio 9 - La Conjetura de Collatz](#ejercicio-9---la-conjetura-de-collatz)
    10. [Ejercicio 10 - Validador de nombre usuario](#ejercicio-10---validador-de-nombre-usuario)

## Introducción <a name="introducción"></a>
> [Volver al índice](#índice)

Lleve a cabo todos y cada uno de los ejercicios propuestos a continuación. El código fuente de cada ejercicio debe estar alojado en un fichero 
independiente con nombre ejercicio-n.ts. Si utiliza estructura básica de proyecto que hemos visto en clase, por favor, incluya todos sus 
ejercicios en el directorio ./src de dicho proyecto.

## Ejercicios propuestos <a name="ejercicios-propuestos"></a>
### Ejercicio 1 - Tipos de triángulos <a name="ejercicio-1---tipos-de-triángulos"></a>
> [Volver al índice](#índice)

> Cree una función *getTypeTriangle* que determine si un triángulo es equilátero, isósceles o escaleno. Recuerde que un triángulo es equilátero 
cuando sus tres lados tienen la misma longitud. Un triángulo isósceles tiene, al menos, dos lados de igual longitud. Por último, en un 
triángulo escaleno todos los lados tienen diferente longitud.
>
> En primer lugar, la función deberá comprobar que los tres lados del triángulo tienen una longitud mayor que cero. Además, la suma de las
longitudes de cualesquiera dos lados debe ser mayor que la longitud del tercer lado. Lo anterior cumple con el principio de desigualdad 
triangular.
>
> La función recibirá tres argumentos numéricos y devolverá una cadena de caracteres indicando el tipo de triángulo correspondiente o undefined 
en el caso de que los tres lados del triángulo no cumplan con el principio de desigualdad triangular.
>
> Ejemplos:
>
> La invocación a *getTypeTriangle(7, 7, 7)* deberá devolver la cadena "Equilátero".
> La invocación a *getTypeTriangle(5, 5, 9.5)* deberá devolver la cadena "Isósceles".
> La invocación a *getTypeTriangle(5, 6, 7)* deberá devolver la cadena "Escaleno".
> La invocación a *getTypeTriangle(3, 1, 1)* deberá devolver el valor *undefined*.

El código realizado es el siguiente

```typescript
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
```

La definición de la función toma tres parámetros numéricos como entrada, que representan los lados del triángulo, y devuelve una cadena de texto que indica el tipo de triángulo o *undefined* si los parámetros no son válidos.

```typescript
function getTypeTriangle(a: number, b: number, c: number): string | undefined {
```

Luego se comprueba si alguno de los lados del triángulo es menor o igual a cero. Si es así, los parámetros no serán válidos.

```typescript
if (a <= 0 || b <= 0 || c <= 0) {
  return undefined;
}
```

A continuación, se comprueba si se cumple la desigualdad triangular, que establece que la suma de dos lados de un triángulo siempre debe ser mayor que el tercer lado. Si la desigualdad no se cumple, la función devuelve *undefined*.

```typescript
if (a + b <= c || b + c <= a || c + a <= b) {
  return undefined;
}
```

Luego paso a definir los tres posibles resultados de la función. Si los tres lados son iguales, la función devuelve la cadena *"Equilátero"*. Si dos lados son iguales y el tercero es diferente, la función devuelve la cadena *"Isósceles"*. Si los tres lados son diferentes, la función devuelve la cadena *"Escaleno"*.

```typescript
if (a === b && b === c) {
  return "Equilátero";
} else if (a === b || b === c || c === a) {
  return "Isósceles";
} else {
  return "Escaleno";
}
```

Por último, con los *console.log* compruebo la ejecución del código.


### Ejercicio 2 - Notación decimal y factorial <a name="ejercicio-2---notación-decimal-y-factorial"></a>
> [Volver al índice](#índice)

> Codificar números decimales con factoriales es una forma de escribir números en un sistema base que depende de factoriales, en lugar de potencias. 
En este sistema, el último dígito siempre es 0 y está en base 0!. El dígito anterior pueder ser 0 o 1 y está en base 1!. Del mismo modo, el 
dígito anterior es 0, 1 o 2 y está en base 2!. De manera más general, el enésimo dígito respecto al último es siempre 0, 1, 2, ..., n y está 
en base n!. Para más información consulte el Sistema Factorial.
>
> Para resolver este ejercicio, defina dos funciones decimalToFactorial y factorialToDecimal. La primera, recibirá un entero positivo y devolverá 
como resultado una cadena de texto con la representación factorial del número recibido. Por el contrario, la función factorialToDecimal realizará 
la operación opuesta. Esto es, recibirá como paŕametro una cadena de texto en notación factorial y devolverá el número entero que representa.
>
> Ejemplo:
>
> El número 463 codificado en notación factorial sería: 341010 ya que:
463 = 3 x 5! + 4 x 4! + 1 x 3! + 0 x 2! + 1 x 1! + 0 x 0!

Solución:

```typescript
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

```

Primero defino una función que calcula el factorial de un número entero positivo dado como argumento. Para ello empleo recursividad.

```typescript
function factorial(num_decimal: number) : number {
    if (num_decimal === 0 || num_decimal === 1) {
        return 1;
    } else {
        return num_decimal * factorial(num_decimal - 1);
    }
}
```

La función *decimaltofactorial* es una función que convierte un número decimal a una cadena de dígitos que representa su valor en factorial.

La función utiliza un algoritmo que trabaja dividiendo el número decimal en factores factoriales de forma recursiva. La variable *aux* se inicializa en 0, y se utiliza para calcular el factorial más alto que sea menor o igual que *num_decimal*. Esto se logra utilizando un bucle while que itera hasta que *num* sea menor o igual que el factorial de *aux*. En cada iteración, se incrementa el valor de *aux* en 1.

Una vez que se ha encontrado el factorial más alto que sea menor o igual que *num_decimal*, se utiliza un segundo bucle while para calcular los dígitos en la representación factorial del número. La variable *greater* se inicializa como *aux - 1*, y se utiliza para almacenar el factorial más alto que se está procesando en cada iteración del bucle. La variable control se inicializa con el valor de greater, y se utiliza para controlar cuántos dígitos se deben calcular.

En cada iteración del bucle, se calcula el factorial del valor de *control* y se compara con *num*. Si el factorial es menor o igual a *num*, se divide *num* por el factorial y se redondea hacia abajo para obtener el número de veces que el factorial entra en *num*. Este valor se almacena en la variable counter, y se agrega a la cadena de resultados *result*. A continuación, *num *se actualiza restando el producto del factorial y el número de veces que el factorial entró en *num*.

Una vez que se han calculado todos los dígitos, se devuelve la cadena resultante.

```typescript
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
```

La siguiente función, *factorialToDecimal*, recibe como argumento una cadena de caracteres *num_factorial* que representa un número en su forma factorial y devuelve el número decimal equivalente.

La función comienza dividiendo la cadena *num_factorial* en términos individuales separados por el carácter "+". Luego, cada término se divide en dos partes: el coeficiente y el factor, separados por el carácter "x". Por ejemplo, "4 x 3!" se dividiría en "4" y "3".

A continuación, la función calcula el valor decimal de cada término multiplicando el coeficiente por el factorial del número correspondiente, utilizando la función *factorial* implementada previamente. El resultado de cada término se suma al número decimal total.

Finalmente, la función devuelve el número decimal resultante.

```typescript
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
```

### Ejercicio 3 - Validador de mensajes <a name="ejercicio-3---validador-de-mensajes"></a>
> [Volver al índice](#índice)

> Supongamos que recibimos un mensaje en una cadena de texto que sigue un patrón “Xsubcadena1Ysubcadena2” dónde X e Y son números y
subcadena1 y subcadena2 son cadenas de texto. Queremos comprobar la validez de un determinado mensaje en función de unas reglas preestablecidas. 
> Para decidir si el mensaje es válido, debemos dividir la cadena de texto en números y subcadenas. Posteriormente, debemos comprobar que para cada número que encontramos, la longitud de la subcadena es igual al número anterior.
>
> Por ejemplo:
>
> “3hey5hello2hi” se debería dividir en 3, hey, 5, hello, 2, hi.
> Defina una función isValid que reciba como parámetro una cadena de texto compuesta por números y letras y determine si es válida según 
las reglas anteriores. La función devolverá el resultado del cálculo mediante un valor de tipo booleano.
>
> Notas:
>
> Los mensajes solo tienen números y letras.
Los números pueden tener varios dígitos. Por ejemplo, la cadena “4code10helloworld” es un mensaje válido.
> Cada número debe corresponder con la longitud de la subcadena que se encuentra a continuación, en cualquier otro caso el mensaje no será válido.
La cadena vacía se considera un mensaje válido.

Solución:

```typescript
function isAValidMessage(mensaje) {
	const numero = mensaje.split(/[a-z]/i).filter(e => e !== '')
	const palabra = mensaje.split(/[0-9]/).filter(e => e !== '')
	const filtrado = palabra.map((x,i) => x.length == numero[i]).filter(e => e === true).length
	return !mensaje.length || (filtrado === numero.length && palabra.length === numero.length && mensaje.slice(0, 1).match(/[0-9]/) && !mensaje.slice(-1).match(/[0-9]/)) ? true : false

}

console.log("isAValidMessage('3hey5hello2hi') = " + isAValidMessage('3hey5hello2hi'));
```

La función *isAValidMessage* toma como parámetro una cadena de texto *mensaje* y verifica si cumple con ciertas condiciones para considerarse como un mensaje válido.

El código divide la cadena en dos partes: una lista de números y otra de palabras. Para hacer esto se utiliza el método *split*, que recibe como argumento una expresión regular que indica el separador a utilizar. En este caso, la expresión regular es ```/[a-z]/i y /[0-9]/``` para dividir la cadena en una lista de palabras y una lista de números, respectivamente.

Luego se verifica que la longitud de cada palabra coincida con el número correspondiente de la lista de números. Esto se realiza utilizando el método *map* y filtrando aquellos elementos que cumplen con la condición utilizando el método *filter*. Si la cantidad de elementos filtrados es igual a la cantidad de elementos en la lista de números, significa que todas las palabras tienen una longitud válida y se considera que el mensaje es válido.

Finalmente, se verifica que el primer carácter de la cadena sea un número, que el último carácter no sea un número y que la cadena no esté vacía. Si todas estas condiciones se cumplen, la función devuelve *true*. De lo contrario, devuelve *false*.

### Ejercicio 4 - Conversor de estilo <a name="ejercicio-4---conversor-de-estilo"></a>
> [Volver al índice](#índice)

> A la hora de desarrollar código, hay diversas maneras de nombrar las variables, funciones, clases y otros elementos que componen el código. 
> Un patrón muy usado en lenguajes de programación como Python es el Snake Case. Este patrón consiste en dividir los nombres de las variables y 
funciones usando guiones bajos entre palabras. Por ejemplo: sample_string o the_stealth_warrior.
>
> Por el contrario, en lenguajes de programación como Java, C# y C/C++, predomina el denominado Camel Case. En este caso, los nombres de variables,
clases y funciones se separan escribiendo con mayúscula la primera letra de la siguiente palabra. Siguiendo los ejemplos anteriores: 
sampleString o theStealthWarrior.
>
> Desarrolle dos funciones fromSnakeToCamelCase y fromCamelToSnakeCase que conviertan una cadena de texto de un formato a otro. Ambas funciones 
recibirán como parámetro una cadena de texto y devolverán otra cadena con el nuevo formato. La primera función recibirá una cadena de texto en 
formato Snake Case y la convertirá a formato Camel Case. La segunda función realizará la operación contraria.
>
> Nota: Recuerde que las cadenas resultantes deben comenzar con minúscula.

Solcución:

```typescript
let cadena_convertida = '';

function fromSnakeToCamelCase(entrada: string) {
  const entrada_dividida = entrada.split('_');
  let x = 0;
  for (const elemento of entrada_dividida) {
    if (x === 0) {
      cadena_convertida = elemento.toLowerCase();
    } else {
      cadena_convertida += elemento.substr(0, 1).toUpperCase() + elemento.substr(1).toLowerCase();
    }
    x++;
  } 
  return cadena_convertida;
}

function fromCamelToSnakeCase(entrada: string) {
  var result = entrada.replace(/([A-Z]+)/g, "_$1").replace(/^,/, "");
  result.split(",");
  result = result.toString();
// result = result.substr(1, result.lenght);
  result = result.toLowerCase();
  return result;
}

console.log("fromSnakeToCamelCase(the_stealth_warrior) = " + fromSnakeToCamelCase("the_stealth_warrior"));
console.log("fromCamelToSnakeCase(theStealthWarrior) = " + fromCamelToSnakeCase("theStealthWarrior"));
```

La función *fromSnakeToCamelCase* recibe una cadena de texto como entrada, la cual es una cadena de texto en formato *snake_case* (palabras separadas por guiones bajos). Primero, se divide la entrada en un arreglo de palabras, utilizando el método *split()* y especificando el carácter "_" como delimitador. Luego, se itera sobre este arreglo de palabras, concatenando cada palabra convertida a *camelCase* en la variable *cadena_convertida*. En la primera palabra, se convierte la palabra completa a minúsculas, y en las siguientes palabras se convierte la primera letra a mayúsculas y el resto a minúsculas. Finalmente, se retorna la cadena convertida.

La función *fromCamelToSnakeCase* recibe una cadena de texto como entrada, la cual es una cadena de texto en formato *camelCase*. Se utiliza una expresión regular para buscar todas las mayúsculas en la cadena y agregarles un guión bajo delante. Luego, se convierte la cadena resultante a minúsculas y se retorna el resultado.

Finalmente, se realizan algunas pruebas de ambas funciones para verificar su funcionamiento.

### Ejercicio 5 - Un solo golpe <a name="ejercicio-5---un-solo-golpe"></a>
> [Volver al índice](#índice)

> Chuck Norris es el tío más duro del mundo, una vez golpeó a un caballo en la barbilla y sus descendientes se conocen hoy en día como jirafas.
>
> Como sus puñetazos, Chuck NUNCA necesita más de una línea de código. La tarea que debes realizar, para complacer a Chuck Norris, es crear una única función que haga uso de cuatro métodos encadenados en una única línea de código. Puedes utilizar varias líneas, pero no querrás cabrear a Chuck Norris.
> 
> Chuck espera como resultado una cadena de caracteres con sus cosas favoritas separadas, ordenadas, unidas de nuevo y, además, que se eliminen todas las apariciones de las letras e y a. Si alguien se atreve a retar a Chuck Norris con una cadena vacía la función devuelve “Broken!”.
>
> Se espera un comportamiento como el siguiente:
>
>onePunch('Beard Jeans Hairbrush Knuckleduster Sand') deberá retornar 'Brd Hirbrush Jns Knuckldustr Snd'.
onePunch('Sock Beard Vest Lady Sage') deberá retornar 'Brd Ldy Sg Sock Vst'.
onePunch('Beard Sack Gun Parachute Face-Kicking-Shoes') deberá retornar 'Brd Fc-Kicking-Shos Gun Prchut Sck'.
onePunch('Snot Snow Soda Tank Beard') deberá retornar 'Brd Snot Snow Sod Tnk'.
onePunch('') deberá retornar 'Broken!'.

Solución:

```typescript
function onePunch(cadena: string): string {
        return cadena.split(' ').sort().join(' ').replace(/[ae\s]/g, '') || 'Broken!';
      }
```

Primero, la función dividirá la cadena de entrada en palabras utilizando el método *split* con el espacio en blanco como delimitador. Luego, las palabras se ordenan alfabéticamente utilizando el método *sort*. A continuación, se vuelven a unir en una única cadena de texto utilizando el método *join* con el espacio en blanco como separador.

La expresión regular ```[ae\s]``` en el método *replace* elimina los caracteres "a" y "e" junto con cualquier espacio en blanco que se encuentre en la cadena. La letra "e" también se elimina debido a que aparece en la expresión regular. Esto se logra utilizando la opción "g" (*global*) para que se busquen y reemplacen todas las coincidencias en la cadena.

Si la cadena resultante es una cadena vacía, la función devuelve la cadena *"Broken!"*. De lo contrario, devuelve la cadena de texto resultante.

Probamos el código con las sentencias siguientes:

```typescript
console.log(onePunch("Beard Jeans Hairbrush Knuckleduster Sand"));
console.log(onePunch("Sock Beard Vest Lady Sage"));
console.log(onePunch("Beard Sack Gun Parachute Face-Kicking-Shoes"));
console.log(onePunch("Snot Snow Soda Tank Beard"));
console.log(onePunch(" "));
```

### Ejercicio 6 - Conversor ISBN <a name="ejercicio-6---conversor-isbn"></a>
> [Volver al índice](#índice)

> El proceso de verificación ISBN-10 se usa para validar la identificación de números. Normalmente contienen guiones y siguen un patrón como: 
3-598-21508-8.
>
>El formato ISBN-10 está compuesto por 9 dígitos (0-9) y un caracter de comprobación que puede ser un dígito (0-9) o una X. 
En caso de que el caracter de comprobación sea una X, se representa con el valor ‘10. Estos valores su pueden comunicar con o sin guiones, 
y se puede comprobar su validez con la siguiente fórmula:
>
>(x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) mod 11 == 0
>
>Si el resultado es 0, entonces el código ISBN-10 es válido. En cualquier otro caso, el código se considera no válido.
>
>El código ISBN-10 3-598-21508-8 da como resultado 0 y por lo tanto es un código ISBN válido:
>
>(3 * 10 + 5 * 9 + 9 * 8 + 8 * 7 + 2 * 6 + 1 * 5 + 5 * 4 + 0 * 3 + 8 * 2 + 8 * 1) mod 11 == 0
>
>Para resolver este ejercicio, defina una función isValidISBN que compruebe la validez de un código ISBN-10. La función recibirá como 
argumento una cadena de caracteres compuesta por un posible código ISBN-10 separado o no por guiones. Como resultado, la función devolverá 
verdadero o falso según corresponda con la validez del código ISBN-10. Tenga en cuenta que la cadena de entrada a la función puede ser del 
tipo “3-598-21508-8” o “3598215088”. Para ambos casos el valor devuelto debe ser el mismo.
>
>Nota: Un ejemplo usando el caracter X sería “3-598-21507-X” o “359821507X”. Ambos casos representan un ISBN-10 válido.

El código que hemos desarrollado es el siguiente:

```typescript
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
```

El código toma como entrada una cadena de caracteres que representa el ISBN. En primer lugar, elimina los guiones si los hay con la función *replace()*. Luego, verifica si la longitud de la cadena es válida, lo que significa que debe tener exactamente 10 caracteres. Si no es así, la función devuelve false.

A continuación, el código verifica si los primeros 9 caracteres son dígitos. Para hacer esto, se utiliza una expresión regular que coincide con cualquier cadena que consista solo de dígitos ```(/^\d+$/)```. Si los primeros 9 caracteres no son dígitos, la función devuelve false.

Luego, el código calcula la suma de los productos de los dígitos. Para hacer esto, utiliza un bucle for para recorrer los primeros 9 caracteres del ISBN y multiplicar cada dígito por un peso determinado. El primer dígito se multiplica por 10, el segundo por 9, y así sucesivamente hasta el noveno dígito, que se multiplica por 2. La suma de estos productos se almacena en la variable *sum*.

Después, el código verifica si el último carácter es un dígito o una X. Si el último carácter no es un dígito ni una X, la función devuelve *false*.

Finalmente, el código verifica si el dígito de comprobación es correcto. El dígito de comprobación es el último dígito del ISBN y se utiliza para verificar que el ISBN esté escrito correctamente. Para calcular el dígito de comprobación esperado, se calcula el residuo de la división de la suma de los productos de los dígitos por 11. Si el residuo es 0, el dígito de comprobación esperado es 0; de lo contrario, se resta el residuo de 11. El dígito de comprobación real es el último carácter del ISBN, a menos que sea una X, en cuyo caso se interpreta como 10. Si el dígito de comprobación esperado y el dígito de comprobación real son iguales, la función devuelve true; de lo contrario, devuelve false.

Comprobamos su funcionamiento:

```typescript
console.log("isValidISBN('3-598-21508-8') = " + isValidISBN('3-598-21508-8')); // true
console.log("isValidISBN('3598215088') = " + isValidISBN('3598215088')); // true
console.log("isValidISBN('3-598-21507-X') = " + isValidISBN('3-598-21507-X')); // true
console.log("isValidISBN('359821507X') = " + isValidISBN('359821507X')); // true
console.log("isValidISBN('3-598-21507-9') = " + isValidISBN('3-598-21507-9')); // false
console.log("isValidISBN('1234567890') = " + isValidISBN('1234567890')); // false
console.log("isValidISBN('12345') = " + isValidISBN('12345')); // false
```

### Ejercicio 7 - Mensaje secreto <a name="ejercicio-7---mensaje-secreto"></a>
> [Volver al índice](#índice)

>Cree una función encodeMessage que reciba como parámetro una cadena de caracteres que debe ser cifrada mediante un algoritmo de sustitución 
en el que cada letra del alfabeto de entrada (abcdefghijklmnopqrstuvwxyz) sea sustituida por la letra correspondiente del mismo alfabeto pero ordenado de manera inversa (zyxwvutsrqponmlkjihgfedcba). De este modo, por ejemplo, todas las apariciones de la letra ‘a’ en la cadena de 
entrada se sustituirían por la letra ‘z’, las apariciones de la ‘b’ por ‘y’, y así sucesivamente.
>
>El resultado de la invocación a la función debe ser la cadena codificada. Al mismo tiempo, la función deberá devolver undefined en el caso de que hayan caracteres no permitidos en la cadena de entrada.
>
>De un modo similar al anterior, también implemente la función decodeMessage, la cual lleva a cabo la operación de decodificación.

Hemos definido dos funciones. La función *encodeMessage* recibe un mensaje como argumento y devuelve una cadena de caracteres que representa el mensaje codificado. Primero se define el alfabeto como una cadena de caracteres, y se obtiene el alfabeto inverso invirtiendo el orden de los caracteres del alfabeto. Luego se itera por cada carácter del mensaje y se verifica si es un espacio o una letra del alfabeto. Si es un espacio, se agrega un espacio a la cadena codificada. Si es una letra del alfabeto, se busca la posición de esa letra en el alfabeto original y se reemplaza por la letra en la misma posición en el alfabeto inverso. Luego se agrega el carácter codificado a la cadena, respetando si el carácter original era mayúscula o minúscula. Si se encuentra un carácter que no está en el alfabeto, la función devuelve undefined.

```typescript
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
```

La función *decodeMessage* recibe una cadena codificada y devuelve el mensaje original decodificado. La implementación es similar a la función *encodeMessage*, pero en este caso se busca la letra codificada en el alfabeto inverso y se reemplaza por la letra original en la misma posición del alfabeto original. También se verifica si el carácter original era mayúscula o minúscula para respetar eso al decodificar. Si se encuentra un carácter que no está en el alfabeto inverso, la función devuelve *undefined*.

```typescript
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

```
Realizamos las comprobaciones con las siguientes sentencias: 

```typescript
console.log(encodeMessage("Este mensaje es secreto")); // "Vhfg nzmbnv vzh hxpivg"
console.log(decodeMessage("Vhgv nvmhzqv vh hvxivgl")); // "Este mensaje es secreto"

console.log(encodeMessage("La lluvia en Sevilla es una maravilla")); // "Oz ooferz vm Hverooz vh fmz nzizerooz"
console.log(decodeMessage("Oz ooferz vm Hverooz vh fmz nzizerooz")); // "La lluvia en Sevilla es una maravilla"

console.log(encodeMessage("¡Hola, mundo!")); // undefined
console.log(decodeMessage("¡Hola, mundo!")); // undefined
```

### Ejercicio 8 - Wonder Woman <a name="ejercicio-8---wonder-woman"></a>
> [Volver al índice](#índice)

>La princesa Diana consiguió clavar su espada y cortar la cabeza de Cerberus (un lobo con muchas cabezas). Para su asombro, inmediatamente, aparecieron nuevas cabezas, en realidad unas n cabezas. Atacó de nuevo y ahora donde estaba la segunda cabeza aparecieron 2 * n cabezas. 
A la tercera aparecieron 2 * 3 * n nuevas cabezas, a la cuarta 2 * 3 * 4 * n cabezas, y así sucesivamente.
>
>Ante este problema, Diana ha decidido pedir ayuda al resto de amazonas. Aunque las amazonas nunca rechazan una buena pelea, quieren saber 
cuántas cabezas tiene ahora el Cerberus.
>
>La tarea que hay que realizar es el desarrollo de una función getNumberHeads que dado el número inicial de cabezas que tiene el Cerberus, el valor de n (nuevas cabezas que aparecen al cortar una), así como la cantidad de ataques que Diana va a realizar, devuelva el número de cabezas que el Cerberus tendrá al final de los ataques.
>
>Ejemplo 1:
>
>```
>    cabezas_iniciales = 2
>    n = 1
>    ataques = 1
>
>    resultado: 
>    1 cabeza aparece después del ataque 1: 2 - 1 + 1 = 2
>    Cerberus tiene 2 cabezas al final
>```
>Ejemplo 2:
>```
>    cabezas_iniciales = 5
>    n = 10
>    ataques = 3
>
>    resultado:
>    10 cabezas aparecen después del ataque 1: 5 - 1 + 10 = 14
>    20 cabezas aparecen después del ataque 2: 14 - 1 + 2 * 10 = 33
>    60 cabezas aparecen después del ataque 3: 33 - 1 + 2 * 3 * 10 = 92
>    Cerberus tiene 92 cabezas al final
>```
>Nota: Tenga en cuenta que, tras cada ataque, una cabeza es restada al total anterior. En el ejemplo 1, a las dos cabezas iniciales se le resta una (la que se le cortó) y se le suma una.

El código desarrollado es el siguiente:

```typescript
function aux_factorial(num_decimal: number) : number {
    if (num_decimal == 1) return 1
    if (num_decimal == 0) return 1
    else return num_decimal * aux_factorial(num_decimal - 1)
}

function wonderWoman(cabezas_iniciales: number, n: number,  ataques: number) : number {
  let cabezas: number;
  let cabezas_aux: number;
  cabezas = cabezas_iniciales - ataques;
  cabezas_aux = 0;
  for (let i= 0; i < ataques; i++){
      cabezas_aux = aux_factorial(i+1) * n;
      cabezas = cabezas + cabezas_aux;
  }
  return cabezas;
}
```

La función *aux_factorial* es una función auxiliar que utiliza la recursividad para calcular el factorial de un número. Toma un número num_decimal como entrada y devuelve el factorial de ese número. Si el número es 1 o 0, devuelve 1.

La función wonderWoman toma tres argumentos: cabezas_iniciales, n, y ataques. Estos valores representan el número de cabezas iniciales que tiene la hidra, el número de cabezas que se generan con cada ataque de Wonder Woman, y el número de ataques que realiza Wonder Woman, respectivamente.

Primero, la función resta el número de ataques de las cabezas iniciales para obtener el número de cabezas restantes después de los ataques.

Luego, la función utiliza un bucle para iterar a través de cada ataque que realiza Wonder Woman. En cada iteración, se utiliza la función aux_factorial para calcular el número de cabezas que se generan en ese ataque, multiplicando n por el factorial de i+1. Luego, este número se agrega al número total de cabezas restantes.

Finalmente, la función devuelve el número total de cabezas restantes después de todos los ataques.

Comprobamos el código con los ejemplos que nos proporcionó el enunciado:

```typescript
console.log("wonderWoman(2, 1, 1) = " + wonderWoman(2, 1, 1));
console.log("wonderWoman(10, 5, 3) = " + wonderWoman(5, 10, 3));
```

### Ejercicio 9 - La Conjetura de Collatz <a name="ejercicio-9---la-conjetura-de-collatz"></a>
> [Volver al índice](#índice)

>La Conjetura de Collatz o el problema 3n + 1 parte de la definición de un entero positivo n. Si n es par, hay que calcular n / 2 y hacer que 
el valor resultante sea el nuevo n. Si n es impar, hay que calcular 3n + 1 y hacer que el valor resultante sea el nuevo n. El anterior proceso se repite de manera indefinida. La Conjetura de Collatz establece que no importa el valor que tome n inicialmente, dado que siempre se llegará 
al valor 1.
>
>Escriba una función collatz que reciba como argumento un número entero positivo y que cuente el número de repeticiones del proceso indicado más arriba hasta llegar a n = 1. La función deberá retornar dicho número de repeticiones:
>
>Ejemplo:
>
>Suponga la siguiente invocación a la función: collatz(10).
>
>Empezando con n = 10, tendriamos las siguientes iteraciones:
>```
>n = 10 (par)
>n = 5 (impar)
>n = 16 (par)
>n = 8 (par)
>n = 4 (par)
>n = 2 (par)
>n = 1 (fin)
>```
>Por lo tanto, collatz(10) debería devolver el valor numérico 6 (no se cuenta la iteración inicial donde n = 10).

El código desarrollado es el siguiente:

```typescript
function collatz(n: number): number {
    let count = 0;
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      count++;
    }
    return count;
  }

  console.log(collatz(10)); // 6
```

La función collatz toma un número n como argumento y comienza a iterar siguiendo las reglas de la conjetura de Collatz. Cada vez que se realiza una operación (ya sea dividir por 2 o multiplicar por 3 y sumar 1), se aumenta un contador count. La función sigue iterando hasta que n alcanza el valor de 1. Finalmente, la función devuelve el número de veces que se tuvo que iterar para llegar a 1.

En el ejemplo dado, se llama a la función collatz con el argumento 10. La salida impresa es 6, lo que significa que tomó 6 iteraciones para que el número 10 llegue a 1 siguiendo las reglas de la conjetura de Collatz.


### Ejercicio 10 - Validador de nombre usuario <a name="ejercicio-10---validador-de-nombre-usuario"></a>
> [Volver al índice](#índice)

>Cree una función isValidUsername que compruebe la validez de un nombre de usuario. La función recibirá como parámetro una cadena con un 
nombre de usuario y devolverá verdadero o falso según las siguientes condiciones:
>
>El nombre de usuario tiene que tener al menos 4 caracteres y no más de 30.
El nombre de usuario no puede empezar ni terminar con un guión bajo.
El nombre de usuario tiene que contener al menos una letra mayúscula, una letra minúscula, un número y algún símbolo especial ($,-,_).
No se permite la repetición de un mismo tipo de caracter más de dos veces seguidas.
Por ejemplo, el nombre de usuario "u__hello$122__" no sería válida ya que aparecen cinco letras seguidas y tres números seguidos. 
>Además, termina por _ y no contiene ninguna letra mayúscula.


```typescript

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
```
La función *isValidUsername* recibe un parámetro username que se supone es una cadena de texto que representa un nombre de usuario y retorna un valor booleano que indica si el nombre de usuario es válido según ciertas reglas implementadas mediante expresiones regulares.

La función utiliza expresiones regulares para verificar mediante ´test´ si el nombre de usuario cumple con las reglas establecidas. Si alguna de las condiciones no se cumple, la función retorna false. Si todas las condiciones se cumplen, la función retorna true.

Comprobamos que nuestro código funciona correctamente mediante las siguientes llamadas:

```typescript
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
```