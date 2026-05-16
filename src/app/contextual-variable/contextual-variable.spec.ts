import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualVariable } from './contextual-variable';

describe('ContextualVariable', () => {
  let component: ContextualVariable;
  let fixture: ComponentFixture<ContextualVariable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualVariable],
    }).compileComponents();

    fixture = TestBed.createComponent(ContextualVariable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
