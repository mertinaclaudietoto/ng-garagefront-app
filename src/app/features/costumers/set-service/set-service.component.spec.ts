import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetServiceComponent } from './set-service.component';

describe('SetServiceComponent', () => {
  let component: SetServiceComponent;
  let fixture: ComponentFixture<SetServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
