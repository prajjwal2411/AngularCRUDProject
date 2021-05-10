import { TestBed } from '@angular/core/testing';

import { ProguardGuard } from './proguard.guard';
import { SomeGuard } from './proguard.guard';

describe('ProguardGuard', () => {
  let guard: ProguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

describe('SomeGuard', () => {
  let guard: SomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
