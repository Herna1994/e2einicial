import { TestBed } from '@angular/core/testing';

import { MorocoService } from './moroco.service';

describe('MorocoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MorocoService = TestBed.get(MorocoService);
    expect(service).toBeTruthy();
  });
});
