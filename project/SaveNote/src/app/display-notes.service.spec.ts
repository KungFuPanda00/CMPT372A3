import { TestBed } from '@angular/core/testing';

import { DisplayNotesService } from './display-notes.service';

describe('DisplayNotesService', () => {
  let service: DisplayNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
