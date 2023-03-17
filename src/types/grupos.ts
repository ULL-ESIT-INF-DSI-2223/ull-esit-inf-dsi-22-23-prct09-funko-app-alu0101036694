import inquirer from 'inquirer';
import { usuario } from './usuarios'
import { rutas } from './rutas';

export class grupo {

    id: string; // ID único del grupo
    nombre: string; // IDs de los miembros del grupo
    participantes: string[];

    /* estadisticasEntrenamiento: { // Estadísticas de entrenamiento grupal en la semana, mes y año
      semana: { km: number; desnivel: number };
      mes: { km: number; desnivel: number }; 
      anio: { km: number; desnivel: number }; 
    }; */
    
    //clasificacionUsuarios: { userId: string; kmTotales: number; desnivelTotal: number }[]; // Clasificación de los usuarios
    // rutasFavoritas: string[]; // Rutas favoritas del grupo
    historicoRutas: { fecha: Date; ruta: string }[]; // Histórico de rutas realizadas por el grupo
    // Atributo de usuario creador
    constructor(
      id: string,
      nombre: string,
      participantes: string[],
      historicoRutas: { fecha: Date; ruta: string }[],
      
    ) {
      this.id = id;
      this.nombre = nombre;
      this.participantes = participantes;
      this.historicoRutas = historicoRutas;
    }

    // Getters

    getId(): string {
        return this.id;
    }
    
    getNombre(): string {
        return this.nombre;
    }

    getParticipantes(): string[] {
        return this.participantes;
    }

    getHistoricoRutas(): { fecha: Date; ruta: string }[] {
        return this.historicoRutas;
    }

    getEstadisticas() {

    }

    getRutasFavoritas(){

    }
  }

  module.exports = {
    grupo
  }