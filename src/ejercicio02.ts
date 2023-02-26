/* Ejercicio 2 - Números complejos

Con lo visto hasta ahora en la asignatura, defina un tipo de datos propio que permita representar un número complejo, 
esto es, pares de valores numéricos reales, donde la primera componente del par es la parte real del complejo, 
mientras que la segunda componente del par representa su parte imaginaria.

A continuación, partiendo de dicha definición, escriba funciones que permitan calcular las siguientes operaciones 
sobre números complejos:

Suma, resta, multiplicación y división (funciones add, sub, mult y div). Estas funciones reciben como argumentos 
dos complejos y devuelven un complejo.
Producto escalar (función prod). Esta función recibe como argumentos un complejo y un número real, retornando un 
número complejo.
Conjugado (función conj). Recibe como argumento un complejo y devuelve otro complejo.
Módulo (función abs). La función recibe como argumento un complejo y retorna un valor real. */

export interface ComplexNumber {
  real: number;
  imaginary: number;
}

// Suma de dos números complejos
export function add(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  return {
    real: a.real + b.real,
    imaginary: a.imaginary + b.imaginary,
  };
}

// Resta de dos números complejos
export function sub(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  return {
    real: a.real - b.real,
    imaginary: a.imaginary - b.imaginary,
  };
}

// Multiplicación de dos números complejos
export function mult(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  return {
    real: a.real * b.real - a.imaginary * b.imaginary,
    imaginary: a.real * b.imaginary + a.imaginary * b.real,
  };
}

// División de dos números complejos
export function div(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  const denominator = b.real ** 2 + b.imaginary ** 2;
  const realPart = (a.real * b.real + a.imaginary * b.imaginary) / denominator;
  const imaginaryPart = (a.imaginary * b.real - a.real * b.imaginary) / denominator;
  return {
    real: Math.round(realPart * 100) / 100,
    imaginary: Math.round(imaginaryPart * 100) / 100,
  };
}

// Producto escalar de un número complejo y un número real
export function prod(a: ComplexNumber, b: number): ComplexNumber {
  return {
    real: a.real * b,
    imaginary: a.imaginary * b,
  };
}

// Conjugado de un número complejo
export function conj(a: ComplexNumber): ComplexNumber {
  return {
    real: a.real,
    imaginary: -a.imaginary,
  };
}

// Módulo de un número complejo
export function abs(a: ComplexNumber): number {
  return Math.sqrt(a.real ** 2 + a.imaginary ** 2);
}
