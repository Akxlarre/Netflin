import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagePeliculaPageRoutingModule } from './page-pelicula-routing.module';

import { PagePeliculaPage } from './page-pelicula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagePeliculaPageRoutingModule
  ],
  declarations: [PagePeliculaPage]
})
export class PagePeliculaPageModule {}
