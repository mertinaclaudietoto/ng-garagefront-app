import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutmaComponent } from './layoutma.component';

describe('LayoutmaComponent', () => {
  let component: LayoutmaComponent;
  let fixture: ComponentFixture<LayoutmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
