import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../shared/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuarios';

  private estaLogueado = false;

  constructor(private http: HttpClient) {}

  get logueado(): boolean {
    return this.estaLogueado;
  }

  login() {
    this.estaLogueado = true;
  }

  logout() {
    this.estaLogueado = false;
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  registrarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, usuario);
  }
}
