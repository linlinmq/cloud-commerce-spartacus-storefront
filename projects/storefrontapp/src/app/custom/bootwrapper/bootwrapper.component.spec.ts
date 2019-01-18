import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootwrapperComponent } from './bootwrapper.component';

describe('BootwrapperComponent', () => {
  let component: BootwrapperComponent;
  let fixture: ComponentFixture<BootwrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootwrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
