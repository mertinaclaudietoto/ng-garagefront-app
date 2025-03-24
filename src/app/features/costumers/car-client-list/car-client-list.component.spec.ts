import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarClientListComponent } from './car-client-list.component';

describe('CarClientListComponent', () => {
  let component: CarClientListComponent;
  let fixture: ComponentFixture<CarClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarClientListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
