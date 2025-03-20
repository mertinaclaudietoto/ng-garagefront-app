import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetServiceComponent } from './det-service.component';

describe('DetServiceComponent', () => {
  let component: DetServiceComponent;
  let fixture: ComponentFixture<DetServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
