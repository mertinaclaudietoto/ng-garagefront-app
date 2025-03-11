import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTypeComponent } from './car-type.component';

describe('CarTypeComponent', () => {
  let component: CarTypeComponent;
  let fixture: ComponentFixture<CarTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
