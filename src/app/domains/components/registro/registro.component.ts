import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/services/usuario.service';
import { Usuario } from '../../shared/models/usuario.model';
import { Router } from '@angular/router';

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
    this.usuarioService.registrarUsuario(this.usuario).subscribe(
      response => {
        // Manejar la respuesta y almacenar el token si es necesario
        console.log('Autenticado exitosamente', response);
        localStorage.setItem('usuario', JSON.stringify(response));
        this.router.navigate(['/']);

      },
      error => {
        // Manejar el error de autenticación
        console.error('Error de autenticación', error);
      }
    );
  }

}
