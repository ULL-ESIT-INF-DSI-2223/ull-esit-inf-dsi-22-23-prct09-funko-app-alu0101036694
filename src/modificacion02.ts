/* Desarrolle los siguientes ejercicios en un proyecto alojado en un nuevo repositorio de GitHub:

1. Implemente, a través del patrón Template Method, un algoritmo que permita llevar a cabo, como primer paso, la operación map sobre una lista 
de números (sin hacer uso del propio método map proporcionado por TypeScript) y, como segundo paso, la operación reduce (sin hacer uso del 
propio método reduce proporcionado por TypeScript) sobre la lista resultante de haber aplicado el map a la primera lista. En la clase 
base abstracta, la operación reduce debe ser abstracta (así tendremos que implementarla obligatoriamente en las subclases), mientras 
que la operación map deberá proporcionar un comportamiento por defecto consistente en aplicar a cada elemento de la lista una función 
pasada como parámetro a dicha operación map (este comportamiento por defecto podría sobreescribirse, si se deseara, en las subclases). 
Luego en las subclases, que podrían ser, por ejemplo, AddMapReduce, SubMapReduce, ProdMapReduce y DivMapReduce, entre otras, particularice 
la implementación de la operación reduce según corresponda. También añada algunos métodos de enganche (hooks) entre los pasos que haya definido 
en su método de plantilla.
2. Dado que tendrá que seguir una metodología TDD/BDD, implemente integración continua en su proyecto a través de un flujo de trabajo de 
GitHub Actions, esto es, con cada push realizado sobre su repositorio, ejecute las pruebas en entornos que cuenten con diferentes versiones 
de Node.js.
3. Dado que tendrá que medir el cubrimiento de su código fuente haciendo uso de Instanbul, implemente un flujo de trabajo de GitHub Actions 
que envíe la información de cubrimiento generada a Coveralls con cada push llevado a cabo sobre su repositorio.
4. Analice la calidad y seguridad del código fuente desarrollado mediante Sonar Cloud gracias a la implementación de un flujo de trabajo de 
GitHub Actions que se dispare con cada push llevado a cabo con su repositorio.
Por último, recuerde que deberá incluir la documentación de su proyecto haciendo uso de TypeDoc.

Como entrega de esta tarea deberá indicar el enlace al repositorio GitHub con los ejercicios de evaluación solicitados. */

import { MapReduceTemplate } from "./mapReduceTemplate";
// import { AddMapReduce } from "./addMapReduce";
// import { SubMapReduce } from "./subMapReduce";
// import { ProdMapReduce } from "./prodMapReduce";
// import { DivMapReduce } from "./divMapReduce";

/**
 * Subclase que implementa la operación reduce para la suma
 * @extends MapReduceTemplate
 * @method reduce: Aplica la operación suma a cada elemento de la lista empezando en 0
 */
export class AddMapReduce extends MapReduceTemplate {
    public reduce(mappedNumbers: number[]): number {
      return mappedNumbers.reduce((a, b) => a + b, 0);
    }
  }
  
/**
 * Subclase que implementa la operación reduce para la resta
 * @extends MapReduceTemplate
 * @method reduce: Aplica la operación resta a cada elemento de la lista empezando en 0
 */
export class SubMapReduce extends MapReduceTemplate {
    public reduce(mappedNumbers: number[]): number {
      return mappedNumbers.reduce((a, b) => a - b, 0);
    }
  }
  
/**
 * Subclase que implementa la operación reduce para la multiplicación
 * @extends MapReduceTemplate
 * @method reduce: Aplica la operación multiplicación a cada elemento de la lista empezando en 1
 */
export class ProdMapReduce extends MapReduceTemplate {
    public reduce(mappedNumbers: number[]): number {
      return mappedNumbers.reduce((a, b) => a * b, 1); 
    }
  }

/**
 * Subclase que implementa la operación reduce para la división
 * @extends MapReduceTemplate
 * @method reduce: Aplica la operación división a cada elemento de la lista empezando en 1
 */
export class DivMapReduce extends MapReduceTemplate {
    public reduce(mappedNumbers: number[]): number {
      return mappedNumbers.reduce((a, b) => a / b, 1);
    }
  }
  
/*  function mapit<T, U>(arr: T[], fn: (val: T) => U): U[] { // return mapit(this.numbers, fn);
    const result: U[] = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i]));
    }
    return result;
} */