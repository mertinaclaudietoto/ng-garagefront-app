import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabeFiltreComponent } from './tabe-filtre.component';

describe('TabeFiltreComponent', () => {
  let component: TabeFiltreComponent;
  let fixture: ComponentFixture<TabeFiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabeFiltreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabeFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
