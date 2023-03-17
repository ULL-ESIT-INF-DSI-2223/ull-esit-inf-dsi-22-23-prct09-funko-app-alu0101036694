import inquirer from 'inquirer';
import { rutas } from './rutas'
import { grupo } from './grupos'


export class usuario{
    private id: string
    private nombre: string
    private actividades: "Correr" | "Ciclismo"
    private amigos: string [] //usuarios con los que interacciona
    private grupoAmigos: string [] //Ids de usuarios con los que realiza rutas
    //private rutasFavoritas: string []
    //private retosActivos: string []
    private historicoRutas: {fecha: Date; ruta: string } []; //ID de la ruta y fecha

    constructor(id: string, nombre: string, actividades: "Correr" | "Ciclismo", amigos: string [], grupoAmigos: string [], historicoRutas: { fecha: Date; ruta: string }[]) {
            this.id = id
            this.nombre = nombre
            this.actividades = actividades
            this.amigos = amigos
            this.grupoAmigos = grupoAmigos
            this.historicoRutas = historicoRutas
         }
    
    public getId(): string {
        return this.id
    }
    public getNombre(): string {
        return this.nombre;
    }

    public getActividades(): "Correr" | "Ciclismo" {
        return  this.actividades;
    }

    public getAmigos(): string [] {
        return this.amigos;
    }

    public getGrupoAmigos(): string [] {
        return this.grupoAmigos;
    }
    public getHistoricoRutas(): { fecha: Date; ruta: string }[] {
        return this.historicoRutas
    }

    public getEstadisticas(){
        
    }

    public getRutasFavoritas(){

    }

    public getRetosActivos(){
        
    }
    
}

module.exports={
    usuario
}