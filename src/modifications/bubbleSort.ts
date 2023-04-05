import { SortingInterface } from "./interface";

/**
 * @class BubbleSortStrategy
 * @implements SortingInterface
 * @description Clase que implementa la estrategia de ordenación BubbleSort
 * @version 1.0.0
 * @public
 * @method sort
 * @param {Array} arr - Array de números a ordenar
 * @returns {Array} - Array de números ordenados
 */
export class BubbleSortStrategy implements SortingInterface {
  sort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
}
