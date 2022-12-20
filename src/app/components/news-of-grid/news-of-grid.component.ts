import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-of-grid',
  templateUrl: './news-of-grid.component.html',
  styleUrls: ['./news-of-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsOfGridComponent implements OnInit {
  notices = [0, 1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

}
