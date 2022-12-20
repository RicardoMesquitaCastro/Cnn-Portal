import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiaRoutingModule } from './noticia-routing.module';
import { NoticiaComponent } from './noticia.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';


@NgModule({
  declarations: [
    NoticiaComponent
  ],
  imports: [
    CommonModule,
    NoticiaRoutingModule,
    SharedComponentsModule
  ]
})
export class NoticiaModule { }
