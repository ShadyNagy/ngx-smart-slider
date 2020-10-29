import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SmartSliderComponent } from './smart-slider.component';
import { SmartSliderHorizontalComponent } from './smart-slider-horizontal/smart-slider-horizontal.component';
import { SmartSliderVerticalComponent } from './smart-slider-vertical/smart-slider-vertical.component';
import { SmartSliderVerticalV2Component } from './smart-slider-vertical-v2/smart-slider-vertical-v2.component';
import { SmartSliderHorizontalV2Component } from './smart-slider-horizontal-v2/smart-slider-horizontal-v2.component';

const declarations = [
  SmartSliderComponent,
  SmartSliderVerticalV2Component,
  SmartSliderHorizontalV2Component,
];

@NgModule({
  declarations: [
    ...declarations,
    SmartSliderHorizontalComponent,
    SmartSliderVerticalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    ...declarations,
  ]
})
export class SmartSliderModule { }
