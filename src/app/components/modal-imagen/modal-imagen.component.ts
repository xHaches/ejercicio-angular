import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { ModalImagenService } from '../../services/modal-imagen.service';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styles: []
})
export class ModalImagenComponent implements OnInit {

  public imagenSubir: File;
  public imgTemp: string | ArrayBuffer = null;

  constructor(
    public modalImaenService: ModalImagenService,
    public fileUploadService: FileUploadService
  ) { }

  ngOnInit(): void {
  }

  cerrarModal() {
    this.imgTemp = null;
    this.modalImaenService.cerrarModal();
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
    };
  }

  subirImagen() {
    const id = this.modalImaenService.id;
    const tipo = this.modalImaenService.tipo;

    this.fileUploadService
    .actualizarFoto( this.imagenSubir, tipo, id )
    .then( img => {
      Swal.fire('Guardado', 'Cambios fueron guardados', 'success');
      this.modalImaenService.nuevaImagen.emit(img);
      this.cerrarModal();
    }).catch( err => {
      Swal.fire('Guardado', 'No se pudo subir la imagen', 'error');
    });
  }

}
