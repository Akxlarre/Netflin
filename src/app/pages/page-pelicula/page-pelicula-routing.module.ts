import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagePeliculaPage } from './page-pelicula.page';

const routes: Routes = [
  {
    path: '',
    component: PagePeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePeliculaPageRoutingModule {}
