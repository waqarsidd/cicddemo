import { TestBed } from '@angular/core/testing';

import { ClaimHelperService } from './claim-helper.service';

describe('ClaimHelperService', () => {
  let service: ClaimHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
