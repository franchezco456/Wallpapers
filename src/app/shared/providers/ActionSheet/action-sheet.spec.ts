import { TestBed } from '@angular/core/testing';

import { ActionSheet } from './action-sheet';

describe('ActionSheet', () => {
  let service: ActionSheet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionSheet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
