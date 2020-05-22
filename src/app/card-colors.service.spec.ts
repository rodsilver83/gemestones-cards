import { TestBed } from '@angular/core/testing';

import { CardColorsService } from './card-colors.service';

describe('CardColorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardColorsService = TestBed.get(CardColorsService);
    expect(service).toBeTruthy();
  });
});
