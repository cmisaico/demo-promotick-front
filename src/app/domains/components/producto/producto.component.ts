import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../shared/services/producto.service';
import { ProductoDetalle } from '../../shared/models/producto.detalle.model';
import { CarritoService } from '../../shared/services/carrito.service';
import { DataServiceMock } from '../../shared/services/mocks/data.service.mock';
import { Producto } from '../../shared/models/producto.model';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { ProductoRelacionado } from '../../shared/models/producto.relational.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.sass']
})
export class ProductoComponent implements OnInit {

  producto: ProductoDetalle;
  productosRelacionados: ProductoRelacionado[];
  isPhoneviewed = false;

  constructor(private route: ActivatedRoute,
    private router:Router,
    private productService: ProductoService,
    private productRelationMockService: DataServiceMock,
    private carritoService:CarritoService,
    public responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.productService.getProductoById(productId).subscribe(data => {
        this.producto = data;
      });

      this.productRelationMockService.obtenerProductosRelacionados(0).subscribe(data => {
        console.log('data', data);
        this.productosRelacionados = data;        
      });
    });
  }

  agregarAlCarrito(producto: ProductoDetalle): void {
    this.carritoService.agregarProductoAlCarrito(producto).subscribe(()=> {
      console.log('data', {});  
    }
    );
    this.router.navigate(['/']);
  }

}
