/* Ejercicio 8 - Wonder Woman

La princesa Diana consiguió clavar su espada y cortar la cabeza de Cerberus (un lobo con muchas cabezas). Para su asombro, inmediatamente, 
aparecieron nuevas cabezas, en realidad unas n cabezas. Atacó de nuevo y ahora donde estaba la segunda cabeza aparecieron 2 * n cabezas. 
A la tercera aparecieron 2 * 3 * n nuevas cabezas, a la cuarta 2 * 3 * 4 * n cabezas, y así sucesivamente.

Ante este problema, Diana ha decidido pedir ayuda al resto de amazonas. Aunque las amazonas nunca rechazan una buena pelea, quieren saber 
cuántas cabezas tiene ahora el Cerberus.

La tarea que hay que realizar es el desarrollo de una función getNumberHeads que dado el número inicial de cabezas que tiene el Cerberus, 
el valor de n (nuevas cabezas que aparecen al cortar una), así como la cantidad de ataques que Diana va a realizar, devuelva el número de 
cabezas que el Cerberus tendrá al final de los ataques.

Ejemplo 1:

    cabezas_iniciales = 2
    n = 1
    ataques = 1

    resultado: 
    1 cabeza aparece después del ataque 1: 2 - 1 + 1 = 2
    Cerberus tiene 2 cabezas al final

Ejemplo 2:

    cabezas_iniciales = 5
    n = 10
    ataques = 3

    resultado:
    10 cabezas aparecen después del ataque 1: 5 - 1 + 10 = 14
    20 cabezas aparecen después del ataque 2: 14 - 1 + 2 * 10 = 33
    60 cabezas aparecen después del ataque 3: 33 - 1 + 2 * 3 * 10 = 92
    Cerberus tiene 92 cabezas al final

Nota: Tenga en cuenta que, tras cada ataque, una cabeza es restada al total anterior. En el ejemplo 1, a las dos cabezas iniciales 
se le resta una (la que se le cortó) y se le suma una. */

function aux_factorial(num_decimal: number) : number {
    if (num_decimal == 1) return 1
    if (num_decimal == 0) return 1
    else return num_decimal * aux_factorial(num_decimal - 1)
}

function wonderWoman(cabezas_iniciales: number, n: number,  ataques: number) : number {
  let cabezas: number;
  let cabezas_aux: number;
  cabezas = cabezas_iniciales - ataques;
  cabezas_aux = 0;
  for (let i= 0; i < ataques; i++){
      cabezas_aux = aux_factorial(i+1) * n;
      cabezas = cabezas + cabezas_aux;
  }
  return cabezas;
}

console.log("wonderWoman(2, 1, 1) = " + wonderWoman(2, 1, 1));
console.log("wonderWoman(10, 5, 3) = " + wonderWoman(5, 10, 3));