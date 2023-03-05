import { Album } from "./album";
import { Song } from "./song";
import { Artist } from "./artist";

import * as Prompt from "prompt-sync";

const RESET = "\u001b[0m";
const BOLD = "\u001b[1m";
const GREEN = "\u001b[32m";
const prompt = Prompt();

// Biblioteca musical

/**
 * Clase que representa una biblioteca musical.
 * @class MusicLibrary
 * @property {Artist[]} artists - Lista de artistas de la biblioteca.
 * @method addArtist - Añade un artista a la biblioteca.
 * @method displayLibrary - Muestra la biblioteca en la consola.
 * @method search - Muestra los resultados de una búsqueda en la consola.
 * @method countSongs - Cuenta el número de canciones de un álbum.
 * @method calculateDuration - Calcula la duración de un álbum.
 * @method calculateReproductions - Calcula el número de reproducciones de un álbum.
 */
export class MusicLibrary {
  public artists: Artist[]; // Antes era private

  /**
   * Constructor de la clase MusicLibrary.
   * @constructor
   * @param {Artist[]} artists - Lista de artistas de la biblioteca.
   * @returns {MusicLibrary} - Objeto de tipo MusicLibrary.
   */
  constructor() {
    this.artists = [];
  }

  /**
   * Añade un artista a la biblioteca.
   * @param {Artist} artist - Artista a añadir.
   * @returns {void}
   * @method addArtist
   * @memberof MusicLibrary
   */
  public addArtist(artist: Artist): void {
    this.artists.push(artist);
  }

  /**
   * Muestra la biblioteca en la consola.
   * @returns {void}
   * @method displayLibrary
   * @memberof MusicLibrary
   */
  public displayLibrary(): void {
    console.table(
      this.artists.flatMap((artist) =>
        artist.discography.flatMap((album) =>
          album.songs.map((song) => ({
            artist: artist.name,
            "Monthly Listeners": artist.monthlyListeners,
            Album: album.name,
            Year: album.year,
            Name: song.name,
            Duration: song.duration,
            Genres: song.genres,
            Single: song.isSingle,
            Reproductions: song.numReproductions,
          }))
        )
      )
    );
  }

  /**
   * Muestra los resultados de una búsqueda en la consola.
   * @param query
   * @returns {void}
   * @method search
   * @memberof MusicLibrary
   */
  public search(query: string): void {
    const artistResults: { artist: Artist; albums: string[] }[] = [];
    const albumResults: Album[] = [];
    const songResults: Song[] = [];

    for (const artist of this.artists) {
      if (artist.name.toLowerCase().includes(query.toLowerCase())) {
        artistResults.push({
          artist,
          albums: artist.discography.map((album) => album.name),
        });
      } else {
        for (const album of artist.discography) {
          if (album.name.toLowerCase().includes(query.toLowerCase())) {
            albumResults.push(album);
          } else {
            for (const song of album.songs) {
              if (song.name.toLowerCase().includes(query.toLowerCase())) {
                songResults.push(song);
              }
            }
          }
        }
      }
    }

    if (artistResults.length > 0) {
      console.log("Artists:");
      console.table(
        artistResults.flatMap(({ artist, albums }) => {
          return albums.map((album) => ({
            Artist: artist.name,
            Album: album,
            "Monthly Listeners": artist.monthlyListeners,
          }));
        })
      );
    }
    if (albumResults.length > 0) {
      console.log("Albums:");
      console.table(albumResults);
    }
    if (songResults.length > 0) {
      console.log("Songs:");
      console.table(songResults);
    }
  }

  /**
   * Cuenta el número de canciones de un álbum.
   * @param albumName
   * @returns {number}
   */
  public countSongs(albumName: string): number {
    for (const artist of this.artists) {
      for (const album of artist.discography) {
        if (album.name.toLowerCase() === albumName.toLowerCase()) {
          return album.songs.length;
        }
      }
    }
    return 0;
  }

  /**
   * Calcula la duración de un álbum.
   * @param albumName
   * @method calculateDuration
   * @memberof MusicLibrary
   * @returns {number}
   */
  public calculateDuration(albumName: string): number {
    for (const artist of this.artists) {
      for (const album of artist.discography) {
        if (album.name.toLowerCase() === albumName.toLowerCase()) {
          let duration = 0;
          for (const song of album.songs) {
            duration += song.duration;
          }
          return duration;
        }
      }
    }
    return 0;
  }

  /**
   * Calcula el número de reproducciones de un álbum.
   * @param albumName
   * @returns {number}
   */
  public calculateReproductions(albumName: string): number {
    for (const artist of this.artists) {
      for (const album of artist.discography) {
        if (album.name.toLowerCase() === albumName.toLowerCase()) {
          let reproductions = 0;
          for (const song of album.songs) {
            reproductions += song.numReproductions;
          }
          return reproductions;
        }
      }
    }
    return 0;
  }

  /**
   * Muestra el menú de opciones en la consola.
   * @returns {void}
   * @method printMenu
   * @memberof MusicLibrary
   */
  public printMenu(): void {
    console.log("==== Music Library ====");
    console.log("1. Add artist");
    console.log("2. Display library");
    console.log("3. Search");
    console.log("4. Count songs in an album");
    console.log("5. Calculate duration of an album");
    console.log("6. Calculate number of reproductions of an album");
    console.log("0. Exit");
  }

  /**
   * Ejecuta el programa.
   * @returns {void}
   * @method run
   * @memberof MusicLibrary
   */
  public run(): void {
    let exit = false;
    let the_query, the_album;
    while (!exit) {
      this.printMenu();
      const option = prompt("Select an option (0-6): ");
      switch (option) {
        case "0":
          exit = true;
          break;
        case "1":
          const song1 = new Song("Song A", 180, ["Rock"], true, 100);
          const song2 = new Song("Song B", 240, ["Pop", "R&B"], false, 50);
          const song3 = new Song("Song C", 230, ["Disco", "R&B"], false, 50);
          const album1 = new Album("Album A", 2022, [song1, song2]);
          const album2 = new Album("Album A", 2021, [song2, song3]);
          const artista_ej: Artist = {
            name: "Artist A",
            monthlyListeners: 10000,
            discography: [album1],
          };
          const artist_otro: Artist = {
            name: "Artist B",
            monthlyListeners: 5000,
            discography: [album1, album2],
          };
          this.addArtist(artista_ej);
          break;
        case "2":
          this.displayLibrary();
          break;
        case "3":
          // Pedir un query
          do {
            the_query = prompt(`Enter a query: `);
          } while (typeof the_query !== "string");
          this.search(the_query);
          break;
        case "4":
          // Pedir el nombre del album
          do {
            the_album = prompt(`Enter an album name: `);
          } while (typeof the_album !== "string");
          console.log(
            `${BOLD}${GREEN}Number of songs in ${the_album}: ${this.countSongs(
              the_album
            )}${RESET}`
          );
          break;
        case "5":
          // Pedir el nombre del album
          do {
            the_album = prompt(`Enter an album name: `);
          } while (typeof the_album !== "string");
          console.log(
            `${BOLD}${GREEN}Duration of ${the_album}: ${this.calculateDuration(
              the_album
            )}${RESET}`
          );
          break;
        case "6":
          // Pedir el nombre del album
          do {
            the_album = prompt(`Enter an album name: `);
          } while (typeof the_album !== "string");
          console.log(
            `${BOLD}${GREEN}Reproductions of ${the_album}: ${this.calculateReproductions(
              the_album
            )}${RESET}`
          );
          break;
        default:
          console.log("Invalid option. Try again.");
          break;
      }
    }
  }
}
