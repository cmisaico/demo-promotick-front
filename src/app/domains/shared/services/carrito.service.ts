import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto.model';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiUrl = 'http://localhost:8080/api/carritos';
  private carrito: Producto[] = [];
  private productos: Producto[];

  constructor(private http: HttpClient, private usuarioService:UsuarioService) {
    if(usuarioService.logueado){

    } else {
      this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    }
  }

  getProductosEnCarrito(usuarioId: number): Observable<Producto[]> {
    return of(this.productos);
    // return this.http.get<Producto[]>(`${this.apiUrl}/${usuarioId}`);
  }

  agregarProductoAlCarrito(producto: Producto) {
    this.carrito.push(producto);
    this.actualizarLocalStorage();
    // return this.http.post(`${this.apiUrl}/${usuarioId}/agregar/${productoId}`, {});
  }

  limpiarCarrito() {
    this.carrito = [];
    this.actualizarLocalStorage();
  } 

  eliminarProductoDelCarrito(usuarioId: number, productoId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${usuarioId}/eliminar/${productoId}`);
  }

  realizarCompra(usuarioId: number): Observable<any> {
    // Lógica para realizar la compra, puede implicar la actualización de la base de datos, etc.
    return this.http.post(`${this.apiUrl}/${usuarioId}/comprar`, {});
  }

  private actualizarLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

}
