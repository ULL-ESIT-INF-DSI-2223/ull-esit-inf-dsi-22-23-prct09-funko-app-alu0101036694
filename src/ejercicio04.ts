/* Ejercicio 4 - Reimplementando la función map

Implemente una función que emule el comportamiento de la función map proporcionada por el lenguaje sin hacer 
uso esta última. La función map actúa sobre una colección de elementos, modificando el valor de cada uno de 
ellos en base a un callback que se le pasa como argumento.

Teniendo en cuenta lo anterior, escriba una función myMap que reciba una colección (array) de valores numéricos 
como primer argumento, además de un callback que permita modificar cada elemento de la colección como segundo 
argumento. La función deberá devolver la colección modificada.

Un ejemplo de invocación podría ser:

myMap([0, 1, 2, 3, 4], (item) => item * item) // It should return [0, 1, 4, 9, 16] */

export function myMap(collection: number[], callback: (num: number) => number): number[] {
    const result: number[] = [];
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i]));
    }
    return result;
  }
  