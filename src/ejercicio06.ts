/* Ejercicio 6 - Compresión de números en rangos

Escriba una función fromArrayToRanges que reciba un array o lista de números enteros y los comprima en rangos, 
es decir, que devuelva una cadena de caracteres con la compresión obtenida. Un rango, es decir, un conjunto de 
números consecutivos se representará mediante una cadena de caracteres con el primer y último número del rango 
separado por un guión bajo (_). Un rango de un único número será la cadena de caracteres que representa a ese 
ùnico número. Luego, una serie de rangos vendrá separada por comas (,).

Ejemplos:

[5, 6, 7, 9, 12, 13, 14] => “5_7, 9, 12_14”
[-3, -2, -1, 3, 5, 6, 7] => “-3_-1, 3, 5_7”
[17] => “17”
[3, 5, 6, 7, 9, 10] => “3, 5_7, 9_10”

Escriba una función fromRangesToArray que lleve a cabo la operación inversa, es decir, que reciba como 
argumento una cadena de caracteres representando una serie de rangos y devuelva el array de números 
correspondiente. */

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