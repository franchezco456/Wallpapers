import { TestBed } from '@angular/core/testing';

import { Query } from './query';

describe('Query', () => {
  let service: Query;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Query);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
