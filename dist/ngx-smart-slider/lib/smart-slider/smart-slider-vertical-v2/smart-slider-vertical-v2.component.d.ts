import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { SmartSliderItem } from '../../models/smart-slider-item';
import { ISmartSliderOptions, ISmartSliderOptionsInternal } from '../../models/smart-slider-options';
import { SmartSliderService } from '../smart-slider.service';
import * as ɵngcc0 from '@angular/core';
export declare class SmartSliderVerticalV2Component implements OnInit, AfterViewInit, OnDestroy {
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
    constructor(smartSliderService: SmartSliderService, sanitizer: DomSanitizer, element: ElementRef);
    get hostStyles(): SafeStyle;
    onResize(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    get arrowBottomDisabled(): boolean;
    get arrowTopDisabled(): boolean;
    get dataBlockWidth(): "100%" | "90%";
    get arrowsHeight(): number;
    get arrowsPosition(): "left" | "right" | "none";
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SmartSliderVerticalV2Component, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SmartSliderVerticalV2Component, "smart-slider-vertical-v2", never, { "smartSliderOptions": "options"; "items": "items"; }, { "selectItem": "selectItem"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLXZlcnRpY2FsLXYyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzbWFydC1zbGlkZXItdmVydGljYWwtdjIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgU21hcnRTbGlkZXJJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NtYXJ0LXNsaWRlci1pdGVtJztcclxuaW1wb3J0IHsgSVNtYXJ0U2xpZGVyT3B0aW9ucywgSVNtYXJ0U2xpZGVyT3B0aW9uc0ludGVybmFsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NtYXJ0LXNsaWRlci1vcHRpb25zJztcclxuaW1wb3J0IHsgU21hcnRTbGlkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc21hcnQtc2xpZGVyLnNlcnZpY2UnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTbWFydFNsaWRlclZlcnRpY2FsVjJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgICBzbWFydFNsaWRlclNlcnZpY2U6IFNtYXJ0U2xpZGVyU2VydmljZTtcclxuICAgIHByaXZhdGUgc2FuaXRpemVyO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50O1xyXG4gICAgcHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9uczogSVNtYXJ0U2xpZGVyT3B0aW9uc0ludGVybmFsO1xyXG4gICAgc2V0IHNtYXJ0U2xpZGVyT3B0aW9ucyh2YWx1ZTogSVNtYXJ0U2xpZGVyT3B0aW9ucyk7XHJcbiAgICBwcml2YXRlSXRlbXM6IFNtYXJ0U2xpZGVySXRlbVtdO1xyXG4gICAgc2V0IGl0ZW1zKHZhbHVlOiBBcnJheTxTbWFydFNsaWRlckl0ZW0+KTtcclxuICAgIHNlbGVjdEl0ZW06IEV2ZW50RW1pdHRlcjxTbWFydFNsaWRlckl0ZW0+O1xyXG4gICAgaXRlbXNUb1Nob3c6IFNtYXJ0U2xpZGVySXRlbVtdO1xyXG4gICAgaXRlbXNDb3VudEluUm93OiBudW1iZXI7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZGF0YUlkOiBzdHJpbmc7XHJcbiAgICBkYXRhUG9zaXRpb246IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHNtYXJ0U2xpZGVyU2VydmljZTogU21hcnRTbGlkZXJTZXJ2aWNlLCBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgZWxlbWVudDogRWxlbWVudFJlZik7XHJcbiAgICBnZXQgaG9zdFN0eWxlcygpOiBTYWZlU3R5bGU7XHJcbiAgICBvblJlc2l6ZSgpOiB2b2lkO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIGdldCBhcnJvd0JvdHRvbURpc2FibGVkKCk6IGJvb2xlYW47XHJcbiAgICBnZXQgYXJyb3dUb3BEaXNhYmxlZCgpOiBib29sZWFuO1xyXG4gICAgZ2V0IGRhdGFCbG9ja1dpZHRoKCk6IFwiMTAwJVwiIHwgXCI5MCVcIjtcclxuICAgIGdldCBhcnJvd3NIZWlnaHQoKTogbnVtYmVyO1xyXG4gICAgZ2V0IGFycm93c1Bvc2l0aW9uKCk6IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJub25lXCI7XHJcbiAgICBzZXRJdGVtU3R5bGVzKGlzU2VsZWN0ZWQ6IGJvb2xlYW4pOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogc3RyaW5nO1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogc3RyaW5nO1xyXG4gICAgfSB8IHtcclxuICAgICAgICBiYWNrZ3JvdW5kPzogdW5kZWZpbmVkO1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJz86IHVuZGVmaW5lZDtcclxuICAgIH07XHJcbiAgICB1cGRhdGVJdGVtc0NvdW50SW5Sb3coKTogdm9pZDtcclxuICAgIGdldFByZXZpb3VzKCk6IHZvaWQ7XHJcbiAgICBnZXROZXh0KCk6IHZvaWQ7XHJcbiAgICBvbkl0ZW1DbGljayhzZWxlY3RlZDogU21hcnRTbGlkZXJJdGVtKTogdm9pZDtcclxufVxyXG4iXX0=