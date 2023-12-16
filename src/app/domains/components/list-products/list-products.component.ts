import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/services/producto.service';
import { Producto } from '../../shared/models/producto.model';
import { CarritoService } from '../../shared/services/carrito.service';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.sass']
})
export class ListProductsComponent implements OnInit {

  modalVisible: boolean = false;

  productos: Producto[];

  constructor(private productosService: ProductoService,
    private carritoService:CarritoService,
    private modalService: ModalService) {
      this.modalService.modalVisible$.subscribe(visible => {
        this.modalVisible = visible;
      });
    }

  ngOnInit(): void {

    // this.productosService.getProductos([])
    //   .subscribe(productos => this.productos = productos);
    this.productosService.mensajeActual.subscribe(mensaje => {
      console.log('llego');
      this.productosService.getProductos(mensaje)
        .subscribe(productos => this.productos = productos);
    });
 
  }



}
