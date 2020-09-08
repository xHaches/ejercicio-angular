import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { UsuarioService } from '../../services/usuario.service';
import { FileUploadService } from '../../services/file-upload.service';

import { Usuario } from '../../models/usuarios.models';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {

  public profileForm: FormGroup;
  public usuario: Usuario;
  public imagenSubir: File;
  public imgTemp: string | ArrayBuffer = null;

  constructor( 
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private fileUploadService: FileUploadService
    ) {
      this.usuario = usuarioService.usuario;
    }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      nombre: [ this.usuario.nombre , Validators.required],
      email: [ this.usuario.email , [Validators.required, Validators.email]]
    });
  }

  actualizarPerfil() {
    console.log(this.profileForm.value);
    this.usuarioService.actualizarPerfil( this.profileForm.value ).subscribe( () => {
      const { nombre, email } = this.profileForm.value;
      this.usuario.nombre = nombre;
      this.usuario.email = email;
      Swal.fire('Guardado', 'Cambios fueron guardados', 'success');
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error');
    });
  }

  cambiarImagen( file: File ) {
    this.imagenSubir = file;

    if ( !file ) {
      return this.imgTemp = null;
    }
    const reader = new FileReader();
    reader.readAsDataURL( file );

    reader.onloadend = () => {
      this.imgTemp = reader.result;
      console.log(reader.result);
    };
  }

  subirImagen() {
    this.fileUploadService
    .actualizarFoto( this.imagenSubir, 'usuarios', this.usuario.uid )
    .then( img => {
      this.usuario.img = img;
      Swal.fire('Guardado', 'Cambios fueron guardados', 'success');
    }).catch( err => {
      Swal.fire('Guardado', 'No se pudo subir la imagen', 'error');
    });
  }

}
