import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmenttrackingDialogComponent } from './consignmenttracking-dialog.component';

describe('ConsignmenttrackingDialogComponent', () => {
  let component: ConsignmenttrackingDialogComponent;
  let fixture: ComponentFixture<ConsignmenttrackingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmenttrackingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmenttrackingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
