/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserfrontService } from './userfront.service';

describe('UserfrontService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserfrontService]
    });
  });

  it('should ...', inject([UserfrontService], (service: UserfrontService) => {
    expect(service).toBeTruthy();
  }));
});
