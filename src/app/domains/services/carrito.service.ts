import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../shared/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiUrl = 'http://localhost:8080/api/carritos';

  private productos: Producto[];

  constructor(private http: HttpClient) {}

  getProductosEnCarrito(usuarioId: number): Observable<Producto[]> {
    return of(this.productos);
    // return this.http.get<Producto[]>(`${this.apiUrl}/${usuarioId}`);
  }

  agregarProductoAlCarrito(usuarioId: number, productoId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${usuarioId}/agregar/${productoId}`, {});
  }

  eliminarProductoDelCarrito(usuarioId: number, productoId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${usuarioId}/eliminar/${productoId}`);
  }

  realizarCompra(usuarioId: number): Observable<any> {
    // Lógica para realizar la compra, puede implicar la actualización de la base de datos, etc.
    return this.http.post(`${this.apiUrl}/${usuarioId}/comprar`, {});
  }
}
