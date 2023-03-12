/* Ejercicio 1 - Biblioteca musical

Diseñe el conjunto de clases e interfaces necesarias para almacenar una biblioteca musical. El desarrollo 
realizado debe cumplir los siguientes requisitos funcionales:

La información de un artista, ya sea un grupo o un solista, será la siguiente:
  - Nombre
  - Número de oyentes mensuales
  - Discografía

La discografía de un artista consistirá en una colección de discos, donde la información de un disco será:
  - Nombre
  - Año de publicación
  - Canciones

Por cada canción perteneciente a un disco, la información será la siguiente:
  - Nombre
  - Duración en segundos
  - Géneros
  - Single (determina si la canción fue lanzada como un single o no)
  - Número de reproducciones

La biblioteca musical deberá permitir:
- Almacenar la información de diferentes artistas, su discografía y las canciones pertenecientes a cada disco 
o álbum.
- Mostrar por la consola la información de la biblioteca en formato tabla (console.table).
- Permitir llevar a cabo búsquedas de artistas, discos y canciones y mostrar los resultados de la búsqueda en 
formato de tabla.
- Permitir calcular el número de canciones incluidas en un disco concreto.
- Permitir calcular la duración de un disco, a partir de la duración de todas y cada una de las canciones que 
lo conforman.
- Permitir calcular el número de reproducciones de un disco, a partir del número de reproducciones de todas y 
cada una de las canciones incluidas en el mismo. */

import * as Prompt from "prompt-sync";

import { Album } from "./album";
import { Song } from "./song";
import { Artist } from "./artist";
import { MusicLibrary } from "./library";

/**
 * Clase que representa una biblioteca musical.
 * @class Library
 * @property {MusicLibrary} musicLibrary - Biblioteca musical.
 */
export class Library {
  private musicLibrary: MusicLibrary;

  constructor() {
    // Añado un par de albumes de muestra
    // Creamos un array de canciones para el primer album
    const songs1: Song[] = [
      new Song("Canción 1_1", 200, ["Rock"], true, 100),
      new Song("Canción 1_2", 180, ["Pop"], true, 50),
      new Song("Canción 1_3", 240, ["Jazz"], false, 20),
    ];

    // Creamos el primer album
    const album1 = new Album("Album 1", 2022, songs1);
    // Creamos un array de canciones para el segundo album
    const songs2: Song[] = [
      new Song("Canción 2_1", 180, ["Pop"], true, 50),
      new Song("Canción 2_2", 220, ["Rock"], true, 80),
      new Song("Canción 2_3", 240, ["Jazz"], false, 20),
      new Song("Canción 2_4", 190, ["Hip Hop"], true, 120),
    ];

    // Creamos el segundo album
    const album2 = new Album("Album 2", 2021, songs2);
    // Creamos un array de canciones para el tercer album
    const songs3: Song[] = [
      new Song("Canción 3_1", 190, ["Pop"], true, 70),
      new Song("Canción 3_2", 210, ["Rock"], true, 60),
      new Song("Canción 3_3", 230, ["Jazz"], false, 10),
      new Song("Canción 3_4", 200, ["Hip Hop"], true, 100),
      new Song("Canción 3_5", 170, ["Electronic"], false, 30),
    ];

    // Creamos el tercer album
    const album3 = new Album("Album 3", 2023, songs3);
    // Creamos un array de canciones para el cuarto album
    const songs4: Song[] = [
      new Song("Canción 4_1", 210, ["Rock"], true, 90),
      new Song("Canción 4_2", 190, ["Pop"], true, 60),
      new Song("Canción 4_3", 230, ["Jazz"], false, 20),
      new Song("Canción 4_4", 200, ["Hip Hop"], true, 110),
      new Song("Canción 4_5", 180, ["Electronic"], false, 40),
      new Song("Canción 4_6", 220, ["Funk"], false, 15),
    ];

    // Creamos el cuarto album
    const album4 = new Album("Album 4", 2020, songs4);

    // Creamos un array de canciones para el quinto album
    const songs5: Song[] = [
      new Song("Canción 5_1", 220, ["Rock"], true, 120),
      new Song("Canción 5_2", 180, ["Pop"], true, 40),
      new Song("Canción 5_3", 230, ["Jazz"], false, 15),
      new Song("Canción 5_4", 210, ["Hip Hop"], true, 90),
      new Song("Canción 5_5", 190, ["Electronic"], false, 50),
      new Song("Canción 5_6", 240, ["Funk"], false, 30),
    ];

    // Creamos el quinto album
    const album5 = new Album("Album 5", 1995, songs5);

    // Añado un par de artistas de muestra
    const artista_1: Artist = {
      name: "Artist 1",
      monthlyListeners: 10000,
      discography: [album1, album2],
    };
    const artista_2: Artist = {
      name: "Artist 2",
      monthlyListeners: 12340,
      discography: [album3],
    };
    const artista_3: Artist = {
      name: "Artist 3",
      monthlyListeners: 88968,
      discography: [album4, album5],
    };

    this.musicLibrary = new MusicLibrary();
    this.musicLibrary.addArtist(artista_1);
    this.musicLibrary.addArtist(artista_2);
    this.musicLibrary.addArtist(artista_3);

    this.musicLibrary.run();
  }
}

const the_library = new Library();
