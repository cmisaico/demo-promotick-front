import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email: string;
  contrasenia: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.contrasenia).subscribe(
      response => {
        // Manejar la respuesta y almacenar el token si es necesario
        console.log('Autenticado exitosamente', response);
        this.router.navigate(['/lista']);

      },
      error => {
        // Manejar el error de autenticación
        console.error('Error de autenticación', error);
      }
    );
  }

}
