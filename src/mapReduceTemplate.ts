/**
 * Clase base abstracta que implementa el patrón Template Method
 * para llevar a cabo la operación map sobre una lista de números
 * y la operación reduce sobre la lista resultante de haber aplicado
 * el map a la primera lista.
 * @ method map: Aplica una función a cada elemento de la lista
 * @ abstract method reduce: Aplica una función a cada elemento de la lista
 * @ method beforeMap: Método de enganche que se ejecuta antes de map
 * @ method afterReduce: Método de enganche que se ejecuta después de reduce
 * @ method execute: Método de plantilla que ejecuta el algoritmo
 */
export abstract class MapReduceTemplate {
    protected numbers: number[];
  
    constructor(numbers: number[]) {
      this.numbers = numbers;
    }
  
    // Método map
    public map(fn: (n: number) => number): number[] {
      const result: number[] = [];
      for (let i = 0; i < this.numbers.length; i++) {
        result.push(fn(this.numbers[i]));
      }
      return result;
    }
  
    // Método abstracto reduce
    public abstract reduce(mappedNumbers: number[]): number;
  
    // Métodos de enganche
    public beforeMap(): void {}
    public afterReduce(): void {}
  
    public execute(fn: (n: number) => number): number {
      // Hook para antes de map
      this.beforeMap();
      // Realizamos la operación map
      const mappedNumbers = this.map(fn);
      // La operación después de map debe ser el reduce
      const result = this.reduce(mappedNumbers);
      // Hook para después de reduce
      this.afterReduce();
      return result;
    }
  }