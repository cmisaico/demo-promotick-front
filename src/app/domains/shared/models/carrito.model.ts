import { Producto } from "./producto.model";

export interface Carrito {
  id?: number;
  usuarioId: number;
  productos: Producto[];
}
