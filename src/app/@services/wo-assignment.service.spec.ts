import { TestBed } from '@angular/core/testing';

import { WoAssignmentService } from './wo-assignment.service';

describe('WoAssignmentService', () => {
  let service: WoAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WoAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
