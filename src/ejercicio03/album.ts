import { Song } from "./song";

// Clase Album

/**
 * @class Album - Clase que representa un álbum de música.
 * @property {string} name - El nombre del álbum.
 * @property {number} year - El año de publicación del álbum.
 * @property {Song[]} songs - Un array con las canciones del álbum.
 * @method getNumSongs - Devuelve el número de canciones del álbum.
 * @method getDuration - Devuelve la duración total del álbum.
 * @method getNumReproductions - Devuelve el número total de reproducciones del álbum.
 * @constructor
 */
export class Album {
  constructor(public name: string, public year: number, public songs: Song[]) {}

  /**
   * Devuelve el número de canciones del álbum.
   * @returns {number} - El número de canciones del álbum.
   * @method getNumSongs
   * @memberof Album
   */
  getNumSongs(): number {
    return this.songs.length;
  }

  /**
   * Devuelve la duración total del álbum.
   * @returns {number} - La duración total del álbum.
   * @method getDuration
   * @memberof Album
   */
  getDuration(): number {
    let duration = 0;
    for (const song of this.songs) {
      duration += song.duration;
    }
    return duration;
  }

  /**
   * Devuelve el número total de reproducciones del álbum.
   * @returns {number} - El número total de reproducciones del álbum.
   * @method getNumReproductions
   * @memberof Album
   */
  getNumReproductions(): number {
    let numReproductions = 0;
    for (const song of this.songs) {
      numReproductions += song.numReproductions;
    }
    return numReproductions;
  }
}
