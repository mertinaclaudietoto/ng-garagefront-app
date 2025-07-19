import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagemaComponent } from './message.component';

describe('MessagemaComponent', () => {
  let component: MessagemaComponent;
  let fixture: ComponentFixture<MessagemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
