import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { settingsModel } from 'src/app/models/settings.model';
import { forkJoin } from 'rxjs';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  settings!: settingsModel
  pages = [
    {name: "Home"},
    {name: "Cidades"},
    {name: "Educação e Cultura"},
    {name: "Economia"},
    {name: "Segurança"},
    {name: "Política"},
  ]
  constructor(
    private SettingsService: SettingsService,
    private LocalStorageService: LocalStorageService,
    private PagesService: PagesService

  ) {

    // this.settings = this.LocalStorageService.getItem("SETTINGS")
    // if(Object.keys(this.settings).length === 0){
    //   this.getSettings();
    // }
  }

  ngOnInit(): void {

    forkJoin({
      settings: this.SettingsService.getSettings(),
      pages: this.PagesService.getPages()

    }).subscribe((res:any) => {
      console.log(res)

    }), (error:any) => {
      console.log(error)
    }
  }
}
