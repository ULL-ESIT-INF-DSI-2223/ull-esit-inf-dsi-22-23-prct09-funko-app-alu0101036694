/* Ejercicio 5 - Matrices espirales

Escriba una función getSpiralMatrix que, dado un entero positivo n representando el tamaño de una matriz cuadrada, 
devuelva una matriz (array bidimensional) con todos los números enteros en el rango [1, n*n] y que estén dispuestos 
en la matriz conformando una espiral. La espiral debe comenzar en la primera fila y columna de la matriz e irse 
completando siguiendo las agujas del reloj.

Ejemplos:

getSpiralMatrix(3)  It should return [
                                         [1, 2, 3],
                                         [8, 9, 4],
                                         [7, 6, 5]
                                       ] 
getSpiralMatrix(4)  It should return [
    [ 1,  2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8 ,7]
  ] 
getSpiralMatrix(5)  It should return [
    [ 1,   2,  3,  4, 5],
    [ 16, 17, 18, 19, 6],
    [ 15, 24, 25, 20, 7],
    [ 14, 23, 22, 21, 8],
    [ 13, 12, 11, 10, 9],
  ] */

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
  