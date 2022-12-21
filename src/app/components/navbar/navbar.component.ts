import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { settingsModel } from 'src/app/models/settings.model';
import { SettingsService } from '../../services/settings.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { PagesModel } from '../../models/pages.model';
import { PagesService } from '../../services/pages.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  settings!: settingsModel
  pages: Array<PagesModel> = [];
  constructor(
    private SettingsService: SettingsService,
    private LocalStorageService: LocalStorageService,
    private PagesService: PagesService,
    private Router: Router
  ) { }

  ngOnInit(): void {
    forkJoin({
      settings: this.SettingsService.getSettings(),
      pages: this.PagesService.getPages()

    }).subscribe((res:any) => {
      this.pages = res.pages.data;
      this.settings = res.settings.data;

      console.log(this.pages)
    }), (error:any) => {
      console.log(error)
    }
  }

  getSettings(){
    this.SettingsService.getSettings().subscribe(
      (response: any) =>{
        this.settings = response.data
        this.LocalStorageService.setItem('SETTINGS', this.settings)
        console.log(this.settings)
      },
      (error: any) => console.log(error)
    )
  }
  navigateSection(page: any){
    this.Router.navigate(['/cnn', {page: page}]).then(()=>
      location.reload()
    );
}
}
