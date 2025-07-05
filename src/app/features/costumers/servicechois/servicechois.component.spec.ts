import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicechoisComponent } from './servicechois.component';

describe('ServicechoisComponent', () => {
  let component: ServicechoisComponent;
  let fixture: ComponentFixture<ServicechoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicechoisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicechoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
