import { usuario } from '../types/usuarios'
import { grupo } from '../types/grupos'
import { rutas } from '../types/rutas'

export type usuarioSchema = {
    usuario: {
         id: string,
         nombre: string,
         actividades: "Correr" | "Ciclismo",
         amigos: string [], //usuarios con los que interacciona
         grupoAmigos: string [], //Ids de usuarios con los que realiza rutas
         historicoRutas: {
            fecha: Date,
            ruta: string 
        } [] //ID de la ruta y fecha
    } []
}