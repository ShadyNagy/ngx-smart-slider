import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartSliderVerticalComponent } from './smart-slider-vertical.component';

describe('SmartSliderVerticalComponent', () => {
  let component: SmartSliderVerticalComponent;
  let fixture: ComponentFixture<SmartSliderVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartSliderVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSliderVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
