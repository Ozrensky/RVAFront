import { TestBed, inject } from '@angular/core/testing';

import { RacunServisService } from './racun-servis.service';

describe('RacunServisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RacunServisService]
    });
  });

  it('should be created', inject([RacunServisService], (service: RacunServisService) => {
    expect(service).toBeTruthy();
  }));
});
