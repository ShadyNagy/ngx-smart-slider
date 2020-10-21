import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartSliderHorizontalV2Component } from './smart-slider-horizontal-v2.component';

describe('SmartSliderHorizontalV2Component', () => {
  let component: SmartSliderHorizontalV2Component;
  let fixture: ComponentFixture<SmartSliderHorizontalV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartSliderHorizontalV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSliderHorizontalV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
