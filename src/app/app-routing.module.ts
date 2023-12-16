import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './domains/components/usuario/usuario.component';
import { ProductoComponent } from './domains/components/producto/producto.component';
import { CarritoComponent } from './domains/components/carrito/carrito.component';
import { LoginComponent } from './domains/components/login/login.component';
import { RegistroComponent } from './domains/components/registro/registro.component';
import { ListProductsComponent } from './domains/components/list-products/list-products.component';
import { HeaderComponent } from './domains/shared/components/header/header.component';
import { FilterComponent } from './domains/components/filter/filter.component';
import { ErrorPageComponent } from './domains/shared/components/error-page/error-page.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '', component: ListProductsComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'carritos', component: CarritoComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
