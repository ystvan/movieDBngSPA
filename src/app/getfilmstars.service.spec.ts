import { TestBed, inject } from '@angular/core/testing';

import { GetfilmstarsService } from './getfilmstars.service';

describe('GetfilmstarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetfilmstarsService]
    });
  });

  it('should ...', inject([GetfilmstarsService], (service: GetfilmstarsService) => {
    expect(service).toBeTruthy();
  }));
});
