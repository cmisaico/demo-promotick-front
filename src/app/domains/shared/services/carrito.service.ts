import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto.model';
import { AuthService } from './auth.service';
import { ProductoDetalle } from '../models/ProductoDetalle.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiUrl = environment.apiUrl +  '/api/carritos';
  private carrito: ProductoDetalle[] = [];


  constructor(private http: HttpClient, private authService:AuthService) {
  }


  getProductosEnCarrito(): Observable<ProductoDetalle[]> {
    if(this.authService.estaLogueado()){
      console.log('id - component : ', this.authService.obtenerId());
      // return this.http.get<Producto[]>(`${this.apiUrl}/${usuarioId}`);
    } else {
      console.log('carrito - component : ', this.carrito);
      this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      console.log('carrito - componentdespue : ', this.carrito);
    }
    console.log('carrito - serice : ', this.carrito);
    return of(this.carrito);
    
  }

  agregarProductoAlCarrito(producto: ProductoDetalle) {
    this.getProductosEnCarrito();
    console.log('antes carrito', this.carrito);
    this.carrito.push(producto);
    console.log('agrega carrito', this.carrito);
    this.actualizarLocalStorage();
    // return this.http.post(`${this.apiUrl}/${usuarioId}/agregar/${productoId}`, {});
  }

  registrarCarrito(): Observable<any> {

    const productosString = localStorage.getItem('productos');
    const productos = productosString ? JSON.parse(productosString) : [];
    const productosRequest:Producto[] = productos.map((producto: any) => {
      // Puedes realizar cualquier transformación necesaria aquí
      return {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        stock: producto.stock,
      };
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authService.obtenerToken(),
      }),
    };
    console.log('productosRequest', productosRequest);
    console.log('headers', httpOptions);
    return this.http.post(`${this.apiUrl}/${this.authService.obtenerId()}/registrarCarrito`, productosRequest, httpOptions);
  }

  limpiarCarrito() {
    this.carrito = [];
    this.actualizarLocalStorage();
  } 

  eliminarProductoDelCarrito(productoId: number): Observable<any> {
    if(this.authService.estaLogueado){

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
