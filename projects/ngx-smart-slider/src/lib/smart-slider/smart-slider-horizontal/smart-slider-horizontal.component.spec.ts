import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartSliderHorizontalComponent } from './smart-slider-horizontal.component';

describe('SmartSliderHorizontalComponent', () => {
  let component: SmartSliderHorizontalComponent;
  let fixture: ComponentFixture<SmartSliderHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartSliderHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSliderHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
