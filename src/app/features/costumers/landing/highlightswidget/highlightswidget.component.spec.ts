import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightswidgetComponent } from './highlightswidget.component';

describe('HighlightswidgetComponent', () => {
  let component: HighlightswidgetComponent;
  let fixture: ComponentFixture<HighlightswidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightswidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightswidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
