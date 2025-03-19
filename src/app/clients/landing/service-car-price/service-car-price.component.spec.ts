import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCarPriceComponent } from './service-car-price.component';

describe('ServiceCarPriceComponent', () => {
  let component: ServiceCarPriceComponent;
  let fixture: ComponentFixture<ServiceCarPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCarPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCarPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
