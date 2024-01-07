import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductoRelacionado } from '../../models/producto.relational.model';

@Injectable({
    providedIn: 'root'
  })
export class DataServiceMock {

    obtenerProductosRelacionados(categoriaId: number): Observable<ProductoRelacionado[]> {

        let mockData: ProductoRelacionado[] = [
          {
            id: 1,
            nombre: 'Producto 1',
            imagen: 'https://static.interbankbenefit.pe/public/web/images/producto/thumbnail/ficha-tecnica/486395-ficha-tecnica.png',
            indice: 0,
          },
          {
            id: 2,
            nombre: 'Producto 3',
            imagen: 'https://static.interbankbenefit.pe/public/web/images/producto/thumbnail/ficha-tecnica/452572-ficha-tecnica.png',
            indice: 1,
          },
          {
            id: 3,
            nombre: 'Producto 4',
            imagen: 'https://static.interbankbenefit.pe/public/web/images/producto/thumbnail/ficha-tecnica/430257-ficha-tecnica.png',
            indice: 2,
          },

        ];
    
        return of(mockData);
      }
}