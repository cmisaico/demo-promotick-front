import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../shared/models/producto.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Categoria } from '../../shared/models/categoria.model';
import { ProductoDetalle } from '../models/producto.detalle.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = environment.apiUrl + '/api/productos/';

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

  getProductoById(id: number): Observable<ProductoDetalle> {
    return this.http.get<ProductoDetalle>(`${this.apiUrl}${id}`);
  }

  agregarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.apiUrl + 'agregar', producto);
  }

  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl + 'categorias');
  }

  enviarMensaje(categoriasMarcadas: string[]){
    this.mensajeFuente.next(categoriasMarcadas);
  }

}
