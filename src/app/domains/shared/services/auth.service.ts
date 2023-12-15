import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/';

  private estaLogueado = false;

  constructor(private http: HttpClient) { }



  login(email: string, contrasenia: string): Observable<any> {
    const credenciales = { email, contrasenia };
    console.log('credenciales', credenciales);
    this.estaLogueado = true;
    return this.http.post(`${this.apiUrl}login`, credenciales);

  }

  logout(): Observable<any>{
    this.estaLogueado = false;
    return this.http.post(`${this.apiUrl}logout`, {});
  }

  get logueado(): boolean {
    return this.estaLogueado;
  }

}
