/* Desarrolle los siguientes ejercicios en su proyecto TypeScript asociado a la práctica y empuje los cambios al repositorio GitHub correspondiente, 
una vez haya finalizado:

- Utilice Math.random() como base para implementar una clase RandomNumber que implemente el patrón de diseño Singleton. Como mínimo, dicha clase 
deberá proporcionar los métodos necesarios para obtener:
- Un número aleatorio en punto flotante generado en el rango [0, 1].
- Un número aleatorio en punto flotante generado en el rango [n, m], donde n y m son parámetros del método correspondiente.
- Un número aleatorio entero generado en el rango [n, m], donde n y m son parámetros del método correspondiente.
- Implemente una clase RandomNumberSetCollection que utilice un objeto de la clase Set como estructura de datos principal. Deberá utilizar la 
clase generada en el Ejercicio 1 para generar un conjunto de números aleatorios. Haga que la clase RandomNumberCollection sea iterable, gracias 
a la implementación de la interfaz Iterable.

Recuerde que deberá incluir la documentación haciendo uso de TypeDoc, así como seguir una metodología TDD/BDD utilizando el framework de pruebas 
Mocha y la librería de aserciones Chai. También trate de comprobar el nivel de cubrimiento de su código mediante Instanbul, así como hacer un 
seguimiento de dicho cubrimiento con Coveralls. Se valorará positivamente el hecho de contar con flujos de trabajo de Github para ejecutar las 
pruebas y enviar datos de cubrimiento a Coveralls. Como entrega de esta tarea deberá indicar, de nuevo, el enlace a dicho repositorio GitHub con 
los ejercicios solicitados. */

/**
 * @description Clase que implementa el patrón de diseño Singleton para generar números aleatorios.
 * @class RandomNumber
 * @param {number} instance - Instancia de la clase RandomNumber.
 * @method getInstance - Devuelve la instancia de la clase RandomNumber.
 * @method getFloat - Devuelve un número aleatorio en punto flotante generado en el rango [0, 1].
 * @method getFloatRange - Devuelve un número aleatorio en punto flotante generado en el rango [n, m], donde n y m son parámetros del método correspondiente.
 * @method getIntRange - Devuelve un número aleatorio entero generado en el rango [n, m], donde n y m son parámetros del método correspondiente.
 */
export class RandomNumber {
    private static instance: RandomNumber;
    
    private constructor() {}
    
    public static getInstance(): RandomNumber {
      if (!RandomNumber.instance) {
        RandomNumber.instance = new RandomNumber();
      }
      return RandomNumber.instance;
    }
    
    /**
     * @description Devuelve un número aleatorio en punto flotante generado en el rango [0, 1].
     * @returns {number} Número aleatorio en punto flotante generado en el rango [0, 1].
     * @memberof RandomNumber
     * @method getFloat
     * @public
     */
    public getFloat(): number {
      return Math.random();
    }
    
    /**
     * @description Devuelve un número aleatorio en punto flotante generado en el rango [n, m], donde n y m son parámetros del método correspondiente.
     * @param {number} n - Número mínimo del rango.
     * @param {number} m - Número máximo del rango.
     * @returns {number} Número aleatorio en punto flotante generado en el rango [n, m], donde n y m son parámetros del método correspondiente.
     * @memberof RandomNumber
     * @method getFloatRange
     * @public
     */
    public getFloatRange(n: number, m: number): number {
      return n + Math.random() * (m - n);
    }
    
    /**
     * @description Devuelve un número aleatorio entero generado en el rango [n, m], donde n y m son parámetros del método correspondiente.
     * @param {number} n - Número mínimo del rango.
     * @param {number} m - Número máximo del rango.
     * @returns {number} Número aleatorio entero generado en el rango [n, m], donde n y m son parámetros del método correspondiente.
     * @memberof RandomNumber
     * @method getIntRange
     * @public
     */
    public getIntRange(n: number, m: number): number {
      return Math.floor(n + Math.random() * (m - n + 1)); // floor aproxima a un entero hacia abajo
    }
  }
  

/**
 * @description Clase que implementa una colección de números aleatorios.
 * @class RandomNumberSetCollection
 * @param {Set<number>} set - Conjunto de números aleatorios.
 * @param {RandomNumber} randomNumber - Instancia de la clase RandomNumber.
 * @method constructor - Constructor de la clase RandomNumberSetCollection.
 * @method [Symbol.iterator] - Método que implementa la interfaz Iterable.
 */
  export class RandomNumberSetCollection implements Iterable<number> {
    private set: Set<number>;
    private randomNumber: RandomNumber;
    
    constructor(size: number, n: number, m: number) {
      this.set = new Set<number>();
      this.randomNumber = RandomNumber.getInstance();
      
      for (let i = 0; i < size; i++) {
        this.set.add(this.randomNumber.getIntRange(n, m));
      }
    }
    
    [Symbol.iterator](): Iterator<number> {
        let index = 0;
        const values = Array.from(this.set);
    
        return {
          next: (): IteratorResult<number> => {
            if (index < values.length) {
              return {
                value: values[index++],
                done: false,
              };
            } else {
              return {
                value: null,
                done: true,
              };
            }
          },
        };
      }
    }
  