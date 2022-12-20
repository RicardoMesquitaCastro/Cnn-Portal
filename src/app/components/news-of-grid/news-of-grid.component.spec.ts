import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsOfGridComponent } from './news-of-grid.component';

describe('NewsOfGridComponent', () => {
  let component: NewsOfGridComponent;
  let fixture: ComponentFixture<NewsOfGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsOfGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsOfGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
