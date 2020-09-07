import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {NgxSmartSliderModule} from 'ngx-smart-slider';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmartSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
