import { __decorate } from "tslib";
import { AfterViewInit, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { SmartSliderService } from '../smart-slider.service';
let SmartSliderHorizontalV2Component = class SmartSliderHorizontalV2Component {
    constructor(smartSliderService, sanitizer, element) {
        this.smartSliderService = smartSliderService;
        this.sanitizer = sanitizer;
        this.element = element;
        this.privateSmartSliderOptions = {
            textOptions: {
                textPosition: 'centered',
                textColor: 'black',
                textFontSize: 14,
            },
            itemOptions: {
                itemPadding: 0,
                itemWidth: '100%'
            },
            arrows: {
                position: 'bottom',
                size: 50,
            },
            height: '100%',
            width: '100%',
            padding: 0,
            overflow: 'hidden',
            selectedColor: 'gray',
            hoverColor: 'gray'
        };
        this.privateItems = new Array();
        this.selectItem = new EventEmitter();
        this.itemsToShow = new Array();
        this.itemsCountInRow = 0;
        this.id = '';
        this.dataId = '';
        this.dataPosition = 'none';
        this.itemHoverBackground = '';
        this.itemHoverBackgroundColor = '';
    }
    set smartSliderOptions(value) {
        if (!value) {
            return;
        }
        if (value.textOptions) {
            if (value.textOptions.textPosition) {
                this.privateSmartSliderOptions.textOptions.textPosition = value.textOptions.textPosition;
            }
            if (value.textOptions.textColor) {
                this.privateSmartSliderOptions.textOptions.textColor = value.textOptions.textColor;
            }
            if (value.textOptions.textFontSize) {
                this.privateSmartSliderOptions.textOptions.textFontSize = value.textOptions.textFontSize;
            }
        }
        if (value.itemOptions) {
            if (value.itemOptions.itemPadding) {
                this.privateSmartSliderOptions.itemOptions.itemPadding = value.itemOptions.itemPadding;
            }
            if (value.itemOptions.itemWidth) {
                this.privateSmartSliderOptions.itemOptions.itemWidth = value.itemOptions.itemWidth + 'px';
            }
        }
        if (value.arrows) {
            if (value.arrows.position) {
                this.privateSmartSliderOptions.arrows.position = value.arrows.position;
            }
            if (value.arrows.size) {
                this.privateSmartSliderOptions.arrows.size = value.arrows.size;
            }
        }
        if (value.height) {
            this.privateSmartSliderOptions.height = value.height + 'px';
        }
        if (value.width) {
            this.privateSmartSliderOptions.width = value.width + 'px';
        }
        if (value.padding) {
            this.privateSmartSliderOptions.padding = value.padding;
        }
        if (value.overflow) {
            this.privateSmartSliderOptions.overflow = value.overflow;
        }
        if (value.selectedColor) {
            this.privateSmartSliderOptions.selectedColor = value.selectedColor;
        }
        if (value.hoverColor) {
            this.privateSmartSliderOptions.hoverColor = value.hoverColor;
        }
        this.privateSmartSliderOptions.mapper = value.mapper;
    }
    set items(value) {
        this.privateItems = value;
        this.itemsToShow = [...this.privateItems];
        this.updateItemsCountInRow();
    }
    get hostStyles() {
        return this.sanitizer.bypassSecurityTrustStyle([
            `height: ${this.privateSmartSliderOptions.height}`,
            `width: ${this.privateSmartSliderOptions.width}`,
            `padding: ${this.privateSmartSliderOptions.padding}px`,
            `overflow: ${this.privateSmartSliderOptions.overflow}`,
            `display: block`,
            `position: relative`
        ].join(';'));
    }
    onResize() {
        this.updateItemsCountInRow();
    }
    ngOnInit() {
        this.id = SmartSliderService.randomHexWord();
        this.dataId = `div-data-${this.id}`;
        this.itemsToShow = [...this.privateItems];
    }
    ngAfterViewInit() {
        this.updateItemsCountInRow();
    }
    ngOnDestroy() {
    }
    get arrowBottomDisabled() {
        return this.itemsToShow.length <= this.itemsCountInRow;
    }
    get arrowTopDisabled() {
        return this.itemsToShow.length === this.privateItems.length;
    }
    get dataBlockHeight() {
        if (this.privateSmartSliderOptions.arrows.position === 'center') {
            return '100%';
        }
        return '90%';
    }
    get arrowsWidth() {
        return this.privateSmartSliderOptions.arrows.size * 2;
    }
    get arrowsPosition() {
        if (this.privateSmartSliderOptions.arrows.position === 'top') {
            this.dataPosition = 'bottom';
            return 'top';
        }
        if (this.privateSmartSliderOptions.arrows.position === 'bottom') {
            this.dataPosition = 'top';
            return 'bottom';
        }
        return 'none';
    }
    setItemStyles(isSelected) {
        if (isSelected) {
            return {
                background: `linear-gradient(${this.privateSmartSliderOptions.hoverColor}, ${this.privateSmartSliderOptions.hoverColor})`,
                'background-color': `${this.privateSmartSliderOptions.hoverColor} !important`
            };
        }
        return {};
    }
    updateItemsCountInRow() {
        if (this.privateSmartSliderOptions.itemOptions.itemWidth === '100%' || this.privateItems.length <= 0) {
            return;
        }
        const itemWidth = parseInt(this.privateSmartSliderOptions.itemOptions.itemWidth, 10) +
            (this.privateSmartSliderOptions.itemOptions.itemPadding * 2);
        const dataWidth = SmartSliderService.getNodeWidthByIdInsideElementRef(this.element, this.dataId);
        this.itemsCountInRow = parseInt((dataWidth / itemWidth).toString(), 10);
        if (this.itemsCountInRow === 0) {
            this.itemsCountInRow = 1;
        }
    }
    getPrevious() {
        if (this.itemsToShow.length === this.privateItems.length) {
            return;
        }
        this.itemsToShow = this.privateItems.slice(this.privateItems.length - this.itemsToShow.length - this.itemsCountInRow);
    }
    getNext() {
        if (this.itemsToShow.length <= this.itemsCountInRow) {
            return;
        }
        this.itemsToShow = this.itemsToShow.slice(this.itemsCountInRow);
    }
    onItemClick(selected) {
        if (this.itemsToShow) {
            this.itemsToShow.forEach(x => x.isSelected = false);
        }
        if (this.items) {
            this.items.forEach(x => x.isSelected = false);
        }
        selected.isSelected = true;
        this.selectItem.emit(selected);
    }
};
SmartSliderHorizontalV2Component.ctorParameters = () => [
    { type: SmartSliderService },
    { type: DomSanitizer },
    { type: ElementRef }
];
__decorate([
    Input('options')
], SmartSliderHorizontalV2Component.prototype, "smartSliderOptions", null);
__decorate([
    Input('items')
], SmartSliderHorizontalV2Component.prototype, "items", null);
__decorate([
    Output()
], SmartSliderHorizontalV2Component.prototype, "selectItem", void 0);
__decorate([
    HostBinding('style')
], SmartSliderHorizontalV2Component.prototype, "hostStyles", null);
__decorate([
    HostListener('window:resize')
], SmartSliderHorizontalV2Component.prototype, "onResize", null);
SmartSliderHorizontalV2Component = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: 'smart-slider-horizontal-v2',
        template: "<i\r\n  *ngIf=\"privateSmartSliderOptions.arrows.position === 'center'\"\r\n  style=\"\r\n    height: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    float: left;\r\n  \"\r\n  [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n  class=\"icon-a pointer\"\r\n  [ngClass]=\"{ 'arrow-disabled': arrowTopDisabled }\"\r\n  (click)=\"getPrevious()\"\r\n>\r\n  <svg\r\n    viewBox=\"0 0 1024 1024\"\r\n    focusable=\"false\"\r\n    fill=\"currentColor\"\r\n    width=\"1em\"\r\n    height=\"1em\"\r\n    data-icon=\"caret-left\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <path\r\n      d=\"M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z\"\r\n    ></path>\r\n  </svg>\r\n</i>\r\n<div\r\n  id=\"{{ dataId }}\"\r\n  style=\"overflow: hidden\"\r\n  [style.width]=\"\r\n    dataPosition === 'none' ? 'calc(100% - ' + arrowsWidth + 'px)' : '100%'\r\n  \"\r\n  [style.float]=\"dataPosition\"\r\n  [style.height]=\"dataBlockHeight\"\r\n>\r\n  <!-- <img *ngFor=\"let item of itemsToShow\" class=\"item-in-data\" [src]=\"item.image\" [style.padding.px]=\"_itemPadding\" [style.width]=\"_itemWidth\" /> -->\r\n\r\n  <div\r\n    *ngFor=\"let item of itemsToShow; let i = index\"\r\n    class=\"item-in-data\"\r\n    [ngStyle]=\"setItemStyles(item.isSelected)\"\r\n    [style.padding.px]=\"privateSmartSliderOptions.itemOptions.itemPadding\"\r\n    [style.width]=\"privateSmartSliderOptions.itemOptions.itemWidth\"\r\n    (click)=\"onItemClick(item)\"\r\n  >\r\n    <img [src]=\"smartSliderService.getImage(item, privateSmartSliderOptions)\" [style.width]=\"'100%'\" />\r\n    <span\r\n      *ngIf=\"smartSliderService.getText(item, privateSmartSliderOptions)\"\r\n      class=\"{{ privateSmartSliderOptions.textOptions.textPosition }}\"\r\n      [style.color]=\"privateSmartSliderOptions.textOptions.textColor\"\r\n      [style.font-size.px]=\"privateSmartSliderOptions.textOptions.textFontSize\"\r\n      >{{ smartSliderService.getText(item, privateSmartSliderOptions) }}</span\r\n    >\r\n  </div>\r\n</div>\r\n<i\r\n  *ngIf=\"privateSmartSliderOptions.arrows.position === 'center'\"\r\n  style=\"position: absolute; top: 50%; transform: translateY(-50%); right: 0px\"\r\n  [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n  class=\"icon-a pointer\"\r\n  [ngClass]=\"{ 'arrow-disabled': arrowBottomDisabled }\"\r\n  (click)=\"getNext()\"\r\n>\r\n  <svg\r\n    viewBox=\"0 0 1024 1024\"\r\n    focusable=\"false\"\r\n    fill=\"currentColor\"\r\n    width=\"1em\"\r\n    height=\"1em\"\r\n    data-icon=\"caret-right\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <path\r\n      d=\"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z\"\r\n    ></path>\r\n  </svg>\r\n</i>\r\n\r\n<div\r\n  *ngIf=\"\r\n    privateSmartSliderOptions.arrows.position === 'top' ||\r\n    privateSmartSliderOptions.arrows.position === 'bottom'\r\n  \"\r\n  [style.float]=\"arrowsPosition\"\r\n  style=\"height: 10%; width: 100%; position: relative\"\r\n>\r\n  <i\r\n    class=\"icon-a arrow arrow-left\"\r\n    [ngClass]=\"{ 'arrow-disabled': arrowTopDisabled }\"\r\n    [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n    (click)=\"getPrevious()\"\r\n  >\r\n    <svg\r\n      viewBox=\"0 0 1024 1024\"\r\n      focusable=\"false\"\r\n      fill=\"currentColor\"\r\n      width=\"1em\"\r\n      height=\"1em\"\r\n      data-icon=\"caret-left\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <path\r\n        d=\"M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z\"\r\n      ></path>\r\n    </svg>\r\n  </i>\r\n  <i\r\n    class=\"icon-a arrow arrow-right\"\r\n    [ngClass]=\"{ 'arrow-disabled': arrowBottomDisabled }\"\r\n    [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n    (click)=\"getNext()\"\r\n  >\r\n    <svg\r\n      viewBox=\"0 0 1024 1024\"\r\n      focusable=\"false\"\r\n      fill=\"currentColor\"\r\n      width=\"1em\"\r\n      height=\"1em\"\r\n      data-icon=\"caret-right\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <path\r\n        d=\"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z\"\r\n      ></path>\r\n    </svg>\r\n  </i>\r\n</div>\r\n",
        styles: [".icon-a{color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em}.icon-a,.icon-a svg{display:inline-block}.arrow{position:absolute;cursor:pointer}.pointer{cursor:pointer}.arrow-disabled{cursor:not-allowed!important;color:#bbb!important}.arrow-top{top:0}.arrow-bottom{bottom:0}.arrow-left{left:0}.arrow-right{right:0}.item-in-data{float:left;display:block;position:relative;text-align:center;color:#000;cursor:pointer}.bottom-left{position:absolute;bottom:8px;left:16px}.top-left{position:absolute;top:8px;left:16px}.top-right{position:absolute;top:8px;right:16px}.bottom-right{position:absolute;bottom:8px;right:16px}.centered{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}"]
    })
], SmartSliderHorizontalV2Component);
export { SmartSliderHorizontalV2Component };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLWhvcml6b250YWwtdjIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNtYXJ0LXNsaWRlci8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1zbGlkZXIvc21hcnQtc2xpZGVyLWhvcml6b250YWwtdjIvc21hcnQtc2xpZGVyLWhvcml6b250YWwtdjIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFRN0QsSUFBYSxnQ0FBZ0MsR0FBN0MsTUFBYSxnQ0FBZ0M7SUE2RzNDLFlBQ1Msa0JBQXNDLEVBQ3JDLFNBQXVCLEVBQ3ZCLE9BQW1CO1FBRnBCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDckMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBN0c3Qiw4QkFBeUIsR0FBZ0M7WUFDdkQsV0FBVyxFQUFFO2dCQUNYLFlBQVksRUFBRSxVQUFVO2dCQUN4QixTQUFTLEVBQUUsT0FBTztnQkFDbEIsWUFBWSxFQUFFLEVBQUU7YUFDakI7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsU0FBUyxFQUFFLE1BQU07YUFDbEI7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLElBQUksRUFBRSxFQUFFO2FBQ1Q7WUFDRCxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxNQUFNO1lB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QztnRUFHN0I7QUFsSVUsZ0NBQWdDO0lBTjVDLFNBQVMsQ0FBQztRQUNULCtDQUErQztRQUMvQyxRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLGsySUFBMEQ7O0tBRTNELENBQUM7R0FDVyxnQ0FBZ0MsQ0F1TzVDO1NBdk9ZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFNtYXJ0U2xpZGVySXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9zbWFydC1zbGlkZXItaXRlbSc7XHJcbmltcG9ydCB7IElTbWFydFNsaWRlck9wdGlvbnMsIElTbWFydFNsaWRlck9wdGlvbnNJbnRlcm5hbCB9IGZyb20gJy4uLy4uL21vZGVscy9zbWFydC1zbGlkZXItb3B0aW9ucyc7XHJcbmltcG9ydCB7IFNtYXJ0U2xpZGVyU2VydmljZSB9IGZyb20gJy4uL3NtYXJ0LXNsaWRlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzbWFydC1zbGlkZXItaG9yaXpvbnRhbC12MicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LXNsaWRlci1ob3Jpem9udGFsLXYyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zbWFydC1zbGlkZXItaG9yaXpvbnRhbC12Mi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbWFydFNsaWRlckhvcml6b250YWxWMkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCAsIE9uRGVzdHJveSB7XHJcblxyXG5cclxuICBwcml2YXRlU21hcnRTbGlkZXJPcHRpb25zOiBJU21hcnRTbGlkZXJPcHRpb25zSW50ZXJuYWwgPSB7XHJcbiAgICB0ZXh0T3B0aW9uczoge1xyXG4gICAgICB0ZXh0UG9zaXRpb246ICdjZW50ZXJlZCcsXHJcbiAgICAgIHRleHRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgdGV4dEZvbnRTaXplOiAxNCxcclxuICAgIH0sXHJcbiAgICBpdGVtT3B0aW9uczoge1xyXG4gICAgICBpdGVtUGFkZGluZzogMCxcclxuICAgICAgaXRlbVdpZHRoOiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBhcnJvd3M6IHtcclxuICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICBzaXplOiA1MCxcclxuICAgIH0sXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgc2VsZWN0ZWRDb2xvcjogJ2dyYXknLFxyXG4gICAgaG92ZXJDb2xvcjogJ2dyYXknXHJcbiAgfTtcclxuICBASW5wdXQoJ29wdGlvbnMnKVxyXG4gIHNldCBzbWFydFNsaWRlck9wdGlvbnModmFsdWU6IElTbWFydFNsaWRlck9wdGlvbnMpIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS50ZXh0T3B0aW9ucykge1xyXG4gICAgICBpZiAodmFsdWUudGV4dE9wdGlvbnMudGV4dFBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLnRleHRPcHRpb25zLnRleHRQb3NpdGlvbiA9IHZhbHVlLnRleHRPcHRpb25zLnRleHRQb3NpdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZhbHVlLnRleHRPcHRpb25zLnRleHRDb2xvcikge1xyXG4gICAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy50ZXh0T3B0aW9ucy50ZXh0Q29sb3IgPSB2YWx1ZS50ZXh0T3B0aW9ucy50ZXh0Q29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh2YWx1ZS50ZXh0T3B0aW9ucy50ZXh0Rm9udFNpemUpIHtcclxuICAgICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMudGV4dE9wdGlvbnMudGV4dEZvbnRTaXplID0gdmFsdWUudGV4dE9wdGlvbnMudGV4dEZvbnRTaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLml0ZW1PcHRpb25zKSB7XHJcbiAgICAgIGlmICh2YWx1ZS5pdGVtT3B0aW9ucy5pdGVtUGFkZGluZykge1xyXG4gICAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5pdGVtT3B0aW9ucy5pdGVtUGFkZGluZyA9IHZhbHVlLml0ZW1PcHRpb25zLml0ZW1QYWRkaW5nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodmFsdWUuaXRlbU9wdGlvbnMuaXRlbVdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLml0ZW1PcHRpb25zLml0ZW1XaWR0aCA9IHZhbHVlLml0ZW1PcHRpb25zLml0ZW1XaWR0aCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUuYXJyb3dzKSB7XHJcbiAgICAgIGlmICh2YWx1ZS5hcnJvd3MucG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuYXJyb3dzLnBvc2l0aW9uID0gdmFsdWUuYXJyb3dzLnBvc2l0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWx1ZS5hcnJvd3Muc2l6ZSkge1xyXG4gICAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5hcnJvd3Muc2l6ZSA9IHZhbHVlLmFycm93cy5zaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLmhlaWdodCkge1xyXG4gICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaGVpZ2h0ID0gdmFsdWUuaGVpZ2h0ICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUud2lkdGgpIHtcclxuICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLndpZHRoID0gdmFsdWUud2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5wYWRkaW5nKSB7XHJcbiAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5wYWRkaW5nID0gdmFsdWUucGFkZGluZztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUub3ZlcmZsb3cpIHtcclxuICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLm92ZXJmbG93ID0gdmFsdWUub3ZlcmZsb3c7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLnNlbGVjdGVkQ29sb3IpIHtcclxuICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLnNlbGVjdGVkQ29sb3IgPSB2YWx1ZS5zZWxlY3RlZENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5ob3ZlckNvbG9yKSB7XHJcbiAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5ob3ZlckNvbG9yID0gdmFsdWUuaG92ZXJDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMubWFwcGVyID0gdmFsdWUubWFwcGVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZUl0ZW1zID0gbmV3IEFycmF5PFNtYXJ0U2xpZGVySXRlbT4oKTtcclxuICBASW5wdXQoJ2l0ZW1zJylcclxuICBzZXQgaXRlbXModmFsdWU6IEFycmF5PFNtYXJ0U2xpZGVySXRlbT4pIHtcclxuICAgIHRoaXMucHJpdmF0ZUl0ZW1zID0gdmFsdWU7XHJcbiAgICB0aGlzLml0ZW1zVG9TaG93ID0gWy4uLnRoaXMucHJpdmF0ZUl0ZW1zXTtcclxuICAgIHRoaXMudXBkYXRlSXRlbXNDb3VudEluUm93KCk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICBzZWxlY3RJdGVtOiBFdmVudEVtaXR0ZXI8U21hcnRTbGlkZXJJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8U21hcnRTbGlkZXJJdGVtPigpO1xyXG5cclxuICBpdGVtc1RvU2hvdyA9IG5ldyBBcnJheTxTbWFydFNsaWRlckl0ZW0+KCk7XHJcbiAgaXRlbXNDb3VudEluUm93ID0gMDtcclxuICBpZCA9ICcnO1xyXG4gIGRhdGFJZCA9ICcnO1xyXG4gIGRhdGFQb3NpdGlvbiA9ICdub25lJztcclxuICBpdGVtSG92ZXJCYWNrZ3JvdW5kID0gJyc7XHJcbiAgaXRlbUhvdmVyQmFja2dyb3VuZENvbG9yID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHNtYXJ0U2xpZGVyU2VydmljZTogU21hcnRTbGlkZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZScpXHJcbiAgZ2V0IGhvc3RTdHlsZXMoKTogU2FmZVN0eWxlIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoIFtcclxuICAgICAgYGhlaWdodDogJHt0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaGVpZ2h0fWAsXHJcbiAgICAgIGB3aWR0aDogJHt0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMud2lkdGh9YCxcclxuICAgICAgYHBhZGRpbmc6ICR7dGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLnBhZGRpbmd9cHhgLFxyXG4gICAgICBgb3ZlcmZsb3c6ICR7dGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLm92ZXJmbG93fWAsXHJcbiAgICAgIGBkaXNwbGF5OiBibG9ja2AsXHJcbiAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmVgXHJcbiAgICBdLmpvaW4oJzsnKSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcclxuICBvblJlc2l6ZSgpIHtcclxuICAgIHRoaXMudXBkYXRlSXRlbXNDb3VudEluUm93KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaWQgPSBTbWFydFNsaWRlclNlcnZpY2UucmFuZG9tSGV4V29yZCgpO1xyXG4gICAgdGhpcy5kYXRhSWQgPSBgZGl2LWRhdGEtJHt0aGlzLmlkfWA7XHJcbiAgICB0aGlzLml0ZW1zVG9TaG93ID0gWy4uLnRoaXMucHJpdmF0ZUl0ZW1zXTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlSXRlbXNDb3VudEluUm93KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGdldCBhcnJvd0JvdHRvbURpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXNUb1Nob3cubGVuZ3RoIDw9IHRoaXMuaXRlbXNDb3VudEluUm93O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFycm93VG9wRGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtc1RvU2hvdy5sZW5ndGggPT09IHRoaXMucHJpdmF0ZUl0ZW1zLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGdldCBkYXRhQmxvY2tIZWlnaHQoKSB7XHJcbiAgICBpZiAodGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmFycm93cy5wb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcclxuICAgICAgcmV0dXJuJzEwMCUnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnOTAlJztcclxuICB9XHJcblxyXG4gIGdldCBhcnJvd3NXaWR0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuYXJyb3dzLnNpemUgKiAyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFycm93c1Bvc2l0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5hcnJvd3MucG9zaXRpb24gPT09ICd0b3AnKSB7XHJcbiAgICAgIHRoaXMuZGF0YVBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcblxyXG4gICAgICByZXR1cm4gJ3RvcCc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmFycm93cy5wb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgdGhpcy5kYXRhUG9zaXRpb24gPSAndG9wJztcclxuXHJcbiAgICAgIHJldHVybiAnYm90dG9tJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgc2V0SXRlbVN0eWxlcyhpc1NlbGVjdGVkOiBib29sZWFuKSB7XHJcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoJHt0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaG92ZXJDb2xvcn0sICR7dGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmhvdmVyQ29sb3J9KWAsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBgJHt0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaG92ZXJDb2xvcn0gIWltcG9ydGFudGBcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUl0ZW1zQ291bnRJblJvdygpIHtcclxuICAgIGlmICh0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaXRlbU9wdGlvbnMuaXRlbVdpZHRoID09PSAnMTAwJScgfHwgdGhpcy5wcml2YXRlSXRlbXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGl0ZW1XaWR0aCA9IHBhcnNlSW50KHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5pdGVtT3B0aW9ucy5pdGVtV2lkdGgsIDEwKSArXHJcbiAgICAgICh0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaXRlbU9wdGlvbnMuaXRlbVBhZGRpbmcgKiAyKTtcclxuICAgIGNvbnN0IGRhdGFXaWR0aCA9IFNtYXJ0U2xpZGVyU2VydmljZS5nZXROb2RlV2lkdGhCeUlkSW5zaWRlRWxlbWVudFJlZih0aGlzLmVsZW1lbnQsIHRoaXMuZGF0YUlkKTtcclxuXHJcbiAgICB0aGlzLml0ZW1zQ291bnRJblJvdyA9IHBhcnNlSW50KChkYXRhV2lkdGggLyBpdGVtV2lkdGgpLnRvU3RyaW5nKCksIDEwKTtcclxuXHJcbiAgICBpZiAodGhpcy5pdGVtc0NvdW50SW5Sb3cgPT09IDApIHtcclxuICAgICAgdGhpcy5pdGVtc0NvdW50SW5Sb3cgPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXMoKSB7XHJcbiAgICBpZiAodGhpcy5pdGVtc1RvU2hvdy5sZW5ndGggPT09IHRoaXMucHJpdmF0ZUl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLml0ZW1zVG9TaG93ID0gdGhpcy5wcml2YXRlSXRlbXMuc2xpY2UodGhpcy5wcml2YXRlSXRlbXMubGVuZ3RoIC0gdGhpcy5pdGVtc1RvU2hvdy5sZW5ndGggLSB0aGlzLml0ZW1zQ291bnRJblJvdyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXh0KCkge1xyXG4gICAgaWYgKHRoaXMuaXRlbXNUb1Nob3cubGVuZ3RoIDw9IHRoaXMuaXRlbXNDb3VudEluUm93KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbXNUb1Nob3cgPSB0aGlzLml0ZW1zVG9TaG93LnNsaWNlKHRoaXMuaXRlbXNDb3VudEluUm93KTtcclxuICB9XHJcblxyXG4gIG9uSXRlbUNsaWNrKHNlbGVjdGVkOiBTbWFydFNsaWRlckl0ZW0pIHtcclxuICAgIGlmICh0aGlzLml0ZW1zVG9TaG93KSB7XHJcbiAgICAgIHRoaXMuaXRlbXNUb1Nob3cuZm9yRWFjaCh4ID0+IHguaXNTZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pdGVtcykge1xyXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goeCA9PiB4LmlzU2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RlZC5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VsZWN0SXRlbS5lbWl0KHNlbGVjdGVkKTtcclxuICB9XHJcbn1cclxuIl19