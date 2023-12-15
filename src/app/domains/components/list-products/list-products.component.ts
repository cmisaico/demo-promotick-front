import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/services/producto.service';
import { Producto } from '../../shared/models/producto.model';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { CarritoService } from '../../shared/services/carrito.service';
import { ModalService } from '../../shared/services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.sass']
})
export class ListProductsComponent implements OnInit {

  modalVisible: boolean = false;

  private productos: Producto[];

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

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarProductoAlCarrito(producto);
    this.mostrarModal();
    console.log('add', producto);
  }

  mostrarModal(){
    this.modalService.mostrarModal();
    console.log('mostrar', this.modalVisible);
  }

}
