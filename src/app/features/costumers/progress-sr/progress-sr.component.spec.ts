import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSrComponent } from './progress-sr.component';

describe('ProgressSrComponent', () => {
  let component: ProgressSrComponent;
  let fixture: ComponentFixture<ProgressSrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressSrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressSrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
