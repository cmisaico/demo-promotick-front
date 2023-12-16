import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive, Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  logueado: boolean = false;
  usuario:Usuario;

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  estaLogueado() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));

    return localStorage.getItem('usuario') !== null;
  }

  navegarACarrito(){
    this.router.navigate(['/carrito']);
  }

  logout() {
    console.log('A eliminar local storage');
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }

}
