import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterwidgetComponent } from './footerwidget.component';

describe('FooterwidgetComponent', () => {
  let component: FooterwidgetComponent;
  let fixture: ComponentFixture<FooterwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterwidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
