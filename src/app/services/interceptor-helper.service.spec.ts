import { TestBed } from '@angular/core/testing';

import { InterceptorHelperService } from './interceptor-helper.service';

describe('InterceptorHelperService', () => {
  let service: InterceptorHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
