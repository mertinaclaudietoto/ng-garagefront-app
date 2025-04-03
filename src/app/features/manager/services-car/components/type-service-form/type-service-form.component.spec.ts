import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeServiceFormComponent } from './type-service-form.component';

describe('TypeServiceFormComponent', () => {
  let component: TypeServiceFormComponent;
  let fixture: ComponentFixture<TypeServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeServiceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
