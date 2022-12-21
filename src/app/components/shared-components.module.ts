import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsOfGridComponent } from './news-of-grid/news-of-grid.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [NavbarComponent, NewsOfGridComponent, FooterComponent, TitleComponent ],
 exports:[
  NavbarComponent,
  NewsOfGridComponent,
  FooterComponent,
  TitleComponent,
 ],
  imports: [
    CommonModule,
    RouterModule

  ]
})
export class SharedComponentsModule { }
