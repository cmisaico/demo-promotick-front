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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './domains/shared/components/header/header.component';
import { FilterComponent } from './domains/components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './domains/shared/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ProductoComponent,
    CarritoComponent,
    LoginComponent,
    RegistroComponent,
    ListProductsComponent,
    HeaderComponent,
    FilterComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
