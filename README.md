# [PRÁCTICA 9. APLICACION DE REGISTRO DE FUNKOPOPS](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101036694.git). 

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101036694.git/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101036694?branch=main)

## Carla Oval Torres

## Índice <a name="índice"></a>
1. [Introducción](#introducción)
2. [Descripción de los requisitos del sistema y funcionamiento esperado](#requisitos)
3. [Descripción de la solución diseñada](#solución)
    1. [Clase funko](#funko)
    2. [Clase coleccionista](#coleccionista)
    3. [Programa principal](#principal)
    4. [Base de datos](#database)
4. [Conclusiones](#conclusiones)
5. [Referencias](#referencias)

## Introducción <a name="introducción"></a>
> [Volver al índice](#índice)

En esta práctica, tendrá que implementar una aplicación que permita almacenar información de los Funko Pops pertenecientes a la colección de un usuario. En concreto, el sistema permitirá añadir, modificar, eliminar, listar y leer la información asociada a un Funko. La información de cada Funko se almacenará como un JSON en el sistema de ficheros de la máquina donde se ejecute la aplicación. Además, solo se podrá interactuar con la aplicación desde la línea de comandos (no existirá un menú interactivo).

Todo el código desarrollado deberá estar alojado en el repositorio generado tras la aceptación de la asignación de GitHub Classroom. En ese sentido, utilice en dicho repositorio una estructura de proyecto similar a la que hemos visto en clase.

Por último, tendrá que comentar en un informe la solución diseñada, haciendo hincapié en las decisiones de diseño que ha tomado.

## Descripción de los requisitos del sistema  funcionamiento esperado<a name="requisitos"></a>
> [Volver al índice](#índice)
> 
> Los requisitos que debe cumplir la aplicación son los siguientes:
> 
> La aplicación deberá permitir que múltiples usuarios interactúen con ella, pero no simultáneamente.
> 
> En concreto, un Funko vendrá descrito por los siguientes elementos mínimos de información que deberán ser almacenados:
> 1. ID. Debe ser un identificador único del Funko.
> 2. Nombre. Debe ser una cadena de caracteres.
> 3. Descripción. Debe ser una cadena de caracteres.
> 4. Tipo. Debe ser un enumerado con valores como, por ejemplo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros.
> 5. Género. Debe ser un enumerado con valores como, por ejemplo, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras.
> 6. Franquicia. Debe ser una cadena de caracteres como, por ejemplo, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.
> 7. Número. Debe ser el número identificativo del Funko dentro de la franquicia correspondiente.
> 8. Exclusivo. Debe ser un valor booleano, esto es, verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario.
> 9. Características especiales. Debe ser una cadena de caracteres que indique las característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea.
> 10. Valor de mercado. Debe ser un valor numérico positivo.
> 
> Cada usuario tendrá su propia lista de Funko Pops, con la que podrá llevar a cabo las siguientes operaciones:
> - Añadir un Funko a la lista. Antes de añadir un Funko a la lista se debe comprobar si ya existe un Funko con el mismo ID. En caso de que así fuera, deberá mostrarse un mensaje de error por la consola. En caso contrario, se añadirá el nuevo Funko a la lista y se mostrará un mensaje informativo por la consola.
> - Modificar un Funko de la lista. Antes de modificar un Funko, previamente se debe comprobar si ya existe un Funko con el ID del Funko a modificar en la lista. Si existe, se procede a su modificación y se emite un mensaje informativo por la consola. En caso contrario, debe mostrarse un mensaje de error por la consola.
> - Eliminar un Funko de la lista. Antes de eliminar un Funko, previamente se debe comprobar si existe un Funko con el ID del Funko a eliminar en la lista. Si existe, se procede a su eliminación y se emite un mensaje informativo por la consola. En caso contrario, debe mostrarse un mensaje de error por la consola.
> - Listar los Funkos existentes en una lista. En este caso, deberá mostrarse la información asociada a cada Funko existente en la lista por la consola. Además, deberá utilizar el paquete chalk para ello. Primero, deberá establecer rangos de valor de mercado. Luego, el valor de mercado de cada Funko deberá mostrarse con colores diferentes. Por ejemplo, para aquellos Funko con un valor de mercado elevado, dicho valor deberá mostrarse en color verde, mientras que para los de menor valor de mercado, dicho valor se mostrará con color rojo. Establezca, al menos, cuatro rangos de valor de mercado diferentes.
> - Mostrar la información de un Funko concreto existente en la lista. Antes de mostrar la información del Funko, se debe comprobar que en la lista existe un Funko cuyo ID sea el del Funko a mostrar. Si existe, se mostrará toda su información, incluyendo el color de su valor de mercado. Para ello, use el paquete chalk. En caso contrario, se mostrará un mensaje de error por la consola.
>
>Todos los mensajes informativos se mostrarán con color verde, mientras que los mensajes de error se mostrarán con color rojo. Use el paquete chalk para ello.
>
>Hacer persistente la lista de Funko de cada usuario. Aquí es donde entra en juego el uso de la API síncrona de Node.js para trabajar con el sistema de ficheros:
> - Guardar cada Funko de la lista en un fichero independiente con formato JSON. Los ficheros JSON correspondientes a los Funko de un usuario concreto deberán almacenarse en un directorio con el nombre de dicho usuario.
> - Cargar los Funko desde los diferentes ficheros con formato JSON almacenados en el directorio del usuario correspondiente.
>
> Un usuario solo puede interactuar con la aplicación a través de la línea de comandos. Los diferentes comandos, opciones de los mismos, así como manejadores asociados a cada uno de ellos deben gestionarse mediante el uso del paquete yargs.

## Descripción de la solución diseñada <a name="solución"></a>
> [Volver al índice](#índice)

La solución diseñada consta de tres archivos principales:

- app.ts: Archivo principal de la aplicación. En él se definen los comandos y opciones de los mismos, así como los manejadores asociados a cada uno de ellos.
- coleccionista.ts: Archivo que contiene la clase coleccionista que representa a un usuario de la aplicación.
- funko.ts: Archivo que contiene la clase funko que representa a un Funko.

### Clase Funko <a name="funko"></a>
> [Volver al índice](#índice)

> La clase Funko representa a objeto un Funko, que se utiliza para almacenar información sobre los Funkos. 

La clase tiene las siguientes propiedades privadas:

- id: un número que representa el ID del Funko.
- name: una cadena que representa el nombre del Funko.
- description: una cadena que representa la descripción del Funko.
- type: un valor del enumerado FunkoType que representa el tipo del Funko.
- genre: un valor del enumerado FunkoGenre que representa el género del Funko.
- franchise: una cadena que representa la franquicia del Funko.
- number: un número que representa el número del Funko.
- exclusive: un booleano que indica si el Funko es exclusivo o no.
- specialFeatures: una cadena que representa las características especiales del Funko.
- marketValue: un número que representa el valor de mercado del Funko.

```typescript

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
```

La clase también tiene un constructor que acepta todos estos parámetros y los asigna a las propiedades correspondientes de la instancia de Funko.

La clase también tiene varios métodos públicos que se utilizan para acceder a las propiedades privadas del Funko, como getId(), getName(), getDescription(), getType(), getGenre(), getFranchise(), getNumber(), isExclusive(), getSpecialFeatures() y getMarketValue().

Además, la clase tiene dos enumerados FunkoType y FunkoGenre que se utilizan para representar los diferentes tipos y géneros de Funko. Los valores de estos enumerados son cadenas que describen el tipo o género del Funko.

#### Cumplimiento de los principios SOLID en la clase Funko:

La clase `Funko` sigue algunos de los principios SOLID, pero hay algunos aspectos que se pueden mejorar para lograr una mayor cohesión y reducir la dependencia entre los módulos.

- **Single responsibility (SRP)**: La clase Funko tiene una única responsabilidad, que es representar un Funko y proporcionar métodos para obtener información sobre sus atributos.

- **Open/Closed Principle (OCP)**: La clase Funko no parece seguir este principio, ya que no proporciona una forma fácil de extender su funcionalidad sin modificar la clase existente. Por ejemplo, si quisiéramos agregar un nuevo atributo, tendríamos que modificar la clase Funko y las partes del código que lo utilizan.

- **Liskov Substitution Principle (LSP)**: Como la clase Funko no tiene subclases, no hay necesidad de preocuparse por este principio.

- **Interface Segregation Principle (ISP)**: La clase Funko no implementa ninguna interfaz, por lo que no se aplica este principio.

- **Dependency Inversion Principle (DIP)**: La clase Funko depende directamente de los enumerados FunkoType y FunkoGenre.ç

### Clase Coleccionista <a name="coleccionista"></a>
> [Volver al índice](#índice)

> La clase Coleccionista representa a un coleccionista de Funkos.

La clase Coleccionista es una clase que representa a un coleccionista de Funkos, con métodos para agregar, modificar y eliminar Funkos en su colección. También tiene métodos para guardar y cargar su colección desde un archivo JSON en su sistema de archivos.

Los atributos de esta clase son:

- id: un número que identifica al coleccionista.
- nombre: una cadena de texto con el nombre del coleccionista.
- coleccion: un array de objetos Funko que representa la colección del coleccionista.

```typescript
const fs = require("fs");
import * as path from  "path";
//import chalk from "chalk";
import * as chalk from "chalk";

import { Funko } from "./funko";


export class Coleccionista {
  private id: number;
  private nombre: string;
  private coleccion: Funko[]; // Array de Funkos

  constructor(id: number, nombre: string, coleccion: Funko[]) {
    this.id = id;
    this.nombre = nombre;
    this.coleccion = coleccion;
  }

  public getId(): number {
    return this.id;
  }
  public getNombre(): string {
    return this.nombre;
  }

  public getColeccion(): Funko[] {
    return this.coleccion;
  }

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

exports.module = Coleccionista;
```

Los métodos que tiene esta clase son:

- getId(): un método que devuelve el ID del coleccionista.
- getNombre(): un método que devuelve el nombre del coleccionista.
- getColeccion(): un método que devuelve la colección de Funkos del coleccionista.
- guardarColeccion(): un método que guarda la colección de Funkos del coleccionista en un archivo JSON en su sistema de archivos.
- cargarColeccion(): un método que carga la colección de Funkos del coleccionista desde un archivo JSON en su sistema de archivos.
- addFunko(funko: Funko): un método que agrega un objeto Funko a la colección del coleccionista. Si el Funko ya existe en la colección, se muestra un mensaje de error.
- modificarFunko(funkoModificado: Funko): un método que modifica un objeto Funko en la colección del coleccionista. Si no se encuentra un Funko con el ID proporcionado, se muestra un mensaje de error.
- eliminarFunko(id: number): un método que elimina un objeto Funko de la colección del coleccionista. Si no se encuentra un Funko con el ID proporcionado, se muestra un mensaje de error. Si se encuentra el Funko y se elimina, también se elimina su archivo JSON asociado en el sistema de archivos del coleccionista.

Además, la clase utiliza los módulos fs y path para interactuar con el sistema de archivos del usuario y el módulo chalk para imprimir mensajes en diferentes colores en la consola. También importa la clase Funko de otro archivo.

#### Cumplimiento de los principios SOLID en la clase Coleccionista:

Esta clase `Coleccionista` cumple los principios SOLID con la siguiente justificación:

- **Single responsibility (SRP)**: La clase Coleccionista tiene una única responsabilidad, que es gestionar una colección de Funkos, sin mezclarla con otras responsabilidades, como por ejemplo interactuar con una interfaz de usuario.

- **Open/Closed Principle (OCP)**: La clase Coleccionista está abierta a la extensión, ya que se puede añadir funcionalidad a través de la herencia de la clase, pero cerrada a la modificación, ya que los métodos existentes no necesitan ser modificados para añadir nuevas funcionalidades.

- **Liskov Substitution Principle (LSP)**: La clase Coleccionista no tiene ninguna subclase, pero los objetos que devuelve a través de su método getColeccion() cumplen con el contrato definido en la clase Funko.

- **Interface Segregation Principle (ISP)**: La clase Coleccionista no implementa ninguna interfaz, por lo que este principio no se aplica directamente a ella.

- **Dependency Inversion Principle (DIP)**: La clase Coleccionista depende de la clase Funko, pero no de ninguna implementación concreta de ella, por lo que este principio se cumple. Además, el método guardarColeccion() utiliza el módulo fs y la clase path a través de su interfaz pública, en lugar de depender de la implementación concreta de dichos módulos, lo que cumple con el principio de Inversión de Dependencia.


### Programa principal <a name="principal"></a>
> [Volver al índice](#índice)

> El programa principal se encuentra en el archivo `app.ts`. Este programa es una aplicación de línea de comandos escrita en TypeScript que se encarga de gestionar una base de datos de Funkos y coleccionistas. Utiliza el paquete yargs para procesar los argumentos que se pasan al programa, chalk para colorear la salida de la consola, fs para trabajar con el sistema de archivos y path para trabajar con rutas de archivos.

Este programa es una aplicación de línea de comandos escrita en TypeScript que se encarga de gestionar una base de datos de Funkos y coleccionistas. Utiliza el paquete yargs para procesar los argumentos que se pasan al programa, chalk para colorear la salida de la consola, fs para trabajar con el sistema de archivos y path para trabajar con rutas de archivos.

La aplicación gestiona la información de una serie de Funkos, que tienen un identificador, un nombre, una descripción, un tipo, un género, una franquicia, un número de serie, un valor de mercado y una serie de características especiales. También gestiona información sobre los coleccionistas, que tienen un identificador, un nombre y una lista de Funkos que poseen.

```typescript
import yargs from "yargs";
import { hideBin } from 'yargs/helpers.js';
import * as chalk from "chalk";
import { Funko } from "./funko";
import { Coleccionista } from "./coleccionista.js";
import * as fs from "fs";
import * as path from  "path";

// List of registered users
const directorio = './src/database'; // Directorio de la base de datos
const usuarios: string[] = []; // Lista de usuarios registrados

let usu = new Coleccionista(0, "", []);

fs.readdirSync(directorio).forEach((nombreArchivo: string) => {
  const rutaArchivo = `${directorio}/${nombreArchivo}`;
  if (fs.lstatSync(rutaArchivo).isDirectory()) {
    usuarios.push(nombreArchivo);
  }
});

//console.log("Usuarios: ", usuarios);

const command = process.argv[2];
let id, user, name, desc, type, genre, franchise, number, exclusive, special, value;

yargs(hideBin(process.argv))
  .command("add", "Add a new Funko to a user collection", {
    user: {
      demandOption: true,
      type: "string",
      describe: "The username of the user to add the Funko to",
    },
    id: {
      demandOption: true,
      type: "number",
      describe: "The ID of the Funko to add",
    },
    name: {
      demandOption: true,
      type: "string",
      describe: "The name of the Funko to add",
    },
    desc: {
      demandOption: true,
      type: "string",
      describe: "The description of the Funko to add",
    },
    type: {
      demandOption: true,
      type: "string",
      describe: "The type of the Funko to add",
    },
    genre: {
      demandOption: true,
      type: "string",
      describe: "The genre of the Funko to add",
    },
    franchise: {
      demandOption: false,
      type: "string",
      describe: "The franchise of the Funko to add",
    },
    number: {
      demandOption: true,
      type: "number",
      describe: "The number of the Funko to add",
    },
    exclusive: {
      demandOption: true,
      type: "boolean",
      describe: "The exclusive of the Funko to add",
    },
    special: {
      demandOption: true,
      type: "string",
      describe: "The special features of the Funko to add",
    },
    value: {
      demandOption: true,
      type: "number",
      describe: "The market value of the Funko to add",
    },
  },  (argv) => {
    id = argv.id;
    user = argv.user;
    name = argv.name;
    desc = argv.desc;
    type = argv.type;
    genre = argv.genre;
    franchise = argv.franchise;
    number = argv.number;
    exclusive = argv.exclusive;
    special = argv.special;
    value = argv.value;
  })
  .command("list", "List all Funkos from a user collection", {
    user: {
      demandOption: true,
      type: "string",
      describe: "The username of the user to list the Funkos from",
    },
  }, (argv) => {
    user = argv.user;
  })
  .command("update", "Update a Funko from a user collection", {
    user: {
      demandOption: true,
      type: "string",
      describe: "The username of the user to add the Funko to",
    },
    id: {
      demandOption: true,
      type: "number",
      describe: "The ID of the Funko to add",
    },
    name: {
      demandOption: true,
      type: "string",
      describe: "The name of the Funko to add",
    },
    desc: {
      demandOption: true,
      type: "string",
      describe: "The description of the Funko to add",
    },
    type: {
      demandOption: true,
      type: "string",
      describe: "The type of the Funko to add",
    },
    genre: {
      demandOption: true,
      type: "string",
      describe: "The genre of the Funko to add",
    },
    franchise: {
      demandOption: false,
      type: "string",
      describe: "The franchise of the Funko to add",
    },
    number: {
      demandOption: true,
      type: "number",
      describe: "The number of the Funko to add",
    },
    exclusive: {
      demandOption: true,
      type: "boolean",
      describe: "The exclusive of the Funko to add",
    },
    special: {
      demandOption: false,
      type: "string",
      describe: "The special features of the Funko to add",
    },
    marketValue: {
      demandOption: false,
      type: "number",
      describe: "The market value of the Funko to add",
    },
  }, (argv) => {
    id = argv.id;
    user = argv.user;
    name = argv.name;
    desc = argv.desc;
    type = argv.type;
    genre = argv.genre;
    franchise = argv.franchise;
    number = argv.number;
    exclusive = argv.exclusive;
    special = argv.special;
    value = argv.value;
  })
  .command("read", "Read a Funko from a user collection", {
    user: {
      demandOption: true,
      type: "string",
      describe: "The username of the user to read the Funko from",
    },
    id: {
      demandOption: true,
      type: "number",
      describe: "The ID of the Funko to read",
    },
  } ,  (argv) => {
    id = argv.id;
    user = argv.user;
  })
  .command("remove", "Delete a Funko from a user collection", {
    user: {
      demandOption: true,
      type: "string",
      describe: "The username of the user to delete the Funko from",
    },
    id: {
      demandOption: true,
      type: "number",
      describe: "The ID of the Funko to delete",
    },
  }, (argv) => {
    id = argv.id;
    user = argv.user;
  })
  .help().argv;

usu = load();

switch (command) {
  case "add":
    const newFunko = new Funko(
      id,
      name,
      desc,
      type,
      genre,
      franchise,
      number,
      exclusive,
      special,
      value
    );
    usu.addFunko(newFunko);
    break;
  case "update":
    const updatedFunko = new Funko(
        id,
        name,
        desc,
        type,
        genre,
        franchise,
        number,
        exclusive,
        special,
        value
    );
    usu.modificarFunko(updatedFunko);
    break;
  case "remove":
    usu.eliminarFunko(id);
    break;
  case "read":
    usu.mostrarFunko(id);
    break;
  case "list":
    usu.listarColeccion();
    break;
  default:
    console.log(chalk.red("Command not recognized"));
}

function load() : Coleccionista {
  let usu2 : Coleccionista = new Coleccionista(0, "", []);
  let existe = false;
  // Busco el usuario en la base de datos
  for (let nombre of usuarios) {
    if (nombre === user) { // Cargar la información del usuario
      usu2 = new Coleccionista(0, nombre, []);
      usu2.cargarColeccion(); // Carga la colección del usuario
      existe = true;
      break;
    }
  }
  if (!existe) { // Crear el usuario en la base de datos
    const userDir = path.join(__dirname, "../database/", user);
    fs.mkdirSync(userDir);
    usu2 = new Coleccionista(0, user, []);
  }
  return usu2;
}
```

El programa se divide en varios comandos que se pueden ejecutar mediante la línea de comandos:

- El comando "add" se utiliza para añadir un nuevo Funko a la colección de un usuario. Los parámetros que se pueden pasar son el nombre de usuario, el ID del Funko, su nombre, descripción, tipo, género, franquicia, número de serie, si es exclusivo y sus características especiales.

- El comando "update" se utiliza para modificar un Funko de la colección de un usuario. Los parámetros que se pueden pasar son el nombre de usuario, el ID del Funko, su nombre, descripción, tipo, género, franquicia, número de serie, si es exclusivo y sus características especiales.

- El comando "remove" se utiliza para eliminar un Funko de la colección de un usuario. Los parámetros que se pueden pasar son el nombre de usuario y el ID del Funko.
- El comando "read" se utiliza para leer la información de un Funko en la colección de un usuario. Los parámetros que se pueden pasar son el nombre de usuario y el ID del Funko.
- El comando "list" se utiliza para listar todos los Funkos de un usuario. El parámetro que se puede pasar es el nombre de usuario.

### Base de datos <a name="database"></a>
> [Volver al índice](#índice)

El programa utiliza un sistema de archivos para almacenar la información de los coleccionistas y los Funkos en una carpeta llamada "database". Cada coleccionista tiene una carpeta con su nombre de usuario en la que se guardan los Funkos que posee en un archivo JSON con su información.

Se utiliza el módulo fs para acceder y manipular la base de datos de usuarios y sus colecciones de figuras Funko.

Primero, se define una variable directorio que apunta al directorio donde se encuentra la base de datos. Luego, se crea un array usuarios que almacenará los nombres de las carpetas de cada usuario, que en este caso representan las colecciones de figuras Funko.

A continuación, se utiliza el método readdirSync() del módulo fs para leer el contenido del directorio. Este método devuelve un array con los nombres de los archivos y carpetas que se encuentran en el directorio. Se recorre este array utilizando el método forEach(), y por cada archivo o carpeta se comprueba si es una carpeta utilizando el método lstatSync(), que devuelve información acerca de un archivo o carpeta, incluyendo su tipo. Si el archivo es una carpeta, se añade su nombre al array usuarios.

De esta forma, el array usuarios queda con los nombres de todas las carpetas de usuario que se encuentran en la base de datos. Este proceso permite obtener un listado de todos los usuarios registrados y sus respectivas colecciones de figuras Funko.

Luego, se utiliza el módulo fs nuevamente para leer y escribir archivos, a través de las funciones readFileSync() y writeFileSync(). Estas funciones permiten leer y escribir archivos de manera sincrónica, lo que significa que la ejecución del programa se detiene hasta que la operación de lectura o escritura se complete.

En este caso, se utiliza readFileSync() para leer el contenido de un archivo que representa la colección de un usuario, y writeFileSync() para escribir la información actualizada de la colección de figuras Funko de un usuario en su archivo correspondiente.

### Conclusiones <a name="conclusiones"></a>
> [Volver al índice](#índice)

Trabajar con el módulo fs en Node.js puede ser muy útil para manejar archivos y directorios en el sistema de archivos del sistema operativo. Con fs, puedes crear, leer, actualizar y eliminar archivos, así como crear, leer y eliminar directorios.

En la mayoría de los casos, fs proporciona una forma fácil y eficiente de trabajar con el sistema de archivos de tu sistema operativo. Sin embargo, también puede ser peligroso si no se maneja adecuadamente. Es importante tener cuidado al manipular archivos y directorios para evitar sobrescribir o eliminar accidentalmente archivos importantes.

En resumen, fs es una herramienta muy útil para trabajar con archivos y directorios en Node.js, pero debes tener precaución al utilizarla para evitar errores y problemas en tu aplicación.

### Referencias <a name="referencias"></a>
> [Volver al índice](#índice)

1. [Entrada de texto](https://www.npmjs.com/package/prompt-sync)
2. [Formato de escape ANSI](https://es.wikipedia.org/wiki/C%C3%B3digo_escape_ANSI#:~:text=Los%20c%C3%B3digos%20de%20escape%20ANSI,color%20o%20moviendo%20el%20cursor.)
3. [Módulo fs](https://nodejs.org/docs/latest-v16.x/api/fs.html)
4. [Módulo path](https://nodejs.org/docs/latest-v16.x/api/path.html)
5. [Módulo chalk](https://www.npmjs.com/package/chalk)
6. [Módulo prompt-sync](https://www.npmjs.com/package/prompt-sync)
7. [Stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
8. [Parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)