import { usuario } from '../types/usuarios'
import { grupo } from '../types/grupos'
import { rutas } from '../types/rutas'
import { usuarioSchema } from '../schemas/usuarioSchema'
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";


export class usuarioCollection {

private coleccionUsuarios: usuario[];
private database: lowdb.LowdbSync<usuarioSchema>;


constructor(public coleccion: usuario []) {
    this.database = lowdb(new FileSync('src/databases/db_usuarios.json'));
    if (this.database.has("usuario").value()) {
        let dbItems = this.database.get("usuario").value();
        dbItems.forEach(item => this.coleccion.push(new usuario(item.id, item.nombre, item.actividades, item.amigos, item.grupoAmigos, item.historicoRutas)));
    }
    this.coleccionUsuarios = coleccion;
}

public getColeccionUsuarios(): usuario[] {
    return this.coleccionUsuarios;

}

public getHistoricoRutas(id: string): { fecha: Date, ruta: string }[] | undefined {
    let usuario = this.coleccionUsuarios.find(usuario => usuario.getId() === id)
    return usuario ? usuario.getHistoricoRutas() : undefined;

}

public addUsuario(usuario: usuario) {
    this.coleccionUsuarios.push(usuario);
    const dbUsuario = {
        id: usuario.getId(),
        nombre: usuario.getNombre(),
        actividades: usuario.getActividades(),
        amigos: usuario.getAmigos(),
        grupoAmigos: usuario.getGrupoAmigos(),
        historicoRutas: usuario.getHistoricoRutas()
    }
    this.database.get("usuario").push(dbUsuario).write();
}

public removeUsuario(id: string) {
    const usuarioAEliminar = this.coleccionUsuarios.find(usuario => usuario.getId() === id);
    if (usuarioAEliminar) {
        this.coleccionUsuarios = this.coleccionUsuarios.filter(usuario => usuario.getId() !== id);
        this.database.get("usuario").remove({ id: id }).write();
    }
}
}