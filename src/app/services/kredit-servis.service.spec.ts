import { TestBed, inject } from '@angular/core/testing';

import { KreditServisService } from './kredit-servis.service';

describe('KreditServisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KreditServisService]
    });
  });

  it('should be created', inject([KreditServisService], (service: KreditServisService) => {
    expect(service).toBeTruthy();
  }));
});
