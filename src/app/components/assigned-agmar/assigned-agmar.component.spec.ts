import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedAgmarComponent } from './assigned-agmar.component';

describe('AssignedAgmarComponent', () => {
  let component: AssignedAgmarComponent;
  let fixture: ComponentFixture<AssignedAgmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedAgmarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedAgmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
