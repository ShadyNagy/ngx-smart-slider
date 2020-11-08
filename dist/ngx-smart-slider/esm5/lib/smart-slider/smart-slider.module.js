import { __decorate, __read, __spread } from "tslib";
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
var declarations = [
    SmartSliderComponent,
    SmartSliderVerticalV2Component,
    SmartSliderHorizontalV2Component,
];
var SmartSliderModule = /** @class */ (function () {
    function SmartSliderModule() {
    }
    SmartSliderModule = __decorate([
        NgModule({
            declarations: __spread(declarations, [
                SmartSliderHorizontalComponent,
                SmartSliderVerticalComponent,
            ]),
            imports: [
                CommonModule,
                BrowserModule,
                FormsModule,
                BrowserAnimationsModule
            ],
            exports: __spread(declarations)
        })
    ], SmartSliderModule);
    return SmartSliderModule;
}());
export { SmartSliderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbWFydC1zbGlkZXIvIiwic291cmNlcyI6WyJsaWIvc21hcnQtc2xpZGVyL3NtYXJ0LXNsaWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDN0csT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDL0csT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFFckgsSUFBTSxZQUFZLEdBQUc7SUFDbkIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixnQ0FBZ0M7Q0FDakMsQ0FBQztBQWtCRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBaEI3QixRQUFRLENBQUM7WUFDUixZQUFZLFdBQ1AsWUFBWTtnQkFDZiw4QkFBOEI7Z0JBQzlCLDRCQUE0QjtjQUM3QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsV0FBVztnQkFDWCx1QkFBdUI7YUFDeEI7WUFDRCxPQUFPLFdBQ0YsWUFBWSxDQUNoQjtTQUNGLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7U0FBckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgU21hcnRTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LXNsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU21hcnRTbGlkZXJIb3Jpem9udGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC1zbGlkZXItaG9yaXpvbnRhbC9zbWFydC1zbGlkZXItaG9yaXpvbnRhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU21hcnRTbGlkZXJWZXJ0aWNhbENvbXBvbmVudCB9IGZyb20gJy4vc21hcnQtc2xpZGVyLXZlcnRpY2FsL3NtYXJ0LXNsaWRlci12ZXJ0aWNhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU21hcnRTbGlkZXJWZXJ0aWNhbFYyQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC1zbGlkZXItdmVydGljYWwtdjIvc21hcnQtc2xpZGVyLXZlcnRpY2FsLXYyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbWFydFNsaWRlckhvcml6b250YWxWMkNvbXBvbmVudCB9IGZyb20gJy4vc21hcnQtc2xpZGVyLWhvcml6b250YWwtdjIvc21hcnQtc2xpZGVyLWhvcml6b250YWwtdjIuY29tcG9uZW50JztcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuICBTbWFydFNsaWRlckNvbXBvbmVudCxcbiAgU21hcnRTbGlkZXJWZXJ0aWNhbFYyQ29tcG9uZW50LFxuICBTbWFydFNsaWRlckhvcml6b250YWxWMkNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmRlY2xhcmF0aW9ucyxcbiAgICBTbWFydFNsaWRlckhvcml6b250YWxDb21wb25lbnQsXG4gICAgU21hcnRTbGlkZXJWZXJ0aWNhbENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5kZWNsYXJhdGlvbnMsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU21hcnRTbGlkZXJNb2R1bGUgeyB9XG4iXX0=