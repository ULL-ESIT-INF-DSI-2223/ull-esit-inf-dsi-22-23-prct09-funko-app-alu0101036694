/* Ejercicio 4 - Conversor de estilo

A la hora de desarrollar código, hay diversas maneras de nombrar las variables, funciones, clases y otros elementos que componen el código. 
Un patrón muy usado en lenguajes de programación como Python es el Snake Case. Este patrón consiste en dividir los nombres de las variables y 
funciones usando guiones bajos entre palabras. Por ejemplo: sample_string o the_stealth_warrior.

Por el contrario, en lenguajes de programación como Java, C# y C/C++, predomina el denominado Camel Case. En este caso, los nombres de variables,
clases y funciones se separan escribiendo con mayúscula la primera letra de la siguiente palabra. Siguiendo los ejemplos anteriores: 
sampleString o theStealthWarrior.

Desarrolle dos funciones fromSnakeToCamelCase y fromCamelToSnakeCase que conviertan una cadena de texto de un formato a otro. Ambas funciones 
recibirán como parámetro una cadena de texto y devolverán otra cadena con el nuevo formato. La primera función recibirá una cadena de texto en 
formato Snake Case y la convertirá a formato Camel Case. La segunda función realizará la operación contraria.

Nota: Recuerde que las cadenas resultantes deben comenzar con minúscula. */

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


