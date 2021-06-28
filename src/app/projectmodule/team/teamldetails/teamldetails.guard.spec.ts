import { TestBed } from '@angular/core/testing';

import { TeamldetailsGuard } from './teamldetails.guard';

describe('TeamldetailsGuard', () => {
  let guard: TeamldetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TeamldetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
