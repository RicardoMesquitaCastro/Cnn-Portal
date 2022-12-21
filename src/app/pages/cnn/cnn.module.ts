import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CnnRoutingModule } from './cnn-routing.module';
import { CnnComponent } from './cnn.component';
import { SharedComponentsModule } from '../../components/shared-components.module';


@NgModule({
  declarations: [
    CnnComponent
  ],
  imports: [
    CommonModule,
    CnnRoutingModule,
    SharedComponentsModule
  ]
})
export class CnnModule { }
