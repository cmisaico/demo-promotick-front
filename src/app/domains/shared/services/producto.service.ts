import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../shared/models/producto.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Categoria } from '../../shared/models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/api/productos/';

  private mensajeFuente = new BehaviorSubject<string[]>([]);
  mensajeActual = this.mensajeFuente.asObservable();

  constructor(private http: HttpClient) {}

  getProductos(categoriasMarcadas: string[]): Observable<Producto[]> {
    let params;
    if(categoriasMarcadas.length > 0){
        params  = new HttpParams().set('categoriaIds', categoriasMarcadas.join(','));
        return this.http.get<Producto[]>(this.apiUrl, {params});
    } else {
      return this.http.get<Producto[]>(this.apiUrl);
    }
  }

  getProductoById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}${id}`);
  }

  agregarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.apiUrl + 'agregar', producto);
  }

  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl + 'categorias');
  }

  enviarMensaje(categoriasMarcadas: string[]){
    this.mensajeFuente.next(categoriasMarcadas);
    console.log('llego 22');
  }

}
