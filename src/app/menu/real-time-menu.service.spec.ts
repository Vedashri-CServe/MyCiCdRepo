import { TestBed } from '@angular/core/testing';

import { RealTimeMenuService } from './real-time-menu.service';

describe('RealTimeMenuService', () => {
  let service: RealTimeMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealTimeMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
