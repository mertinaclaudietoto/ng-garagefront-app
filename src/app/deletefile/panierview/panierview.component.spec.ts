import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierviewComponent } from './panierview.component';

describe('PanierviewComponent', () => {
  let component: PanierviewComponent;
  let fixture: ComponentFixture<PanierviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanierviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanierviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
