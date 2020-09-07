import { NgModule } from '@angular/core';
import { SmartSliderModule } from './smart-slider/smart-slider.module';
import { CommonModule } from '@angular/common';


const imports = [
  SmartSliderModule,
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ...imports,
  ],
  exports: [
    ...imports,
  ]
})
export class NgxSmartSliderModule { }
