/**
 * Enumerado que representa los tipos de Funko que existen.
 */
export enum FunkoType {
  POP = "Pop!",
  POP_RIDES = "Pop! Rides",
  VINYL_SODA = "Vinyl Soda",
  VINYL_GOLD = "Vinyl Gold",
}

/**
 * Enumerado que representa los géneros de Funko que existen.
 */
export enum FunkoGenre {
  ANIMATION = "Animation",
  MOVIES_AND_TV = "Movies and TV",
  VIDEOGAMES = "Video games",
  SPORTS = "Sports",
  MUSIC = "Music",
  ANIME = "Anime",
}

/**
 * Clase que representa un Funko.
 * @class Funko
 * @property {number} id - El ID del Funko.
 * @property {string} name - El nombre del Funko.
 * @property {string} description - La descripción del Funko.
 * @property {FunkoType} type - El tipo del Funko.
 * @property {FunkoGenre} genre - El género del Funko.
 * @property {string} franchise - La franquicia del Funko.
 * @property {number} number - El número del Funko.
 * @property {boolean} exclusive - Si el Funko es exclusivo o no.
 * @property {string} specialFeatures - Las características especiales del Funko.
 * @property {number} marketValue - El valor de mercado del Funko.
 */
export class Funko {
  private id: number;
  private name: string;
  private description: string;
  private type: FunkoType;
  private genre: FunkoGenre;
  private franchise: string;
  private number: number;
  private exclusive: boolean;
  private specialFeatures: string;
  private marketValue: number;

  /**
   * Constructor de la clase Funko.
   * @param id 
   * @param name 
   * @param description 
   * @param type 
   * @param genre 
   * @param franchise 
   * @param number 
   * @param exclusive 
   * @param specialFeatures 
   * @param marketValue 
   */
  constructor(
    id: number,
    name: string,
    description: string,
    type: FunkoType,
    genre: FunkoGenre,
    franchise: string,
    number: number,
    exclusive: boolean,
    specialFeatures: string,
    marketValue: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.genre = genre;
    this.franchise = franchise;
    this.number = number;
    this.exclusive = exclusive;
    this.specialFeatures = specialFeatures;
    this.marketValue = marketValue;
  }

  /**
   * Método que devuelve el ID del Funko.
   * @returns {number} El ID del Funko.
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Método que devuelve el nombre del Funko.
   * @returns {string} El nombre del Funko.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Método que devuelve la descripción del Funko.
   * @returns {string} La descripción del Funko.
   */
  public getDescription(): string {
    return this.description;
  }

  /**
   * Método que devuelve el tipo del Funko.
   * @returns {FunkoType} El tipo del Funko.
   */
  public getType(): FunkoType {
    return this.type;
  }

  /**
   * Método que devuelve el género del Funko.
   * @returns {FunkoGenre} El género del Funko.
   */
  public getGenre(): FunkoGenre {
    return this.genre;
  }

  /**
   * Método que devuelve la franquicia del Funko.
   * @returns {string} La franquicia del Funko.
   */
  public getFranchise(): string {
    return this.franchise;
  }

  /**
   * Método que devuelve el número del Funko.
   * @returns {number} El número del Funko.
   */
  public getNumber(): number {
    return this.number;
  }

  /**
   * Método que devuelve si el Funko es exclusivo o no.
   * @returns {boolean} Si el Funko es exclusivo o no.
   */
  public isExclusive(): boolean {
    return this.exclusive;
  }

  /**
   * Método que devuelve las características especiales del Funko.
   * @returns {string} Las características especiales del Funko.
   */
  public getSpecialFeatures(): string {
    return this.specialFeatures;
  }

  /**
   * Método que devuelve el valor de mercado del Funko.
   * @returns {number} El valor de mercado del Funko.
   */
  public getMarketValue(): number {
    return this.marketValue;
  }
}

//exports.module = Funko;