import { __decorate } from "tslib";
import { AfterViewInit, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { SmartSliderService } from '../smart-slider.service';
let SmartSliderVerticalV2Component = class SmartSliderVerticalV2Component {
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
                position: 'right',
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
    get dataBlockWidth() {
        if (this.privateSmartSliderOptions.arrows.position === 'center') {
            return '100%';
        }
        return '90%';
    }
    get arrowsHeight() {
        return this.privateSmartSliderOptions.arrows.size * 2;
    }
    get arrowsPosition() {
        if (this.privateSmartSliderOptions.arrows.position === 'left') {
            this.dataPosition = 'right';
            return 'left';
        }
        if (this.privateSmartSliderOptions.arrows.position === 'right') {
            this.dataPosition = 'left';
            return 'right';
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
SmartSliderVerticalV2Component.ctorParameters = () => [
    { type: SmartSliderService },
    { type: DomSanitizer },
    { type: ElementRef }
];
__decorate([
    Input('options')
], SmartSliderVerticalV2Component.prototype, "smartSliderOptions", null);
__decorate([
    Input('items')
], SmartSliderVerticalV2Component.prototype, "items", null);
__decorate([
    Output()
], SmartSliderVerticalV2Component.prototype, "selectItem", void 0);
__decorate([
    HostBinding('style')
], SmartSliderVerticalV2Component.prototype, "hostStyles", null);
__decorate([
    HostListener('window:resize')
], SmartSliderVerticalV2Component.prototype, "onResize", null);
SmartSliderVerticalV2Component = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: 'smart-slider-vertical-v2',
        template: "<i\r\n  *ngIf=\"privateSmartSliderOptions.arrows.position === 'center'\"\r\n  style=\"width: 100%; position: relative\"\r\n  [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n  class=\"icon-a pointer\"\r\n  [ngClass]=\"{ 'arrow-disabled': arrowTopDisabled }\"\r\n  (click)=\"getPrevious()\"\r\n>\r\n  <svg\r\n    viewBox=\"0 0 1024 1024\"\r\n    focusable=\"false\"\r\n    fill=\"currentColor\"\r\n    width=\"1em\"\r\n    height=\"1em\"\r\n    data-icon=\"caret-up\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <path\r\n      d=\"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z\"\r\n    ></path>\r\n  </svg>\r\n</i>\r\n<div\r\n  id=\"{{ dataId }}\"\r\n  style=\"overflow: hidden\"\r\n  [style.height]=\"\r\n    dataPosition === 'none' ? 'calc(100% - ' + arrowsHeight + 'px)' : '100%'\r\n  \"\r\n  [style.float]=\"dataPosition\"\r\n  [style.width]=\"dataBlockWidth\"\r\n>\r\n  <!-- <img *ngFor=\"let item of itemsToShow\" class=\"item-in-data\" [src]=\"item.image\" [style.padding.px]=\"_itemPadding\" [style.width]=\"_itemWidth\" /> -->\r\n\r\n  <div\r\n    *ngFor=\"let item of itemsToShow; let i = index\"\r\n    class=\"item-in-data\"\r\n    [ngStyle]=\"setItemStyles(item.isSelected)\"\r\n    [style.padding.px]=\"privateSmartSliderOptions.itemOptions.itemPadding\"\r\n    [style.width]=\"privateSmartSliderOptions.itemOptions.itemWidth\"\r\n    (click)=\"onItemClick(item)\"\r\n  >\r\n    <img [src]=\"smartSliderService.getImage(item, privateSmartSliderOptions)\" [style.width]=\"'100%'\" />\r\n    <span\r\n      *ngIf=\"smartSliderService.getText(item, privateSmartSliderOptions)\"\r\n      class=\"{{ privateSmartSliderOptions.textOptions.textPosition }}\"\r\n      [style.color]=\"privateSmartSliderOptions.textOptions.textColor\"\r\n      [style.font-size.px]=\"privateSmartSliderOptions.textOptions.textFontSize\"\r\n      >{{ smartSliderService.getText(item, privateSmartSliderOptions) }}</span\r\n    >\r\n  </div>\r\n</div>\r\n<i\r\n  *ngIf=\"privateSmartSliderOptions.arrows.position === 'center'\"\r\n  style=\"width: 100%; position: relative\"\r\n  [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n  class=\"icon-a pointer\"\r\n  [ngClass]=\"{ 'arrow-disabled': arrowBottomDisabled }\"\r\n  (click)=\"getNext()\"\r\n>\r\n  <svg\r\n    viewBox=\"0 0 1024 1024\"\r\n    focusable=\"false\"\r\n    fill=\"currentColor\"\r\n    width=\"1em\"\r\n    height=\"1em\"\r\n    data-icon=\"caret-down\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <path\r\n      d=\"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z\"\r\n    ></path>\r\n  </svg>\r\n</i>\r\n\r\n<div\r\n  *ngIf=\"\r\n    privateSmartSliderOptions.arrows.position === 'right' ||\r\n    privateSmartSliderOptions.arrows.position === 'left'\r\n  \"\r\n  [style.float]=\"arrowsPosition\"\r\n  style=\"height: 100%; width: 10%; position: relative\"\r\n>\r\n  <i\r\n    class=\"icon-a arrow arrow-top\"\r\n    [ngClass]=\"{ 'arrow-disabled': arrowTopDisabled }\"\r\n    [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n    (click)=\"getPrevious()\"\r\n  >\r\n    <svg\r\n      viewBox=\"0 0 1024 1024\"\r\n      focusable=\"false\"\r\n      fill=\"currentColor\"\r\n      width=\"1em\"\r\n      height=\"1em\"\r\n      data-icon=\"caret-up\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <path\r\n        d=\"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z\"\r\n      ></path>\r\n    </svg>\r\n  </i>\r\n  <i\r\n    class=\"icon-a arrow arrow-bottom\"\r\n    [ngClass]=\"{ 'arrow-disabled': arrowBottomDisabled }\"\r\n    [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n    (click)=\"getNext()\"\r\n  >\r\n    <svg\r\n      viewBox=\"0 0 1024 1024\"\r\n      focusable=\"false\"\r\n      fill=\"currentColor\"\r\n      width=\"1em\"\r\n      height=\"1em\"\r\n      data-icon=\"caret-down\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <path\r\n        d=\"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z\"\r\n      ></path>\r\n    </svg>\r\n  </i>\r\n</div>\r\n",
        styles: [".icon-a{color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em}.icon-a,.icon-a svg{display:inline-block}.arrow{position:absolute;cursor:pointer}.pointer{cursor:pointer}.arrow-disabled{cursor:not-allowed!important;color:#bbb!important}.arrow-top{top:0}.arrow-bottom{bottom:0}.item-in-data{float:left;display:block;position:relative;text-align:center;color:#000;cursor:pointer}.bottom-left{position:absolute;bottom:8px;left:16px}.top-left{position:absolute;top:8px;left:16px}.top-right{position:absolute;top:8px;right:16px}.bottom-right{position:absolute;bottom:8px;right:16px}.centered{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}"]
    })
], SmartSliderVerticalV2Component);
export { SmartSliderVerticalV2Component };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLXZlcnRpY2FsLXYyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbWFydC1zbGlkZXIvIiwic291cmNlcyI6WyJsaWIvc21hcnQtc2xpZGVyL3NtYXJ0LXNsaWRlci12ZXJ0aWNhbC12Mi9zbWFydC1zbGlkZXItdmVydGljYWwtdjIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFRN0QsSUFBYSw4QkFBOEIsR0FBM0MsTUFBYSw4QkFBOEI7SUEyR3pDLFlBQ1Msa0JBQXNDLEVBQ3JDLFNBQXVCLEVBQ3ZCLE9BQW1CO1FBRnBCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDckMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBM0c3Qiw4QkFBeUIsR0FBZ0M7WUFDdkQsV0FBVyxFQUFFO2dCQUNYLFlBQVksRUFBRSxVQUFVO2dCQUN4QixTQUFTLEVBQUUsT0FBTztnQkFDbEIsWUFBWSxFQUFFLEVBQUU7YUFDakI7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsU0FBUyxFQUFFLE1BQU07YUFDbEI7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLElBQUksRUFBRSxFQUFFO2FBQ1Q7WUFDRCxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FB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cEMsdXJJQUF3RDs7S0FFekQsQ0FBQztHQUNXLDhCQUE4QixDQW1PMUM7U0FuT1ksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgU21hcnRTbGlkZXJJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NtYXJ0LXNsaWRlci1pdGVtJztcclxuaW1wb3J0IHsgSVNtYXJ0U2xpZGVyT3B0aW9ucywgSVNtYXJ0U2xpZGVyT3B0aW9uc0ludGVybmFsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NtYXJ0LXNsaWRlci1vcHRpb25zJztcclxuaW1wb3J0IHsgU21hcnRTbGlkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc21hcnQtc2xpZGVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3NtYXJ0LXNsaWRlci12ZXJ0aWNhbC12MicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LXNsaWRlci12ZXJ0aWNhbC12Mi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc21hcnQtc2xpZGVyLXZlcnRpY2FsLXYyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNtYXJ0U2xpZGVyVmVydGljYWxWMkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCAsIE9uRGVzdHJveSB7XHJcblxyXG5cclxuICBwcml2YXRlU21hcnRTbGlkZXJPcHRpb25zOiBJU21hcnRTbGlkZXJPcHRpb25zSW50ZXJuYWwgPSB7XHJcbiAgICB0ZXh0T3B0aW9uczoge1xyXG4gICAgICB0ZXh0UG9zaXRpb246ICdjZW50ZXJlZCcsXHJcbiAgICAgIHRleHRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgdGV4dEZvbnRTaXplOiAxNCxcclxuICAgIH0sXHJcbiAgICBpdGVtT3B0aW9uczoge1xyXG4gICAgICBpdGVtUGFkZGluZzogMCxcclxuICAgICAgaXRlbVdpZHRoOiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBhcnJvd3M6IHtcclxuICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgIHNpemU6IDUwLFxyXG4gICAgfSxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBzZWxlY3RlZENvbG9yOiAnZ3JheScsXHJcbiAgICBob3ZlckNvbG9yOiAnZ3JheSdcclxuICB9O1xyXG4gIEBJbnB1dCgnb3B0aW9ucycpXHJcbiAgc2V0IHNtYXJ0U2xpZGVyT3B0aW9ucyh2YWx1ZTogSVNtYXJ0U2xpZGVyT3B0aW9ucykge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLnRleHRPcHRpb25zKSB7XHJcbiAgICAgIGlmICh2YWx1ZS50ZXh0T3B0aW9ucy50ZXh0UG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMudGV4dE9wdGlvbnMudGV4dFBvc2l0aW9uID0gdmFsdWUudGV4dE9wdGlvbnMudGV4dFBvc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodmFsdWUudGV4dE9wdGlvbnMudGV4dENvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLnRleHRPcHRpb25zLnRleHRDb2xvciA9IHZhbHVlLnRleHRPcHRpb25zLnRleHRDb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZhbHVlLnRleHRPcHRpb25zLnRleHRGb250U2l6ZSkge1xyXG4gICAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy50ZXh0T3B0aW9ucy50ZXh0Rm9udFNpemUgPSB2YWx1ZS50ZXh0T3B0aW9ucy50ZXh0Rm9udFNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUuaXRlbU9wdGlvbnMpIHtcclxuICAgICAgaWYgKHZhbHVlLml0ZW1PcHRpb25zLml0ZW1QYWRkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLml0ZW1PcHRpb25zLml0ZW1QYWRkaW5nID0gdmFsdWUuaXRlbU9wdGlvbnMuaXRlbVBhZGRpbmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh2YWx1ZS5pdGVtT3B0aW9ucy5pdGVtV2lkdGgpIHtcclxuICAgICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaXRlbU9wdGlvbnMuaXRlbVdpZHRoID0gdmFsdWUuaXRlbU9wdGlvbnMuaXRlbVdpZHRoICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5hcnJvd3MpIHtcclxuICAgICAgaWYgKHZhbHVlLmFycm93cy5wb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5hcnJvd3MucG9zaXRpb24gPSB2YWx1ZS5hcnJvd3MucG9zaXRpb247XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZhbHVlLmFycm93cy5zaXplKSB7XHJcbiAgICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmFycm93cy5zaXplID0gdmFsdWUuYXJyb3dzLnNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUuaGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5oZWlnaHQgPSB2YWx1ZS5oZWlnaHQgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS53aWR0aCkge1xyXG4gICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMud2lkdGggPSB2YWx1ZS53aWR0aCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLnBhZGRpbmcpIHtcclxuICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLnBhZGRpbmcgPSB2YWx1ZS5wYWRkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5vdmVyZmxvdykge1xyXG4gICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMub3ZlcmZsb3cgPSB2YWx1ZS5vdmVyZmxvdztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUuc2VsZWN0ZWRDb2xvcikge1xyXG4gICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuc2VsZWN0ZWRDb2xvciA9IHZhbHVlLnNlbGVjdGVkQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLmhvdmVyQ29sb3IpIHtcclxuICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmhvdmVyQ29sb3IgPSB2YWx1ZS5ob3ZlckNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5tYXBwZXIgPSB2YWx1ZS5tYXBwZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlSXRlbXMgPSBuZXcgQXJyYXk8U21hcnRTbGlkZXJJdGVtPigpO1xyXG4gIEBJbnB1dCgnaXRlbXMnKVxyXG4gIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8U21hcnRTbGlkZXJJdGVtPikge1xyXG4gICAgdGhpcy5wcml2YXRlSXRlbXMgPSB2YWx1ZTtcclxuICAgIHRoaXMuaXRlbXNUb1Nob3cgPSBbLi4udGhpcy5wcml2YXRlSXRlbXNdO1xyXG4gICAgdGhpcy51cGRhdGVJdGVtc0NvdW50SW5Sb3coKTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHNlbGVjdEl0ZW06IEV2ZW50RW1pdHRlcjxTbWFydFNsaWRlckl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxTbWFydFNsaWRlckl0ZW0+KCk7XHJcblxyXG4gIGl0ZW1zVG9TaG93ID0gbmV3IEFycmF5PFNtYXJ0U2xpZGVySXRlbT4oKTtcclxuICBpdGVtc0NvdW50SW5Sb3cgPSAwO1xyXG4gIGlkID0gJyc7XHJcbiAgZGF0YUlkID0gJyc7XHJcbiAgZGF0YVBvc2l0aW9uID0gJ25vbmUnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBzbWFydFNsaWRlclNlcnZpY2U6IFNtYXJ0U2xpZGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUnKVxyXG4gIGdldCBob3N0U3R5bGVzKCk6IFNhZmVTdHlsZSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCBbXHJcbiAgICAgIGBoZWlnaHQ6ICR7dGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmhlaWdodH1gLFxyXG4gICAgICBgd2lkdGg6ICR7dGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLndpZHRofWAsXHJcbiAgICAgIGBwYWRkaW5nOiAke3RoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5wYWRkaW5nfXB4YCxcclxuICAgICAgYG92ZXJmbG93OiAke3RoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5vdmVyZmxvd31gLFxyXG4gICAgICBgZGlzcGxheTogYmxvY2tgLFxyXG4gICAgXS5qb2luKCc7JykpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXHJcbiAgb25SZXNpemUoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zQ291bnRJblJvdygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmlkID0gU21hcnRTbGlkZXJTZXJ2aWNlLnJhbmRvbUhleFdvcmQoKTtcclxuICAgIHRoaXMuZGF0YUlkID0gYGRpdi1kYXRhLSR7dGhpcy5pZH1gO1xyXG4gICAgdGhpcy5pdGVtc1RvU2hvdyA9IFsuLi50aGlzLnByaXZhdGVJdGVtc107XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zQ291bnRJblJvdygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBnZXQgYXJyb3dCb3R0b21EaXNhYmxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zVG9TaG93Lmxlbmd0aCA8PSB0aGlzLml0ZW1zQ291bnRJblJvdztcclxuICB9XHJcblxyXG4gIGdldCBhcnJvd1RvcERpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXNUb1Nob3cubGVuZ3RoID09PSB0aGlzLnByaXZhdGVJdGVtcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0YUJsb2NrV2lkdGgoKSB7XHJcbiAgICBpZiAodGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmFycm93cy5wb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcclxuICAgICAgcmV0dXJuJzEwMCUnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnOTAlJztcclxuICB9XHJcblxyXG4gIGdldCBhcnJvd3NIZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmFycm93cy5zaXplICogMjtcclxuICB9XHJcblxyXG4gIGdldCBhcnJvd3NQb3NpdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuYXJyb3dzLnBvc2l0aW9uID09PSAnbGVmdCcpIHtcclxuICAgICAgdGhpcy5kYXRhUG9zaXRpb24gPSAncmlnaHQnO1xyXG5cclxuICAgICAgcmV0dXJuICdsZWZ0JztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuYXJyb3dzLnBvc2l0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICAgIHRoaXMuZGF0YVBvc2l0aW9uID0gJ2xlZnQnO1xyXG5cclxuICAgICAgcmV0dXJuICdyaWdodCc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICdub25lJztcclxuICB9XHJcblxyXG4gIHNldEl0ZW1TdHlsZXMoaXNTZWxlY3RlZDogYm9vbGVhbikge1xyXG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KCR7dGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmhvdmVyQ29sb3J9LCAke3RoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5ob3ZlckNvbG9yfSlgLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogYCR7dGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmhvdmVyQ29sb3J9ICFpbXBvcnRhbnRgXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJdGVtc0NvdW50SW5Sb3coKSB7XHJcbiAgICBpZiAodGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLml0ZW1PcHRpb25zLml0ZW1XaWR0aCA9PT0gJzEwMCUnIHx8IHRoaXMucHJpdmF0ZUl0ZW1zLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpdGVtV2lkdGggPSBwYXJzZUludCh0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaXRlbU9wdGlvbnMuaXRlbVdpZHRoLCAxMCkgK1xyXG4gICAgICAodGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLml0ZW1PcHRpb25zLml0ZW1QYWRkaW5nICogMik7XHJcbiAgICBjb25zdCBkYXRhV2lkdGggPSBTbWFydFNsaWRlclNlcnZpY2UuZ2V0Tm9kZVdpZHRoQnlJZEluc2lkZUVsZW1lbnRSZWYodGhpcy5lbGVtZW50LCB0aGlzLmRhdGFJZCk7XHJcblxyXG4gICAgdGhpcy5pdGVtc0NvdW50SW5Sb3cgPSBwYXJzZUludCgoZGF0YVdpZHRoIC8gaXRlbVdpZHRoKS50b1N0cmluZygpLCAxMCk7XHJcbiAgICBpZiAodGhpcy5pdGVtc0NvdW50SW5Sb3cgPT09IDApIHtcclxuICAgICAgdGhpcy5pdGVtc0NvdW50SW5Sb3cgPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXMoKSB7XHJcbiAgICBpZiAodGhpcy5pdGVtc1RvU2hvdy5sZW5ndGggPT09IHRoaXMucHJpdmF0ZUl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLml0ZW1zVG9TaG93ID0gdGhpcy5wcml2YXRlSXRlbXMuc2xpY2UodGhpcy5wcml2YXRlSXRlbXMubGVuZ3RoIC0gdGhpcy5pdGVtc1RvU2hvdy5sZW5ndGggLSB0aGlzLml0ZW1zQ291bnRJblJvdyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXh0KCkge1xyXG4gICAgaWYgKHRoaXMuaXRlbXNUb1Nob3cubGVuZ3RoIDw9IHRoaXMuaXRlbXNDb3VudEluUm93KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbXNUb1Nob3cgPSB0aGlzLml0ZW1zVG9TaG93LnNsaWNlKHRoaXMuaXRlbXNDb3VudEluUm93KTtcclxuICB9XHJcblxyXG4gIG9uSXRlbUNsaWNrKHNlbGVjdGVkOiBTbWFydFNsaWRlckl0ZW0pIHtcclxuICAgIGlmICh0aGlzLml0ZW1zVG9TaG93KSB7XHJcbiAgICAgIHRoaXMuaXRlbXNUb1Nob3cuZm9yRWFjaCh4ID0+IHguaXNTZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pdGVtcykge1xyXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goeCA9PiB4LmlzU2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RlZC5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VsZWN0SXRlbS5lbWl0KHNlbGVjdGVkKTtcclxuICB9XHJcbn1cclxuIl19