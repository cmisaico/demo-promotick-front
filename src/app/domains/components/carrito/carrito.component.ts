import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../shared/services/carrito.service';
import { Producto } from '../../shared/models/producto.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.sass']
})
export class CarritoComponent implements OnInit {

  productosEnCarrito: Producto[] = [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 100,
      imagen: 'https://picsum.photos/200/300',
      stock: 10,
    },
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 100,
      imagen: 'https://picsum.photos/200/300',
      stock: 10,
    },
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 100,
      imagen: 'https://picsum.photos/200/300',
      stock: 10,
    }];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    // Supongamos que tienes una variable que contiene el ID del usuario actual
    const usuarioId = 1; // Debes obtener el ID del usuario de alguna manera
    console.log('inicia carrito');
    this.getProductosEnCarrito();
  }

  getProductosEnCarrito(): void {
    this.carritoService.getProductosEnCarrito()
      .subscribe(productos => this.productosEnCarrito = productos);
  }

  eliminarProductoDelCarrito(productoId: number): void {
    this.carritoService.eliminarProductoDelCarrito(productoId)
      .subscribe(() => {
        // Actualiza la lista de productos en el carrito después de eliminar
        this.getProductosEnCarrito();
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
