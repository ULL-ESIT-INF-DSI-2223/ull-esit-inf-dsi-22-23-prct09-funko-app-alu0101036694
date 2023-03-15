import inquirer from 'inquirer';
import { rutas } from './rutas'
import { grupo } from './grupos'

export enum actividades { Correr = 'Correr', Ciclismo = 'Ciclismo'}

export class usuarios{
    private id: string
    private nombre: string
    private actividades: actividades [] //Correr, ciclismo
    private amigos: usuarios [] //usuarios con los que interacciona
    private grupoAmigos: grupo [] //Ids de usuarios con los que realiza rutas
    //private rutasFavoritas: string []
    //private retosActivos: string []
    private historicoRutas: {fecha: Date; ruta: rutas } []; //ID de la ruta y fecha

    constructor(id: string,  nombre: string, actividades: actividades [], amigos: usuarios [], grupoAmigos: grupo [], historicoRutas: { fecha: Date; ruta: rutas }[]) {
            this.id = id
            this.nombre = nombre
            this.actividades = actividades
            this.amigos = amigos
            this.grupoAmigos = grupoAmigos
            // this.rutasFavoritas = rutasFavoritas
            // this.retosActivos = retosActivos
            this.historicoRutas = historicoRutas
         }
    
    getEstadisticas(){
        
    }

    getRutasFavoritas(){

    }

    getRetosActivos(){
        
    }
    
}