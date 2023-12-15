import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiUrl = 'http://localhost:8080/api/carritos';
  private carrito: Producto[] = [];
  private productos: Producto[];

  constructor(private http: HttpClient, private authService:AuthService) {
  }


  getProductosEnCarrito(): Observable<Producto[]> {
    if(this.authService.logueado){

    } else {
      console.log('carrito - component : ', this.carrito);
      this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      console.log('carrito - componentdespue : ', this.carrito);
    }
    console.log('carrito - serice : ', this.carrito);
    return of(this.carrito);
    // return this.http.get<Producto[]>(`${this.apiUrl}/${usuarioId}`);
  }

  agregarProductoAlCarrito(producto: Producto) {
    this.getProductosEnCarrito();
    console.log('antes carrito', this.carrito);
    this.carrito.push(producto);
    console.log('agrega carrito', this.carrito);
    this.actualizarLocalStorage();
    // return this.http.post(`${this.apiUrl}/${usuarioId}/agregar/${productoId}`, {});
  }

  limpiarCarrito() {
    this.carrito = [];
    this.actualizarLocalStorage();
  } 

  eliminarProductoDelCarrito(productoId: number): Observable<any> {
    if(this.authService.logueado){

    } else {
      console.log('delete - component : ', this.carrito);
      this.carrito = this.carrito.filter(producto => producto.id !== productoId);
      this.actualizarLocalStorage();
      console.log('delete - componentdespue : ', this.carrito);
    }
    console.log('carrito - serice : ', this.carrito);
    return of(this.carrito);
    // return this.http.delete(`${this.apiUrl}/${usuarioId}/eliminar/${productoId}`);
  }

  realizarCompra(usuarioId: number): Observable<any> {
    // Lógica para realizar la compra, puede implicar la actualización de la base de datos, etc.
    return this.http.post(`${this.apiUrl}/${usuarioId}/comprar`, {});
  }

  private actualizarLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

}
