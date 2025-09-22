import { TestBed } from '@angular/core/testing';

import { Preferences } from './preferences';

describe('Preferences', () => {
  let service: Preferences;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Preferences);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
