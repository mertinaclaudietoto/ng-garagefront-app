import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWeightComponent } from './car-weight.component';

describe('CarWeightComponent', () => {
  let component: CarWeightComponent;
  let fixture: ComponentFixture<CarWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarWeightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
