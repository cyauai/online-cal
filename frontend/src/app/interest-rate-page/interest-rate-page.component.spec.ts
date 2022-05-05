import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRatePageComponent } from './interest-rate-page.component';

describe('InterestRatePageComponent', () => {
  let component: InterestRatePageComponent;
  let fixture: ComponentFixture<InterestRatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestRatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestRatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
