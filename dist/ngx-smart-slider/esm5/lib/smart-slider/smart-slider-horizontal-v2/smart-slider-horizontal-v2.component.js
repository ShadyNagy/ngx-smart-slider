import { __decorate, __read, __spread } from "tslib";
import { AfterViewInit, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { SmartSliderService } from '../smart-slider.service';
var SmartSliderHorizontalV2Component = /** @class */ (function () {
    function SmartSliderHorizontalV2Component(smartSliderService, sanitizer, element) {
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
    Object.defineProperty(SmartSliderHorizontalV2Component.prototype, "smartSliderOptions", {
        set: function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalV2Component.prototype, "items", {
        set: function (value) {
            this.privateItems = value;
            this.itemsToShow = __spread(this.privateItems);
            this.updateItemsCountInRow();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalV2Component.prototype, "hostStyles", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustStyle([
                "height: " + this.privateSmartSliderOptions.height,
                "width: " + this.privateSmartSliderOptions.width,
                "padding: " + this.privateSmartSliderOptions.padding + "px",
                "overflow: " + this.privateSmartSliderOptions.overflow,
                "display: block",
                "position: relative"
            ].join(';'));
        },
        enumerable: true,
        configurable: true
    });
    SmartSliderHorizontalV2Component.prototype.onResize = function () {
        this.updateItemsCountInRow();
    };
    SmartSliderHorizontalV2Component.prototype.ngOnInit = function () {
        this.id = SmartSliderService.randomHexWord();
        this.dataId = "div-data-" + this.id;
        this.itemsToShow = __spread(this.privateItems);
    };
    SmartSliderHorizontalV2Component.prototype.ngAfterViewInit = function () {
        this.updateItemsCountInRow();
    };
    SmartSliderHorizontalV2Component.prototype.ngOnDestroy = function () {
    };
    Object.defineProperty(SmartSliderHorizontalV2Component.prototype, "arrowBottomDisabled", {
        get: function () {
            return this.itemsToShow.length <= this.itemsCountInRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalV2Component.prototype, "arrowTopDisabled", {
        get: function () {
            return this.itemsToShow.length === this.privateItems.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalV2Component.prototype, "dataBlockHeight", {
        get: function () {
            if (this.privateSmartSliderOptions.arrows.position === 'center') {
                return '100%';
            }
            return '90%';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalV2Component.prototype, "arrowsWidth", {
        get: function () {
            return this.privateSmartSliderOptions.arrows.size * 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalV2Component.prototype, "arrowsPosition", {
        get: function () {
            if (this.privateSmartSliderOptions.arrows.position === 'top') {
                this.dataPosition = 'bottom';
                return 'top';
            }
            if (this.privateSmartSliderOptions.arrows.position === 'bottom') {
                this.dataPosition = 'top';
                return 'bottom';
            }
            return 'none';
        },
        enumerable: true,
        configurable: true
    });
    SmartSliderHorizontalV2Component.prototype.setItemStyles = function (isSelected) {
        if (isSelected) {
            return {
                background: "linear-gradient(" + this.privateSmartSliderOptions.hoverColor + ", " + this.privateSmartSliderOptions.hoverColor + ")",
                'background-color': this.privateSmartSliderOptions.hoverColor + " !important"
            };
        }
        return {};
    };
    SmartSliderHorizontalV2Component.prototype.updateItemsCountInRow = function () {
        if (this.privateSmartSliderOptions.itemOptions.itemWidth === '100%' || this.privateItems.length <= 0) {
            return;
        }
        var itemWidth = parseInt(this.privateSmartSliderOptions.itemOptions.itemWidth, 10) +
            (this.privateSmartSliderOptions.itemOptions.itemPadding * 2);
        var dataWidth = SmartSliderService.getNodeWidthByIdInsideElementRef(this.element, this.dataId);
        this.itemsCountInRow = parseInt((dataWidth / itemWidth).toString(), 10);
        if (this.itemsCountInRow === 0) {
            this.itemsCountInRow = 1;
        }
    };
    SmartSliderHorizontalV2Component.prototype.getPrevious = function () {
        if (this.itemsToShow.length === this.privateItems.length) {
            return;
        }
        this.itemsToShow = this.privateItems.slice(this.privateItems.length - this.itemsToShow.length - this.itemsCountInRow);
    };
    SmartSliderHorizontalV2Component.prototype.getNext = function () {
        if (this.itemsToShow.length <= this.itemsCountInRow) {
            return;
        }
        this.itemsToShow = this.itemsToShow.slice(this.itemsCountInRow);
    };
    SmartSliderHorizontalV2Component.prototype.onItemClick = function (selected) {
        if (this.itemsToShow) {
            this.itemsToShow.forEach(function (x) { return x.isSelected = false; });
        }
        if (this.items) {
            this.items.forEach(function (x) { return x.isSelected = false; });
        }
        selected.isSelected = true;
        this.selectItem.emit(selected);
    };
    SmartSliderHorizontalV2Component.ctorParameters = function () { return [
        { type: SmartSliderService },
        { type: DomSanitizer },
        { type: ElementRef }
    ]; };
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
    return SmartSliderHorizontalV2Component;
}());
export { SmartSliderHorizontalV2Component };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLWhvcml6b250YWwtdjIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNtYXJ0LXNsaWRlci8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1zbGlkZXIvc21hcnQtc2xpZGVyLWhvcml6b250YWwtdjIvc21hcnQtc2xpZGVyLWhvcml6b250YWwtdjIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFRN0Q7SUE2R0UsMENBQ1Msa0JBQXNDLEVBQ3JDLFNBQXVCLEVBQ3ZCLE9BQW1CO1FBRnBCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDckMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBN0c3Qiw4QkFBeUIsR0FBZ0M7WUFDdkQsV0FBVyxFQUFFO2dCQUNYLFlBQVksRUFBRSxVQUFVO2dCQUN4QixTQUFTLEVBQUUsT0FBTztnQkFDbEIsWUFBWSxFQUFFLEVBQUU7YUFDakI7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsU0FBUyxFQUFFLE1BQU07YUFDbEI7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLElBQUksRUFBRSxFQUFFO2FBQ1Q7WUFDRCxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLENBQUM7WUFDVixRQUFRLEVB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OzhFQWdFaEI7SUFJRDtRQURDLEtBQUssQ0FBQyxPQUFPLENBQUM7aUVBS2Q7SUFHRDtRQURDLE1BQU0sRUFBRTt3RUFDdUU7SUFpQmhGO1FBREMsV0FBVyxDQUFDLE9BQU8sQ0FBQztzRUFVcEI7SUFHRDtRQURDLFlBQVksQ0FBQyxlQUFlLENBQUM7b0VBRzdCO0lBbElVLGdDQUFnQztRQU41QyxTQUFTLENBQUM7WUFDVCwrQ0FBK0M7WUFDL0MsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxrMklBQTBEOztTQUUzRCxDQUFDO09BQ1csZ0NBQWdDLENBdU81QztJQUFELHVDQUFDO0NBQUEsQUF2T0QsSUF1T0M7U0F2T1ksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgU21hcnRTbGlkZXJJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NtYXJ0LXNsaWRlci1pdGVtJztcclxuaW1wb3J0IHsgSVNtYXJ0U2xpZGVyT3B0aW9ucywgSVNtYXJ0U2xpZGVyT3B0aW9uc0ludGVybmFsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NtYXJ0LXNsaWRlci1vcHRpb25zJztcclxuaW1wb3J0IHsgU21hcnRTbGlkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc21hcnQtc2xpZGVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3NtYXJ0LXNsaWRlci1ob3Jpem9udGFsLXYyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc21hcnQtc2xpZGVyLWhvcml6b250YWwtdjIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NtYXJ0LXNsaWRlci1ob3Jpem9udGFsLXYyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNtYXJ0U2xpZGVySG9yaXpvbnRhbFYyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0ICwgT25EZXN0cm95IHtcclxuXHJcblxyXG4gIHByaXZhdGVTbWFydFNsaWRlck9wdGlvbnM6IElTbWFydFNsaWRlck9wdGlvbnNJbnRlcm5hbCA9IHtcclxuICAgIHRleHRPcHRpb25zOiB7XHJcbiAgICAgIHRleHRQb3NpdGlvbjogJ2NlbnRlcmVkJyxcclxuICAgICAgdGV4dENvbG9yOiAnYmxhY2snLFxyXG4gICAgICB0ZXh0Rm9udFNpemU6IDE0LFxyXG4gICAgfSxcclxuICAgIGl0ZW1PcHRpb25zOiB7XHJcbiAgICAgIGl0ZW1QYWRkaW5nOiAwLFxyXG4gICAgICBpdGVtV2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGFycm93czoge1xyXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgIHNpemU6IDUwLFxyXG4gICAgfSxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBzZWxlY3RlZENvbG9yOiAnZ3JheScsXHJcbiAgICBob3ZlckNvbG9yOiAnZ3JheSdcclxuICB9O1xyXG4gIEBJbnB1dCgnb3B0aW9ucycpXHJcbiAgc2V0IHNtYXJ0U2xpZGVyT3B0aW9ucyh2YWx1ZTogSVNtYXJ0U2xpZGVyT3B0aW9ucykge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLnRleHRPcHRpb25zKSB7XHJcbiAgICAgIGlmICh2YWx1ZS50ZXh0T3B0aW9ucy50ZXh0UG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMudGV4dE9wdGlvbnMudGV4dFBvc2l0aW9uID0gdmFsdWUudGV4dE9wdGlvbnMudGV4dFBvc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodmFsdWUudGV4dE9wdGlvbnMudGV4dENvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLnRleHRPcHRpb25zLnRleHRDb2xvciA9IHZhbHVlLnRleHRPcHRpb25zLnRleHRDb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZhbHVlLnRleHRPcHRpb25zLnRleHRGb250U2l6ZSkge1xyXG4gICAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy50ZXh0T3B0aW9ucy50ZXh0Rm9udFNpemUgPSB2YWx1ZS50ZXh0T3B0aW9ucy50ZXh0Rm9udFNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUuaXRlbU9wdGlvbnMpIHtcclxuICAgICAgaWYgKHZhbHVlLml0ZW1PcHRpb25zLml0ZW1QYWRkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLml0ZW1PcHRpb25zLml0ZW1QYWRkaW5nID0gdmFsdWUuaXRlbU9wdGlvbnMuaXRlbVBhZGRpbmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh2YWx1ZS5pdGVtT3B0aW9ucy5pdGVtV2lkdGgpIHtcclxuICAgICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaXRlbU9wdGlvbnMuaXRlbVdpZHRoID0gdmFsdWUuaXRlbU9wdGlvbnMuaXRlbVdpZHRoICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5hcnJvd3MpIHtcclxuICAgICAgaWYgKHZhbHVlLmFycm93cy5wb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5hcnJvd3MucG9zaXRpb24gPSB2YWx1ZS5hcnJvd3MucG9zaXRpb247XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZhbHVlLmFycm93cy5zaXplKSB7XHJcbiAgICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmFycm93cy5zaXplID0gdmFsdWUuYXJyb3dzLnNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUuaGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5oZWlnaHQgPSB2YWx1ZS5oZWlnaHQgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS53aWR0aCkge1xyXG4gICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMud2lkdGggPSB2YWx1ZS53aWR0aCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLnBhZGRpbmcpIHtcclxuICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLnBhZGRpbmcgPSB2YWx1ZS5wYWRkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5vdmVyZmxvdykge1xyXG4gICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMub3ZlcmZsb3cgPSB2YWx1ZS5vdmVyZmxvdztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUuc2VsZWN0ZWRDb2xvcikge1xyXG4gICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuc2VsZWN0ZWRDb2xvciA9IHZhbHVlLnNlbGVjdGVkQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLmhvdmVyQ29sb3IpIHtcclxuICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmhvdmVyQ29sb3IgPSB2YWx1ZS5ob3ZlckNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5tYXBwZXIgPSB2YWx1ZS5tYXBwZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlSXRlbXMgPSBuZXcgQXJyYXk8U21hcnRTbGlkZXJJdGVtPigpO1xyXG4gIEBJbnB1dCgnaXRlbXMnKVxyXG4gIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8U21hcnRTbGlkZXJJdGVtPikge1xyXG4gICAgdGhpcy5wcml2YXRlSXRlbXMgPSB2YWx1ZTtcclxuICAgIHRoaXMuaXRlbXNUb1Nob3cgPSBbLi4udGhpcy5wcml2YXRlSXRlbXNdO1xyXG4gICAgdGhpcy51cGRhdGVJdGVtc0NvdW50SW5Sb3coKTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHNlbGVjdEl0ZW06IEV2ZW50RW1pdHRlcjxTbWFydFNsaWRlckl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxTbWFydFNsaWRlckl0ZW0+KCk7XHJcblxyXG4gIGl0ZW1zVG9TaG93ID0gbmV3IEFycmF5PFNtYXJ0U2xpZGVySXRlbT4oKTtcclxuICBpdGVtc0NvdW50SW5Sb3cgPSAwO1xyXG4gIGlkID0gJyc7XHJcbiAgZGF0YUlkID0gJyc7XHJcbiAgZGF0YVBvc2l0aW9uID0gJ25vbmUnO1xyXG4gIGl0ZW1Ib3ZlckJhY2tncm91bmQgPSAnJztcclxuICBpdGVtSG92ZXJCYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgc21hcnRTbGlkZXJTZXJ2aWNlOiBTbWFydFNsaWRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlJylcclxuICBnZXQgaG9zdFN0eWxlcygpOiBTYWZlU3R5bGUge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSggW1xyXG4gICAgICBgaGVpZ2h0OiAke3RoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5oZWlnaHR9YCxcclxuICAgICAgYHdpZHRoOiAke3RoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy53aWR0aH1gLFxyXG4gICAgICBgcGFkZGluZzogJHt0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMucGFkZGluZ31weGAsXHJcbiAgICAgIGBvdmVyZmxvdzogJHt0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMub3ZlcmZsb3d9YCxcclxuICAgICAgYGRpc3BsYXk6IGJsb2NrYCxcclxuICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZWBcclxuICAgIF0uam9pbignOycpKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxyXG4gIG9uUmVzaXplKCkge1xyXG4gICAgdGhpcy51cGRhdGVJdGVtc0NvdW50SW5Sb3coKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pZCA9IFNtYXJ0U2xpZGVyU2VydmljZS5yYW5kb21IZXhXb3JkKCk7XHJcbiAgICB0aGlzLmRhdGFJZCA9IGBkaXYtZGF0YS0ke3RoaXMuaWR9YDtcclxuICAgIHRoaXMuaXRlbXNUb1Nob3cgPSBbLi4udGhpcy5wcml2YXRlSXRlbXNdO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVJdGVtc0NvdW50SW5Sb3coKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFycm93Qm90dG9tRGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtc1RvU2hvdy5sZW5ndGggPD0gdGhpcy5pdGVtc0NvdW50SW5Sb3c7XHJcbiAgfVxyXG5cclxuICBnZXQgYXJyb3dUb3BEaXNhYmxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zVG9TaG93Lmxlbmd0aCA9PT0gdGhpcy5wcml2YXRlSXRlbXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGFCbG9ja0hlaWdodCgpIHtcclxuICAgIGlmICh0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuYXJyb3dzLnBvc2l0aW9uID09PSAnY2VudGVyJykge1xyXG4gICAgICByZXR1cm4nMTAwJSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICc5MCUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFycm93c1dpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5hcnJvd3Muc2l6ZSAqIDI7XHJcbiAgfVxyXG5cclxuICBnZXQgYXJyb3dzUG9zaXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmFycm93cy5wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcclxuICAgICAgdGhpcy5kYXRhUG9zaXRpb24gPSAnYm90dG9tJztcclxuXHJcbiAgICAgIHJldHVybiAndG9wJztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuYXJyb3dzLnBvc2l0aW9uID09PSAnYm90dG9tJykge1xyXG4gICAgICB0aGlzLmRhdGFQb3NpdGlvbiA9ICd0b3AnO1xyXG5cclxuICAgICAgcmV0dXJuICdib3R0b20nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBzZXRJdGVtU3R5bGVzKGlzU2VsZWN0ZWQ6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc1NlbGVjdGVkKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgke3RoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5ob3ZlckNvbG9yfSwgJHt0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaG92ZXJDb2xvcn0pYCxcclxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGAke3RoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5ob3ZlckNvbG9yfSAhaW1wb3J0YW50YFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSXRlbXNDb3VudEluUm93KCkge1xyXG4gICAgaWYgKHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5pdGVtT3B0aW9ucy5pdGVtV2lkdGggPT09ICcxMDAlJyB8fCB0aGlzLnByaXZhdGVJdGVtcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXRlbVdpZHRoID0gcGFyc2VJbnQodGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLml0ZW1PcHRpb25zLml0ZW1XaWR0aCwgMTApICtcclxuICAgICAgKHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5pdGVtT3B0aW9ucy5pdGVtUGFkZGluZyAqIDIpO1xyXG4gICAgY29uc3QgZGF0YVdpZHRoID0gU21hcnRTbGlkZXJTZXJ2aWNlLmdldE5vZGVXaWR0aEJ5SWRJbnNpZGVFbGVtZW50UmVmKHRoaXMuZWxlbWVudCwgdGhpcy5kYXRhSWQpO1xyXG5cclxuICAgIHRoaXMuaXRlbXNDb3VudEluUm93ID0gcGFyc2VJbnQoKGRhdGFXaWR0aCAvIGl0ZW1XaWR0aCkudG9TdHJpbmcoKSwgMTApO1xyXG5cclxuICAgIGlmICh0aGlzLml0ZW1zQ291bnRJblJvdyA9PT0gMCkge1xyXG4gICAgICB0aGlzLml0ZW1zQ291bnRJblJvdyA9IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91cygpIHtcclxuICAgIGlmICh0aGlzLml0ZW1zVG9TaG93Lmxlbmd0aCA9PT0gdGhpcy5wcml2YXRlSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbXNUb1Nob3cgPSB0aGlzLnByaXZhdGVJdGVtcy5zbGljZSh0aGlzLnByaXZhdGVJdGVtcy5sZW5ndGggLSB0aGlzLml0ZW1zVG9TaG93Lmxlbmd0aCAtIHRoaXMuaXRlbXNDb3VudEluUm93KTtcclxuICB9XHJcblxyXG4gIGdldE5leHQoKSB7XHJcbiAgICBpZiAodGhpcy5pdGVtc1RvU2hvdy5sZW5ndGggPD0gdGhpcy5pdGVtc0NvdW50SW5Sb3cpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pdGVtc1RvU2hvdyA9IHRoaXMuaXRlbXNUb1Nob3cuc2xpY2UodGhpcy5pdGVtc0NvdW50SW5Sb3cpO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtQ2xpY2soc2VsZWN0ZWQ6IFNtYXJ0U2xpZGVySXRlbSkge1xyXG4gICAgaWYgKHRoaXMuaXRlbXNUb1Nob3cpIHtcclxuICAgICAgdGhpcy5pdGVtc1RvU2hvdy5mb3JFYWNoKHggPT4geC5pc1NlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLml0ZW1zKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCh4ID0+IHguaXNTZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgIH1cclxuICAgIHNlbGVjdGVkLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWxlY3RJdGVtLmVtaXQoc2VsZWN0ZWQpO1xyXG4gIH1cclxufVxyXG4iXX0=