import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../shared/models/producto.model';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.sass']
})
export class ListProductsComponent implements OnInit {

  private productos: Producto[];

  constructor(private productosService: ProductoService) {}

  ngOnInit(): void {
    this.productosService.getProductos()
    .subscribe(productos => this.productos = productos);
  }

}
