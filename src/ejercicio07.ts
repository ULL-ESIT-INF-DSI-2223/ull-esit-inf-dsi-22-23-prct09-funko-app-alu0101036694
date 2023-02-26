/* Ejercicio 7 - Decodificar resistencias

Si desea realizar algún proyecto usando una Raspberry Pi, probablemente necesitará usar resistencias. 
Para este ejercicio necesita conocer dos cosas sobre las resistencias:

Cada resistor o resistencia tiene un valor de resistencia en Ohmios asociado. Además, las resistencias son 
tan pequeñas que si se les imprimiera el valor en ellas, sería muy difícil de leer. Para resolver este problema, 
los fabricantes siguen un estándar de bandas codificadas de colores para indicar sus valores de resistencia. 
Cada banda tiene una posición y un valor numérico.

Las primeras dos bandas de una resistencia tienen un esquema de codificación muy simple: cada color se mapea a un 
único número. Por ejemplo, si una resistencia tiene impresa una banda marrón (valor 1) seguida de una banda verde 
(valor 5), el valor de la resistencia se traduciría al número 15.

El objetivo de este ejercicio es crear un programa que nos ayude a calcular el valor de una resistencia sin tener 
que memorizar los valores de las bandas. Para ello, cree una función decodeResistor que recibe como parámetros 
los nombres de los colores de una resistencia como entrada y devuelve un número de dos dígitos indicando el 
valor de la resistencia. La función deberá devover un número de dos dígitos incluso si recibe más de dos colores 
como parámetros.

Las bandas de colores están codificadas de la siguiente manera:

Negro: 0
Marrón: 1
Rojo: 2
Naranja: 3
Amarillo: 4
Verde: 5
Azul: 6
Violeta: 7
Gris: 8
Blanco: 9

De este modo, la combinación Marrón-Verde debería devolver 15 al igual que Marrón-Verde-Violeta ignorando el 
tercer color. */

type ColorCode = { [color: string]: number };

const colorCode: ColorCode = {
  "negro": 0,
  "marrón": 1,
  "rojo": 2,
  "naranja": 3,
  "amarillo": 4,
  "verde": 5,
  "azul": 6,
  "violeta": 7,
  "gris": 8,
  "blanco": 9
};

export function decodeResistor(colors: string[]): number {
  const firstBand = colors[0].toLowerCase();
  const secondBand = colors[1].toLowerCase();
  const resistanceValue = colorCode[firstBand] * 10 + colorCode[secondBand];
  return resistanceValue;
}
