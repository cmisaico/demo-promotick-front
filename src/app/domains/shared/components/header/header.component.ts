import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive, Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { ComponenteService } from '../../services/componente.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  logueado: boolean = false;
  usuario:Usuario;

  showMenu: boolean = false;

  constructor(private router: Router, private componentService:ComponenteService) { }

  ngOnInit() {
    this.componentService.estadoActual.subscribe(estado => {
      this.showMenu = estado;
    });
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
