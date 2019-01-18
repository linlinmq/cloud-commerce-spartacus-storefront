import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmenttrackingComponent } from './consignmenttracking.component';

describe('ConsignmenttrackingComponent', () => {
  let component: ConsignmenttrackingComponent;
  let fixture: ComponentFixture<ConsignmenttrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmenttrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmenttrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
