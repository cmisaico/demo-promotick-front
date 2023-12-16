import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../shared/services/carrito.service';
import { Producto } from '../../shared/models/producto.model';
import { AuthService } from '../../shared/services/auth.service';
import { ProductoDetalle } from '../../shared/models/ProductoDetalle.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.sass']
})
export class CarritoComponent implements OnInit {

  productosEnCarrito: ProductoDetalle[] = [];

  constructor(private carritoService: CarritoService,
    private authService:AuthService) {}

  ngOnInit(): void {
    const usuarioId = 1; // Debes obtener el ID del usuario de alguna maera
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
        this.getProductosEnCarrito();
      });
  }

  estaLogueado(): boolean {
    return this.authService.estaLogueado();
  }

  realizarCompra(): void {
    this.carritoService.realizarCompra(1)
      .subscribe(() => {
        console.log('Compra realizada con éxito');
      });
  }

  calcularTotal(): number {
    return this.productosEnCarrito.reduce((total, producto) => total + producto.precio, 0);
  }

}
