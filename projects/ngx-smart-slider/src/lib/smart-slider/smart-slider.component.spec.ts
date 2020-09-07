import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartSliderComponent } from './smart-slider.component';

describe('SmartSliderComponent', () => {
  let component: SmartSliderComponent;
  let fixture: ComponentFixture<SmartSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
