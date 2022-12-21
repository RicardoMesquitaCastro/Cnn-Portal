import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { settingsModel } from 'src/app/models/settings.model';
import { forkJoin } from 'rxjs';
import { PagesService } from '../../services/pages.service';
import { PagesModel } from '../../models/pages.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  settings!: settingsModel
  pages:  Array<PagesModel> = [];
  apiStorage =  environment.apiStorageUrl

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
      this.pages = res.pages.data;
      this.settings = res.settings.data;

    }), (error:any) => {
      console.log(error)
    }
  }
  public getYear(): string {
    return `${new Date().getFullYear()}`;
  }
}
