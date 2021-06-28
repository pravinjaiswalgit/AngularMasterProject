import { TestBed } from '@angular/core/testing';

import { ProductdetailsGuard } from './productdetails.guard';

describe('ProductdetailsGuard', () => {
  let guard: ProductdetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductdetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
