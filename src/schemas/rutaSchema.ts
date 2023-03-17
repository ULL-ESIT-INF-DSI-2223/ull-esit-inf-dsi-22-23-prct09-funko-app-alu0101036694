import { rutas } from '../types/rutas'
import { usuario } from '../types/usuarios'

export type rutaSchema = {
    ruta: {
        id: string,
        nombre: string,
        coordenadasInicio: string,
        coordenadasFinal: string,
        longitudRuta: number,
        desnivelMedio: number,
        usuariosFinalizados: string [], // Cambiar a vector de usuarios
        tipoActividad: 'Bicicleta' | 'Corriendo',
        calificacionMedia: number
    } []
}