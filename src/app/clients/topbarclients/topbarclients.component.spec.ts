import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarclientsComponent } from './topbarclients.component';

describe('TopbarclientsComponent', () => {
  let component: TopbarclientsComponent;
  let fixture: ComponentFixture<TopbarclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarclientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
