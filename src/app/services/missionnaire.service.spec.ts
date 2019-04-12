import { TestBed } from '@angular/core/testing';

import { MissionnaireService } from './missionnaire.service';

describe('MissionnaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissionnaireService = TestBed.get(MissionnaireService);
    expect(service).toBeTruthy();
  });
});
