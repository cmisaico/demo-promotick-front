import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto.model';
import { AuthService } from './auth.service';
import { ProductoDetalle } from '../models/producto.detalle.model';
import { environment } from '../../../../environments/environment';
import { ItemCarrito } from '../models/item.carrito.model';

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

      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.authService.obtenerToken(),
        }),
      };

      let usuarioId = this.authService.obtenerId();
      return this.http.get<ProductoDetalle[]>(`${this.apiUrl}/${usuarioId}`, httpOptions);
    } else {
      this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    }
    return of(this.carrito);
    
  }

  agregarProductoAlCarrito(producto: ProductoDetalle): Observable<any> {

    if(this.authService.estaLogueado()){

      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.authService.obtenerToken(),
        }),
      };
      let usuarioId = this.authService.obtenerId();
      let itemCarrito:ItemCarrito = { usuarioId: usuarioId, productoId: producto.id};
      return this.http.post(`${this.apiUrl}/agregar`, itemCarrito, httpOptions);
    } else {
      this.getProductosEnCarrito();
      this.carrito.push(producto);
      this.actualizarLocalStorage();
      return of('');
    }

  }

  registrarCarrito(): Observable<any> {

    const productosString = localStorage.getItem('carrito');
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
    const token = this.authService.obtenerToken();
    console.log('productosRequest', productosRequest);
    console.log('headers', httpOptions);
    return this.http.post(`${this.apiUrl}/${this.authService.obtenerId()}/registrarCarrito`, productosRequest,
      httpOptions);
  }

  limpiarCarrito() {
    this.carrito = [];
    this.actualizarLocalStorage();
  } 

  eliminarProductoDelCarrito(productoId: number): Observable<string> {
    if(this.authService.estaLogueado()){
        console.log('id - component : ');
        const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.authService.obtenerToken(),
          }),
        };
        let usuarioId = this.authService.obtenerId();
        return this.http.delete<string>(`${this.apiUrl}/${usuarioId}/eliminar/${productoId}`,
        httpOptions);
    } else {
      this.carrito = this.carrito.filter(producto => producto.id !== productoId);
      this.actualizarLocalStorage();
    }

  }

  realizarCompra(usuarioId: number): Observable<any> {
    // Lógica para realizar la compra
    return null;
  }

  private actualizarLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

}
