import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './domains/components/usuario/usuario.component';
import { ProductoComponent } from './domains/components/producto/producto.component';
import { CarritoComponent } from './domains/components/carrito/carrito.component';
import { LoginComponent } from './domains/components/login/login.component';
import { RegistroComponent } from './domains/components/registro/registro.component';
import { ListProductsComponent } from './domains/components/list-products/list-products.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'lista', component: ListProductsComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'carritos', component: CarritoComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
