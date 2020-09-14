import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// paginas
import { PagesComponent } from './pages.component';

// guards
import { AuthGuard } from '../guards/auth.guard';


const ROUTES: Routes = [
    { path: 'dashboard', component: PagesComponent, canActivate: [AuthGuard],
    canLoad: [ AuthGuard ],
    loadChildren: () => import('./child-routes.module').then( module => module.ChildRoutesModule )
  },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
