import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../shared/services/carrito.service';
import { Producto } from '../../shared/models/producto.model';
import { AuthService } from '../../shared/services/auth.service';
import { ProductoDetalle } from '../../shared/models/producto.detalle.model';

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
    const usuarioId = 1;
    this.getProductosEnCarrito();
  }

  getProductosEnCarrito(): void {
    console.log('inicio lista cartito');
    this.carritoService.getProductosEnCarrito()
      .subscribe(productos => {
        this.productosEnCarrito = productos;
      });
  }

  eliminarProductoDelCarrito(productoId: number): void {
    this.carritoService.eliminarProductoDelCarrito(productoId)
      .subscribe((mensaje: string) => {
        console.log('mensaje : ', mensaje);
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
