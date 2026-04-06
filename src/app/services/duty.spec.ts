import { TestBed } from '@angular/core/testing';

import { Duty } from './duty';

describe('Duty', () => {
  let service: Duty;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Duty);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
