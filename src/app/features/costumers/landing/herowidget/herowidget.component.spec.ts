import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerowidgetComponent } from './herowidget.component';

describe('HerowidgetComponent', () => {
  let component: HerowidgetComponent;
  let fixture: ComponentFixture<HerowidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerowidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerowidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
