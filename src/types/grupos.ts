import inquirer from 'inquirer';
import { usuarios } from './usuarios'
import { rutas } from './rutas';

export class grupo {

    id: string; // ID único del grupo
    nombre: string; // IDs de los miembros del grupo
    participantes: usuarios[];

    /* estadisticasEntrenamiento: { // Estadísticas de entrenamiento grupal en la semana, mes y año
      semana: { km: number; desnivel: number };
      mes: { km: number; desnivel: number }; 
      anio: { km: number; desnivel: number }; 
    }; */
    
    clasificacionUsuarios: { userId: string; kmTotales: number; desnivelTotal: number }[]; // Clasificación de los usuarios
    // rutasFavoritas: string[]; // Rutas favoritas del grupo
    historicoRutas: { fecha: Date; ruta: rutas }[]; // Histórico de rutas realizadas por el grupo
    // Atributo de usuario creador
    constructor(
      id: string,
      nombre: string,
      participantes: usuarios[],

      estadisticasEntrenamiento: {
        semana: { km: number; desnivel: number };
        mes: { km: number; desnivel: number };
        anio: { km: number; desnivel: number };
      },

      clasificacionUsuarios: { userId: string; kmTotales: number; desnivelTotal: number }[],
      rutasFavoritas: string[],
      historicoRutas: { fecha: Date; ruta: rutas }[],
      
    ) {
      this.id = id;
      this.nombre = nombre;
      this.participantes = participantes;
      // this.estadisticasEntrenamiento = estadisticasEntrenamiento;
      this.clasificacionUsuarios = clasificacionUsuarios;
      // this.rutasFavoritas = rutasFavoritas;
      this.historicoRutas = historicoRutas;
    }

    // Getters

    getId(): string {
        return this.id;
    }
    
    getNombre(): string {
        return this.nombre;
    }

    getParticipantes(): usuarios[] {
        return this.participantes;
    }
  
    getClasificacionUsuarios(): { userId: string; kmTotales: number; desnivelTotal: number }[] {
        return this.clasificacionUsuarios;
    }

    getHistoricoRutas(): { fecha: Date; ruta: rutas }[] {
        return this.historicoRutas;
    }

    getEstadisticas() {

    }

    getRutasFavoritas(){

    }
  }