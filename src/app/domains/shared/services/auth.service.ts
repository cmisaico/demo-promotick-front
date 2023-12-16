import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/auth/';

  constructor(private http: HttpClient) { }



  login(email: string, contrasenia: string): Observable<any> {
    const credenciales = { email, contrasenia };
    console.log('credenciales', credenciales);
    return this.http.post(`${this.apiUrl}login`, credenciales);

  }

  logout(): Observable<any>{
    return this.http.post(`${this.apiUrl}logout`, {});
  }

  estaLogueado():boolean {
    return localStorage.getItem('usuario') !== null;
  }

  obtenerNombre(): string {
    if(this.estaLogueado()){
      return JSON.parse(localStorage.getItem('usuario'))['nombre'];
    }
    return '';
  }

  obtenerEmail() {
    if(this.estaLogueado()){
      return JSON.parse(localStorage.getItem('usuario'))['email'];
    }
    return '';
  }

  obtenerId() {
    if(this.estaLogueado()){
      return JSON.parse(localStorage.getItem('usuario'))['id'];
    }
    return '';
  }

  obtenerToken() {
    if(this.estaLogueado()){
      return JSON.parse(localStorage.getItem('usuario'))['token'];
    }
    return '';
  }

}
