import { TestBed } from '@angular/core/testing';

import { SmartSliderService } from './smart-slider.service';

describe('SmartSliderService', () => {
  let service: SmartSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
