import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSystemConversionComponent } from './number-system-conversion.component';

describe('NumberSystemConversionComponent', () => {
  let component: NumberSystemConversionComponent;
  let fixture: ComponentFixture<NumberSystemConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberSystemConversionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberSystemConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
