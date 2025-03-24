import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingwidgetComponent } from './pricingwidget.component';

describe('PricingwidgetComponent', () => {
  let component: PricingwidgetComponent;
  let fixture: ComponentFixture<PricingwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingwidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
