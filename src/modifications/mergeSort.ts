import { SortingInterface } from "./interface";

/**
 * @class MergeSortStrategy
 * @implements SortingInterface
 * @description Clase que implementa la estrategia de ordenación MergeSort
 * @version 1.0.0
 * @public
 * @method sort
 * @param {Array} arr - Array de números a ordenar
 * @returns {Array} - Array de números ordenados
 */
export class MergeSortStrategy implements SortingInterface {
  /**
   * @method sort
   * @description Método que ordena un array de números mediante el algoritmo de ordenación MergeSort
   * @public
   * @param {Array} arr - Array de números a ordenar
   * @returns {Array} - Array de números ordenados
   */
  sort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    let mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return this.merge(this.sort(left), this.sort(right));
  }

  /**
   * @method merge
   * @description Método que mezcla dos arrays de números ordenados
   * @private
   * @param {Array} left - Array de números ordenados
   * @param {Array} right - Array de números ordenados
   * @returns {Array} - Array de números ordenados
   */
  private merge(left: number[], right: number[]) {
    let result: number[] = [];
    let i: number = 0;
    let j: number = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  }
}
