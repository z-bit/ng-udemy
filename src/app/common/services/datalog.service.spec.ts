/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatalogService } from './datalog.service';

describe('DatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatalogService]
    });
  });

  it('should ...', inject([DatalogService], (service: DatalogService) => {
    expect(service).toBeTruthy();
  }));
});
