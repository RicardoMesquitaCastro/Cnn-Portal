import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '../../services/pages.service';
import { PagesModel } from '../../models/pages.model';

@Component({
  selector: 'app-cnn',
  templateUrl: './cnn.component.html',
  styleUrls: ['./cnn.component.scss']
})
export class CnnComponent implements OnInit {
  title: string = "";
  pages: Array<PagesModel> =[]
  contents: Array<any> = []
  constructor(
    private router: ActivatedRoute,
    private PagesService: PagesService
  ) {
    this.router.params.subscribe(param =>{
      this.title = param?.['page'];
    })

  }

  ngOnInit(): void {
    this.getPages();
  }

  getPages(){
    this.PagesService.getPages().subscribe(
      (response:any) =>{
        this.pages = response.data
        this.filterPageContent(this.pages);
      }
    )
  }


  filterPageContent(pages: any){
    this.contents = []
    pages.forEach((page:any)=>{
      if(page?.name === this.title){
        this.contents = page?.contents
    }
  })
  // console.log(this.contents)
  }

}
