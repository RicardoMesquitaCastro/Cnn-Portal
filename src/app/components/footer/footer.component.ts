import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  pages = [
    {name: "Home"},
    {name: "Cidades"},
    {name: "Educação e Cultura"},
    {name: "Economia"},
    {name: "Segurança"},
    {name: "Política"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
