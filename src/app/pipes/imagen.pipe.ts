import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: 'usuarios' | 'medicos' | 'hospitales'): string {
    if ( !img ) {
      // no importa el tipo, regresa la misma imagen
      return `${ base_url }/upload/usuarios/no-image`;
    } else if ( img.includes('https') ) {
        return img;
    } else if ( img ) {
        return `${ base_url }/upload/${ tipo }/${ img }`;
    } else {
      // no importa el tipo, regresa la misma imagen
      return `${ base_url }/upload/usuarios/no-image`;
    }
  }

}
