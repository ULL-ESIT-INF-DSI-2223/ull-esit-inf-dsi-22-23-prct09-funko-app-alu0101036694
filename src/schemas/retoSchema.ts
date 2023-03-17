import { reto }  from '../types/retos'
import { rutas } from '../types/rutas'

export type retoSchema = {
    reto : {
         id: string,
         nombre: string,
         rutasReto: rutas[],
         tipoActividad: 'Bicicleta' | 'Correr'
    } []
}