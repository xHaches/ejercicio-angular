import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';

// guards
import { AdminGuard } from '../guards/admin.guard';

// Mantenimientos
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const CHILD_ROUTES: Routes = [
  { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
  { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Tema' } },
  { path: 'buscar/:termino', component: BusquedaComponent, data: { titulo: 'Busquedas' } },
  { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráfica #1' } },
  { path: 'perfil', component: PerfilComponent, data: { titulo: 'Tema' } },
  { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' } },
  { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
  { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },

  // Matenimientos
  { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
  { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de medicos' } },
  { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Mantenimiento del medico' } },
  // Rutas de Admin
  { path: 'usuarios', canActivate: [AdminGuard], component: UsuariosComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
]

@NgModule({
  imports: [RouterModule.forChild(CHILD_ROUTES)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
