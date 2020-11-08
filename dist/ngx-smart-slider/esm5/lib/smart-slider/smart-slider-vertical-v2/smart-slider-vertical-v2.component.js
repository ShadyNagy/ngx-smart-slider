import { __decorate, __read, __spread } from "tslib";
import { AfterViewInit, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { SmartSliderService } from '../smart-slider.service';
var SmartSliderVerticalV2Component = /** @class */ (function () {
    function SmartSliderVerticalV2Component(smartSliderService, sanitizer, element) {
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
    Object.defineProperty(SmartSliderVerticalV2Component.prototype, "smartSliderOptions", {
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
    Object.defineProperty(SmartSliderVerticalV2Component.prototype, "items", {
        set: function (value) {
            this.privateItems = value;
            this.itemsToShow = __spread(this.privateItems);
            this.updateItemsCountInRow();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalV2Component.prototype, "hostStyles", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustStyle([
                "height: " + this.privateSmartSliderOptions.height,
                "width: " + this.privateSmartSliderOptions.width,
                "padding: " + this.privateSmartSliderOptions.padding + "px",
                "overflow: " + this.privateSmartSliderOptions.overflow,
                "display: block",
            ].join(';'));
        },
        enumerable: true,
        configurable: true
    });
    SmartSliderVerticalV2Component.prototype.onResize = function () {
        this.updateItemsCountInRow();
    };
    SmartSliderVerticalV2Component.prototype.ngOnInit = function () {
        this.id = SmartSliderService.randomHexWord();
        this.dataId = "div-data-" + this.id;
        this.itemsToShow = __spread(this.privateItems);
    };
    SmartSliderVerticalV2Component.prototype.ngAfterViewInit = function () {
        this.updateItemsCountInRow();
    };
    SmartSliderVerticalV2Component.prototype.ngOnDestroy = function () {
    };
    Object.defineProperty(SmartSliderVerticalV2Component.prototype, "arrowBottomDisabled", {
        get: function () {
            return this.itemsToShow.length <= this.itemsCountInRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalV2Component.prototype, "arrowTopDisabled", {
        get: function () {
            return this.itemsToShow.length === this.privateItems.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalV2Component.prototype, "dataBlockWidth", {
        get: function () {
            if (this.privateSmartSliderOptions.arrows.position === 'center') {
                return '100%';
            }
            return '90%';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalV2Component.prototype, "arrowsHeight", {
        get: function () {
            return this.privateSmartSliderOptions.arrows.size * 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalV2Component.prototype, "arrowsPosition", {
        get: function () {
            if (this.privateSmartSliderOptions.arrows.position === 'left') {
                this.dataPosition = 'right';
                return 'left';
            }
            if (this.privateSmartSliderOptions.arrows.position === 'right') {
                this.dataPosition = 'left';
                return 'right';
            }
            return 'none';
        },
        enumerable: true,
        configurable: true
    });
    SmartSliderVerticalV2Component.prototype.setItemStyles = function (isSelected) {
        if (isSelected) {
            return {
                background: "linear-gradient(" + this.privateSmartSliderOptions.hoverColor + ", " + this.privateSmartSliderOptions.hoverColor + ")",
                'background-color': this.privateSmartSliderOptions.hoverColor + " !important"
            };
        }
        return {};
    };
    SmartSliderVerticalV2Component.prototype.updateItemsCountInRow = function () {
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
    SmartSliderVerticalV2Component.prototype.getPrevious = function () {
        if (this.itemsToShow.length === this.privateItems.length) {
            return;
        }
        this.itemsToShow = this.privateItems.slice(this.privateItems.length - this.itemsToShow.length - this.itemsCountInRow);
    };
    SmartSliderVerticalV2Component.prototype.getNext = function () {
        if (this.itemsToShow.length <= this.itemsCountInRow) {
            return;
        }
        this.itemsToShow = this.itemsToShow.slice(this.itemsCountInRow);
    };
    SmartSliderVerticalV2Component.prototype.onItemClick = function (selected) {
        if (this.itemsToShow) {
            this.itemsToShow.forEach(function (x) { return x.isSelected = false; });
        }
        if (this.items) {
            this.items.forEach(function (x) { return x.isSelected = false; });
        }
        selected.isSelected = true;
        this.selectItem.emit(selected);
    };
    SmartSliderVerticalV2Component.ctorParameters = function () { return [
        { type: SmartSliderService },
        { type: DomSanitizer },
        { type: ElementRef }
    ]; };
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
    return SmartSliderVerticalV2Component;
}());
export { SmartSliderVerticalV2Component };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLXZlcnRpY2FsLXYyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbWFydC1zbGlkZXIvIiwic291cmNlcyI6WyJsaWIvc21hcnQtc2xpZGVyL3NtYXJ0LXNsaWRlci12ZXJ0aWNhbC12Mi9zbWFydC1zbGlkZXItdmVydGljYWwtdjIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFRN0Q7SUEyR0Usd0NBQ1Msa0JBQXNDLEVBQ3JDLFNBQXVCLEVBQ3ZCLE9BQW1CO1FBRnBCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDckMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBM0c3Qiw4QkFBeUIsR0FBZ0M7WUFDdkQsV0FBVyxFQUFFO2dCQUNYLFlBQVksRUFBRSxVQUFVO2dCQUN4QixTQUFTLEVBQUUsT0FBTztnQkFDbEIsWUFBWSxFQUFFLEVBQUU7YUFDakI7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsU0FBUyxFQUFFLE1BQU07YUFDbEI7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLElBQUksRUFBRSxFQUFFO2FBQ1Q7WUFDRCxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLENBQUM7WUFDVixRQUFRLEVBQUUsUUFB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aEY7UUFEQyxXQUFXLENBQUMsT0FBTyxDQUFDO29FQVNwQjtJQUdEO1FBREMsWUFBWSxDQUFDLGVBQWUsQ0FBQztrRUFHN0I7SUEvSFUsOEJBQThCO1FBTjFDLFNBQVMsQ0FBQztZQUNULCtDQUErQztZQUMvQyxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLHVySUFBd0Q7O1NBRXpELENBQUM7T0FDVyw4QkFBOEIsQ0FtTzFDO0lBQUQscUNBQUM7Q0FBQSxBQW5PRCxJQW1PQztTQW5PWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBTbWFydFNsaWRlckl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvc21hcnQtc2xpZGVyLWl0ZW0nO1xyXG5pbXBvcnQgeyBJU21hcnRTbGlkZXJPcHRpb25zLCBJU21hcnRTbGlkZXJPcHRpb25zSW50ZXJuYWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc21hcnQtc2xpZGVyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBTbWFydFNsaWRlclNlcnZpY2UgfSBmcm9tICcuLi9zbWFydC1zbGlkZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnc21hcnQtc2xpZGVyLXZlcnRpY2FsLXYyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc21hcnQtc2xpZGVyLXZlcnRpY2FsLXYyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zbWFydC1zbGlkZXItdmVydGljYWwtdjIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU21hcnRTbGlkZXJWZXJ0aWNhbFYyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0ICwgT25EZXN0cm95IHtcclxuXHJcblxyXG4gIHByaXZhdGVTbWFydFNsaWRlck9wdGlvbnM6IElTbWFydFNsaWRlck9wdGlvbnNJbnRlcm5hbCA9IHtcclxuICAgIHRleHRPcHRpb25zOiB7XHJcbiAgICAgIHRleHRQb3NpdGlvbjogJ2NlbnRlcmVkJyxcclxuICAgICAgdGV4dENvbG9yOiAnYmxhY2snLFxyXG4gICAgICB0ZXh0Rm9udFNpemU6IDE0LFxyXG4gICAgfSxcclxuICAgIGl0ZW1PcHRpb25zOiB7XHJcbiAgICAgIGl0ZW1QYWRkaW5nOiAwLFxyXG4gICAgICBpdGVtV2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGFycm93czoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgc2l6ZTogNTAsXHJcbiAgICB9LFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIHNlbGVjdGVkQ29sb3I6ICdncmF5JyxcclxuICAgIGhvdmVyQ29sb3I6ICdncmF5J1xyXG4gIH07XHJcbiAgQElucHV0KCdvcHRpb25zJylcclxuICBzZXQgc21hcnRTbGlkZXJPcHRpb25zKHZhbHVlOiBJU21hcnRTbGlkZXJPcHRpb25zKSB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUudGV4dE9wdGlvbnMpIHtcclxuICAgICAgaWYgKHZhbHVlLnRleHRPcHRpb25zLnRleHRQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy50ZXh0T3B0aW9ucy50ZXh0UG9zaXRpb24gPSB2YWx1ZS50ZXh0T3B0aW9ucy50ZXh0UG9zaXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh2YWx1ZS50ZXh0T3B0aW9ucy50ZXh0Q29sb3IpIHtcclxuICAgICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMudGV4dE9wdGlvbnMudGV4dENvbG9yID0gdmFsdWUudGV4dE9wdGlvbnMudGV4dENvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodmFsdWUudGV4dE9wdGlvbnMudGV4dEZvbnRTaXplKSB7XHJcbiAgICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLnRleHRPcHRpb25zLnRleHRGb250U2l6ZSA9IHZhbHVlLnRleHRPcHRpb25zLnRleHRGb250U2l6ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5pdGVtT3B0aW9ucykge1xyXG4gICAgICBpZiAodmFsdWUuaXRlbU9wdGlvbnMuaXRlbVBhZGRpbmcpIHtcclxuICAgICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaXRlbU9wdGlvbnMuaXRlbVBhZGRpbmcgPSB2YWx1ZS5pdGVtT3B0aW9ucy5pdGVtUGFkZGluZztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZhbHVlLml0ZW1PcHRpb25zLml0ZW1XaWR0aCkge1xyXG4gICAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5pdGVtT3B0aW9ucy5pdGVtV2lkdGggPSB2YWx1ZS5pdGVtT3B0aW9ucy5pdGVtV2lkdGggKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLmFycm93cykge1xyXG4gICAgICBpZiAodmFsdWUuYXJyb3dzLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmFycm93cy5wb3NpdGlvbiA9IHZhbHVlLmFycm93cy5wb3NpdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsdWUuYXJyb3dzLnNpemUpIHtcclxuICAgICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuYXJyb3dzLnNpemUgPSB2YWx1ZS5hcnJvd3Muc2l6ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5oZWlnaHQpIHtcclxuICAgICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmhlaWdodCA9IHZhbHVlLmhlaWdodCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLndpZHRoKSB7XHJcbiAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy53aWR0aCA9IHZhbHVlLndpZHRoICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUucGFkZGluZykge1xyXG4gICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMucGFkZGluZyA9IHZhbHVlLnBhZGRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLm92ZXJmbG93KSB7XHJcbiAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5vdmVyZmxvdyA9IHZhbHVlLm92ZXJmbG93O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5zZWxlY3RlZENvbG9yKSB7XHJcbiAgICAgIHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5zZWxlY3RlZENvbG9yID0gdmFsdWUuc2VsZWN0ZWRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUuaG92ZXJDb2xvcikge1xyXG4gICAgICB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaG92ZXJDb2xvciA9IHZhbHVlLmhvdmVyQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLm1hcHBlciA9IHZhbHVlLm1hcHBlcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGVJdGVtcyA9IG5ldyBBcnJheTxTbWFydFNsaWRlckl0ZW0+KCk7XHJcbiAgQElucHV0KCdpdGVtcycpXHJcbiAgc2V0IGl0ZW1zKHZhbHVlOiBBcnJheTxTbWFydFNsaWRlckl0ZW0+KSB7XHJcbiAgICB0aGlzLnByaXZhdGVJdGVtcyA9IHZhbHVlO1xyXG4gICAgdGhpcy5pdGVtc1RvU2hvdyA9IFsuLi50aGlzLnByaXZhdGVJdGVtc107XHJcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zQ291bnRJblJvdygpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgc2VsZWN0SXRlbTogRXZlbnRFbWl0dGVyPFNtYXJ0U2xpZGVySXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFNtYXJ0U2xpZGVySXRlbT4oKTtcclxuXHJcbiAgaXRlbXNUb1Nob3cgPSBuZXcgQXJyYXk8U21hcnRTbGlkZXJJdGVtPigpO1xyXG4gIGl0ZW1zQ291bnRJblJvdyA9IDA7XHJcbiAgaWQgPSAnJztcclxuICBkYXRhSWQgPSAnJztcclxuICBkYXRhUG9zaXRpb24gPSAnbm9uZSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHNtYXJ0U2xpZGVyU2VydmljZTogU21hcnRTbGlkZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZScpXHJcbiAgZ2V0IGhvc3RTdHlsZXMoKTogU2FmZVN0eWxlIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoIFtcclxuICAgICAgYGhlaWdodDogJHt0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaGVpZ2h0fWAsXHJcbiAgICAgIGB3aWR0aDogJHt0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMud2lkdGh9YCxcclxuICAgICAgYHBhZGRpbmc6ICR7dGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLnBhZGRpbmd9cHhgLFxyXG4gICAgICBgb3ZlcmZsb3c6ICR7dGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLm92ZXJmbG93fWAsXHJcbiAgICAgIGBkaXNwbGF5OiBibG9ja2AsXHJcbiAgICBdLmpvaW4oJzsnKSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcclxuICBvblJlc2l6ZSgpIHtcclxuICAgIHRoaXMudXBkYXRlSXRlbXNDb3VudEluUm93KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaWQgPSBTbWFydFNsaWRlclNlcnZpY2UucmFuZG9tSGV4V29yZCgpO1xyXG4gICAgdGhpcy5kYXRhSWQgPSBgZGl2LWRhdGEtJHt0aGlzLmlkfWA7XHJcbiAgICB0aGlzLml0ZW1zVG9TaG93ID0gWy4uLnRoaXMucHJpdmF0ZUl0ZW1zXTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlSXRlbXNDb3VudEluUm93KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGdldCBhcnJvd0JvdHRvbURpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXNUb1Nob3cubGVuZ3RoIDw9IHRoaXMuaXRlbXNDb3VudEluUm93O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFycm93VG9wRGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtc1RvU2hvdy5sZW5ndGggPT09IHRoaXMucHJpdmF0ZUl0ZW1zLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGdldCBkYXRhQmxvY2tXaWR0aCgpIHtcclxuICAgIGlmICh0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuYXJyb3dzLnBvc2l0aW9uID09PSAnY2VudGVyJykge1xyXG4gICAgICByZXR1cm4nMTAwJSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICc5MCUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFycm93c0hlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuYXJyb3dzLnNpemUgKiAyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFycm93c1Bvc2l0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5hcnJvd3MucG9zaXRpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICB0aGlzLmRhdGFQb3NpdGlvbiA9ICdyaWdodCc7XHJcblxyXG4gICAgICByZXR1cm4gJ2xlZnQnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5hcnJvd3MucG9zaXRpb24gPT09ICdyaWdodCcpIHtcclxuICAgICAgdGhpcy5kYXRhUG9zaXRpb24gPSAnbGVmdCc7XHJcblxyXG4gICAgICByZXR1cm4gJ3JpZ2h0JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgc2V0SXRlbVN0eWxlcyhpc1NlbGVjdGVkOiBib29sZWFuKSB7XHJcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoJHt0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaG92ZXJDb2xvcn0sICR7dGhpcy5wcml2YXRlU21hcnRTbGlkZXJPcHRpb25zLmhvdmVyQ29sb3J9KWAsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBgJHt0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaG92ZXJDb2xvcn0gIWltcG9ydGFudGBcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUl0ZW1zQ291bnRJblJvdygpIHtcclxuICAgIGlmICh0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaXRlbU9wdGlvbnMuaXRlbVdpZHRoID09PSAnMTAwJScgfHwgdGhpcy5wcml2YXRlSXRlbXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGl0ZW1XaWR0aCA9IHBhcnNlSW50KHRoaXMucHJpdmF0ZVNtYXJ0U2xpZGVyT3B0aW9ucy5pdGVtT3B0aW9ucy5pdGVtV2lkdGgsIDEwKSArXHJcbiAgICAgICh0aGlzLnByaXZhdGVTbWFydFNsaWRlck9wdGlvbnMuaXRlbU9wdGlvbnMuaXRlbVBhZGRpbmcgKiAyKTtcclxuICAgIGNvbnN0IGRhdGFXaWR0aCA9IFNtYXJ0U2xpZGVyU2VydmljZS5nZXROb2RlV2lkdGhCeUlkSW5zaWRlRWxlbWVudFJlZih0aGlzLmVsZW1lbnQsIHRoaXMuZGF0YUlkKTtcclxuXHJcbiAgICB0aGlzLml0ZW1zQ291bnRJblJvdyA9IHBhcnNlSW50KChkYXRhV2lkdGggLyBpdGVtV2lkdGgpLnRvU3RyaW5nKCksIDEwKTtcclxuICAgIGlmICh0aGlzLml0ZW1zQ291bnRJblJvdyA9PT0gMCkge1xyXG4gICAgICB0aGlzLml0ZW1zQ291bnRJblJvdyA9IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91cygpIHtcclxuICAgIGlmICh0aGlzLml0ZW1zVG9TaG93Lmxlbmd0aCA9PT0gdGhpcy5wcml2YXRlSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbXNUb1Nob3cgPSB0aGlzLnByaXZhdGVJdGVtcy5zbGljZSh0aGlzLnByaXZhdGVJdGVtcy5sZW5ndGggLSB0aGlzLml0ZW1zVG9TaG93Lmxlbmd0aCAtIHRoaXMuaXRlbXNDb3VudEluUm93KTtcclxuICB9XHJcblxyXG4gIGdldE5leHQoKSB7XHJcbiAgICBpZiAodGhpcy5pdGVtc1RvU2hvdy5sZW5ndGggPD0gdGhpcy5pdGVtc0NvdW50SW5Sb3cpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pdGVtc1RvU2hvdyA9IHRoaXMuaXRlbXNUb1Nob3cuc2xpY2UodGhpcy5pdGVtc0NvdW50SW5Sb3cpO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtQ2xpY2soc2VsZWN0ZWQ6IFNtYXJ0U2xpZGVySXRlbSkge1xyXG4gICAgaWYgKHRoaXMuaXRlbXNUb1Nob3cpIHtcclxuICAgICAgdGhpcy5pdGVtc1RvU2hvdy5mb3JFYWNoKHggPT4geC5pc1NlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLml0ZW1zKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCh4ID0+IHguaXNTZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgIH1cclxuICAgIHNlbGVjdGVkLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWxlY3RJdGVtLmVtaXQoc2VsZWN0ZWQpO1xyXG4gIH1cclxufVxyXG4iXX0=