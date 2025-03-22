import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSizeComponent } from './car-size.component';

describe('CarSizeComponent', () => {
  let component: CarSizeComponent;
  let fixture: ComponentFixture<CarSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarSizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
