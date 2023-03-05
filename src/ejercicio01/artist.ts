import { Album } from "./album";

// Interfaz Artist

/**
 * @interface Artist Interfaz que representa un artista.
 * @property {string} name - El nombre del artista.
 * @property {number} monthlyListeners - El número de oyentes mensuales del artista.
 * @property {Album[]} discography - Un array con los álbumes del artista.
 */
export interface Artist {
  name: string;
  monthlyListeners: number;
  discography: Album[];
}
