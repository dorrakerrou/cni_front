import { TestBed } from '@angular/core/testing';

import { ListeMissionnaireService } from './liste-missionnaire.service';

describe('ListeMissionnaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeMissionnaireService = TestBed.get(ListeMissionnaireService);
    expect(service).toBeTruthy();
  });
});
