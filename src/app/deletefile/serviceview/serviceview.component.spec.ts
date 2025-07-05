import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceviewComponent } from './serviceview.component';

describe('ServiceviewComponent', () => {
  let component: ServiceviewComponent;
  let fixture: ComponentFixture<ServiceviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
