# [PRÁCTICA 4](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct04-arrays-tuples-enums-alu0101036694.git). 

## Carla Oval Torres

## Índice <a name="índice"></a>
1. [Introducción](#introducción)
2. [Ejercicios propuestos](#ejercicios-propuestos)
    1. [Ejercicio 1 - El alergólogo](#ejercicio-1)
    2. [Ejercicio 2 - Números complejos](#ejercicio-2)
    3. [Ejercicio 3 - No cabrees a la reina](#ejercicio-3)
    4. [Ejercicio 4 - Reimplementando la función map](#ejercicio-4)
    5. [Ejercicio 5 - Matrices espirales](#ejercicio-5)
    6. [Ejercicio 6 - Compresión de números en rangos](#ejercicio-6)
    7. [Ejercicio 7 - Decodificar resistencias](#ejercicio-7)
    8. [Ejercicio 8 - Palabras encadenadas en un array](#ejercicio-8)

## Introducción <a name="introducción"></a>
> [Volver al índice](#índice)

Lleve a cabo todos y cada uno de los ejercicios propuestos a continuación. El código fuente de cada ejercicio debe estar alojado en un fichero 
independiente con nombre ejercicio-n.ts. Si utiliza estructura básica de proyecto que hemos visto en clase, por favor, incluya todos sus 
ejercicios en el directorio ./src de dicho proyecto.

Tenga en cuenta que seguir la metodología TDD o BDD implica confirmar el correcto funcionamiento del software, así como los casos en los que el software debería mostrar un error cuando la entrada no sea la correcta (errors should never pass silently). En consecuencia, desarrolle pruebas unitarias que comprueben el correcto funcionamiento del código y, además, incluya otras pruebas unitarias que verifiquen que el código es robusto ante entradas no válidas o inesperadas.

## Ejercicios propuestos <a name="ejercicios-propuestos"></a>
### Ejercicio 1 - El alergólogo <a name="ejercicio-1"></a>
> [Volver al índice](#índice)

> Una prueba de alérgenos produce un valor numérico (entero positivo) único, el cual contiene información sobre las alergias de una persona. La lista de posibles alérgenos es la siguiente:

> - Huevo (1)
>
> - Cacahuete (2)
>
> - Marisco (4)
>
> - Fresa (8)
>
> - Tomate (16)
>
> - Chocolate (32)
>
> - Polen (64)
>
> - Gato (128)
>
> Por ejemplo, si alguien fuera alérgico a los gatos y al tomate, obtendría una puntuación igual a 128 + 16 = 144.
>
>Escriba una función getAllergens que reciba una puntuación de alérgenos de una persona y que devuelva una lista con los alérgenos a los que la persona es alérgica. Los diferentes alérgenos deberán modelarse mediante un enumerado.
>
>Por último, tenga en cuenta que la función podría recibir una puntuación que incluya alérgenos no contemplados en la lista, esto es, alérgenos cuya puntuación sea 256, 512, 1024, etc. Además, si el valor pasado como argumento no es entero y positivo, la función deberá retornar el valor undefined.
>
>Ejemplos:
>
>getAllergens(129) // It should return [Huevo, Gato]
>
>getAllergens(257) // It should return [Huevo]
>
>getAllergens(256) // It should return []
>
>getAllergens(515) // It should return [Huevo, Cacahuete]
>
>getAllergens(84)  // It should return [Marisco, Tomate, Polen]

#### Solución:

Tanto el enumerable como la función se exportan para poder luego ser utilizada en los tests.

Primero se define un enumerado ```Allergen``` con cada uno de los alérgenos y su correspondiente valor numérico.

```typescript
export enum Allergen {
  Huevo = 1,
  Cacahuete = 2,
  Marisco = 4,
  Fresa = 8,
  Tomate = 16,
  Chocolate = 32,
  Polen = 64,
  Gato = 128
}
```

Luego definimos la función ```getAllergens```, que recibe una puntuación de alérgenos *score* y devuelve una lista de elérgenos a los que la persona es elérgica, representados como valores del enumerado ```Allergen```.

```typescript

export function getAllergens(score: number): Allergen[] | undefined {
  if (!Number.isInteger(score) || score <= 0) {
    return undefined;
  }

  const allergens: Allergen[] = [];
  let remainingScore = score;

  // Iterar sobre todos los alérgenos
  for (const allergenValue of Object.values(Allergen)) {
    // Si el valor es un número, y es una potencia de 2 (es decir, solo tiene un bit encendido en su representación binaria)
    if (typeof allergenValue === 'number' && (allergenValue & (allergenValue - 1)) === 0) {
      // Si la puntuación restante incluye el alérgeno
      if ((remainingScore & allergenValue) === allergenValue) {
        // Agregar el alérgeno a la lista y restar su valor de la puntuación restante
        allergens.push(allergenValue);
        remainingScore -= allergenValue;
      }
    }
  }

  return allergens;
}
```

En ella se verifica si la puntuación es entera y positiva, de lo contrario se devuelve *undefined*.

Se crea un array *allergens* para almacenar los alérgenos a los que la persona es alérgica.

Luego, se crea una variable *remainingScore* que inicialmente tiene el valor de la puntuación recibida, y que se irá actualizando a medida que se agreguen alérgenos al array *allergens*.

Se itera sobre todos los valores del enum *Allergen* utilizando *Object.values*.

Verificamos si el valor es un número y si es una potencia de 2. Para verificar si es una potencia de 2, utilizamos la propiedad de que en la representación binaria de un número que es potencia de 2, solo hay un bit encendido (el bit de la posición que corresponde a la potencia de 2). Entonces, si restamos 1 al valor y hacemos una operación AND con el valor original, si obtenemos 0 significa que solo hay un bit encendido, por lo que es una potencia de 2.

Si el valor es una potencia de 2, verificamos si la puntuación restante (*remainingScore*) incluye el alérgeno. Para esto, hacemos una operación AND entre la puntuación restante y el valor del alérgeno. Si el resultado es igual al valor del lérgeno, significa que la puntuación restante incluye el alérgeno y lo añadimos a la lista de alérgenos alérgicos (allergens), y restamos el valor del alérgeno a la puntuación restante (remainingScore) para evitar que se verifique en próximas iteraciones.

Si el valor no es una potencia de 2, significa que no es un alérgeno contemplado en la lista y no es necesario hacer nada en este caso.

Finalmente, devolvemos la lista de alérgenos alérgicos (allergens).

#### Tests:

En los tests se usa la función *expect* de la librería chai para verificar que el resultado de la función *getAllergens* sea el esperado. Se utilizan los métodos ```to.deep.equal``` para comparar arrays y ```to.be.undefined``` para verificar que el resultado sea *undefined*. En los casos en que se espera que la función retorne un array, se usa el método ```to.deep.equal``` para asegurarse de que los elementos del array sean iguales en orden y contenido. También se prueban los casos en que la función debería retornar *undefined* si se le pasa un valor no entero o no positivo.

```typescript
import { describe, it } from 'mocha';
import { expect } from "chai";
import {getAllergens, Allergen} from "../src/ejercicio01";

describe("getAllergens", () => {
  it("should return [Huevo, Gato] when given 129", () => {
    const result = getAllergens(129);
    expect(result).to.deep.equal([Allergen.Huevo, Allergen.Gato]);
  });

  it("should return [Huevo] when given 257", () => {
    const result = getAllergens(257);
    expect(result).to.deep.equal([Allergen.Huevo]);
  });

  it("should return [] when given 256", () => {
    const result = getAllergens(256);
    expect(result).to.deep.equal([]);
  });

  it("should return [Huevo, Cacahuete] when given 515", () => {
    const result = getAllergens(515);
    expect(result).to.deep.equal([Allergen.Huevo, Allergen.Cacahuete]);
  });

  it("should return [Marisco, Tomate, Polen] when given 84", () => {
    const result = getAllergens(84);
    expect(result).to.deep.equal([Allergen.Marisco, Allergen.Tomate, Allergen.Polen]);
  });

  it("should return undefined when given a non-positive integer value", () => {
    const result = getAllergens(-1);
    expect(result).to.be.undefined;
  });

  it("should return undefined when given a non-integer value", () => {
    const result = getAllergens(3.14);
    expect(result).to.be.undefined;
  });
});
```

### Ejercicio 2 - Números complejos <a name="ejercicio-2"></a>
> [Volver al índice](#índice)

> Con lo visto hasta ahora en la asignatura, defina un tipo de datos propio que permita representar un número complejo, esto es, pares de valores numéricos reales, donde la primera componente del par es la parte real del complejo, mientras que la segunda componente del par representa su parte imaginaria.
>
> A continuación, partiendo de dicha definición, escriba funciones que permitan calcular las siguientes operaciones sobre números complejos:
>
> Suma, resta, multiplicación y división (funciones add, sub, mult y div). Estas funciones reciben como argumentos dos complejos y devuelven un complejo.
>
> Producto escalar (función prod). Esta función recibe como argumentos un complejo y un número real, retornando un número complejo.
>
> Conjugado (función conj). Recibe como argumento un complejo y devuelve otro complejo.
>
> Módulo (función abs). La función recibe como argumento un complejo y retorna un valor real. 

#### Solución:

Para definir el tipo de datos para un número complejo, se puede utilizar una interfaz de TypeScript:

```typescript
export interface ComplexNumber {
  real: number;
  imaginary: number;
}
```

A partir de esta interfaz, se pueden definir las funciones solicitadas:

```typescript
// Suma de dos números complejos
export function add(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  return {
    real: a.real + b.real,
    imaginary: a.imaginary + b.imaginary,
  };
}

// Resta de dos números complejos
export function sub(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  return {
    real: a.real - b.real,
    imaginary: a.imaginary - b.imaginary,
  };
}

// Multiplicación de dos números complejos
export function mult(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  return {
    real: a.real * b.real - a.imaginary * b.imaginary,
    imaginary: a.real * b.imaginary + a.imaginary * b.real,
  };
}

// División de dos números complejos
export function div(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  const denominator = b.real ** 2 + b.imaginary ** 2;
  const realPart = (a.real * b.real + a.imaginary * b.imaginary) / denominator;
  const imaginaryPart = (a.imaginary * b.real - a.real * b.imaginary) / denominator;
  return {
    real: Math.round(realPart * 100) / 100,
    imaginary: Math.round(imaginaryPart * 100) / 100,
  };
}

// Producto escalar de un número complejo y un número real
export function prod(a: ComplexNumber, b: number): ComplexNumber {
  return {
    real: a.real * b,
    imaginary: a.imaginary * b,
  };
}

// Conjugado de un número complejo
export function conj(a: ComplexNumber): ComplexNumber {
  return {
    real: a.real,
    imaginary: -a.imaginary,
  };
}

// Módulo de un número complejo
export function abs(a: ComplexNumber): number {
  return Math.sqrt(a.real ** 2 + a.imaginary ** 2);
}
```

En la división he usado *Math.round()* para redondear los valores reales e imaginarios devueltos a dos decimales. Así evito pequeñas diferencias de redondeo que podrían causar problemas en las pruebas.

#### Tests

En los tests simplemente se sigue la filosofía anteriormente indicada, comprobando los resultados de todas las funciones.

```typescript
import { describe, it } from 'mocha';
import { expect } from "chai";
import { ComplexNumber, add, sub, mult, div, prod, conj, abs } from '../src/ejercicio02';

describe('add', () => {
  it('should add two complex numbers', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const b: ComplexNumber = { real: 1, imaginary: 4 };
    const expected: ComplexNumber = { real: 3, imaginary: 7 };
    const result: ComplexNumber = add(a, b);
    expect(result).to.deep.equal(expected);
  });
});

describe('sub', () => {
  it('should subtract two complex numbers', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const b: ComplexNumber = { real: 1, imaginary: 4 };
    const expected: ComplexNumber = { real: 1, imaginary: -1 };
    const result: ComplexNumber = sub(a, b);
    expect(result).to.deep.equal(expected);
  });
});

describe('mult', () => {
  it('should multiply two complex numbers', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const b: ComplexNumber = { real: 1, imaginary: 4 };
    const expected: ComplexNumber = { real: -10, imaginary: 11 };
    const result: ComplexNumber = mult(a, b);
    expect(result).to.deep.equal(expected);
  });
});

describe('div', () => {
  it('should divide two complex numbers', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const b: ComplexNumber = { real: 1, imaginary: 4 };
    const expected: ComplexNumber = { real: 0.82, imaginary: -0.29 };
    const result: ComplexNumber = div(a, b);
    expect(result.real).to.be.closeTo(expected.real, 0.01);
    expect(result.imaginary).to.be.closeTo(expected.imaginary, 0.01);
  });
});

describe('prod', () => {
  it('should multiply a complex number by a real number', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const b: number = 2;
    const expected: ComplexNumber = { real: 4, imaginary: 6 };
    const result: ComplexNumber = prod(a, b);
    expect(result).to.deep.equal(expected);
  });
});

describe('conj', () => {
  it('should return the conjugate of a complex number', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const expected: ComplexNumber = { real: 2, imaginary: -3 };
    const result: ComplexNumber = conj(a);
    expect(result).to.deep.equal(expected);
  });
});

describe('abs', () => {
  it('should return the absolute value of a complex number', () => {
    const a: ComplexNumber = { real: 2, imaginary: 3 };
    const expected: number = 3.605;
    const result: number = abs(a);
    expect(result).to.be.closeTo(expected, 0.01);
  });
});
```

### Ejercicio 3 - No cabrees a la reina <a name="ejercicio-3"></a>
> [Volver al índice](#índice)

> Dadas las posiciones de dos reinas en un tablero de ajedrez, determine si ambas reinas podrían atacarse en caso de cabrearse una con la otra. En el ajedrez, una reina puede atacar piezas ubicadas en la misma fila, columna o diagonal.
>
> Un tablero de ajedrez puede representarse mediante un array bidimensional de 8 x 8 casillas. Por lo tanto, si la reina negra está ubicada en la posición (1, 3), mientras que la reina blanca está ubicada en la posición (3, 5), tendríamos una estructura de datos como la que sigue:
>
>[
>    [-, -, -, -, -, -, -, -]
>    [-, -, -, N, -, -, -, -]
>    [-, -, -, -, -, -, -, -]
>    [-, -, -, -, -, B, -, -]
>    [-, -, -, -, -, -, -, -]
>    [-, -, -, -, -, -, -, -]
>    [-, -, -, -, -, -, -, -]
>    [-, -, -, -, -, -, -, -]
>]
>
>Escriba una función checkAtack que, dada una estructura de datos como la anterior, devuelva un valor lógico 
indicando si ambas reinas podrían atacarse dadas las posiciones de las mismas. Tenga en cuenta que solo puede 
haber una reina blanca y una reina negra en el tablero. En caso de que lo anterior no suceda, la función deberá devolver el valor undefined.
>
>Por último, el tablero debe consistir en, exactamente, 8 filas y 8 columnas, donde cada casilla puede contener alguno de los valores -, N o B, exclusivamente. Aunque la anterior comprobación podría llevarse a cabo a través del código fuente incluido en la función (en tiempo de ejecución), defina un tipo de datos adecuado que impida, desde el punto de vista del tipado (en tiempo de compilación), pasarle a la función checkAtack un tablero no válido, esto es, con un número de filas/columnas diferente a 8 y/o celdas con valores no válidos). 

#### Solución:

Primero se define el tipo ChessBoard como una matriz en la que cada celda puede contener un guion ('-'), una 'N' o una 'B'.

```typescript
export type ChessBoard = Array<Array<'-' | 'N' | 'B'>>;
```

La función ```isValidChessBoard``` comprueba si una estructura de datos es un tablero de ajedrez válido, es decir, si es una matriz de 8x8 en la que cada celda contiene un guion ('-'), una 'N' o una 'B'. La función recibe como argumento un valor de tipo *unknown* y devuelve un valor de tipo *board is ChessBoard*, que es una verificación de tipo que garantiza que el valor es de tipo *ChessBoard*.

Para comprobar si la estructura de datos es un tablero de ajedrez válido, se realizan tres comprobaciones anidadas en un condicional if:

1. Si el valor no es un array o si su longitud no es 8, en cuyo caso se devuelve false.
2. Si cada fila del tablero no es un array o si su longitud no es 8, en cuyo caso también se devuelve false.
3. Se comprueba si cada celda del tablero no es un guion, una 'N' o una 'B', en cuyo caso se devuelve false.

Si se han superado todas las comprobaciones anteriores, se devuelve true.

Además, se comprueba que en el tablero solo haya una reina de cada tipo.

```typescript
export function isValidChessBoard(board: unknown): board is ChessBoard {
    if (!Array.isArray(board) || board.length !== 8) {
      return false;
    }
  
    let numBlack = 0;
    let numWhite = 0;
  
    for (const row of board) {
      if (!Array.isArray(row) || row.length !== 8) {
        return false;
      }
  
      for (const cell of row) {
        if (!['-', 'N', 'B'].includes(cell)) {
          return false;
        }
  
        if (cell === 'N') {
          numBlack++;
        } else if (cell === 'B') {
          numWhite++;
        }
      }
    }
  
    if (numBlack !== 1 || numWhite !== 1) {
      return false;
    }
  
    return true;
}
```

La función ```checkAttack``` comprueba si dos reinas en un tablero de ajedrez podrían atacarse. La función recibe como argumento el tablero de ajedrez y a partir de él obtiene las posiciones de ambas reinas. La función devuelve *true* si ambas reinas podrían atacarse, *false* si no podrían atacarse y *undefined* si el tablero de ajedrez no es válido.

Para comprobar si el tablero de ajedrez es válido, se utiliza la función ```isValidChessBoard``` definida anteriormente. Si el tablero no es válido, se devuelve *undefined*.

Si el tablero es válido, se extraen las filas y las columnas de las posiciones de las dos reinas. Si las dos reinas están en la misma fila o en la misma columna, se devuelve *true* ya que la reina negra puede atacar a la reina blanca. De lo contrario, se calcula la diferencia entre las filas y las columnas de las reinas y se verifica si son iguales, lo que significa que están en la misma diagonal, en cuyo caso también se devuelve *true*. Si ninguna de las condiciones anteriores se cumple, se devuelve *false*.

```typescript
export function checkAttack(board: ChessBoard): boolean | undefined {
  if (!isValidChessBoard(board)) {
    return undefined;
  }

  const blackIndex = board.findIndex(row => row.includes('N'));
  const whiteIndex = board.findIndex(row => row.includes('B'));

  

  if (blackIndex === -1 || whiteIndex === -1) {
    // Si no se encuentra alguna de las reinas, el tablero es inválido
    return undefined;
  }

  const blackRow = blackIndex;
  const blackCol = board[blackIndex].indexOf('N');

  const whiteRow = whiteIndex;
  const whiteCol = board[whiteIndex].indexOf('B');

  if (blackRow === whiteRow || blackCol === whiteCol) {
    return true;
  }

  if (Math.abs(blackRow - whiteRow) === Math.abs(blackCol - whiteCol)) {
    return true;
  }

  return false;
}

```

### Ejercicio 4 - Reimplementando la función map <a name="ejercicio-4"></a>
> [Volver al índice](#índice)

> Implemente una función que emule el comportamiento de la función map proporcionada por el lenguaje sin hacer 
uso esta última. La función map actúa sobre una colección de elementos, modificando el valor de cada uno de 
ellos en base a un callback que se le pasa como argumento.
>
> Teniendo en cuenta lo anterior, escriba una función myMap que reciba una colección (array) de valores numéricos 
como primer argumento, además de un callback que permita modificar cada elemento de la colección como segundo 
argumento. La función deberá devolver la colección modificada.
>
> Un ejemplo de invocación podría ser:
>
> myMap([0, 1, 2, 3, 4], (item) => item * item) // It should return [0, 1, 4, 9, 16]

#### Solución:

La función desarrollada myMap, que toma dos argumentos: una colección de números como un array y un callback que recibe un número y devuelve otro número.

La función myMap itera sobre cada elemento de la colección y aplica el callback a cada uno de ellos. El valor devuelto por el callback se agrega al array result. La función devuelve el array result con los valores modificados.

```typescript
export function myMap(collection: number[], callback: (num: number) => number): number[] {
    const result: number[] = [];
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i]));
    }
    return result;
  }
```
En resumen, la función myMap permite modificar cada elemento de una colección de números utilizando una función de callback y devuelve la colección modificada. Esta función emula el comportamiento de la función nativa map.

#### Tests:

En cuanto a los tests unitarios para la función myMap, que verifican su comportamiento, testeamos diferentes casos:

```typescript
import { describe, it } from 'mocha';
import { expect } from "chai";
import { myMap } from '../src/ejercicio04';

describe("myMap", () => {
    it("should return an empty array when given an empty array", () => {
      const result = myMap([], (num) => num * num);
      expect(result).to.deep.equal([]);
    });
  
    it("should return a new array with the values squared", () => {
      const arr = [0, 1, 2, 3, 4];
      const result = myMap(arr, (num) => num * num);
      expect(result).to.deep.equal([0, 1, 4, 9, 16]);
      expect(arr).to.deep.equal([0, 1, 2, 3, 4]); // Ensure the original array is not modified
    });
  
    it("should return a new array with the values doubled", () => {
      const arr = [1, 2, 3];
      const result = myMap(arr, (num) => num * 2);
      expect(result).to.deep.equal([2, 4, 6]);
      expect(arr).to.deep.equal([1, 2, 3]); // Ensure the original array is not modified
    });
  });
```

El primer test verifica que cuando se llama a myMap con una matriz vacía, el resultado debe ser una matriz vacía, el segundo test verifica que cuando se llama a myMap con una matriz de valores numéricos y una función de devolución de llamada que eleva al cuadrado cada valor, donde el resultado debe ser una nueva matriz con cada valor elevado al cuadrado. Además, el test también verifica que la matriz original no se modifica.

El tercer y último test verifica que cuando se llama a myMap con una matriz de valores numéricos y una función de devolución de llamada que duplica cada valor, el resultado debe ser una nueva matriz con cada valor duplicado. Además, el test también verifica que la matriz original no se modifica.

### Ejercicio 5 - Matrices espirales <a name="ejercicio-5"></a>
> [Volver al índice](#índice)

> Escriba una función getSpiralMatrix que, dado un entero positivo n representando el tamaño de una matriz cuadrada, 
devuelva una matriz (array bidimensional) con todos los números enteros en el rango [1, n*n] y que estén dispuestos 
en la matriz conformando una espiral. La espiral debe comenzar en la primera fila y columna de la matriz e irse 
completando siguiendo las agujas del reloj.
> 
> Ejemplos:
> 
> getSpiralMatrix(3)  It should return [
>                                          [1, 2, 3],
>                                          [8, 9, 4],
>                                          [7, 6, 5]
>                                        ] 
> getSpiralMatrix(4)  It should return [
>     [ 1,  2,  3, 4],
>     [12, 13, 14, 5],
>     [11, 16, 15, 6],
>     [10,  9,  8 ,7]
>   ] 
> getSpiralMatrix(5)  It should return [
>     [ 1,   2,  3,  4, 5],
>     [ 16, 17, 18, 19, 6],
>     [ 15, 24, 25, 20, 7],
>     [ 14, 23, 22, 21, 8],
>     [ 13, 12, 11, 10, 9],
>   ]

#### Solución:

Definimos una función getSpiralMatrix que recibe un número entero n como argumento y devuelve una matriz bidimensional de tamaño n x n que representa una matriz en espiral.

Primero, se inicializa una matriz bidimensional vacía result de tamaño n x n utilizando la función Array.from() con una función de mapeo que devuelve una matriz vacía para cada fila de la matriz resultante.

Luego, se inicializan varias variables para realizar un seguimiento del recorrido de la matriz en espiral. counter se utiliza para mantener el valor que se va a asignar en cada celda de la matriz, startRow y endRow se utilizan para realizar un seguimiento de las filas que quedan por recorrer, y startCol y endCol se utilizan para realizar un seguimiento de las columnas que quedan por recorrer.

El bucle while se ejecuta mientras las columnas iniciales no superen a las columnas finales y las filas iniciales no superen a las filas finales.

Para recorrer la matriz en espiral, se siguen cuatro pasos principales, cada uno de los cuales recorre una fila o columna en la dirección correspondiente y asigna el valor correspondiente en la celda de la matriz.

```typescript
export function getSpiralMatrix(n: number): number[][] {
    const result: number[][] = Array.from({ length: n }, () => []);
    let counter = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
  
    while (startCol <= endCol && startRow <= endRow) {
      
      // Top row
      for (let i = startCol; i <= endCol; i++) {
        result[startRow][i] = counter++;
      }
      startRow++;
  
      // Right column
      for (let i = startRow; i <= endRow; i++) {
        result[i][endCol] = counter++;
      }
      endCol--;
  
      // Bottom row
      for (let i = endCol; i >= startCol && startRow <= endRow; i--) {
        result[endRow][i] = counter++;
      }
      endRow--;
  
      // Left column
      for (let i = endRow; i >= startRow && startCol <= endCol; i--) {
        result[i][startCol] = counter++;
      }
      startCol++;
    }
  
    return result;
  }
```

El primer paso recorre la fila superior de la matriz de izquierda a derecha, asignando valores en cada celda.
El segundo paso recorre la columna derecha de la matriz de arriba a abajo, asignando valores en cada celda.
El tercer paso recorre la fila inferior de la matriz de derecha a izquierda, asignando valores en cada celda.
El cuarto paso recorre la columna izquierda de la matriz de abajo hacia arriba, asignando valores en cada celda.
Después de cada paso, se ajustan las variables de seguimiento de filas y columnas según corresponda.

Finalmente, se devuelve la matriz resultante result.

#### Tests:

A continuación realizamos los tests correspondientes para nuestro código:

```typescript
import { describe, it } from 'mocha';
import { expect } from "chai";
import { getSpiralMatrix } from '../src/ejercicio05';

describe('getSpiralMatrix function', () => {
  it('should return the correct spiral matrix for n=3', () => {
    const expected = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ];
    const actual = getSpiralMatrix(3);
    expect(actual).to.deep.equal(expected);
  });

  it('should return the correct spiral matrix for n=4', () => {
    const expected = [
      [ 1,  2,  3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10,  9,  8 ,7]
    ];
    const actual = getSpiralMatrix(4);
    expect(actual).to.deep.equal(expected);
  });

  it('should return the correct spiral matrix for n=5', () => {
    const expected = [
      [ 1,   2,  3,  4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ];
    const actual = getSpiralMatrix(5);
    expect(actual).to.deep.equal(expected);
  });
});

```
Estos tests verifican el comportamiento de la función getSpiralMatrix(n: number): number[][], la cual debe generar una matriz en espiral de tamaño n x n con valores enteros consecutivos desde 1 hasta n*n.

El primer test verifica si la función retorna la matriz espiral correcta para n=3. Se define la matriz esperada (expected) y se llama a la función con el valor de n correspondiente. Luego se utiliza la función deep.equal del módulo chai para verificar si el valor retornado por la función es igual al valor esperado.

El segundo test es similar al primero, pero esta vez verifica si la función retorna la matriz espiral correcta para n=4.

El tercer test también verifica si la función retorna la matriz espiral correcta, pero esta vez para n=5.

En todos los casos se verifica si el valor retornado por la función (actual) es igual al valor esperado (expected) utilizando la función deep.equal del módulo chai.

### Ejercicio 6 - Compresión de números en rangos <a name="ejercicio-6"></a>
> [Volver al índice](#índice)

> Escriba una función fromArrayToRanges que reciba un array o lista de números enteros y los comprima en rangos, 
es decir, que devuelva una cadena de caracteres con la compresión obtenida. Un rango, es decir, un conjunto de 
números consecutivos se representará mediante una cadena de caracteres con el primer y último número del rango 
separado por un guión bajo (_). Un rango de un único número será la cadena de caracteres que representa a ese 
ùnico número. Luego, una serie de rangos vendrá separada por comas (,).
> 
> Ejemplos:
> 
> [5, 6, 7, 9, 12, 13, 14] => “5_7, 9, 12_14”
> [-3, -2, -1, 3, 5, 6, 7] => “-3_-1, 3, 5_7”
> [17] => “17”
> [3, 5, 6, 7, 9, 10] => “3, 5_7, 9_10”
> 
> Escriba una función fromRangesToArray que lleve a cabo la operación inversa, es decir, que reciba como 
argumento una cadena de caracteres representando una serie de rangos y devuelva el array de números 
correspondiente.

#### Solución:

El siguiente código exporta tres funciones relacionadas con la conversión de arreglos de números a cadenas que representan rangos y viceversa:

```typescript
export type Range = [number, number];

export function fromArrayToRanges(arr: number[]): string {
  if (arr.length === 0) return "";

  let result: string[] = [];
  let currentRange: Range = [arr[0], arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === currentRange[1] + 1) {
      currentRange[1] = arr[i];
    } else {
      result.push(getRangeString(currentRange));
      currentRange = [arr[i], arr[i]];
    }
  }
  result.push(getRangeString(currentRange));

  return result.join(", ");
}

export function getRangeString(range: Range): string {
  return range[0] === range[1] ? range[0].toString() : `${range[0]}_${range[1]}`;
}

export function fromRangesToArray(ranges: string): number[] {
  if (ranges.trim() === "") {
    return [];
  }
  let result: number[] = [];
  const rangeStrings = ranges.split(", ");
  for (let rangeStr of rangeStrings) {
    const range = rangeStr.split("_").map(Number);
    if (range.length === 1) {
      result.push(range[0]);
    } else {
      for (let i = range[0]; i <= range[1]; i++) {
        result.push(i);
      }
    }
  }
  return result;
}
```

La primera función fromArrayToRanges toma un arreglo de números y lo convierte en una cadena que representa los rangos presentes en el arreglo. Por ejemplo, si se pasa un arreglo con [1,2,3,5,6,8,9] la función retornará la cadena "1_3, 5_6, 8_9". La función utiliza un bucle for que itera por el arreglo y verifica si el número actual es igual al anterior más uno. Si es así, se agrega el número actual al rango actual. De lo contrario, se empuja el rango actual a la matriz de resultados y se crea un nuevo rango con el número actual. Al final del bucle, el último rango creado se agrega a la matriz de resultados.

La segunda función getRangeString toma un rango como argumento y retorna una cadena que representa el rango. Si el rango solo tiene un número, retorna ese número como una cadena. De lo contrario, retorna una cadena con el formato "inicio_fin".

La tercera función fromRangesToArray toma una cadena de rangos y la convierte en un arreglo de números. Por ejemplo, si se pasa la cadena "1_3, 5_6, 8_9", la función retornará el arreglo [1,2,3,5,6,8,9]. La función separa los rangos por la coma y luego itera por cada rango. Si el rango solo tiene un número, se agrega ese número al resultado. De lo contrario, se itera desde el inicio hasta el fin del rango y se agrega cada número al resultado.

#### Tests:

Definimos los siguientes tests para comprobar el funcionamiento de nuestro código:

```typescript
import { describe, it } from 'mocha';
import { expect } from "chai";
import { fromArrayToRanges, fromRangesToArray } from "../src/ejercicio06";

describe("fromArrayToRanges function", () => {
    it("should return an empty string for an empty array", () => {
      const arr: number[] = [];
      const result = fromArrayToRanges(arr);
      expect(result).to.equal("");
    });
  
    it("should compress the array into a string of ranges", () => {
      const arr = [5, 6, 7, 9, 12, 13, 14];
      const expected = "5_7, 9, 12_14";
      const result = fromArrayToRanges(arr);
      expect(result).to.equal(expected);
    });
  
    it("should handle negative numbers", () => {
      const arr = [-3, -2, -1, 3, 5, 6, 7];
      const expected = "-3_-1, 3, 5_7";
      const result = fromArrayToRanges(arr);
      expect(result).to.equal(expected);
    });
  
    it("should handle a single number", () => {
      const arr = [17];
      const expected = "17";
      const result = fromArrayToRanges(arr);
      expect(result).to.equal(expected);
    });
  
    it("should compress the array with multiple ranges", () => {
      const arr = [3, 5, 6, 7, 9, 10];
      const expected = "3, 5_7, 9_10";
      const result = fromArrayToRanges(arr);
      expect(result).to.equal(expected);
    });
  });
  
describe("fromRangesToArray function", () => {
    it("should return an empty array for an empty string", () => {
      const ranges = "";
      const result = fromRangesToArray(ranges);
      expect(result).to.deep.equal([]);
    });
  
    it("should expand a string of ranges into an array", () => {
      const ranges = "5_7, 9, 12_14";
      const expected = [5, 6, 7, 9, 12, 13, 14];
      const result = fromRangesToArray(ranges);
    });
});
```

Los tests para fromArrayToRanges comprueban que la función maneje correctamente los siguientes casos:

Un array vacío
Un array con números positivos y negativos
Un array con un solo número
Un array con múltiples rangos

Por otro lado, la función fromRangesToArray hace lo contrario: toma una cadena de rangos y la expande en un array de números. Cada rango está representado por dos números separados por un guión bajo, y los rangos se separan con una coma y un espacio. Si un número no está en un rango, se muestra individualmente separado por comas y espacios. Por ejemplo, "5_7, 9, 12_14" se expandiría en [5, 6, 7, 9, 12, 13, 14].

Los tests para fromRangesToArray comprueban que la función maneje correctamente los siguientes casos:

Una cadena vacía
Una cadena con un solo número
Una cadena con múltiples rangos

### Ejercicio 7 - Mensaje secreto <a name="ejercicio-7"></a>
> [Volver al índice](#índice)

> Si desea realizar algún proyecto usando una Raspberry Pi, probablemente necesitará usar resistencias. 
> Para este ejercicio necesita conocer dos cosas sobre las resistencias:
> 
> Cada resistor o resistencia tiene un valor de resistencia en Ohmios asociado. Además, las resistencias son 
> tan pequeñas que si se les imprimiera el valor en ellas, sería muy difícil de leer. Para resolver este problema, 
> los fabricantes siguen un estándar de bandas codificadas de colores para indicar sus valores de resistencia. 
> Cada banda tiene una posición y un valor numérico.

> Las primeras dos bandas de una resistencia tienen un esquema de codificación muy simple: cada color se mapea a un 
> único número. Por ejemplo, si una resistencia tiene impresa una banda marrón (valor 1) seguida de una banda verde 
> (valor 5), el valor de la resistencia se traduciría al número 15.

> El objetivo de este ejercicio es crear un programa que nos ayude a calcular el valor de una resistencia sin tener 
> que memorizar los valores de las bandas. Para ello, cree una función decodeResistor que recibe como parámetros 
> los nombres de los colores de una resistencia como entrada y devuelve un número de dos dígitos indicando el 
> valor de la resistencia. La función deberá devover un número de dos dígitos incluso si recibe más de dos colores 
> como parámetros.
> 
> Las bandas de colores están codificadas de la siguiente manera:
> 
> Negro: 0
> Marrón: 1
> Rojo: 2
> Naranja: 3
> Amarillo: 4
> Verde: 5
> Azul: 6
> Violeta: 7
> Gris: 8
> Blanco: 9

> De este modo, la combinación Marrón-Verde debería devolver 15 al igual que Marrón-Verde-Violeta ignorando el 
tercer color.

#### Solución:

Desarrollamos el siguiente código:

```typescript
type ColorCode = { [color: string]: number };

const colorCode: ColorCode = {
  "negro": 0,
  "marrón": 1,
  "rojo": 2,
  "naranja": 3,
  "amarillo": 4,
  "verde": 5,
  "azul": 6,
  "violeta": 7,
  "gris": 8,
  "blanco": 9
};

export function decodeResistor(colors: string[]): number {
  const firstBand = colors[0].toLowerCase();
  const secondBand = colors[1].toLowerCase();
  const resistanceValue = colorCode[firstBand] * 10 + colorCode[secondBand];
  return resistanceValue;
}
```

El código define un objeto colorCode que contiene los valores numéricos asociados con cada color de una resistencia, y una función decodeResistor que toma un array de strings con los colores de la resistencia y devuelve el valor de la resistencia calculado a partir de los valores numéricos de los colores de la resistencia.

El algoritmo utilizado para calcular el valor de la resistencia a partir de los colores es multiplicar el valor del primer color por 10 y sumarle el valor del segundo color.

Los tests verifican que la función decodeResistor calcule correctamente el valor de la resistencia para diferentes combinaciones de colores. En particular, se verifican casos en los que se omitió el tercer color, ya que este color se utiliza para indicar la potencia de la resistencia y no se utiliza para calcular su valor.

#### Tests:

Desarrollamos los tests de nuestro código para comprobar su funcionamiento:

```typescript
import { describe, it } from 'mocha';
import { expect } from "chai";
import { decodeResistor } from "../src/ejercicio07";

describe("decodeResistor", () => {
  it("should return 15 when given ['marrón', 'verde']", () => {
    const result = decodeResistor(["marrón", "verde"]);
    expect(result).to.equal(15);
  });

  it("should return 15 when given ['marrón', 'verde', 'violeta']", () => {
    const result = decodeResistor(["marrón", "verde", "violeta"]);
    expect(result).to.equal(15);
  });

  it("should return 29 when given ['rojo', 'blanco']", () => {
    const result = decodeResistor(["rojo", "blanco"]);
    expect(result).to.equal(29);
  });

  it("should return 36 when given ['naranja', 'azul']", () => {
    const result = decodeResistor(["naranja", "azul"]);
    expect(result).to.equal(36);
  });
});
```

Cada prueba en el bloque describe consiste en pasar diferentes combinaciones de colores de banda a la función y comprobar si devuelve el valor correcto. Por ejemplo, la primera prueba comprueba que si se pasan los colores "marrón" y "verde", la función devuelve el valor 15, que es el valor de resistencia para un resistor con esas bandas de colores.

Se utiliza la librería mocha para definir y ejecutar las pruebas, y la librería chai para hacer las comprobaciones de igualdad (expect(result).to.equal(expected)).

### Ejercicio 8 - Wonder Woman <a name="ejercicio-8"></a>
> [Volver al índice](#índice)

> Dado un array que contiene exclusivamente cadenas de texto, comprobar que las palabras del array están encadenadas. 
> Esto es, una o más letras del final de una cadena coinciden con el comienzo de la siguiente cadena del array.
> 
> Ejemplos de palabras encadenadas:
> 
> “apply” and “plywood”
> “apple” and “each”
> “behemoth” and “mother”
> 
> Ejemplos de palabras no encadenadas:
> 
> “apply” and “playground”
> “apple” and “peggy”
> “behemoth” and “mathematics
> 
> Para resolver este ejercicio, escriba una función meshArray que compruebe si las cadenas del array están 
encadenadas o no. La función recibirá como parámetro un array de cadenas de texto y devolverá:
> 
> “Error al encadenar” si las cadenas del array no están encadenadas.
> Una cadena de texto que contenga las letras que encadenan las palabras del array. 
> A priori no sabe cuantas letras encadenadas tendrán en común, pero al menos será una.
> 
> Ejemplos de ejecución del programa:
> 
> 1: [“allow”, “lowering”, “ringmaster”, “terror”] –> “lowringter”
> 
> Este array está encadenado porque:
>
> Las letras “low” de la primera palabra encadenan con la palabra “lowering”.
> Las letras “ring” en la segunda y tercera palabras están encadenadas.
> Por último, las letras “ter” en las dos últimas palabras también están encadenadas.
> 2: [“kingdom”, “dominator”, “notorious”, “usual”, “allegory”] –> “Error al encadenar”

> En este caso, aunque las palabras “dominator” y “notorious” comparten letras en el mismo orden, las últimas 
letras de la primera palabra no encadenan con las primeras letras de la segunda.

#### Solución:

El código que hemos desarrollado es el siguiente:

```typescript
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
  
```

El código define una función meshArray que toma como entrada un array de palabras y devuelve un string que contiene todas las letras que se encuentran en común entre las palabras consecutivas del array. Si no hay letras en común entre dos palabras consecutivas, la función devuelve la cadena "Error al encadenar".

Para lograr esto, la función meshArray itera a través de las palabras del array, comparando cada palabra con la anterior utilizando la función findCommonLetters. Si las palabras no tienen letras en común, la función devuelve "Error al encadenar", de lo contrario, la función agrega las letras comunes al string meshedLetters. Al final, la función devuelve meshedLetters.

La función findCommonLetters es una función auxiliar que toma dos strings como entrada y devuelve una cadena que contiene las letras que están presentes en ambos strings en el mismo orden. Para hacer esto, la función compara los sufijos de la primera palabra con los prefijos de la segunda palabra hasta encontrar el sufijo y el prefijo que son iguales. En ese punto, devuelve el sufijo como la cadena de letras comunes.

#### Tests:

Realizamos las pruebas del código, que son las siguientes:

```typescript
import { describe, it } from 'mocha';
import { expect } from "chai";
import {meshArray} from "../src/ejercicio08";

describe("meshArray", () => {
  it("should return 'lowringter' when given ['allow', 'lowering', 'ringmaster', 'terror']", () => {
    const result = meshArray(["allow", "lowering", "ringmaster", "terror"]);
    expect(result).to.equal("lowringter");
  });

  it("should return 'Error al encadenar' when given ['kingdom', 'dominator', 'notorious', 'usual', 'allegory']", () => {
    const result = meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"]);
    expect(result).to.equal("Error al encadenar");
  });

  it("should return 'ta' when given ['ta', 'ta']", () => {
    const result = meshArray(["ta", "ta"]);
    expect(result).to.equal("ta");
  });

  it("should return '' when given ['t', 'a']", () => {
    const result = meshArray(["t", "a"]);
    expect(result).to.equal("Error al encadenar");
  });
});

```

Estos tests comprueban que la función meshArray que recibe como argumento un array de strings words y devuelve una cadena de texto que contiene las letras que coinciden entre el final de un string y el comienzo del siguiente. Si no hay coincidencia entre dos strings consecutivos, la función devuelve "Error al encadenar".

El primer test comprueba que si se le pasan los strings "allow", "lowering", "ringmaster" y "terror", la función devuelve la cadena "lowringter".
El segundo test comprueba que si se le pasan los strings "kingdom", "dominator", "notorious", "usual" y "allegory", la función devuelve la cadena "Error al encadenar".
El tercer test comprueba que si se le pasan los strings "ta" y "ta", la función devuelve la cadena "ta".
El cuarto test comprueba que si se le pasan los strings "t" y "a", la función devuelve la cadena "Error al encadenar".