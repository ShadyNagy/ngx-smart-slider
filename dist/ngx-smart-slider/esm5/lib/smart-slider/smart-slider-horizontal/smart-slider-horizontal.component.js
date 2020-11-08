import { __decorate } from "tslib";
import { Component, OnInit, HostBinding, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { SmartSliderService } from '../smart-slider.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
var left = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
        query(':leave', [style({ display: 'none' })], {
            optional: true,
        }),
        query('.item', [style({ transform: 'translateX(0)' }), animate('{{inTiming}}s ease-out', style({ transform: 'translateX(100%)' }))], {
            optional: true,
        }),
        query(':enter', [style({ transform: 'translateX(-100%)' }), animate('{{inTiming}}s ease-out', style({ transform: 'translateX(0)' }))], {
            optional: true,
        }),
    ]),
];
var right = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
        query(':leave', [style({ display: 'none' })], {
            optional: true,
        }),
        query('.item', [style({ transform: 'translateX(100%)' }), animate('{{inTiming}}s ease-out', style({ transform: 'translateX(0)' }))], {
            optional: true,
        }),
        query(':enter', [style({ transform: 'translateX(100%)' }), animate('{{inTiming}}s ease-out', style({ transform: 'translateX(0)' }))], {
            optional: true,
        }),
    ]),
];
var SmartSliderHorizontalComponent = /** @class */ (function () {
    function SmartSliderHorizontalComponent(element, sanitizer) {
        this.element = element;
        this.sanitizer = sanitizer;
        this._items = new Array();
        this._showPrevious = true;
        this._showNext = true;
        this._showDots = false;
        this._autoplay = false;
        this._loop = false;
        this._pauseOnHover = false;
        this._itemMargin = '10px';
        this._itemPadding = '0px';
        this._textPosition = 'centered';
        this._textColor = 'black';
        this._cellLimit = 1;
        this._height = '100%';
        this.containerHeight = '100%';
        this._autoplayInterval = 2000;
        this._transitionDuration = 0.3;
        this._class = '';
        this.select = new EventEmitter();
        this.width = '100%';
        this.isNext = false;
        this.smartSliderService = new SmartSliderService();
    }
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "items", {
        set: function (value) {
            this._items = value;
            this.smartSliderService.setItems(this._items, this._cellLimit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "showPrevious", {
        set: function (value) {
            this._showPrevious = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "showNext", {
        set: function (value) {
            this._showNext = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "showDots", {
        set: function (value) {
            this._showDots = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "autoplay", {
        set: function (value) {
            this._autoplay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "loop", {
        set: function (value) {
            this.smartSliderService.isLoop = value;
            this._loop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "pauseOnHover", {
        set: function (value) {
            this._pauseOnHover = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "itemMargin", {
        set: function (value) {
            this._itemMargin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "itemPadding", {
        set: function (value) {
            this._itemPadding = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "textPosition", {
        set: function (value) {
            this._textPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "textColor", {
        set: function (value) {
            this._textColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "cellLimit", {
        set: function (value) {
            this._cellLimit = value;
            this.smartSliderService.setItems(this._items, this._cellLimit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "height", {
        set: function (value) {
            this._height = value;
            this.containerHeight = Number.parseInt(value) + 10 + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "autoplayInterval", {
        set: function (value) {
            this._autoplayInterval = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "transitionDuration", {
        set: function (value) {
            this._transitionDuration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "class", {
        set: function (value) {
            this._class = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "hostStyles", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustStyle([
                "height: " + this.containerHeight
            ].join(';'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "hostClasses", {
        get: function () {
            return [
                this._class
            ].join(' ');
        },
        enumerable: true,
        configurable: true
    });
    SmartSliderHorizontalComponent.prototype.onResize = function () {
        this.resize();
    };
    Object.defineProperty(SmartSliderHorizontalComponent.prototype, "slideInOut", {
        get: function () {
            return {
                value: this.smartSliderService.itemIndex,
                params: {
                    inWidth: this.width,
                    inHeight: this._height,
                    inTiming: this._transitionDuration
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    SmartSliderHorizontalComponent.prototype.resize = function () {
        var parentElement = this.element.nativeElement.parentNode.parentNode;
        this.width = (parentElement.clientWidth) + 'px';
        this.smartSliderService.setWidth(parentElement.clientWidth);
    };
    SmartSliderHorizontalComponent.prototype.ngOnInit = function () {
        this.smartSliderService.setItems(this._items, this._cellLimit);
        this.resize();
    };
    SmartSliderHorizontalComponent.prototype.onItemClick = function (selected) {
        this.select.emit(selected);
    };
    SmartSliderHorizontalComponent.prototype.isNextDisabled = function () {
        return this.smartSliderService.itemIndex === this._items.length - 1;
    };
    SmartSliderHorizontalComponent.prototype.isPreviousDisabled = function () {
        return this.smartSliderService.itemIndex === 0;
    };
    SmartSliderHorizontalComponent.prototype.show = function (item) {
        return this.smartSliderService.itemsToShow.includes(item);
    };
    SmartSliderHorizontalComponent.prototype.onNext = function () {
        console.log('itemIndex', this.smartSliderService.itemIndex);
        this.smartSliderService.moveNext();
        this.isNext = true;
    };
    SmartSliderHorizontalComponent.prototype.onPrevious = function () {
        this.smartSliderService.movePrevious();
        this.isNext = false;
    };
    SmartSliderHorizontalComponent.prototype.isLast = function (item) {
        return this.smartSliderService.itemsToShow[this.isNext ? this.smartSliderService.itemsToShow.length - 1 : 0] === item;
    };
    SmartSliderHorizontalComponent.prototype.onTransitionEnd = function () {
        this.smartSliderService.sliderDone();
    };
    SmartSliderHorizontalComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DomSanitizer }
    ]; };
    __decorate([
        Input('items')
    ], SmartSliderHorizontalComponent.prototype, "items", null);
    __decorate([
        Input('showPrevious')
    ], SmartSliderHorizontalComponent.prototype, "showPrevious", null);
    __decorate([
        Input('showNext')
    ], SmartSliderHorizontalComponent.prototype, "showNext", null);
    __decorate([
        Input('showDots')
    ], SmartSliderHorizontalComponent.prototype, "showDots", null);
    __decorate([
        Input('autoplay')
    ], SmartSliderHorizontalComponent.prototype, "autoplay", null);
    __decorate([
        Input('loop')
    ], SmartSliderHorizontalComponent.prototype, "loop", null);
    __decorate([
        Input('pauseOnHover')
    ], SmartSliderHorizontalComponent.prototype, "pauseOnHover", null);
    __decorate([
        Input('itemMargin')
    ], SmartSliderHorizontalComponent.prototype, "itemMargin", null);
    __decorate([
        Input('itemPadding')
    ], SmartSliderHorizontalComponent.prototype, "itemPadding", null);
    __decorate([
        Input('textPosition')
    ], SmartSliderHorizontalComponent.prototype, "textPosition", null);
    __decorate([
        Input('textColor')
    ], SmartSliderHorizontalComponent.prototype, "textColor", null);
    __decorate([
        Input('cellLimit')
    ], SmartSliderHorizontalComponent.prototype, "cellLimit", null);
    __decorate([
        Input('height')
    ], SmartSliderHorizontalComponent.prototype, "height", null);
    __decorate([
        Input('autoplayInterval')
    ], SmartSliderHorizontalComponent.prototype, "autoplayInterval", null);
    __decorate([
        Input('transitionDuration')
    ], SmartSliderHorizontalComponent.prototype, "transitionDuration", null);
    __decorate([
        Input('class')
    ], SmartSliderHorizontalComponent.prototype, "class", null);
    __decorate([
        Output()
    ], SmartSliderHorizontalComponent.prototype, "select", void 0);
    __decorate([
        HostBinding('style')
    ], SmartSliderHorizontalComponent.prototype, "hostStyles", null);
    __decorate([
        HostBinding('class')
    ], SmartSliderHorizontalComponent.prototype, "hostClasses", null);
    __decorate([
        HostListener('window:resize')
    ], SmartSliderHorizontalComponent.prototype, "onResize", null);
    SmartSliderHorizontalComponent = __decorate([
        Component({
            selector: 'smart-slider-horizontal',
            template: "<div class=\"container\" [ngStyle]=\"{'height': containerHeight, 'width': width}\">\r\n  <div *ngIf=\"_showPrevious\" class=\"arrow arrow-prev\" (click)=\"onPrevious()\" [class.arrow-disabled]=\"isPreviousDisabled()\"></div>\r\n  <div class=\"items\" [@slideInOut]=\"smartSliderService.itemIndex\" [ngStyle]=\"{'height': containerHeight, 'width': width}\" (@slideInOut.done)=\"onTransitionEnd()\">\r\n    <ng-container *ngFor=\"let item of _items; let i=index\">\r\n      <div *ngIf=\"show(item)\" class=\"img-with-text\" [ngStyle]=\"{'margin': _itemMargin}\">\r\n        <div [className]=\"isLast(item) ? 'enter-item' : 'item'\">\r\n          <img *ngIf=\"item.image\" src=\"{{item.image}}\" alt=\"{{item.image}}\" class=\"slider-image\" [ngStyle]=\"{'height': _height, 'width': smartSliderService.itemWidth}\" (click)=\"onItemClick(item)\" draggable=\"false\" />\r\n          <span *ngIf=\"item.text\" (click)=\"onItemClick(item)\" class=\"{{_textPosition}}\">\r\n            {{item.text}}\r\n          </span>   \r\n        </div>        \r\n      </div>      \r\n    </ng-container>\r\n\r\n  </div>\r\n  <div *ngIf=\"_showNext\" class=\"arrow arrow-next\" (click)=\"onNext()\" [class.arrow-disabled]=\"isNextDisabled()\"></div>\r\n</div>\r\n",
            animations: [
                trigger('slideInOut', [
                    transition(':increment', right, { params: { inWidth: '100%', inHeight: '100%', inTiming: '1' } }),
                    transition(':decrement', left, { params: { inWidth: '100%', inHeight: '100%', inTiming: '1' } }),
                ]),
            ],
            styles: [":host{display:block;width:100%}.container{position:absolute;overflow:hidden;width:100%;cursor:-webkit-grab;cursor:grab}.slider-image{opacity:.8}.slider-image:hover{opacity:.9}.enter-item,.item{display:block;position:relative;text-align:center;color:#000}.bottom-left{position:absolute;bottom:8px;left:16px}.top-left{position:absolute;top:8px;left:16px}.top-right{position:absolute;top:8px;right:16px}.bottom-right{position:absolute;bottom:8px;right:16px}.centered{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}.items{display:inline-block}.items-left{transition:transform .2s}.img-with-text{display:inline-flex;cursor:pointer;align-items:center;vertical-align:top}.img-with-text img{border-radius:10px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-bottom{margin-left:-110px;margin-bottom:-20px}.arrow{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:center;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}.arrow-prev{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}.arrow-next{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}.arrow-disabled{cursor:default;opacity:.5}"]
        })
    ], SmartSliderHorizontalComponent);
    return SmartSliderHorizontalComponent;
}());
export { SmartSliderHorizontalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLWhvcml6b250YWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNtYXJ0LXNsaWRlci8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1zbGlkZXIvc21hcnQtc2xpZGVyLWhvcml6b250YWwvc21hcnQtc2xpZGVyLWhvcml6b250YWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXBFLElBQUksSUFBSSxHQUFHO0lBQ1QsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDeEYsS0FBSyxDQUFDO1FBRUosS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDNUMsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDO1FBQ0YsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFT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QUE4QixDQWlNMUM7SUFBRCxxQ0FBQztDQUFBLEFBak1ELElBaU1DO1NBak1ZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHF1ZXJ5LCBzdHlsZSwgYW5pbWF0ZSwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFNtYXJ0U2xpZGVyU2VydmljZSB9IGZyb20gJy4uL3NtYXJ0LXNsaWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFNtYXJ0U2xpZGVySXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9zbWFydC1zbGlkZXItaXRlbSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5sZXQgbGVmdCA9IFtcbiAgcXVlcnkoJzplbnRlciwgOmxlYXZlJywgc3R5bGUoeyBwb3NpdGlvbjogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9KSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgZ3JvdXAoW1xuXG4gICAgcXVlcnkoJzpsZWF2ZScsIFtzdHlsZSh7IGRpc3BsYXk6ICdub25lJyB9KV0sIHtcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgIH0pLFxuICAgIHF1ZXJ5KCcuaXRlbScsIFtzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0pLCBhbmltYXRlKCd7e2luVGltaW5nfX1zIGVhc2Utb3V0Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyB9KSldLCB7XG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICB9KSxcbiAgICBxdWVyeSgnOmVudGVyJywgW3N0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknIH0pLCBhbmltYXRlKCd7e2luVGltaW5nfX1zIGVhc2Utb3V0Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9KSldLCB7XG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICB9KSxcbiAgXSksXG5cbl07XG5cbmxldCByaWdodCA9IFtcbiAgcXVlcnkoJzplbnRlciwgOmxlYXZlJywgc3R5bGUoeyBwb3NpdGlvbjogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9KSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgZ3JvdXAoW1xuICAgIHF1ZXJ5KCc6bGVhdmUnLCBbc3R5bGUoeyBkaXNwbGF5OiAnbm9uZScgfSldLCB7XG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICB9KSxcbiAgICBxdWVyeSgnLml0ZW0nLCBbc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyB9KSwgYW5pbWF0ZSgne3tpblRpbWluZ319cyBlYXNlLW91dCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSkpXSwge1xuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgfSksXG4gICAgcXVlcnkoJzplbnRlcicsIFtzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0pLCBhbmltYXRlKCd7e2luVGltaW5nfX1zIGVhc2Utb3V0Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9KSldLCB7XG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICB9KSxcbiAgXSksXG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbWFydC1zbGlkZXItaG9yaXpvbnRhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC1zbGlkZXItaG9yaXpvbnRhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NtYXJ0LXNsaWRlci1ob3Jpem9udGFsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzbGlkZUluT3V0JywgW1xuICAgICAgdHJhbnNpdGlvbignOmluY3JlbWVudCcsIHJpZ2h0LCB7cGFyYW1zOiB7aW5XaWR0aDogJzEwMCUnLCBpbkhlaWdodDogJzEwMCUnLCBpblRpbWluZzogJzEnfX0pLFxuICAgICAgdHJhbnNpdGlvbignOmRlY3JlbWVudCcsIGxlZnQsIHtwYXJhbXM6IHtpbldpZHRoOiAnMTAwJScsIGluSGVpZ2h0OiAnMTAwJScsIGluVGltaW5nOiAnMSd9fSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNtYXJ0U2xpZGVySG9yaXpvbnRhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgX2l0ZW1zID0gbmV3IEFycmF5PFNtYXJ0U2xpZGVySXRlbT4oKTtcbiAgQElucHV0KCdpdGVtcycpXG4gIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8U21hcnRTbGlkZXJJdGVtPikge1xuICAgIHRoaXMuX2l0ZW1zID0gdmFsdWU7XG4gICAgdGhpcy5zbWFydFNsaWRlclNlcnZpY2Uuc2V0SXRlbXModGhpcy5faXRlbXMsIHRoaXMuX2NlbGxMaW1pdCk7XG4gIH1cblxuICBfc2hvd1ByZXZpb3VzID0gdHJ1ZTtcbiAgQElucHV0KCdzaG93UHJldmlvdXMnKVxuICBzZXQgc2hvd1ByZXZpb3VzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1ByZXZpb3VzID0gdmFsdWU7XG4gIH1cblxuICBfc2hvd05leHQ6IGJvb2xlYW49dHJ1ZTtcbiAgQElucHV0KCdzaG93TmV4dCcpXG4gIHNldCBzaG93TmV4dCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dOZXh0ID0gdmFsdWU7XG4gIH1cblxuICBfc2hvd0RvdHMgPSBmYWxzZTtcbiAgQElucHV0KCdzaG93RG90cycpXG4gIHNldCBzaG93RG90cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dEb3RzID0gdmFsdWU7XG4gIH1cblxuICBfYXV0b3BsYXkgPSBmYWxzZTtcbiAgQElucHV0KCdhdXRvcGxheScpXG4gIHNldCBhdXRvcGxheSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9wbGF5ID0gdmFsdWU7XG4gIH1cblxuICBfbG9vcCA9IGZhbHNlO1xuICBASW5wdXQoJ2xvb3AnKVxuICBzZXQgbG9vcCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc21hcnRTbGlkZXJTZXJ2aWNlLmlzTG9vcCA9IHZhbHVlO1xuICAgIHRoaXMuX2xvb3AgPSB2YWx1ZTtcbiAgfVxuXG4gIF9wYXVzZU9uSG92ZXIgPSBmYWxzZTtcbiAgQElucHV0KCdwYXVzZU9uSG92ZXInKVxuICBzZXQgcGF1c2VPbkhvdmVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcGF1c2VPbkhvdmVyID0gdmFsdWU7XG4gIH1cblxuICBfaXRlbU1hcmdpbiA9ICcxMHB4JztcbiAgQElucHV0KCdpdGVtTWFyZ2luJylcbiAgc2V0IGl0ZW1NYXJnaW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2l0ZW1NYXJnaW4gPSB2YWx1ZTtcbiAgfVxuXG4gIF9pdGVtUGFkZGluZyA9ICcwcHgnO1xuICBASW5wdXQoJ2l0ZW1QYWRkaW5nJylcbiAgc2V0IGl0ZW1QYWRkaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pdGVtUGFkZGluZyA9IHZhbHVlO1xuICB9XG5cbiAgX3RleHRQb3NpdGlvbiA9ICdjZW50ZXJlZCc7XG4gIEBJbnB1dCgndGV4dFBvc2l0aW9uJylcbiAgc2V0IHRleHRQb3NpdGlvbih2YWx1ZTogJ2NlbnRlcmVkLXRvcCcgfCAnY2VudGVyZWQtYm90dG9tJyB8ICdjZW50ZXJlZCcgfCAnYm90dG9tLXJpZ2h0ICcgfCAndG9wLXJpZ2h0JyB8ICd0b3AtbGVmdCcgfCAnYm90dG9tLWxlZnQnKSB7ICAgIFxuICAgIHRoaXMuX3RleHRQb3NpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgX3RleHRDb2xvciA9ICdibGFjayc7XG4gIEBJbnB1dCgndGV4dENvbG9yJylcbiAgc2V0IHRleHRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGV4dENvbG9yID0gdmFsdWU7XG4gIH1cblxuICBfY2VsbExpbWl0ID0gMTtcbiAgQElucHV0KCdjZWxsTGltaXQnKVxuICBzZXQgY2VsbExpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jZWxsTGltaXQgPSB2YWx1ZTtcbiAgICB0aGlzLnNtYXJ0U2xpZGVyU2VydmljZS5zZXRJdGVtcyh0aGlzLl9pdGVtcywgdGhpcy5fY2VsbExpbWl0KTtcbiAgfVxuXG4gIF9oZWlnaHQgPSAnMTAwJSc7XG4gIGNvbnRhaW5lckhlaWdodDogc3RyaW5nPScxMDAlJztcbiAgQElucHV0KCdoZWlnaHQnKVxuICBzZXQgaGVpZ2h0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IE51bWJlci5wYXJzZUludCh2YWx1ZSkgKyAxMCArICdweCc7XG4gIH1cblxuICBfYXV0b3BsYXlJbnRlcnZhbCA9IDIwMDA7XG4gIEBJbnB1dCgnYXV0b3BsYXlJbnRlcnZhbCcpXG4gIHNldCBhdXRvcGxheUludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hdXRvcGxheUludGVydmFsID0gdmFsdWU7XG4gIH1cblxuICBfdHJhbnNpdGlvbkR1cmF0aW9uID0gMC4zO1xuICBASW5wdXQoJ3RyYW5zaXRpb25EdXJhdGlvbicpXG4gIHNldCB0cmFuc2l0aW9uRHVyYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RyYW5zaXRpb25EdXJhdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgX2NsYXNzID0gJyc7XG4gIEBJbnB1dCgnY2xhc3MnKVxuICBzZXQgY2xhc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsYXNzID0gdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUnKVxuXHRnZXQgaG9zdFN0eWxlcygpOiBTYWZlU3R5bGUge1xuXHRcdHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoICBbXG4gICAgICBgaGVpZ2h0OiAke3RoaXMuY29udGFpbmVySGVpZ2h0fWBcblx0XHRdLmpvaW4oJzsnKSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcblx0Z2V0IGhvc3RDbGFzc2VzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFtcbiAgICAgIHRoaXMuX2NsYXNzXG5cdFx0XS5qb2luKCcgJyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5yZXNpemUoKTtcbiAgfVxuXG4gIHdpZHRoID0gJzEwMCUnO1xuICBpc05leHQgPSBmYWxzZTtcblxuICBzbWFydFNsaWRlclNlcnZpY2UgPSBuZXcgU21hcnRTbGlkZXJTZXJ2aWNlKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHNhbml0aXplcjpEb21TYW5pdGl6ZXIpIHtcblxuICB9XG5cbiAgZ2V0IHNsaWRlSW5PdXQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB0aGlzLnNtYXJ0U2xpZGVyU2VydmljZS5pdGVtSW5kZXgsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaW5XaWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgaW5IZWlnaHQ6IHRoaXMuX2hlaWdodCxcbiAgICAgICAgaW5UaW1pbmc6IHRoaXMuX3RyYW5zaXRpb25EdXJhdGlvblxuICAgICAgfVxuICAgIH07XG4gIH1cblxuXG4gIHByaXZhdGUgcmVzaXplKCkge1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgdGhpcy53aWR0aCA9IChwYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoKSArICdweCc7XG4gICAgdGhpcy5zbWFydFNsaWRlclNlcnZpY2Uuc2V0V2lkdGgocGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc21hcnRTbGlkZXJTZXJ2aWNlLnNldEl0ZW1zKHRoaXMuX2l0ZW1zLCB0aGlzLl9jZWxsTGltaXQpO1xuICAgIHRoaXMucmVzaXplKCk7XG4gIH1cblxuICBvbkl0ZW1DbGljayhzZWxlY3RlZDogYW55KSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChzZWxlY3RlZCk7XG4gIH1cblxuICBpc05leHREaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zbWFydFNsaWRlclNlcnZpY2UuaXRlbUluZGV4ID09PSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgaXNQcmV2aW91c0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLnNtYXJ0U2xpZGVyU2VydmljZS5pdGVtSW5kZXggPT09IDA7XG4gIH1cblxuICBzaG93KGl0ZW06IFNtYXJ0U2xpZGVySXRlbSkge1xuICAgIHJldHVybiB0aGlzLnNtYXJ0U2xpZGVyU2VydmljZS5pdGVtc1RvU2hvdy5pbmNsdWRlcyhpdGVtKTtcbiAgfVxuXG4gIG9uTmV4dCgpIHtcbiAgICBjb25zb2xlLmxvZygnaXRlbUluZGV4JywgdGhpcy5zbWFydFNsaWRlclNlcnZpY2UuaXRlbUluZGV4KTtcbiAgICB0aGlzLnNtYXJ0U2xpZGVyU2VydmljZS5tb3ZlTmV4dCgpO1xuICAgIHRoaXMuaXNOZXh0ID0gdHJ1ZTtcbiAgfVxuXG4gIG9uUHJldmlvdXMoKSB7XG4gICAgdGhpcy5zbWFydFNsaWRlclNlcnZpY2UubW92ZVByZXZpb3VzKCk7XG4gICAgdGhpcy5pc05leHQgPSBmYWxzZTtcbiAgfVxuXG4gIGlzTGFzdChpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuc21hcnRTbGlkZXJTZXJ2aWNlLml0ZW1zVG9TaG93W3RoaXMuaXNOZXh0ID8gdGhpcy5zbWFydFNsaWRlclNlcnZpY2UuaXRlbXNUb1Nob3cubGVuZ3RoIC0gMSA6IDBdID09PSBpdGVtO1xuICB9XG5cbiAgb25UcmFuc2l0aW9uRW5kKCkge1xuICAgIHRoaXMuc21hcnRTbGlkZXJTZXJ2aWNlLnNsaWRlckRvbmUoKTtcbiAgfVxufVxuIl19