import { TestBed } from '@angular/core/testing';

import { PraqIconsService } from './praq-icons-registry.service';

describe('PraqIconsService', () => {
  let service: PraqIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PraqIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
