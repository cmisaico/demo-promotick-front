import { Component, OnInit } from '@angular/core';
// import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../shared/models/producto.model';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.sass']
})
export class ListProductsComponent implements OnInit {

  private productos: Producto[] = [
    { id: 1, nombre: 'Producto 1', precio: 19.99 },
    { id: 2, nombre: 'Producto 2', precio: 29.99 },
    { id: 3, nombre: 'Producto 3', precio: 9.99 },
  ]


  // Configuración del carrusel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  // constructor(private productosService: ProductoService) {}

  ngOnInit(): void {
    // this.productosService.getProductos()
    // .subscribe(productos => this.productos = productos);
  }

}
