import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { settingsModel } from 'src/app/models/settings.model';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  settings!: settingsModel
  constructor(
    private SettingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.getSettings();
  }

  getSettings(){
    this.SettingsService.getSettings().subscribe(
      (response: any) =>{
        console.log(response)
      },
      (error: any) => console.log(error)
    )
  }
}
