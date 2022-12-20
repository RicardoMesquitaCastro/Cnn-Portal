import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsOfGridComponent } from './news-of-grid/news-of-grid.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavbarComponent, NewsOfGridComponent, FooterComponent ],
 exports:[
  NavbarComponent,
  NewsOfGridComponent,
  FooterComponent
 ],
  imports: [
    CommonModule,

  ]
})
export class SharedComponentsModule { }
