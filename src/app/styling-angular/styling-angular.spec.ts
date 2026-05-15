import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingAngular } from './styling-angular';

describe('StylingAngular', () => {
  let component: StylingAngular;
  let fixture: ComponentFixture<StylingAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylingAngular],
    }).compileComponents();

    fixture = TestBed.createComponent(StylingAngular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
