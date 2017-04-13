import { TestBed, inject } from '@angular/core/testing';

import { GetmoviesService } from './getmovies.service';

describe('GetmoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetmoviesService]
    });
  });

  it('should ...', inject([GetmoviesService], (service: GetmoviesService) => {
    expect(service).toBeTruthy();
  }));
});
