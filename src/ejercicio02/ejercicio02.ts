/**
 * Clase Lista
 * @template T Tipo de los elementos de la lista
 * @example
 * const lista = new Lista<number>(1, 2, 3, 4, 5);
 * const lista2 = new Lista<string>('a', 'b', 'c');
 * const lista3 = new Lista<boolean>(true, false, true);
 */
export class Lista<T> {
  /**
   * Longitud de la lista
   *
   */
  private length: number = 0;
  /**
   * Datos de la lista
   */
  private data: { [index: number]: T } = {};

  /**
   * Constructor de la clase Lista
   * @param items Elementos iniciales de la lista
   * @example
   * const lista = new Lista<number>(1, 2, 3, 4, 5);
   * const lista2 = new Lista<string>('a', 'b', 'c');
   * const lista3 = new Lista<boolean>(true, false, true);
   */
  constructor(...items: T[]) {
    items.forEach((item) => this.appendItem(item));
  }

  /**
   * Obtener los elementos de la lista
   * @example
   * const lista = new Lista<number>(1, 2, 3, 4, 5);
   * const listaData = lista.getData(); // [1, 2, 3, 4, 5]
   */
  getData(): T[] {
    return Object.values(this.data);
  }

  /**
   * Añadir un elemento al final de la lista
   * @param item Elemento a añadir
   * @example
   * const lista = new Lista<number>(1, 2, 3, 4, 5);
   * lista.appendItem(6); // [1, 2, 3, 4, 5, 6]
   */
  appendItem(item: T): void {
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * Añadir varias listas a la actual
   * @param list Lista a añadir
   * @example
   * const lista = new Lista<number>(1, 2, 3, 4, 5);
   * const lista2 = new Lista<number>(6, 7, 8, 9, 10);
   * lista.appendList(lista2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   */
  appendList(list: Lista<T>): void {
    for (let i = 0; i < list.length; i++) {
      this.appendItem(list.data[i]);
    }
  }

  /**
   * Hace que la lista sea la lista vacía
   * @example
   * const lista = new Lista<number>(1, 2, 3, 4, 5);
   * lista.clear(); // []
   * lista.getLength(); // 0
   */
  clear(): void {
    this.data = {};
    this.length = 0;
  }

  /**
   * Concatenar varias listas en una sola
   * @param lists Listas a concatenar
   * @example
   * const lista = new Lista<number>(1, 2);
   * const lista2 = new Lista<number>(3, 4);
   * const lista3 = new Lista<number>(5, 6);
   * lista.concatenate(lista2, lista3); // [1, 2, 3, 4, 5, 6]
   */
  concatenate(...lists: Lista<T>[]): void {
    lists.forEach((list) => {
      this.appendList(list);
    });
  }

  /**
   * Filtrar la lista utilizando un predicado lógico
   * @param predicate Predicado lógico
   * @example
   * const lista = new Lista<number>(1, 2, 3, 4, 5);
   * const listaFiltrada = lista.filter((item) => item % 2 === 0); // [2, 4]
   * const listaFiltrada2 = lista.filter((item) => item > 3); // [4, 5]
   */
  filter(predicate: (item: T) => boolean): Lista<T> {
    const result = new Lista<T>();
    for (let i = 0; i < this.length; i++) {
      const item = this.data[i];
      if (predicate(item)) {
        result.appendItem(item);
      }
    }
    return result;
  }

  /**
   * Obtener la longitud de la lista
   * @example
   * const lista = new Lista<number>(1, 2, 3, 4, 5);
   * lista.getLength(); // 5
   */
  getLength(): number {
    return this.length;
  }

  /**
   * Aplicar una función a cada elemento de la lista
   * @param mapper Función a aplicar
   * @example
   * const lista = new Lista<number>(1, 2, 3, 4, 5);
   * const listaMapeada = lista.map((item) => item * 2); // [2, 4, 6, 8, 10]
   */
  map<U>(mapper: (item: T) => U): Lista<U> {
    const result = new Lista<U>();
    for (let i = 0; i < this.length; i++) {
      result.appendItem(mapper(this.data[i]));
    }
    return result;
  }

  /**
   * Reducir la lista a un único valor utilizando una función y un acumulador inicial
   * @param reducer Función a aplicar
   * @param initialValue Valor inicial del acumulador
   * @example
   * const lista = new Lista<number>(1, 2, 3, 4, 5);
   * const suma = lista.reduce((acc, item) => acc + item, 0); // 15
   * const producto = lista.reduce((acc, item) => acc * item, 1); // 120
   */
  reduce<U>(reducer: (accumulator: U, item: T) => U, initialValue: U): U {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      accumulator = reducer(accumulator, this.data[i]);
    }
    return accumulator;
  }

  /**
   * Obtener una lista con los elementos en orden inverso
   * @example
   * const lista = new Lista<number>(1, 2, 3, 4, 5);
   * const listaInvertida = lista.reverse(); // [5, 4, 3, 2, 1]
   */
  reverse(): Lista<T> {
    const result = new Lista<T>();
    for (let i = this.length - 1; i >= 0; i--) {
      result.appendItem(this.data[i]);
    }
    return result;
  }

  /**
   * Iterar en los elementos de la lista y ejecutar una función con cada uno de ellos
   * @param callback Función a ejecutar
   * @example
   * const lista = new Lista<number>(1, 2, 3, 4, 5);
   * lista.forEach((item) => console.log(item)); // 1 2 3 4 5
   * lista.forEach((item) => console.log(item * 2)); // 2 4 6 8 10
   */
  forEach(callback: (item: T) => void): void {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i]);
    }
  }
}
