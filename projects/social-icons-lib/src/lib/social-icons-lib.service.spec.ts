import { TestBed } from '@angular/core/testing';

import { SocialIconsLibService } from './social-icons-lib.service';

describe('SocialIconsLibService', () => {
  let service: SocialIconsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialIconsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
