import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  public usuarios = [];
  public img = 'http://placekitten.com/g/200/300'


  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.usuarioService.All()
      .subscribe(response => {
        this.usuarios = response;
      })
  }

  new() {
    this.router.navigate(['/home']);
  }

}
