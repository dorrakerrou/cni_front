import { TestBed } from '@angular/core/testing';

import { OrdMissService } from './ord-miss.service';

describe('OrdMissService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdMissService = TestBed.get(OrdMissService);
    expect(service).toBeTruthy();
  });
});
