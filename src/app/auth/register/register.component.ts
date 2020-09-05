import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formsubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['Luisin', Validators.required ],
    email: ['test99@test99.com', [ Validators.required, Validators.email ] ],
    password: [ '123456', Validators.required ],
    password2: [ '123456', Validators.required ],
    terminos: [ true, Validators.required ],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

  constructor( 
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  crearUsuario() {
    this.formsubmitted = true;
    console.log(this.registerForm.value);
    if ( this.registerForm.invalid ) {
      return;
    }

    //Realizar el poste
    this.usuarioService.crearUsuario( this.registerForm.value ).subscribe( resp => {
      // navegar al dashboard
      this.router.navigateByUrl('/');
    }, err => {
      Swal.fire( 'Error', err.error.msg, 'error');
    } );

  }

  campoNoValido(campo: string): boolean {
    if ( this.registerForm.get(campo).invalid && this.formsubmitted ) {
      return true;
    }
    return false;
  }

  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    return ( pass1 !== pass2 && this.formsubmitted ) ? true : false;
  }

  passwordsIguales(pass1Name: string, pass2Name: string ) {
    return ( formGroup: FormGroup ) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);
      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
    }
  }

  aceptaTerminos() {
    return !this.registerForm.get('terminos').value && this.formsubmitted;
  }

}
