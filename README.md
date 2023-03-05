# [PRÁCTICA 5. OBJETOS, CLASES E INTERFACES](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct04-arrays-tuples-enums-alu0101036694.git). 

## Carla Oval Torres

## Índice <a name="índice"></a>
1. [Introducción](#introducción)
2. [Ejercicios propuestos](#ejercicios-propuestos)
    1. [Ejercicio 1 - Biblioteca musical](#ejercicio-1)
    2. [Ejercicio 2 - Conecta 4](#ejercicio-2)
    3. [Conclusiones](#conclusiones)
    4. [Referencias](#referencias)

## Introducción <a name="introducción"></a>
> [Volver al índice](#índice)

Lleve a cabo todos y cada uno de los ejercicios propuestos a continuación. Dado que vamos a trabajar con clases y que, probablemente, cada ejercicio implique el desarrollo de diferentes clases, el código fuente de cada ejercicio deberá estar alojado en un directorio independiente con nombre ejercicio-n/ dentro del directorio src/ de su proyecto. Dentro del directorio correspondiente a cada ejercicio, esto es, dentro del directorio ejercicio-n, incluya cada clase desarrollada en un fichero independiente.

Incluya la documentación de sus clases mediante el uso de TypeDoc y adopte una metodología de desarrollo dirigido por pruebas/comportamiento. Tenga en cuenta que seguir la metodología TDD o BDD implica confirmar el correcto funcionamiento del código desarrollado, así como los casos en los que dicho código debería informar de un error cuando la entrada no sea la correcta (errors should never pass silently). En consecuencia, desarrolle pruebas unitarias que comprueben el correcto funcionamiento del código y, además, incluya otras pruebas unitarias que verifiquen que el software es robusto ante entradas no válidas o inesperadas.

Por último, recuerde argumentar en el informe de la práctica todas las decisiones de diseño tomadas para cada ejercicio.

```typescript
  import * as Prompt from 'prompt-sync';

  const prompt = Prompt();
  const myNumber = parseInt(prompt('Introduce a number: '));
  console.log(myNumber)
```

## Ejercicios propuestos <a name="ejercicios-propuestos"></a>
### Ejercicio 1 - Biblioteca musical <a name="ejercicio-1"></a>
> [Volver al índice](#índice)

> Diseñe el conjunto de clases e interfaces necesarias para almacenar una biblioteca musical. El desarrollo realizado debe cumplir los siguientes requisitos funcionales:
> 
> La información de un artista, ya sea un grupo o un solista, será la siguiente:
> - Nombre
> - Número de oyentes mensuales
> - Discografía
> 
> La discografía de un artista consistirá en una colección de discos, donde la información de un disco será:
> - Nombre
> - Año de publicación
> - Canciones
> 
> Por cada canción perteneciente a un disco, la información será la siguiente:
> - Nombre
> - Duración en segundos
> - Géneros
> - Single (determina si la canción fue lanzada como un single o no)
> - Número de reproducciones
> 
> La biblioteca musical deberá permitir:
> - Almacenar la información de diferentes artistas, su discografía y las canciones pertenecientes a cada disco o álbum.
> - Mostrar por la consola la información de la biblioteca en formato tabla (console.table).
> - Permitir llevar a cabo búsquedas de artistas, discos y canciones y mostrar los resultados de la búsqueda en formato de tabla.
> - Permitir calcular el número de canciones incluidas en un disco concreto.
> - Permitir calcular la duración de un disco, a partir de la duración de todas y cada una de las canciones que lo conforman.
> - Permitir calcular el número de reproducciones de un disco, a partir del número de reproducciones de todas y cada una de las canciones incluidas en el mismo.


#### Solución:

**Interfaz `Artist`**

Artist es una interfaz, no una clase en sí misma. En TypeScript, una interfaz es una estructura que describe la forma de un objeto, es decir, qué propiedades y métodos tiene el objeto, pero no implementa ninguna funcionalidad en sí misma.

La interfaz "Artist" define un objeto que tiene tres propiedades:

- "name": una cadena de texto que representa el nombre del artista.
- "monthlyListeners": un número entero que representa el número de oyentes mensuales del artista.
- "discography": un array de objetos "Album" que representa la discografía del artista.

```typescript
interface Artist {
  name: string;
  monthlyListeners: number;
  discography: Album[];
}
```

**Clase `Album`**

La clase Album es una representación de un álbum musical. Tiene tres propiedades: name, que es el nombre del álbum, year, que es el año en que se lanzó el álbum, y songs, que es un array de objetos Song que representan las canciones en el álbum.

El constructor de la clase Album toma tres argumentos y los utiliza para inicializar las propiedades name, year y songs.

La clase también tiene tres métodos:

- getNumSongs(): este método devuelve el número de canciones en el álbum. Esto se hace simplemente devolviendo la longitud del array songs.

- getDuration(): este método devuelve la duración total del álbum en segundos. Esto se hace iterando sobre el array songs y sumando las duraciones de cada canción.

- getNumReproductions(): este método devuelve el número total de reproducciones del álbum. Esto se hace iterando sobre el array songs y sumando el número de reproducciones de cada canción.

```typescript
class Album {
  constructor(public name: string, public year: number, public songs: Song[]) {}

  getNumSongs(): number {
    return this.songs.length;
  }

  getDuration(): number {
    let duration = 0;
    for (const song of this.songs) {
      duration += song.duration;
    }
    return duration;
  }

  getNumReproductions(): number {
    let numReproductions = 0;
    for (const song of this.songs) {
      numReproductions += song.numReproductions;
    }
    return numReproductions;
  }
}
```

**Clase `Song`**

La clase Song representa una canción en un álbum de música. Tiene cinco propiedades:

- name: una cadena que representa el nombre de la canción.
- duration: un número que representa la duración de la canción en segundos.
- genres: un vector de cadenas que representa los géneros de la canción.
- isSingle: un valor booleano que indica si la canción es un sencillo (es decir, una canción independiente que no forma parte de un álbum).
- numReproductions: un número que indica la cantidad de veces que la canción ha sido reproducida.

La clase también tiene un constructor que acepta valores para todas las propiedades y los asigna a las propiedades correspondientes de la instancia.

```typescript
class Song {
  constructor(public name: string, public duration: number, public genres: string[], public isSingle: boolean, public numReproductions: number) {}
}
```
No hay métodos adicionales en la clase Song, pero se pueden utilizar las propiedades públicas de la clase en conjunto con otras clases para realizar diversas operaciones relacionadas con la música. Por ejemplo, la propiedad duration de la clase Song se utiliza en el método getDuration() de la clase Album para calcular la duración total de un álbum.

**Clase `MusicLibrary`**

El código presentado es una implementación de una biblioteca musical en TypeScript. Comienza importando las clases Album, Song y Artist desde los archivos './album', './song' y './artist', respectivamente. Luego, importa la biblioteca 'prompt-sync' y establece tres constantes de color para su uso posterior en la consola.

```typescript
import { Album } from './album';
import { Song } from './song';
import { Artist } from './artist';

import * as Prompt from 'prompt-sync';

const RESET = "\u001b[0m";
const BOLD = "\u001b[1m";
const GREEN = "\u001b[32m";
const prompt = Prompt();

// Biblioteca musical
export class MusicLibrary {
  private artists: Artist[];

  constructor() {
    this.artists = [];
  }

  public addArtist(artist: Artist): void {
    this.artists.push(artist);
  }

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
  
  public search(query: string): void {
    const artistResults: { artist: Artist, albums: string[] }[] = [];
    const albumResults: Album[] = [];
    const songResults: Song[] = [];
  
    for (const artist of this.artists) {
      if (artist.name.toLowerCase().includes(query.toLowerCase())) {
        artistResults.push({
          artist,
          albums: artist.discography.map(album => album.name)
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
          return albums.map(album => ({
            Artist: artist.name,
            Album: album,
            "Monthly Listeners": artist.monthlyListeners
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
          const song1 = new Song('Song A', 180, ['Rock'], true, 100);
          const song2 = new Song('Song B', 240, ['Pop', 'R&B'], false, 50);
          const song3 = new Song('Song C', 230, ['Disco', 'R&B'], false, 50);
          const album1 = new Album('Album A', 2022, [song1, song2]);
          const album2 = new Album('Album A', 2021, [song2, song3]);
          const artista_ej: Artist = { name: 'Artist A', monthlyListeners: 10000, discography: [album1] };
          const artist_otro: Artist = { name: 'Artist B', monthlyListeners: 5000, discography: [album1, album2] };
          this.addArtist(artista_ej);
          break;
        case "2":
          this.displayLibrary();
          break;
        case "3":
          // Pedir un query
          do {
            the_query = prompt(`Enter a query: `);
          } while (typeof(the_query) !== 'string');
          this.search(the_query);
          break;
        case "4":
          // Pedir el nombre del album
          do {
            the_album = prompt(`Enter an album name: `);
          } while (typeof(the_album) !== 'string');
          console.log(`${BOLD}${GREEN}Number of songs in ${the_album}: ${this.countSongs(the_album)}${RESET}`);
          break;
        case "5":
          // Pedir el nombre del album
          do {
            the_album = prompt(`Enter an album name: `);
          } while (typeof(the_album) !== 'string');
          console.log(`${BOLD}${GREEN}Duration of ${the_album}: ${this.calculateDuration(the_album)}${RESET}`);
          break;
        case "6":
          // Pedir el nombre del album
          do {
            the_album = prompt(`Enter an album name: `);
          } while (typeof(the_album) !== 'string');
          console.log(`${BOLD}${GREEN}Reproductions of ${the_album}: ${this.calculateReproductions(the_album)}${RESET}`);
          break;
        default:
          console.log("Invalid option. Try again.");
          break;
      }
    }
  }
}
```

La clase MusicLibrary es la base de la biblioteca musical y contiene un array privado de artistas en su constructor. Los métodos públicos de esta clase incluyen:

- addArtist(artist: Artist): añade un objeto de artista al array de artistas.
- displayLibrary(): muestra una tabla en la consola que enumera todos los artistas, álbumes y canciones en la biblioteca.
- search(query: string): busca en la biblioteca los artistas, álbumes y canciones que contengan la cadena de consulta pasada como parámetro. Si se encuentra un artista, se muestra el nombre del artista, el nombre del álbum y el número mensual de oyentes. Si se encuentra un álbum, se muestra el nombre del álbum, el nombre del artista y el año de lanzamiento. Si se encuentra una canción, se muestra el nombre de la canción, el nombre del álbum, el nombre del artista, el número de oyentes mensuales, la duración de la canción, los géneros, si es una canción individual y el número de reproducciones.
- countSongs(albumName: string): devuelve el número de canciones en un álbum dado.
- calculateDuration(albumName: string): devuelve la duración total de todas las canciones en un álbum dado.
- calculateReproductions(albumName: string): devuelve el número total de reproducciones de todas las canciones en un álbum dado.
- printMenu(): muestra un menú de opciones disponibles para el usuario.
- run(): comienza un bucle que muestra el menú al usuario y procesa las opciones seleccionadas hasta que el usuario elige salir (seleccionando 0).

En el método run(), se realiza una serie de acciones basadas en la opción seleccionada por el usuario en el menú, que se lee utilizando el objeto prompt. La opción 1 agrega un ejemplo de artista con un álbum y dos canciones. La opción 2 muestra una tabla que enumera todos los artistas, álbumes y canciones en la biblioteca. La opción 3 solicita una cadena de consulta al usuario y luego enumera los artistas, álbumes y canciones que contienen la cadena de consulta. Las opciones 4 a 6 solicitan al usuario el nombre de un álbum y luego muestran el número de canciones, la duración total y el número total de reproducciones de ese álbum. La opción 0 termina la ejecución del programa.

**Clase `Library`**

La clase Library tiene una propiedad musicLibrary que es una instancia de la clase MusicLibrary. La clase MusicLibrary tiene una propiedad artists que es una matriz de objetos de la clase Artist.

El constructor de la clase Library crea cuatro álbumes de muestra y los agrega a la biblioteca musical. Cada álbum contiene varias canciones de muestra. Las canciones tienen información sobre su nombre, duración, géneros, si son un single y el número de reproducciones.

El código también importa cuatro módulos que definen las clases utilizadas en la biblioteca (Album, Song, Artist, MusicLibrary) y el módulo Prompt-sync que permite leer la entrada del usuario desde la consola. Finalmente, la clase Library se exporta para que pueda ser utilizada por otros módulos.

```typescript
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

```

#### Tests:

Los tests que hemos realizado para comprobar el correcto funcionamiento de la biblioteca son los siguientes:

```typescript
import { describe, it } from 'mocha';
import { expect } from "chai";
import * as Prompt from 'prompt-sync';
import { Song } from '../src/ejercicio01/song';
import { Album } from '../src/ejercicio01/album';
import { Artist } from '../src/ejercicio01/artist';
import { MusicLibrary } from '../src/ejercicio01/library';

describe('MusicLibrary', () => {
    describe('addArtist', () => {
        it('should add an artist to the library', () => {
            const library = new MusicLibrary();
            const artist: Artist = {name:'Queen', monthlyListeners:1000000, discography:[
                new Album('A Night at the Opera', 1975, [
                new Song('Bohemian Rhapsody', 6.07, ['Rock'], false, 1000000),
                new Song('Love of My Life', 3.39, ['Rock', 'Ballad'], false, 500000),
                new Song('You\'re My Best Friend', 2.52, ['Rock'], true, 750000),
                ]),
            ]};
            library.addArtist(artist);
            expect(library.artists).to.deep.equal([artist]);
        });
    });

    describe('countSongs', () => {
        it('should count the number of songs in an album', () => {
          const library = new MusicLibrary();
          const artist: Artist = {
            name: 'Queen',
            monthlyListeners: 1000000,
            discography: [
              new Album('A Night at the Opera', 1975, [
                new Song('Bohemian Rhapsody', 6.07, ['Rock'], false, 1000000),
                new Song('Love of My Life', 3.39, ['Rock', 'Ballad'], false, 500000),
                new Song('You\'re My Best Friend', 2.52, ['Rock'], true, 750000),
              ]),
            ],
          };
          library.addArtist(artist);
          library.countSongs('A Night at the Opera');
          const expectedCount = 3;
          const actualCount = artist.discography[0].songs.length;
          expect(actualCount).to.equal(expectedCount);
        });
      });

      describe('calculateDuration', () => {
        it('should count the duration of the album', () => {
          const library = new MusicLibrary();
          const artist: Artist = {
            name: 'Queen',
            monthlyListeners: 1000000,
            discography: [
              new Album('A Night at the Opera', 1975, [
                new Song('Bohemian Rhapsody', 6.07, ['Rock'], false, 1000000),
                new Song('Love of My Life', 3.39, ['Rock', 'Ballad'], false, 500000),
                new Song('You\'re My Best Friend', 2.52, ['Rock'], true, 750000),
              ]),
            ],
          };
          library.addArtist(artist);
          let actualCount = 0;
          const expectedCount = 11.98;
          actualCount = library.calculateDuration('A Night at the Opera');
          expect(actualCount).to.equal(expectedCount);
        });
      });

      describe('calculateReproductions', () => {
        it('should count the reproductions of the album', () => {
          const library = new MusicLibrary();
          const artist: Artist = {
            name: 'Queen',
            monthlyListeners: 1000000,
            discography: [
              new Album('A Night at the Opera', 1975, [
                new Song('Bohemian Rhapsody', 6.07, ['Rock'], false, 1000000),
                new Song('Love of My Life', 3.39, ['Rock', 'Ballad'], false, 500000),
                new Song('You\'re My Best Friend', 2.52, ['Rock'], true, 750000),
              ]),
            ],
          };
          library.addArtist(artist);
          let actualCount = 0;
          const expectedCount = 2250000;
          actualCount = library.calculateReproductions('A Night at the Opera');
          expect(actualCount).to.equal(expectedCount);
        });
      });


});
```

Donde se prueban los siguientes métodos:

1. addArtist(): se prueba si se puede agregar un artista a la biblioteca y se espera que la lista de artistas de la biblioteca sea igual al artista que se acaba de agregar.

2. countSongs(): se prueba si se puede contar el número de canciones en un álbum específico y se espera que el recuento sea el mismo que el número real de canciones en el álbum.

3. calculateDuration(): se prueba si se puede calcular la duración de un álbum específico y se espera que la duración calculada sea la misma que la duración real del álbum.

4. calculateReproductions(): se prueba si se puede calcular el número total de reproducciones de un álbum específico y se espera que el número de reproducciones calculado sea el mismo que el número real de reproducciones del álbum.

### Ejercicio 2 - Conecta 4 <a name="ejercicio-2"></a>
> [Volver al índice](#índice)

> Todos (o casi todos) hemos jugado alguna vez al Conecta 4.
> 
> En una rejilla de 6 filas y 7 columnas, dos jugadores se turnan para ir colocando un conjunto de fichas dejándolas caer por alguna de las siete columnas de la rejilla. Cada jugador dispone de un total de 21 fichas de un color diferente.
> 
> En cada turno, una ficha tomará la primera posición libre de la columna seleccionada por el jugador que corresponda. Si la columna está completa, esto es, ya cuenta con seis fichas, dicha columna no podrá ser seleccionada por ninguno de los dos jugadores para dejar caer otra ficha.
> 
> El objetivo del jugador es colocar cuatro fichas consecutivas ya sea en una misma fila, una misma columna o en diagonal.
> 
> Cree la jerarquía de clases e interfaces necesarias para implementar el juego Conecta 4, teniendo en cuenta la siguiente funcionalidad:
> 
> El juego comienza con el Jugador 1 colocando la primera ficha y, en turnos sucesivos, debe ir alternándose con el Jugador 2. Se deberá mostrar por consola a qué jugador le toca colocar una ficha.
> 
> Si un jugador intenta colocar una ficha en una columna completa, se mostrará un mensaje informando de que la columna está completa y se le permitirá seleccionar otra columna para colocar la ficha. Lo anterior debe repetirse hasta que el jugador coloque su ficha.
> 
> Una vez que el jugador correspondiente haya colocado una ficha, debe mostrarse por la consola el estado del tablero.
> Cuando alguno de los dos jugadores gane, se debe informar de lo anterior en la consola y terminar el juego.


#### Solución:

**Interfaz `Player`**

Se utiliza para representar a los jugadores del juego Connect4.

La interfaz tiene dos propiedades, `name` y `color`, ambas de tipo *string*. `name` representa el nombre del jugador y `color` representa el símbolo de la ficha del jugador junto con el color del jugador en formato de escape ANSI.

> El formato de escape ANSI se utiliza para definir colores y otros efectos visuales en la consola de texto. En este caso, el color del jugador se define en este formato para que el juego pueda imprimir los colores de los jugadores en la consola de texto.

```typescript
export interface Player {
  name: string;
  color: string;
}
```

**Clase `Conect4`**


En la clase Conect4, en la primera línea, importamos la biblioteca prompt-sync y le damos el alias de Prompt. Esta biblioteca se utiliza para solicitar entrada del usuario de forma síncrona en la consola.

En la segunda línea, se importa la clase Player que definimos con anterioridad desde el archivo Player.ts.

Luego, se define la clase Connect4, que tiene varias propiedades y métodos:

- ROWS y COLS son constantes que indican el número de filas y columnas en el tablero del juego, respectivamente.
players es una lista de los jugadores del juego.
- currentPlayerIndex es un número que indica el índice del jugador actual en la lista de jugadores.
board es una matriz que representa el tablero del juego, con cada elemento de la matriz representando un espacio en el tablero.
- El constructor de la clase toma una lista de jugadores como parámetro y utiliza esto para inicializar las propiedades players y board. El tablero se inicializa como una matriz vacía del tamaño especificado por ROWS y COLS.

```typescript
import * as Prompt from 'prompt-sync';
import {Player} from './Player';

/**
 * Representa un juego Connect 4.
 */
export class Connect4 {
  /** Número de filas en el tablero */
  private readonly ROWS: number = 6;
  /** Número de columnas en el tablero */
  private readonly COLS: number = 7;
  /** Lista de jugadores */
  private readonly players: Player[];
  /** Índice del jugador actual en la lista de jugadores */
  private currentPlayerIndex: number = 0;
  /** El tablero del juego */
  private readonly board: string[][];

   /**
   * @constructor
   * Crea una instancia del juego Connect4 con los jugadores especificados.
   * @param players La lista de jugadores.
   */
  constructor(players: Player[]) {
    this.players = players;
    this.board = [];
    for (let i = 0; i < this.ROWS; i++) {
      this.board.push(Array(this.COLS).fill(' '));
    }
  }
```

El método play es el método principal del juego. Se ejecuta en un bucle hasta que se determina un ganador o un empate. Dentro del bucle, se muestra el tablero del juego, se solicita al usuario que seleccione una columna en la que colocar una ficha, se coloca la ficha en la posición correspondiente en el tablero y se verifica si el jugador actual ha ganado el juego o si el juego ha terminado en empate. Si no se ha determinado un ganador o un empate, se cambia el turno al siguiente jugador.

```typescript
  /**
   * Comienza el juego y continúa hasta que se determina un ganador o un empate.
   */
  public play() {
    let gameOver = false;
    let winner: Player | null = null;
    while (!gameOver) {
      console.clear();
      console.log(`It's ${this.players[this.currentPlayerIndex].name}'s (${this.players[this.currentPlayerIndex].color}) turn!`);
      this.printBoard();

      const column = this.getColumnChoice();
      const row = this.getNextOpenRow(column);

      this.board[row][column] = this.players[this.currentPlayerIndex].color;
      if (this.checkWin(row, column)) {
        gameOver = true;
        winner = this.players[this.currentPlayerIndex];
      } else if (this.checkDraw()) {
        gameOver = true;
      } else {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2;
      }
    }

    console.clear();
    this.printBoard();
    if (winner) {
      console.log(`Congratulations ${winner.name}! You won!`);
    } else {
      console.log("It's a draw!");
    }
  }
```

El método getColumnChoice solicita al usuario que seleccione una columna en la que colocar una ficha y devuelve el índice de la columna seleccionada. Se verifica que la selección del usuario sea válida y se continúa solicitando una selección hasta que se proporcione una selección válida.

```typescript
  /**
   * Solicita al usuario que elija una columna en la que colocar una ficha y devuelve el índice de la columna seleccionada.
   * @returns El índice de la columna seleccionada.
   */
  private getColumnChoice(): number {
    const prompt = Prompt();
    while (true) {
      const columnStr = parseInt(prompt(`Enter column (1-${this.COLS}): `));
      if (columnStr === null) {
        return -1;
      }
      const column = columnStr - 1;
      const row = this.getNextOpenRow(column);
      if (isNaN(column) || column < 0 || column >= this.COLS) {
        console.log('Invalid column choice. Please try again.');
      } else if (row === -1) {
        console.log('Column is full. Please choose again.');
        continue;
      } else {
        return column;
      }
    }
  }
```

El método getNextOpenRow devuelve el índice de la siguiente fila abierta en una columna determinada del tablero. Si la columna está llena, devuelve -1.

```typescript
  /**
   * Obtiene la siguiente fila abierta en una columna determinada.
   * @param column El índice de la columna.
   * @returns El índice de la fila, o -1 si la columna está llena.
   */
  private getNextOpenRow(column: number): number {
    for (let row = this.ROWS - 1; row >= 0; row--) {
      if (this.board[row][column] === ' ') {
        return row;
      }
    }
    return -1;
  }
```

El método checkWin verifica si el jugador actual ha ganado el juego, buscando en las cuatro posibles direcciones: horizontal, vertical y las dos diagonales. El método toma como argumentos la fila y la columna en la que se ha insertado la última ficha.

Primero, se almacena el color del jugador actual en la variable color.

Luego, se realiza un bucle para verificar si hay cuatro fichas del mismo color de manera horizontal, en la fila indicada por row. El conteo de fichas se realiza con la variable count, que se restablece a cero cada vez que se encuentra una ficha de un color diferente. Si se encuentran cuatro fichas del mismo color, el método devuelve true.

Luego, se realiza otro bucle para verificar si hay cuatro fichas del mismo color de manera vertical, en la columna indicada por column. El conteo de fichas se realiza de manera similar al caso anterior. Si se encuentran cuatro fichas del mismo color, el método devuelve true.

Después, se realizan dos bucles para verificar las dos diagonales. En cada diagonal, se comienza en la posición correspondiente a la esquina superior izquierda o superior derecha de la ficha recién insertada y se avanza hacia la esquina inferior opuesta, contando las fichas del mismo color. Si se encuentran cuatro fichas del mismo color en cualquiera de las dos diagonales, el método devuelve true.

Si ninguna de las cuatro verificaciones anteriores encuentra cuatro fichas del mismo color consecutivas, el método devuelve false.

```typescript
  private checkWin(row: number, column: number): boolean {
    const color = this.players[this.currentPlayerIndex].color;

    // Check horizontal
    let count = 0;
    for (let i = 0; i < this.COLS; i++) {
      if (this.board[row][i] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }

    // Check vertical
    count = 0;
    for (let i = 0; i < this.ROWS; i++) {
      if (this.board[i][column] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }

    // Check diagonal (top-left to bottom-right)
    count = 0;
    const topLeftRow = row - Math.min(row, column);
    const topLeftCol = column - Math.min(row, column);
    for (let i = topLeftRow, j = topLeftCol; i < this.ROWS && j < this.COLS; i++, j++) {
      if (this.board[i][j] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }

    // Check diagonal (top-right to bottom-left)
    count = 0;
    const topRightRow = row - Math.min(row, this.COLS - 1 - column);
    const topRightCol = column + Math.min(row, this.COLS - 1 - column);
    for (let i = topRightRow, j = topRightCol; i < this.ROWS && j >= 0; i++, j--) {
      if (this.board[i][j] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }

    // No winner
   return false;
  }
```

El método checkDraw(): boolean verifica si el tablero está lleno y no hay ganador. Si hay al menos una posición vacía en la fila superior del tablero, el método devuelve false. De lo contrario, el método devuelve true.

```typescript
  private checkDraw(): boolean {
    for (let i = 0; i < this.COLS; i++) {
      if (this.board[0][i] === ' ') {
        return false;
      }
    }
    return true;
  }
```

El método printBoard() se encarga de imprimir el tablero actual del juego en la consola.

Primero, el método define una variable llamada columnNumbers que se utiliza para almacenar los números de columna que se imprimirán en la parte superior del tablero. A continuación, se utiliza un bucle for para agregar cada número de columna a la cadena columnNumbers.

Luego, el método utiliza un bucle for anidado para recorrer cada fila y columna del tablero. Para cada celda del tablero, se agrega el valor de la celda a una cadena llamada rowString. Se utiliza el formato de cadena para asegurarse de que cada celda esté rodeada por bordes verticales y espacios.

Una vez que se ha terminado de construir la cadena rowString para una fila completa, se la imprime en la consola. Esto se repite para cada fila en el tablero, lo que resulta en la impresión del tablero completo en la consola.

```typescript
  private printBoard(): void {
    // Print column numbers
    let columnNumbers = '';
    for (let i = 1; i <= this.COLS; i++) {
      columnNumbers += `  ${i} `;
    }
    console.log(columnNumbers);
  
    // Print board
    for (let i = 0; i < this.ROWS; i++) {
      let rowString = '|';
      for (let j = 0; j < this.COLS; j++) {
        rowString += ` ${this.board[i][j]} |`;
      }
      console.log(rowString);
    }
  }
}
```

**Clase `Game`**

La clase Game se utiliza para inicializar el juego y configurar los jugadores, mientras que la clase Connect4 que vimos anteriormente se encarga de manejar la lógica del juego y la interacción con el usuario.


```typescript
export class Game {
private readonly players: Player[];

constructor() {
this.players = [
{ name: 'Player 1', color: ${BOLD}${RED}X${RESET} },
{ name: 'Player 2', color: ${BOLD}${GREEN}O${RESET} },
];
}

public start(): void {
const connect4 = new Connect4(this.players);
connect4.play();
}
}
```

El código define una clase Game que tiene dos propiedades: players y un constructor que establece los nombres de los jugadores y los colores que representarán a cada uno. La propiedad players es un arreglo de objetos que tienen dos propiedades: name (nombre del jugador) y color (color que se utilizará para representar las fichas del jugador en el juego).

La clase Game también tiene un método start que crea una nueva instancia de la clase Connect4 y llama al método play para comenzar el juego.


#### Tests

Las pruebas del código que desarrollamos son las siguientes:

```typescript
import { describe, it } from 'mocha';
import { expect } from "chai";
import { Game } from '../src/ejercicio02/Game';
import { Player } from '../src/ejercicio02/Player';
import { Connect4 } from '../src/ejercicio02/Connect4';

describe('Player interface', () => {
  it('should have a name property of type string', () => {
    const player: Player = { name: 'John', color: '\x1b[31m' };
    expect(typeof player.name).equal('string');
  });

  it('should have a color property of type string', () => {
    const player: Player = { name: 'John', color: '\x1b[31m' };
    expect(typeof player.color).equal('string');
  });
});

describe('Connect4', () => {
  let player1: Player = { name: 'Player 1', color: `X` };
  let player2: Player = { name: 'Player 2', color: `O` };
  let connect4: Connect4;

  beforeEach(() => {
    const players = [player1, player2]
    connect4 = new Connect4(players);
  });

  it('should start with an empty board', () => {
    const expectedBoard = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ];
    expect(connect4['board']).to.deep.equal(expectedBoard);
  });

  describe('constructor', () => {
    it('should create a new Connect4 game with the correct properties', () => {
      expect(connect4.currentPlayerIndex).equal(0);
      expect(connect4.players).to.deep.equal([player1, player2]);
      expect(connect4.board.length).equal(6);
      expect(connect4.board[0].length).equal(7);
      expect(connect4.checkDraw()).eq(false);
    });
  });

  describe('Estado del juego', () => {
    it('No está en tablas', () => {
      expect(connect4.checkDraw()).eq(false);
    });
    it('No hay ganador', () => {
      expect(connect4.checkWin(0, 0)).eq(false);
    });
  });

  describe('Se inserta una ficha', () => {
    it('En la columna 1 (presionar el uno 1)', () => {
      expect(connect4.getColumnChoice()).to.deep.eq(0);
    });
  });

  describe('Siguiente fila abierta en una columna determinada', () => {
    it('Ya hay una ficha', () => {
      expect(connect4.getNextOpenRow(0)).to.equal(5);
    });
    it('No hay una ficha', () => {
      expect(connect4.getNextOpenRow(1)).to.equal(5);
    });
  });
});

```

En la primera sección de pruebas, se prueba la interfaz del jugador. Se espera que un objeto jugador tenga una propiedad "name" de tipo string y una propiedad "color" de tipo string.

En la segunda sección de pruebas, se prueba la funcionalidad del juego Connect4. Primero se comprueba que el juego comienza con un tablero vacío. Luego, se prueban las propiedades del juego al momento de su creación.

En la tercera sección de pruebas, se prueba el estado del juego. Primero se comprueba que no está en tablas (checkDraw() retorna false). Luego, se comprueba que no hay ganador aún.

En la cuarta sección de pruebas, se prueba la inserción de una ficha en el tablero en una columna determinada. Se espera que la columna elegida sea la correcta.

En la quinta sección de pruebas, se prueba la funcionalidad para encontrar la siguiente fila disponible en una columna determinada. Se espera que la función getNextOpenRow() retorne el número correcto de fila.


### Conclusiones <a name="conclusiones"></a>
> [Volver al índice](#índice)

La función table puede ser muy útil para depurar objetos complejos y visualizarlos de una manera más estructurada y legible. Es especialmente útil cuando se está tratando con datos tabulares o cuando se necesita comparar varias instancias de un mismo objeto.

Por otro lado el uso de clases e interfaces nos posibilita la creación de objetos con propiedades y métodos que nos permiten modelar el comportamiento de los mismos. Esto nos permite crear objetos que se comporten de una manera determinada y que nos permitan realizar operaciones sobre ellos de una manera más sencilla y ordenada, incluso si son objetos complejos.

### Referencias <a name="referencias"></a>
> [Volver al índice](#índice)

1. [Entrada de texto](https://www.npmjs.com/package/prompt-sync)
2. [Formato de escape ANSI](https://es.wikipedia.org/wiki/C%C3%B3digo_escape_ANSI#:~:text=Los%20c%C3%B3digos%20de%20escape%20ANSI,color%20o%20moviendo%20el%20cursor.)