/* Desarrolle los siguientes ejercicios en su proyecto TypeScript asociado a la práctica y empuje los cambios 
al repositorio GitHub correspondiente, una vez haya finalizado:

Escriba una función mediaFilter que reciba como parámetro una imagen en blanco y negro representada en un array 
bidimensional de números naturales comprendidos entre 0 y 255. Cada valor del array bidimensional representa un 
pixel de la imagen. La idea es aplicar un filtro de suavizado a dicha imagen. Existen diferentes técnicas de 
suavizado, aunque en este ejercicio utilizaremos la técnica de la media. Consiste en aplicar en cada punto la 
media de sus adyacentes. Deberá tener en cuenta los casos especiales como son los bordes y las esquinas donde 
el número de adyacentes es menor. La función deberá devolver un array bidimensional con la imagen filtrada. */

export function mediaFilter(image: number[][]): number[][] {
    const filteredImage = image.map(row => [...row]); // creamos una copia de la imagen original
    
    const numRows = image.length;
    const numCols = image[0].length;
    
    // recorremos cada elemento de la imagen
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        let sum = filteredImage[row][col];
        let count = 1;
        
        // calculamos la media de los adyacentes
        if (row > 0) { // adyacente superior
          sum += filteredImage[row - 1][col];
          count++;
        } else {
            sum += filteredImage[row + numRows - 1][col];
            count++;
        }
        if (row < numRows - 1) { // adyacente inferior
          sum += filteredImage[row + 1][col];
          count++;
        } else {
            sum += filteredImage[row - numRows - 1][col];
            count++;
        }
        if (col > 0) { // adyacente izquierdo
          sum += filteredImage[row][col - 1];
          count++;
        } else {
            sum += filteredImage[row][col + numCols - 1];
            count++;
        }
        if (col < numCols - 1) { // adyacente derecho
          sum += filteredImage[row][col + 1];
          count++;
        } else {
            sum += filteredImage[row][col + numCols - 1];
            count++;
        }
        if (row > 0 && col > 0) { // adyacente superior izquierdo
          sum += filteredImage[row - 1][col - 1]; // 4, 6, 8, 2, 1, 5, 8, 6, 3, 8, 9, 4, 1, 5, 3, 8
          count++;
        } else {
            sum += filteredImage[row + numRows - 1][col + numCols - 1];
            count++;
        }
        if (row > 0 && col < numCols - 1) { // adyacente superior derecho
          sum += filteredImage[row - 1][col + 1];
          count++;
        } else {    
            sum += filteredImage[row + numRows - 1][col - numCols - 1]; //interface-23
            count++;
        }
        if (row < numRows - 1 && col > 0) { // adyacente inferior izquierdo
          sum += filteredImage[row + 1][col - 1];
          count++;
        } else {    
            sum += filteredImage[row - numRows - 1][col + numCols - 1];
            count++;
        }
        if (row < numRows - 1 && col < numCols - 1) { // adyacente inferior derecho
          sum += filteredImage[row + 1][col + 1];
          count++;
        } else {    
            sum += filteredImage[row - numRows - 1][col - numCols - 1];
            count++;
        }
        
        // actualizamos el valor del pixel con la media calculada
        filteredImage[row][col] = sum / count;
      }
    }
    
    return filteredImage;
  }
  