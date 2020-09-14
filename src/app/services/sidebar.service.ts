import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public menu = [];

  constructor( private router: Router) {}

  cargarMenu() {
    this.menu = JSON.parse(localStorage.getItem('menu')) || [];
    if( this.menu.length === 0 ) {
      this.router.navigateByUrl('/login');
    }
  }

  // menu: any[] = [
  //   {
  //     titulo: 'Dashboard',
  //     icono: 'mdi mdi-gauge',
  //     submenu: [
  //       { titulo: 'Main', url: '/'},
  //       { titulo: 'Rxjs', url: 'rxjs'},
  //       { titulo: 'Gráficas', url: 'grafica1'},
  //       { titulo: 'Promesas', url: 'promesas'},
  //       { titulo: 'ProgressBar', url: 'progress'},
  //     ]
  //   },
  //   {
  //     titulo: 'Mantenimientos',
  //     icono: 'mdi mdi-folder-lock-open',
  //     submenu: [
  //       { titulo: 'Usuarios', url: 'usuarios'},
  //       { titulo: 'Hospitales', url: 'hospitales'},
  //       { titulo: 'Medicos', url: 'medicos'},
  //     ]
  //   },
  // ];

}
