import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialIconsLibComponent } from './social-icons-lib.component';

describe('SocialIconsLibComponent', () => {
  let component: SocialIconsLibComponent;
  let fixture: ComponentFixture<SocialIconsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialIconsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialIconsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
