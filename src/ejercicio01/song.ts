// Clase Song

/**
 * @class Song - Clase que representa una canción de música.
 * @property {string} name - El nombre de la canción.
 * @property {number} duration - La duración de la canción.
 * @property {string[]} genres - Un array con los géneros de la canción.
 * @property {boolean} isSingle - Indica si la canción es single o no.
 * @property {number} numReproductions - El número de reproducciones de la canción.
 */
export class Song {
  constructor(
    public name: string,
    public duration: number,
    public genres: string[],
    public isSingle: boolean,
    public numReproductions: number
  ) {}
}
