/* Desarrolle los siguientes ejercicios en su proyecto TypeScript asociado a la práctica y empuje los cambios al repositorio GitHub correspondiente, 
una vez haya finalizado:

1. Diseñe una interfaz genérica 'Arithmeticable', que defina los siguientes métodos con los que debería contar una clase que implemente dicha 
interfaz genérica: add, substract, multiply, divide.
2. Diseñe una clase genérica 'ArithmeticableCollection' cuyo parámetro de tipo genérico 'T' se encuentre restringido a la forma definida por la 
interfaz 'Arithmeticable'. Dicha clase genérica deberá contar, al menos, con los métodos 'addArithmeticable' (añadir un elemento a la colección), 
'getArithmeticable' (obtener un elemento de la colección) y 'getNumberOfArithmeticables' (obtener el tamaño de la colección), además de con un 
array de elementos cuyo tipo sea T.
3. Diseñe una clase 'Complex' y otra clase 'Rational' que implementen la interfaz 'Arithmeticable'.
4. Cree instancias de la clase genérica 'ArithmeticableCollection' a partir de las clases 'Complex' y 'Rational' y demuestre su correcto 
funcionamiento.Trate de respetar los principios SOLID en su diseño de clases e interfaces.

Recuerde que deberá incluir la documentación haciendo uso de TypeDoc, así como seguir una metodología TDD/BDD utilizando el framework de 
pruebas Mocha y la librería de aserciones Chai. Genere, también, un informe de cubrimiento del código haciendo uso de Instanbul y Coveralls. 
Como entrega de esta tarea deberá indicar, de nuevo, el enlace a dicho repositorio GitHub con los ejercicios solicitados. */

// Aritméticos

/**
 * Interfaz genérica que define los métodos de una clase aritmética
 * @param T Tipo de dato de la clase
 * @returns T Tipo de dato de la clase
 * @method add Suma
 * @method subtract Resta
 * @method multiply Multiplicación
 * @method divide División
 */
export interface Arithmeticable<T> {
  add(arg: T): T;
  subtract(arg: T): T;
  multiply(arg: T): T;
  divide(arg: T): T;
}

// Colección de aritméticos

/**
 * Clase genérica que define una colección de aritméticos
 * @param T Tipo de dato de la clase
 * @returns T Tipo de dato de la clase
 * @method addArithmeticable Añade un elemento a la colección
 * @method getArithmeticable Obtiene un elemento de la colección
 * @method getNumberOfArithmeticables Obtiene el tamaño de la colección
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private collection: T[] = [];

  public addArithmeticable(item: T): void {
    this.collection.push(item);
  }

  public getArithmeticable(index: number): T {
    return this.collection[index];
  }

  public getNumberOfArithmeticables(): number {
    return this.collection.length;
  }
}

//Racionales

/**
 * Clase que define un número racional
 * @param numerator Numerador
 * @param denominator Denominador
 * @returns Rational Número racional
 * @method add Suma
 * @method subtract Resta
 * @method multiply Multiplicación
 * @method divide División
 */
export class Rational implements Arithmeticable<Rational> {
  constructor(private numerator: number, private denominator: number) {}

  public add(other: Rational): Rational {
    const denominator = this.denominator * other.denominator;
    const numerator =
      this.numerator * other.denominator + other.numerator * this.denominator;
    return new Rational(numerator, denominator);
  }

  public subtract(other: Rational): Rational {
    const denominator = this.denominator * other.denominator;
    const numerator =
      this.numerator * other.denominator - other.numerator * this.denominator;
    return new Rational(numerator, denominator);
  }

  public multiply(other: Rational): Rational {
    const numerator = this.numerator * other.numerator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  public divide(other: Rational): Rational {
    const numerator = this.numerator * other.denominator;
    const denominator = this.denominator * other.numerator;
    return new Rational(numerator, denominator);
  }

  public getValue(): number {
    return this.numerator / this.denominator;
  }
}

// Complejos

/**
 * Clase que define un número complejo
 * @param real Parte real
 * @param imaginary Parte imaginaria
 * @returns Complex Número complejo
 * @method add Suma
 * @method subtract Resta
 * @method multiply Multiplicación
 * @method divide División
 */
export class Complex implements Arithmeticable<Complex> {
  constructor(private real: number, private imaginary: number) {}

  public add(other: Complex): Complex {
    return new Complex(
      this.real + other.real,
      this.imaginary + other.imaginary
    );
  }

  public subtract(other: Complex): Complex {
    return new Complex(
      this.real - other.real,
      this.imaginary - other.imaginary
    );
  }

  public multiply(other: Complex): Complex {
    return new Complex(
      this.real * other.real - this.imaginary * other.imaginary,
      this.real * other.imaginary + this.imaginary * other.real
    );
  }

  public divide(other: Complex): Complex {
    const denominator =
      other.real * other.real + other.imaginary * other.imaginary;
    return new Complex(
      (this.real * other.real + this.imaginary * other.imaginary) / denominator,
      (this.imaginary * other.real - this.real * other.imaginary) / denominator
    );
  }
}

// const rationalCollection = new ArithmeticableCollection<Rational>();
// rationalCollection.addArithmeticable(new Rational(1, 2));
// rationalCollection.addArithmeticable(new Rational(3, 4));
// console.log(rationalCollection.getArithmeticable(0).subtract(rationalCollection.getArithmeticable(1)));

// const complexCollection = new ArithmeticableCollection<Complex>();
// complexCollection.addArithmeticable(new Complex(2, 3));
// complexCollection.addArithmeticable(new Complex(4, 5));
// console.log(complexCollection.getArithmeticable(0).add(complexCollection.getArithmeticable(1)));
