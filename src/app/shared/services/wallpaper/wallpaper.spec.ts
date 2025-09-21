import { TestBed } from '@angular/core/testing';

import { Wallpaper } from './wallpaper';

describe('Wallpaper', () => {
  let service: Wallpaper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Wallpaper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
