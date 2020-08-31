import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, pluck } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { title } from 'process';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnDestroy {

  titulo: string;
  tituloSubs$: Subscription;



  constructor( private router: Router ) {
    this.tituloSubs$ = this.getArgumentosRuta().subscribe( titulo => {
      this.titulo = titulo;
      document.title = `AdminPro - ${ this.titulo }`;
    });
  }
  
  getArgumentosRuta() {
    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd ) => event.snapshot.firstChild === null ),
      pluck('snapshot', 'data', 'titulo')
    );
  }

  ngOnDestroy() {
    this.tituloSubs$.unsubscribe();
  }

}
