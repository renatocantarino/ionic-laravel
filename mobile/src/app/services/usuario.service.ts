import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../home/home.page';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) { }
  baseUrl = 'http://localhost:8000/'


  public All(): Observable<any> {
    return this.http.get(this.baseUrl + 'usuario')
  }

  public save(usuario: usuario): Observable<any> {
    return this.http.post(this.baseUrl + 'usuario', usuario)
  }

}
