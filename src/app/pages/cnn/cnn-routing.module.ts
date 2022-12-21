import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CnnComponent } from './cnn.component';

const routes: Routes = [{ path: '', component: CnnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CnnRoutingModule { }
