/* Desarrolle los siguientes ejercicios en un proyecto alojado en un nuevo repositorio de GitHub:

1. Implemente el algoritmo de ordenación BubbleSort que permita ordenar una lista de elementos numéricos haciendo uso del patrón de diseño Strategy. 
A continuación, incluya una nueva estrategia que permita ordenar la lista de elementos numéricos mediante MergeSort. Utilice diferentes ficheros 
ubicados en diferentes directorios para organizar el código fuente de su proyecto y utilice sintaxis ES para importar/exportar las entidades.
2. Dado que tendrá que seguir una metodología TDD/BDD, implemente integración continua en su proyecto a través de un flujo de trabajo de 
GitHub Actions, esto es, con cada push realizado sobre su repositorio, ejecute las pruebas en entornos que cuenten con diferentes versiones 
de Node.js.
3. Dado que tendrá que medir el cubrimiento de su código fuente haciendo uso de Instanbul, implemente un flujo de trabajo de GitHub Actions 
que envíe la información de cubrimiento generada a Coveralls con cada push llevado a cabo sobre su repositorio.
4. Recuerde que deberá incluir la documentación de su proyecto haciendo uso de TypeDoc.

Aunque no es obligatorio, se valorará positivamente el hecho de haber implementado un flujo de trabajo de GitHub Actions que permita analizar 
la calidad de su código fuente a través de Sonar Cloud.

Como entrega de esta tarea deberá indicar el enlace al repositorio GitHub con los ejercicios de evaluación solicitados. */

import { SortingInterface } from "./interface";
import { BubbleSortStrategy } from "./bubbleSort";
import { MergeSortStrategy } from "./mergeSort";

/**
 * @class SortingContext
 * @description Clase que implementa el contexto de ordenación y utilizará las estrategias
 * @version 1.0.0
 * @public
 * @method sort
 * @param {Array} arr - Array de números a ordenar
 * @returns {Array} - Array de números ordenados
 */
export class SortingContext {
  private strategyA: BubbleSortStrategy;
  private strategyB: MergeSortStrategy;

  constructor(strategy) {
    this.strategyA = strategy;
  }

  setStrategy(strategy) {
    this.strategyA = strategy;
  }

  sort(arr) {
    return this.strategyA.sort(arr);
  }
}

//const arr = [5, 3, 8, 4, 2];
//const context = new SortingContext(new BubbleSortStrategy());
//console.log(context.sort(arr)); // [2, 3, 4, 5, 8]

//context.setStrategy(new BubbleSortStrategy());
//console.log(context.sort(arr)); // [2, 3, 4, 5, 8]
