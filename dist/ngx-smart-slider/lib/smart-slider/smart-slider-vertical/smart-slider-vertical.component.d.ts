import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { SmartSliderService } from '../smart-slider.service';
import { SmartSliderItem } from '../../models/smart-slider-item';
import * as ɵngcc0 from '@angular/core';
export declare class SmartSliderVerticalComponent implements OnInit {
    private element;
    _items: SmartSliderItem[];
    set items(value: Array<SmartSliderItem>);
    _showPrevious: boolean;
    set showPrevious(value: boolean);
    _showNext: boolean;
    set showNext(value: boolean);
    _showDots: boolean;
    set showDots(value: boolean);
    _autoplay: boolean;
    set autoplay(value: boolean);
    _loop: boolean;
    set loop(value: boolean);
    _pauseOnHover: boolean;
    set pauseOnHover(value: boolean);
    _itemMargin: string;
    set itemMargin(value: string);
    _itemPadding: string;
    set itemPadding(value: string);
    _textPosition: string;
    set textPosition(value: 'centered-top' | 'centered-bottom' | 'centered' | 'bottom-right ' | 'top-right' | 'top-left' | 'bottom-left');
    _textColor: string;
    set textColor(value: string);
    _cellLimit: number;
    set cellLimit(value: number);
    _width: string;
    containerWidth: string;
    set width(value: string);
    _autoplayInterval: number;
    set autoplayInterval(value: number);
    _transitionDuration: number;
    set transitionDuration(value: number);
    _class: string;
    set class(value: string);
    select: EventEmitter<any>;
    get hostClasses(): string;
    onResize(): void;
    height: string;
    isNext: boolean;
    smartSliderService: SmartSliderService;
    constructor(element: ElementRef);
    get slideInOut(): {
        value: number;
        params: {
            inWidth: string;
            inHeight: string;
            inTiming: number;
        };
    };
    private resize;
    ngOnInit(): void;
    onItemClick(selected: any): void;
    isNextDisabled(): boolean;
    isPreviousDisabled(): boolean;
    show(item: SmartSliderItem): boolean;
    onNext(): void;
    onPrevious(): void;
    isLast(item: any): boolean;
    onTransitionEnd(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SmartSliderVerticalComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SmartSliderVerticalComponent, "smart-slider-vertical", never, { "items": "items"; "showPrevious": "showPrevious"; "showNext": "showNext"; "showDots": "showDots"; "autoplay": "autoplay"; "loop": "loop"; "pauseOnHover": "pauseOnHover"; "itemMargin": "itemMargin"; "itemPadding": "itemPadding"; "textPosition": "textPosition"; "textColor": "textColor"; "cellLimit": "cellLimit"; "width": "width"; "autoplayInterval": "autoplayInterval"; "transitionDuration": "transitionDuration"; "class": "class"; }, { "select": "select"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLXZlcnRpY2FsLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzbWFydC1zbGlkZXItdmVydGljYWwuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTbWFydFNsaWRlclNlcnZpY2UgfSBmcm9tICcuLi9zbWFydC1zbGlkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNtYXJ0U2xpZGVySXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9zbWFydC1zbGlkZXItaXRlbSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNtYXJ0U2xpZGVyVmVydGljYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50O1xyXG4gICAgX2l0ZW1zOiBTbWFydFNsaWRlckl0ZW1bXTtcclxuICAgIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8U21hcnRTbGlkZXJJdGVtPik7XHJcbiAgICBfc2hvd1ByZXZpb3VzOiBib29sZWFuO1xyXG4gICAgc2V0IHNob3dQcmV2aW91cyh2YWx1ZTogYm9vbGVhbik7XHJcbiAgICBfc2hvd05leHQ6IGJvb2xlYW47XHJcbiAgICBzZXQgc2hvd05leHQodmFsdWU6IGJvb2xlYW4pO1xyXG4gICAgX3Nob3dEb3RzOiBib29sZWFuO1xyXG4gICAgc2V0IHNob3dEb3RzKHZhbHVlOiBib29sZWFuKTtcclxuICAgIF9hdXRvcGxheTogYm9vbGVhbjtcclxuICAgIHNldCBhdXRvcGxheSh2YWx1ZTogYm9vbGVhbik7XHJcbiAgICBfbG9vcDogYm9vbGVhbjtcclxuICAgIHNldCBsb29wKHZhbHVlOiBib29sZWFuKTtcclxuICAgIF9wYXVzZU9uSG92ZXI6IGJvb2xlYW47XHJcbiAgICBzZXQgcGF1c2VPbkhvdmVyKHZhbHVlOiBib29sZWFuKTtcclxuICAgIF9pdGVtTWFyZ2luOiBzdHJpbmc7XHJcbiAgICBzZXQgaXRlbU1hcmdpbih2YWx1ZTogc3RyaW5nKTtcclxuICAgIF9pdGVtUGFkZGluZzogc3RyaW5nO1xyXG4gICAgc2V0IGl0ZW1QYWRkaW5nKHZhbHVlOiBzdHJpbmcpO1xyXG4gICAgX3RleHRQb3NpdGlvbjogc3RyaW5nO1xyXG4gICAgc2V0IHRleHRQb3NpdGlvbih2YWx1ZTogJ2NlbnRlcmVkLXRvcCcgfCAnY2VudGVyZWQtYm90dG9tJyB8ICdjZW50ZXJlZCcgfCAnYm90dG9tLXJpZ2h0ICcgfCAndG9wLXJpZ2h0JyB8ICd0b3AtbGVmdCcgfCAnYm90dG9tLWxlZnQnKTtcclxuICAgIF90ZXh0Q29sb3I6IHN0cmluZztcclxuICAgIHNldCB0ZXh0Q29sb3IodmFsdWU6IHN0cmluZyk7XHJcbiAgICBfY2VsbExpbWl0OiBudW1iZXI7XHJcbiAgICBzZXQgY2VsbExpbWl0KHZhbHVlOiBudW1iZXIpO1xyXG4gICAgX3dpZHRoOiBzdHJpbmc7XHJcbiAgICBjb250YWluZXJXaWR0aDogc3RyaW5nO1xyXG4gICAgc2V0IHdpZHRoKHZhbHVlOiBzdHJpbmcpO1xyXG4gICAgX2F1dG9wbGF5SW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIHNldCBhdXRvcGxheUludGVydmFsKHZhbHVlOiBudW1iZXIpO1xyXG4gICAgX3RyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgc2V0IHRyYW5zaXRpb25EdXJhdGlvbih2YWx1ZTogbnVtYmVyKTtcclxuICAgIF9jbGFzczogc3RyaW5nO1xyXG4gICAgc2V0IGNsYXNzKHZhbHVlOiBzdHJpbmcpO1xyXG4gICAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmc7XHJcbiAgICBvblJlc2l6ZSgpOiB2b2lkO1xyXG4gICAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgICBpc05leHQ6IGJvb2xlYW47XHJcbiAgICBzbWFydFNsaWRlclNlcnZpY2U6IFNtYXJ0U2xpZGVyU2VydmljZTtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpO1xyXG4gICAgZ2V0IHNsaWRlSW5PdXQoKToge1xyXG4gICAgICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIGluV2lkdGg6IHN0cmluZztcclxuICAgICAgICAgICAgaW5IZWlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgaW5UaW1pbmc6IG51bWJlcjtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgcmVzaXplO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG9uSXRlbUNsaWNrKHNlbGVjdGVkOiBhbnkpOiB2b2lkO1xyXG4gICAgaXNOZXh0RGlzYWJsZWQoKTogYm9vbGVhbjtcclxuICAgIGlzUHJldmlvdXNEaXNhYmxlZCgpOiBib29sZWFuO1xyXG4gICAgc2hvdyhpdGVtOiBTbWFydFNsaWRlckl0ZW0pOiBib29sZWFuO1xyXG4gICAgb25OZXh0KCk6IHZvaWQ7XHJcbiAgICBvblByZXZpb3VzKCk6IHZvaWQ7XHJcbiAgICBpc0xhc3QoaXRlbTogYW55KTogYm9vbGVhbjtcclxuICAgIG9uVHJhbnNpdGlvbkVuZCgpOiB2b2lkO1xyXG59XHJcbiJdfQ==