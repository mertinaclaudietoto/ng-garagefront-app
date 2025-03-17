import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailTaskComponent } from './modal-detail-task.component';

describe('ModalDetailTaskComponent', () => {
  let component: ModalDetailTaskComponent;
  let fixture: ComponentFixture<ModalDetailTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDetailTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetailTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
