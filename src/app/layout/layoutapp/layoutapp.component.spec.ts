import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutappComponent } from './layoutapp.component';

describe('LayoutappComponent', () => {
  let component: LayoutappComponent;
  let fixture: ComponentFixture<LayoutappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
