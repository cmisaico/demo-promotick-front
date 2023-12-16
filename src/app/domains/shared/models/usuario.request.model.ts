import { Producto } from "./producto.model";
import { Usuario } from "./usuario.model";

export interface UsuarioRequest {
    usuario: Usuario;
    carrito: Producto[];
  }