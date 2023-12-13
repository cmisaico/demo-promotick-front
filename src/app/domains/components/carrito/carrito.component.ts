import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../shared/models/producto.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.sass']
})
export class CarritoComponent implements OnInit {

  productosEnCarrito: Producto[];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    // Supongamos que tienes una variable que contiene el ID del usuario actual
    const usuarioId = 1; // Debes obtener el ID del usuario de alguna manera

    this.getProductosEnCarrito(usuarioId);
  }

  getProductosEnCarrito(usuarioId: number): void {
    this.carritoService.getProductosEnCarrito(usuarioId)
      .subscribe(productos => this.productosEnCarrito = productos);
  }

  eliminarProductoDelCarrito(usuarioId: number, productoId: number): void {
    this.carritoService.eliminarProductoDelCarrito(usuarioId, productoId)
      .subscribe(() => {
        // Actualiza la lista de productos en el carrito después de eliminar
        this.getProductosEnCarrito(usuarioId);
      });
  }

  realizarCompra(usuarioId: number): void {
    this.carritoService.realizarCompra(usuarioId)
      .subscribe(() => {
        // Lógica adicional después de realizar la compra
        // Por ejemplo, mostrar un mensaje de éxito, actualizar el estado, etc.
        console.log('Compra realizada con éxito');
      });
  }

  calcularTotal(): number {
    // Lógica para calcular el total de los productos en el carrito
    return this.productosEnCarrito.reduce((total, producto) => total + producto.precio, 0);
  }

}