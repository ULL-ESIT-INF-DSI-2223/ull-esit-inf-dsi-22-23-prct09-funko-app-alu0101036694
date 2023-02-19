/* Ejercicio 9 - La Conjetura de Collatz

La Conjetura de Collatz o el problema 3n + 1 parte de la definición de un entero positivo n. Si n es par, hay que calcular n / 2 y hacer que 
el valor resultante sea el nuevo n. Si n es impar, hay que calcular 3n + 1 y hacer que el valor resultante sea el nuevo n. El anterior proceso 
se repite de manera indefinida. La Conjetura de Collatz establece que no importa el valor que tome n inicialmente, dado que siempre se llegará 
al valor 1.

Escriba una función collatz que reciba como argumento un número entero positivo y que cuente el número de repeticiones del proceso indicado 
más arriba hasta llegar a n = 1. La función deberá retornar dicho número de repeticiones:

Ejemplo:

Suponga la siguiente invocación a la función: collatz(10).

Empezando con n = 10, tendriamos las siguientes iteraciones:

n = 10 (par)
n = 5 (impar)
n = 16 (par)
n = 8 (par)
n = 4 (par)
n = 2 (par)
n = 1 (fin)

Por lo tanto, collatz(10) debería devolver el valor numérico 6 (no se cuenta la iteración inicial donde n = 10). */

function collatz(n: number): number {
    let count = 0;
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      count++;
    }
    return count;
  }

  console.log(collatz(10)); // 6