import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarClientsComponent } from './car-clients.component';

describe('CarClientsComponent', () => {
  let component: CarClientsComponent;
  let fixture: ComponentFixture<CarClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarClientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
