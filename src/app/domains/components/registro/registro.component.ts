import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/services/usuario.service';
import { Usuario } from '../../shared/models/usuario.model';
import { Router } from '@angular/router';
import { UsuarioRequest } from '../../shared/models/usuario.request.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = { nombre: '', email: '', contrasenia: '' };


  constructor(private usuarioService:UsuarioService,
    private router: Router) { }

  ngOnInit() {
  }

  registrar() {
    let usuarioRequest: UsuarioRequest = { usuario: this.usuario, carrito:[] };
    const productosString = localStorage.getItem('carrito');
    usuarioRequest.carrito = productosString ? JSON.parse(productosString) : [];
    this.usuarioService.registrarUsuario(usuarioRequest).subscribe(
      response => {
        localStorage.setItem('usuario', JSON.stringify(response));
        localStorage.removeItem('carrito');
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error de autenticación', error);
      }
    );
  }

}
