import { TestBed, inject } from '@angular/core/testing';

import { TipRacunaServisService } from './tip-racuna-servis.service';

describe('TipRacunaServisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipRacunaServisService]
    });
  });

  it('should be created', inject([TipRacunaServisService], (service: TipRacunaServisService) => {
    expect(service).toBeTruthy();
  }));
});
