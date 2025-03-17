import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorksComponent } from './list-works.component';

describe('ListWorksComponent', () => {
  let component: ListWorksComponent;
  let fixture: ComponentFixture<ListWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
