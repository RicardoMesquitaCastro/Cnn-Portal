import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

{ path: 'noticia', loadChildren: () => import('./pages/noticia/noticia.module').then(m => m.NoticiaModule) },

{ path: 'detalhes', loadChildren: () => import('./pages/detalhes/detalhes.module').then(m => m.DetalhesModule) },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
