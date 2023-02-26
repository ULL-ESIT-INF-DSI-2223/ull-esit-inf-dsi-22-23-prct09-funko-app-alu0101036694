/* Ejercicio 1 - El alergólogo

Una prueba de alérgenos produce un valor numérico (entero positivo) único, el cual contiene información sobre las alergias de una persona. La lista de posibles alérgenos es la siguiente:

Huevo (1)
Cacahuete (2)
Marisco (4)
Fresa (8)
Tomate (16)
Chocolate (32)
Polen (64)
Gato (128)
Por ejemplo, si alguien fuera alérgico a los gatos y al tomate, obtendría una puntuación igual a 128 + 16 = 144.

Escriba una función getAllergens que reciba una puntuación de alérgenos de una persona y que devuelva una lista con los alérgenos a los que la persona es alérgica. Los diferentes alérgenos deberán modelarse mediante un enumerado.

Por último, tenga en cuenta que la función podría recibir una puntuación que incluya alérgenos no contemplados en la lista, esto es, alérgenos cuya puntuación sea 256, 512, 1024, etc. Además, si el valor pasado como argumento no es entero y positivo, la función deberá retornar el valor undefined.

Ejemplos:

getAllergens(129) // It should return [Huevo, Gato]
getAllergens(257) // It should return [Huevo]
getAllergens(256) // It should return []
getAllergens(515) // It should return [Huevo, Cacahuete]
getAllergens(84)  // It should return [Marisco, Tomate, Polen] */

export enum Allergen {
  Huevo = 1,
  Cacahuete = 2,
  Marisco = 4,
  Fresa = 8,
  Tomate = 16,
  Chocolate = 32,
  Polen = 64,
  Gato = 128
}

export function getAllergens(score: number): Allergen[] | undefined {
  if (!Number.isInteger(score) || score <= 0) {
    return undefined;
  }

  const allergens: Allergen[] = [];
  let remainingScore = score;

  // Iterar sobre todos los alérgenos
  for (const allergenValue of Object.values(Allergen)) {
    // Si el valor es un número, y es una potencia de 2 (es decir, solo tiene un bit encendido en su representación binaria)
    if (typeof allergenValue === 'number' && (allergenValue & (allergenValue - 1)) === 0) {
      // Si la puntuación restante incluye el alérgeno
      if ((remainingScore & allergenValue) === allergenValue) {
        // Agregar el alérgeno a la lista y restar su valor de la puntuación restante
        allergens.push(allergenValue);
        remainingScore -= allergenValue;
      }
    }
  }

  return allergens;
}
