import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Categoria } from '../../shared/models/categoria.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  private categorias: Categoria[];
  categoriasMarcadas: string[] = [];

  constructor(private productosService: ProductoService) {}

  ngOnInit() {
    this.obtenerCategorias();
  }

  obtenerCategorias(): void {
    this.productosService.obtenerCategorias().subscribe(categorias => this.categorias = categorias);;
  }

  filtrarPorCategoria(categoria: string): void {
    
  }

  onCheckboxChange(event: Event, categoria: string, isChecked: boolean) {
    event.stopPropagation();
    if (isChecked) {
      // Agregar categoría al array de categorías marcadas
      this.categoriasMarcadas.push(categoria);
    } else {
      // Quitar categoría del array de categorías marcadas
      this.categoriasMarcadas = this.categoriasMarcadas.filter(cat => cat !== categoria);
    }

    // Imprimir las categorías marcadas (puedes realizar cualquier lógica adicional aquí)
    console.log('Categorías Marcadas:', this.categoriasMarcadas);
  }


}
