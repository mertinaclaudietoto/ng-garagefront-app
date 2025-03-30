import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCarComponent } from './services-car.component';

describe('ServicesCarComponent', () => {
  let component: ServicesCarComponent;
  let fixture: ComponentFixture<ServicesCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
