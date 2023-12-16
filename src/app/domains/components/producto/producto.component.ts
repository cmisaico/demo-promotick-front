import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../shared/services/producto.service';
import { ProductoDetalle } from '../../shared/models/ProductoDetalle.model';
import { CarritoService } from '../../shared/services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.sass']
})
export class ProductoComponent implements OnInit {

  producto: ProductoDetalle;

  constructor(private route: ActivatedRoute,
    private router:Router,
    private productService: ProductoService,
    private carritoService:CarritoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.productService.getProductoById(productId).subscribe(data => {
        this.producto = data;
      });
    });
  }

  agregarAlCarrito(producto: ProductoDetalle): void {
    this.carritoService.agregarProductoAlCarrito(producto);
    this.router.navigate(['/']);
    console.log('add', producto);
  }

}
