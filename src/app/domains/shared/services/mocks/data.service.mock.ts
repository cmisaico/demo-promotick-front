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
            nombre: 'Smartphone Galaxy S21',
            imagen: 'imagen_s21.jpg',
            indice: 0,
          },
          {
            id: 2,
            nombre: 'Laptop Ultrabook XPS 13',
            imagen: 'imagen_xps13.jpg',
            indice: 1,
          },
          {
            id: 3,
            nombre: 'Tableta iPad Air',
            imagen: 'imagen_ipad_air.jpg',
            indice: 2,
          },
          {
            id: 4,
            nombre: 'Auriculares inalámbricos Sony WH-1000XM4',
            imagen: 'imagen_sony_wh1000xm4.jpg',
            indice: 2,
          },

        ];
    
        return of(mockData);
      }
}