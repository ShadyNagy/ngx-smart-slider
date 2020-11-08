import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { SmartSliderItem } from '../../models/smart-slider-item';
import { ISmartSliderOptions, ISmartSliderOptionsInternal } from '../../models/smart-slider-options';
import { SmartSliderService } from '../smart-slider.service';
import * as ɵngcc0 from '@angular/core';
export declare class SmartSliderHorizontalV2Component implements OnInit, AfterViewInit, OnDestroy {
    smartSliderService: SmartSliderService;
    private sanitizer;
    private element;
    privateSmartSliderOptions: ISmartSliderOptionsInternal;
    set smartSliderOptions(value: ISmartSliderOptions);
    privateItems: SmartSliderItem[];
    set items(value: Array<SmartSliderItem>);
    selectItem: EventEmitter<SmartSliderItem>;
    itemsToShow: SmartSliderItem[];
    itemsCountInRow: number;
    id: string;
    dataId: string;
    dataPosition: string;
    itemHoverBackground: string;
    itemHoverBackgroundColor: string;
    constructor(smartSliderService: SmartSliderService, sanitizer: DomSanitizer, element: ElementRef);
    get hostStyles(): SafeStyle;
    onResize(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    get arrowBottomDisabled(): boolean;
    get arrowTopDisabled(): boolean;
    get dataBlockHeight(): "100%" | "90%";
    get arrowsWidth(): number;
    get arrowsPosition(): "none" | "bottom" | "top";
    setItemStyles(isSelected: boolean): {
        background: string;
        'background-color': string;
    } | {
        background?: undefined;
        'background-color'?: undefined;
    };
    updateItemsCountInRow(): void;
    getPrevious(): void;
    getNext(): void;
    onItemClick(selected: SmartSliderItem): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SmartSliderHorizontalV2Component, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SmartSliderHorizontalV2Component, "smart-slider-horizontal-v2", never, { "smartSliderOptions": "options"; "items": "items"; }, { "selectItem": "selectItem"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLWhvcml6b250YWwtdjIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInNtYXJ0LXNsaWRlci1ob3Jpem9udGFsLXYyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBTbWFydFNsaWRlckl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvc21hcnQtc2xpZGVyLWl0ZW0nO1xyXG5pbXBvcnQgeyBJU21hcnRTbGlkZXJPcHRpb25zLCBJU21hcnRTbGlkZXJPcHRpb25zSW50ZXJuYWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc21hcnQtc2xpZGVyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBTbWFydFNsaWRlclNlcnZpY2UgfSBmcm9tICcuLi9zbWFydC1zbGlkZXIuc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNtYXJ0U2xpZGVySG9yaXpvbnRhbFYyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgc21hcnRTbGlkZXJTZXJ2aWNlOiBTbWFydFNsaWRlclNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHNhbml0aXplcjtcclxuICAgIHByaXZhdGUgZWxlbWVudDtcclxuICAgIHByaXZhdGVTbWFydFNsaWRlck9wdGlvbnM6IElTbWFydFNsaWRlck9wdGlvbnNJbnRlcm5hbDtcclxuICAgIHNldCBzbWFydFNsaWRlck9wdGlvbnModmFsdWU6IElTbWFydFNsaWRlck9wdGlvbnMpO1xyXG4gICAgcHJpdmF0ZUl0ZW1zOiBTbWFydFNsaWRlckl0ZW1bXTtcclxuICAgIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8U21hcnRTbGlkZXJJdGVtPik7XHJcbiAgICBzZWxlY3RJdGVtOiBFdmVudEVtaXR0ZXI8U21hcnRTbGlkZXJJdGVtPjtcclxuICAgIGl0ZW1zVG9TaG93OiBTbWFydFNsaWRlckl0ZW1bXTtcclxuICAgIGl0ZW1zQ291bnRJblJvdzogbnVtYmVyO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGRhdGFJZDogc3RyaW5nO1xyXG4gICAgZGF0YVBvc2l0aW9uOiBzdHJpbmc7XHJcbiAgICBpdGVtSG92ZXJCYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgICBpdGVtSG92ZXJCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHNtYXJ0U2xpZGVyU2VydmljZTogU21hcnRTbGlkZXJTZXJ2aWNlLCBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgZWxlbWVudDogRWxlbWVudFJlZik7XHJcbiAgICBnZXQgaG9zdFN0eWxlcygpOiBTYWZlU3R5bGU7XHJcbiAgICBvblJlc2l6ZSgpOiB2b2lkO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIGdldCBhcnJvd0JvdHRvbURpc2FibGVkKCk6IGJvb2xlYW47XHJcbiAgICBnZXQgYXJyb3dUb3BEaXNhYmxlZCgpOiBib29sZWFuO1xyXG4gICAgZ2V0IGRhdGFCbG9ja0hlaWdodCgpOiBcIjEwMCVcIiB8IFwiOTAlXCI7XHJcbiAgICBnZXQgYXJyb3dzV2lkdGgoKTogbnVtYmVyO1xyXG4gICAgZ2V0IGFycm93c1Bvc2l0aW9uKCk6IFwibm9uZVwiIHwgXCJib3R0b21cIiB8IFwidG9wXCI7XHJcbiAgICBzZXRJdGVtU3R5bGVzKGlzU2VsZWN0ZWQ6IGJvb2xlYW4pOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogc3RyaW5nO1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogc3RyaW5nO1xyXG4gICAgfSB8IHtcclxuICAgICAgICBiYWNrZ3JvdW5kPzogdW5kZWZpbmVkO1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJz86IHVuZGVmaW5lZDtcclxuICAgIH07XHJcbiAgICB1cGRhdGVJdGVtc0NvdW50SW5Sb3coKTogdm9pZDtcclxuICAgIGdldFByZXZpb3VzKCk6IHZvaWQ7XHJcbiAgICBnZXROZXh0KCk6IHZvaWQ7XHJcbiAgICBvbkl0ZW1DbGljayhzZWxlY3RlZDogU21hcnRTbGlkZXJJdGVtKTogdm9pZDtcclxufVxyXG4iXX0=