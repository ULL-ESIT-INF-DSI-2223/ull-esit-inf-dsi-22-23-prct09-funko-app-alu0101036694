// Definición de las interfaces

/**
 * Interfaz que define los métodos de búsqueda de una colección de Streamable
 * @interface Searchable
 * @method searchByYear
 * @method searchByName
 */
export interface Searchable {
  searchByYear(year: number): Streamable[];
  searchByName(name: string): Streamable[];
}

/**
 * Interfaz que define los métodos de agregación y eliminación de una colección de Streamable
 * @interface Collectable
 * @method addToCollection
 * @method removeFromCollection
 */
export interface Collectable {
  addToCollection(streamable: Streamable): void;
  removeFromCollection(streamable: Streamable): void;
}

/**
 * Interfaz que define los atributos y métodos de un Streamable
 * @interface Streamable
 * @property id
 * @property title
 * @property description
 * @property genre
 * @property rating
 * @property releaseYear
 * @method getDuration
 */
export interface Streamable {
  id: string;
  title: string;
  description: string;
  genre: string[];
  rating: number;
  releaseYear: number;
  getDuration(): number;
}

// Clase abstracta BasicStreamableCollection

/**
 * Clase abstracta BasicStreamableCollection que implementa las interfaces Searchable y Collectable
 * @abstract
 * @class BasicStreamableCollection
 * @implements Searchable
 * @implements Collectable
 * @property collection
 * @method searchByYear
 * @method searchByName
 * @method addToCollection
 * @method removeFromCollection
 */
export abstract class BasicStreamableCollection
  implements Searchable, Collectable
{
  private collection: Streamable[];

  constructor() {
    this.collection = [];
  }

  searchByYear(year: number): Streamable[] {
    return this.collection.filter(
      (streamable) => streamable.releaseYear === year
    );
  }

  searchByName(name: string): Streamable[] {
    return this.collection.filter((streamable) =>
      streamable.title.toLowerCase().includes(name.toLowerCase())
    );
  }

  addToCollection(streamable: Streamable): void {
    this.collection.push(streamable);
  }

  removeFromCollection(streamable: Streamable): void {
    const index = this.collection.findIndex(
      (item) => item.id === streamable.id
    );
    if (index !== -1) {
      this.collection.splice(index, 1);
    }
  }
}

// Subclases que extienden BasicStreamableCollection

/**
 * Clase Series que extiende de BasicStreamableCollection
 * @class Series
 * @extends BasicStreamableCollection
 * @property episodes
 */
export class Series extends BasicStreamableCollection {
  private episodes: Streamable[];

  constructor() {
    super();
    this.episodes = [];
  }
}

/**
 * Clase Movies que extiende de BasicStreamableCollection
 * @class Movies
 * @extends BasicStreamableCollection
 * @property duration
 */
export class Movies extends BasicStreamableCollection {
  private duration: number;

  constructor() {
    super();
    this.duration = 0;
  }
}

/**
 * Clase Documentaries que extiende de BasicStreamableCollection
 * @class Documentaries
 * @extends BasicStreamableCollection
 * @property topics
 */
export class Documentaries extends BasicStreamableCollection {
  private topics: string[];

  constructor() {
    super();
    this.topics = [];
  }
}
