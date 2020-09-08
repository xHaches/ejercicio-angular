import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuarios.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {

  public usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.usuario = usuarioService.usuario;
  }

  logout() {
    this.usuarioService.logout();
  }
}
