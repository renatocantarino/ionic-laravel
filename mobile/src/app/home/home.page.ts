import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuarios = [];
  public todo: usuario = new usuario()
  public img = 'http://placekitten.com/g/200/300'


  constructor(private usuarioService: UsuarioService, private router : Router) {

    this.usuarioService.All()
      .subscribe(response => {
        this.usuarios = response;
      })

  }

  save() {
    console.log('save')
    this.router.navigate(['/']);
  }

  clear() {
    this.todo = new usuario();
  }

  back() {
    this.router.navigate(['/']);
  }


}




export class usuario {
  nome: string;
  email: string;
}
