import yargs from "yargs";
import { hideBin } from 'yargs/helpers.js';
import * as chalk from "chalk";
import { Funko } from "./funko";
import { Coleccionista } from "./coleccionista.js";
import * as fs from "fs";
import * as path from  "path";

/*
const yargs = require('yargs');
const chalk = require('chalk');
const fs = require('fs');
const { Funko } = require('./funkos');
const { Coleccionista } = require('./coleccionistas');
*/

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