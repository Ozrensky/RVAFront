import { TestBed, inject } from '@angular/core/testing';

import { KlijentServisService } from './klijent-servis.service';

describe('KlijentServisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KlijentServisService]
    });
  });

  it('should be created', inject([KlijentServisService], (service: KlijentServisService) => {
    expect(service).toBeTruthy();
  }));
});
