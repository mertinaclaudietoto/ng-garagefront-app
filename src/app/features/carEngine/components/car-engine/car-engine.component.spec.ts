import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEngineComponent } from './car-engine.component';

describe('CarEngineComponent', () => {
  let component: CarEngineComponent;
  let fixture: ComponentFixture<CarEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarEngineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
