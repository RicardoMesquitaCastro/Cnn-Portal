import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { settingsModel } from 'src/app/models/settings.model';
import { SettingsService } from '../../services/settings.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  settings!: settingsModel
  constructor(
    private SettingsService: SettingsService,
    private LocalStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.getSettings();
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
}
