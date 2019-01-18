import { TestBed } from '@angular/core/testing';

import { ConsignmenttrackingService } from './consignmenttracking.service';

describe('ConsignmenttrackingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsignmenttrackingService = TestBed.get(ConsignmenttrackingService);
    expect(service).toBeTruthy();
  });
});
