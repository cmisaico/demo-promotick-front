import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './domains/components/usuario/usuario.component';
import { ProductoComponent } from './domains/components/producto/producto.component';
import { CarritoComponent } from './domains/components/carrito/carrito.component';
import { LoginComponent } from './domains/components/login/login.component';
import { RegistroComponent } from './domains/components/registro/registro.component';
import { ListProductsComponent } from './domains/components/list-products/list-products.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ProductoComponent,
    CarritoComponent,
    LoginComponent,
    RegistroComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
