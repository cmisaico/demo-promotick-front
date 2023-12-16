import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../../shared/models/usuario.model';
import { CarritoService } from '../../shared/services/carrito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email: string;
  contrasenia: string;

  constructor(private authService: AuthService, 
    private carritoService: CarritoService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.contrasenia).subscribe(
      response => {
        // Manejar la respuesta y almacenar el token si es necesario
        console.log('Autenticado exitosamente', response);
        localStorage.setItem('usuario', JSON.stringify(response));
        this.carritoService.registrarCarrito().subscribe(
          response => {
            console.log('Carrito registrado exitosamente', response);
            localStorage.setItem('carrito', JSON.stringify(response));
          },
          error => {
            console.error('Error al registrar carrito', error);
          }
        );
        this.router.navigate(['/']);

      },
      error => {
        // Manejar el error de autenticación
        console.error('Error de autenticación', error);
      }
    );
  }



}
