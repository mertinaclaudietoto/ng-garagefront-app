import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSizeFormComponent } from './car-size-form.component';

describe('CarSizeFormComponent', () => {
  let component: CarSizeFormComponent;
  let fixture: ComponentFixture<CarSizeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarSizeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSizeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
