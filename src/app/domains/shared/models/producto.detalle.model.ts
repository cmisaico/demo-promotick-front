import { Categoria } from "./categoria.model";

export interface ProductoDetalle {
    id?: number;
    nombre: string;
    precio: number;
    imagen: string;
    stock: number;
    descripcion: string;
    categoria: Categoria;
  }
  