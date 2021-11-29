import { TestBed } from '@angular/core/testing';

import { IngresadoGuard } from './bandera.guard';

describe('IngresadoGuard', () => {
  let guard: IngresadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
