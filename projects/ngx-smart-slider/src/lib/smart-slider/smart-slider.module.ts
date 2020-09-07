import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SmartSliderComponent } from './smart-slider.component';

const declarations = [
  SmartSliderComponent,
];

@NgModule({
  declarations: [
    ...declarations,
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
