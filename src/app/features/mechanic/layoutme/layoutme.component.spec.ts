import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutmeComponent } from './layoutme.component';

describe('LayoutmeComponent', () => {
  let component: LayoutmeComponent;
  let fixture: ComponentFixture<LayoutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
