export enum FunkoType {
  POP = "Pop!",
  POP_RIDES = "Pop! Rides",
  VINYL_SODA = "Vinyl Soda",
  VINYL_GOLD = "Vinyl Gold",
}

export enum FunkoGenre {
  ANIMATION = "Animation",
  MOVIES_AND_TV = "Movies and TV",
  VIDEOGAMES = "Video games",
  SPORTS = "Sports",
  MUSIC = "Music",
  ANIME = "Anime",
}

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

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getType(): FunkoType {
    return this.type;
  }

  public getGenre(): FunkoGenre {
    return this.genre;
  }

  public getFranchise(): string {
    return this.franchise;
  }

  public getNumber(): number {
    return this.number;
  }

  public isExclusive(): boolean {
    return this.exclusive;
  }

  public getSpecialFeatures(): string {
    return this.specialFeatures;
  }

  public getMarketValue(): number {
    return this.marketValue;
  }
}

exports.module = Funko;