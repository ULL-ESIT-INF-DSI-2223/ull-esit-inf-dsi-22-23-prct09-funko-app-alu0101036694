const fs = require("fs");
import * as path from  "path";
//import chalk from "chalk";
import * as chalk from "chalk";

import { Funko } from "./funko";

/**
 * Clase Coleccionista
 * @class Coleccionista
 * @description Clase que representa a un coleccionista de Funkos
 * @property {number} id - Identificador del coleccionista
 * @property {string} nombre - Nombre del coleccionista
 * @property {Funko[]} coleccion - Array de Funkos
 * @method getId - Devuelve el identificador del coleccionista
 * @method getNombre - Devuelve el nombre del coleccionista
 * @method getColeccion - Devuelve la colección de Funkos del coleccionista
 * @method guardarColeccion - Guarda la colección de Funkos del coleccionista
 * @method cargarColeccion - Carga la colección de Funkos del coleccionista
 * @method addFunko - Añade un Funko a la colección del coleccionista
 * @method modificarFunko - Modifica un Funko de la colección del coleccionista
 * @method eliminarFunko - Elimina un Funko de la colección del coleccionista
 * @method mostrarFunko - Muestra un Funko de la colección del coleccionista
 * @method listarColeccion - Lista la colección de Funkos del coleccionista
 */
export class Coleccionista {
  private id: number;
  private nombre: string;
  private coleccion: Funko[]; // Array de Funkos

  /**
   * Constructor de la clase Coleccionista
   * @param {number} id - Identificador del coleccionista
   * @param {string} nombre - Nombre del coleccionista
   * @param {Funko[]} coleccion - Array de Funkos
   * @returns {Coleccionista} - Objeto Coleccionista
   */
  constructor(id: number, nombre: string, coleccion: Funko[]) {
    this.id = id;
    this.nombre = nombre;
    this.coleccion = coleccion;
  }

  /**
   * Getter del identificador del coleccionista
   * @returns {number} - Identificador del coleccionista
   * @memberof Coleccionista
   * @method getId
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Getter del nombre del coleccionista
   * @returns {string} - Nombre del coleccionista
   * @memberof Coleccionista
   * @method getNombre
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * Getter de la colección de Funkos del coleccionista
   * @returns {Funko[]} - Colección de Funkos del coleccionista
   * @memberof Coleccionista
   * @method getColeccion
   */
  public getColeccion(): Funko[] {
    return this.coleccion;
  }

  /**
   * Guarda la colección de Funkos del coleccionista en la base de datos
   * @memberof Coleccionista
   * @method guardarColeccion
   * @returns {void}
   */
  public guardarColeccion(): void {
    const userDir = path.join(__dirname, "../database/", this.nombre);
    if (!fs.existsSync(userDir)) {
      fs.mkdirSync(userDir);
    }

    this.coleccion.forEach((funko: Funko) => {
      const filePath = path.join(userDir, `${funko.getId()}.json`);
      const jsonData = JSON.stringify(funko, null, 2);
      fs.writeFileSync(filePath, jsonData);
    });
  }

  /**
   * Carga la colección de Funkos del coleccionista de la base de datos
   * @memberof Coleccionista
   * @method cargarColeccion
   * @returns {void}
   */
  public cargarColeccion(): void {
    const userDir = path.join(__dirname, "../database/", this.nombre);
    if (!fs.existsSync(userDir)) {
      return undefined;
    }

    //const files = fs.readdirSync(userDir);
    const files = fs.readdirSync(userDir)
                .filter(file => fs.statSync(path.join(userDir, file)).isFile());

    const coleccion = files.map((file: string) => {
      const filePath = userDir + "/" + file;
      if (fs.statSync(filePath).isDirectory()) {
        throw new Error("No se puede leer un directorio");
      }
      const jsonData = fs.readFileSync(filePath, "utf-8");
      const funkoData = JSON.parse(jsonData);
      return new Funko(
        funkoData.id,
        funkoData.name,
        funkoData.description,
        funkoData.type,
        funkoData.genre,
        funkoData.franchise,
        funkoData.number,
        funkoData.exclusive,
        funkoData.specialFeatures,
        funkoData.marketValue
      );
    });
    this.coleccion = coleccion;
  }

  /**
   * Añade un Funko a la colección del coleccionista
   * @param {Funko} funko - Funko a añadir
   * @memberof Coleccionista
   * @method addFunko
   * @returns {void}
   */
  public addFunko(funko: Funko): void {
    const encontrado = this.coleccion.some((f: Funko) => {
      if (f.getId() === funko.getId()) {
        return true;
      } else {
        return false;
      }
    });
    
    if (encontrado) {
      console.error(
        `El Funko con ID ${funko.getId()} ya existe en la colección.`
      );
    } else {
      this.coleccion.push(funko);
      console.log(
        `El Funko con ID ${funko.getId()} ha sido añadido a la colección.`
      );
    }
    this.guardarColeccion();
  }

  /**
   * Modifica un Funko de la colección del coleccionista
   * @param {Funko} funkoModificado - Funko modificado
   * @memberof Coleccionista
   * @method modificarFunko
   * @returns {void}
   */
  public modificarFunko(funkoModificado: Funko): void {
    //this.cargarColeccion();
    const index = this.coleccion.findIndex(
      function(f: Funko) {
        console.log("funko f: ", f.getId());
        console.log("funkoModificado: ", funkoModificado.getId());
        return f.getId() === funkoModificado.getId();
      }
    );
    console.log("index: ", index);
    if (index === -1) {
      console.error(
        `No se encontró ningún Funko con ID ${funkoModificado.getId()}`
      );
      return;
    }
    this.coleccion[index] = funkoModificado;
    console.log(`Funko con ID ${funkoModificado.getId()} ha sido modificado`);
    this.guardarColeccion();
  }

  /**
   * Elimina un Funko de la colección del coleccionista
   * @param {number} id - Identificador del Funko a eliminar
   * @memberof Coleccionista
   * @method eliminarFunko
   * @returns {void}
   */
  public eliminarFunko(id: number): void {
    //this.cargarColeccion();
    //const index = this.coleccion.findIndex((funko: Funko) => funko.getId() === id);
  
    let index = -1;
    for (let i = 0; i < this.coleccion.length; i++) {
      if (this.coleccion[i].getId() === id) {
        index = i;
        break;
      }
    }

    console.log("index: ", index)

    if (index === -1) {
      console.log(`No se ha encontrado un Funko con el ID ${id}.`);
    } else {
      console.log("coleccion antes de eliminar: " + this.coleccion);
      const funko = this.coleccion[index];
      console.log("funko: " + funko);
      this.coleccion.splice(index, 1);
      console.log("coleccion despues de eliminar: " + this.coleccion);
      console.log(`Se ha eliminado el Funko con el ID ${id}.`);
      
      const userFunko = path.join(__dirname, "../database/", this.nombre, id + ".json");
      try {
        fs.unlinkSync(userFunko); // elimina el archivo
        console.log(`Se ha eliminado el archivo asociado al Funko con el ID ${id}.`);
      } catch (error) {
        console.error(`No se ha podido eliminar el archivo asociado al Funko con el ID ${id}: ${error.message}`);
      }
    }
  
    this.guardarColeccion();
  }

  /**
   * Lista la colección del coleccionista
   * @memberof Coleccionista
   * @method listarColeccion
   * @returns {void}
   */
  public listarColeccion(): void {
    this.cargarColeccion();

    const RANGO_1 = 50;
    const RANGO_2 = 100;
    const RANGO_3 = 200;
    const RANGO_4 = 500;

    console.log(chalk.bold("Lista de Funkos:"));
    console.log();

    this.coleccion.forEach((funko: Funko) => {
      let valorColor = chalk.red(funko.getMarketValue());

      if (
        funko.getMarketValue() >= RANGO_1 &&
        funko.getMarketValue() < RANGO_2
      ) {
        valorColor = chalk.yellow(funko.getMarketValue());
      } else if (
        funko.getMarketValue() >= RANGO_2 &&
        funko.getMarketValue() < RANGO_3
      ) {
        valorColor = chalk.green(funko.getMarketValue());
      } else if (
        funko.getMarketValue() >= RANGO_3 &&
        funko.getMarketValue() < RANGO_4
      ) {
        valorColor = chalk.blue(funko.getMarketValue());
      } else if (funko.getMarketValue() >= RANGO_4) {
        valorColor = chalk.magenta(funko.getMarketValue());
      }

      console.log(chalk.bold(funko.getName()));
      console.log(`ID: ${funko.getId()}`);
      console.log(`Descripción: ${funko.getDescription()}`);
      console.log(`Tipo: ${funko.getType()}`);
      console.log(`Género: ${funko.getGenre()}`);
      console.log(`Franquicia: ${funko.getFranchise()}`);
      console.log(`Número: ${funko.getNumber()}`);
      console.log(`Exclusivo: ${funko.isExclusive()}`);
      console.log(`Características especiales: ${funko.getSpecialFeatures()}`);
      console.log(`Valor de mercado: ${valorColor}`);
      console.log();
    });
  }

  /**
   * Muestra un Funko de la colección del coleccionista en base a su identificador
   * @param {number} id - Identificador del Funko a mostrar
   * @memberof Coleccionista
   * @method mostrarFunko
   * @returns {void}
   */
  public mostrarFunko(id: number): void {
    this.cargarColeccion();

    const RANGO_1 = 50;
    const RANGO_2 = 100;
    const RANGO_3 = 200;
    const RANGO_4 = 500;

    const funko = this.coleccion.find((f: Funko) => f.getId() === id);
    if (funko) {

      let valorColor = chalk.red(funko.getMarketValue());

      if (
        funko.getMarketValue() >= RANGO_1 &&
        funko.getMarketValue() < RANGO_2
      ) {
        valorColor = chalk.yellow(funko.getMarketValue());
      } else if (
        funko.getMarketValue() >= RANGO_2 &&
        funko.getMarketValue() < RANGO_3
      ) {
        valorColor = chalk.green(funko.getMarketValue());
      } else if (
        funko.getMarketValue() >= RANGO_3 &&
        funko.getMarketValue() < RANGO_4
      ) {
        valorColor = chalk.blue(funko.getMarketValue());
      } else if (funko.getMarketValue() >= RANGO_4) {
        valorColor = chalk.magenta(funko.getMarketValue());
      }

      console.log(chalk.bold(`Información del Funko con ID ${id}:`));
      console.log(`ID: ${funko.getId()}`);
      console.log(`Descripción: ${funko.getDescription()}`);
      console.log(`Tipo: ${funko.getType()}`);
      console.log(`Género: ${funko.getGenre()}`);
      console.log(`Franquicia: ${funko.getFranchise()}`);
      console.log(`Número: ${funko.getNumber()}`);
      console.log(`Exclusivo: ${funko.isExclusive()}`);
      console.log(`Características especiales: ${funko.getSpecialFeatures()}`);
      console.log((`Valor de mercado: ${valorColor}`));
    } else {
      console.log(chalk.red(`Error: No existe un Funko con ID ${id}.`));
    }
  }
}

//exports.module = Coleccionista;

