import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartSliderVerticalV2Component } from './smart-slider-vertical-v2.component';

describe('SmartSliderVerticalV2Component', () => {
  let component: SmartSliderVerticalV2Component;
  let fixture: ComponentFixture<SmartSliderVerticalV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartSliderVerticalV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSliderVerticalV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
