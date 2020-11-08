import { __decorate } from "tslib";
import { Component, OnInit, HostBinding, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { SmartSliderService } from '../smart-slider.service';
var bottom = [
    query(':enter, :leave', style({ position: 'fixed', height: '100%' }), { optional: true }),
    group([
        query(':leave', [style({ display: 'none' })], {
            optional: true,
        }),
        query('.item', [style({ transform: 'translateY(0)' }), animate('{{inTiming}}s ease-out', style({ transform: 'translateY(100%)' }))], {
            optional: true,
        }),
        query(':enter', [style({ transform: 'translateY(-100%)' }), animate('{{inTiming}}s ease-out', style({ transform: 'translateY(0)' }))], {
            optional: true,
        }),
    ]),
];
var top = [
    query(':enter, :leave', style({ position: 'fixed', height: '100%' }), { optional: true }),
    group([
        query(':leave', [style({ display: 'none' })], {
            optional: true,
        }),
        query('.item', [style({ transform: 'translateY(100%)' }), animate('{{inTiming}}s ease-out', style({ transform: 'translateY(0)' }))], {
            optional: true,
        }),
        query(':enter', [style({ transform: 'translateY(100%)' }), animate('{{inTiming}}s ease-out', style({ transform: 'translateY(0)' }))], {
            optional: true,
        }),
    ]),
];
var SmartSliderVerticalComponent = /** @class */ (function () {
    function SmartSliderVerticalComponent(element) {
        this.element = element;
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
        this._width = '100%';
        this.containerWidth = '100%';
        this._autoplayInterval = 2000;
        this._transitionDuration = 0.3;
        this._class = '';
        this.select = new EventEmitter();
        this.height = '100%';
        this.isNext = false;
        this.smartSliderService = new SmartSliderService();
    }
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "items", {
        set: function (value) {
            this._items = value;
            this.smartSliderService.setItems(this._items, this._cellLimit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "showPrevious", {
        set: function (value) {
            this._showPrevious = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "showNext", {
        set: function (value) {
            this._showNext = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "showDots", {
        set: function (value) {
            this._showDots = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "autoplay", {
        set: function (value) {
            this._autoplay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "loop", {
        set: function (value) {
            this.smartSliderService.isLoop = value;
            this._loop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "pauseOnHover", {
        set: function (value) {
            this._pauseOnHover = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "itemMargin", {
        set: function (value) {
            this._itemMargin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "itemPadding", {
        set: function (value) {
            this._itemPadding = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "textPosition", {
        set: function (value) {
            this._textPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "textColor", {
        set: function (value) {
            this._textColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "cellLimit", {
        set: function (value) {
            this._cellLimit = value;
            this.smartSliderService.setItems(this._items, this._cellLimit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "width", {
        set: function (value) {
            this._width = value;
            this.containerWidth = Number.parseInt(value) + 40 + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "autoplayInterval", {
        set: function (value) {
            this._autoplayInterval = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "transitionDuration", {
        set: function (value) {
            this._transitionDuration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "class", {
        set: function (value) {
            this._class = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "hostClasses", {
        get: function () {
            return [
                this._class
            ].join(' ');
        },
        enumerable: true,
        configurable: true
    });
    SmartSliderVerticalComponent.prototype.onResize = function () {
        this.resize();
    };
    Object.defineProperty(SmartSliderVerticalComponent.prototype, "slideInOut", {
        get: function () {
            return { value: this.smartSliderService.itemIndex, params: { inWidth: this._width, inHeight: this.height, inTiming: this._transitionDuration } };
        },
        enumerable: true,
        configurable: true
    });
    SmartSliderVerticalComponent.prototype.resize = function () {
        var parentElement = this.element.nativeElement.parentNode.parentNode;
        this.height = (parentElement.clientHeight) + 'px';
        this.smartSliderService.setHeight(parentElement.clientHeight);
    };
    SmartSliderVerticalComponent.prototype.ngOnInit = function () {
        this.smartSliderService.setItems(this._items, this._cellLimit);
        this.resize();
    };
    SmartSliderVerticalComponent.prototype.onItemClick = function (selected) {
        this.select.emit(selected);
    };
    SmartSliderVerticalComponent.prototype.isNextDisabled = function () {
        return this.smartSliderService.itemIndex === this._items.length - 1;
    };
    SmartSliderVerticalComponent.prototype.isPreviousDisabled = function () {
        return this.smartSliderService.itemIndex === 0;
    };
    SmartSliderVerticalComponent.prototype.show = function (item) {
        return this.smartSliderService.itemsToShow.includes(item);
    };
    SmartSliderVerticalComponent.prototype.onNext = function () {
        console.log('itemIndex', this.smartSliderService.itemIndex);
        this.smartSliderService.moveNext();
        this.isNext = true;
    };
    SmartSliderVerticalComponent.prototype.onPrevious = function () {
        this.smartSliderService.movePrevious();
        this.isNext = false;
    };
    SmartSliderVerticalComponent.prototype.isLast = function (item) {
        return this.smartSliderService.itemsToShow[this.isNext ? this.smartSliderService.itemsToShow.length - 1 : 0] === item;
    };
    SmartSliderVerticalComponent.prototype.onTransitionEnd = function () {
        this.smartSliderService.sliderDone();
    };
    SmartSliderVerticalComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('items')
    ], SmartSliderVerticalComponent.prototype, "items", null);
    __decorate([
        Input('showPrevious')
    ], SmartSliderVerticalComponent.prototype, "showPrevious", null);
    __decorate([
        Input('showNext')
    ], SmartSliderVerticalComponent.prototype, "showNext", null);
    __decorate([
        Input('showDots')
    ], SmartSliderVerticalComponent.prototype, "showDots", null);
    __decorate([
        Input('autoplay')
    ], SmartSliderVerticalComponent.prototype, "autoplay", null);
    __decorate([
        Input('loop')
    ], SmartSliderVerticalComponent.prototype, "loop", null);
    __decorate([
        Input('pauseOnHover')
    ], SmartSliderVerticalComponent.prototype, "pauseOnHover", null);
    __decorate([
        Input('itemMargin')
    ], SmartSliderVerticalComponent.prototype, "itemMargin", null);
    __decorate([
        Input('itemPadding')
    ], SmartSliderVerticalComponent.prototype, "itemPadding", null);
    __decorate([
        Input('textPosition')
    ], SmartSliderVerticalComponent.prototype, "textPosition", null);
    __decorate([
        Input('textColor')
    ], SmartSliderVerticalComponent.prototype, "textColor", null);
    __decorate([
        Input('cellLimit')
    ], SmartSliderVerticalComponent.prototype, "cellLimit", null);
    __decorate([
        Input('width')
    ], SmartSliderVerticalComponent.prototype, "width", null);
    __decorate([
        Input('autoplayInterval')
    ], SmartSliderVerticalComponent.prototype, "autoplayInterval", null);
    __decorate([
        Input('transitionDuration')
    ], SmartSliderVerticalComponent.prototype, "transitionDuration", null);
    __decorate([
        Input('class')
    ], SmartSliderVerticalComponent.prototype, "class", null);
    __decorate([
        Output()
    ], SmartSliderVerticalComponent.prototype, "select", void 0);
    __decorate([
        HostBinding('class')
    ], SmartSliderVerticalComponent.prototype, "hostClasses", null);
    __decorate([
        HostListener('window:resize')
    ], SmartSliderVerticalComponent.prototype, "onResize", null);
    SmartSliderVerticalComponent = __decorate([
        Component({
            selector: 'smart-slider-vertical',
            template: "<div class=\"container\" [ngStyle]=\"{'height': height, 'width': containerWidth}\">\r\n  <div *ngIf=\"_showPrevious\" class=\"arrow arrow-prev\" (click)=\"onPrevious()\" [class.arrow-disabled]=\"isPreviousDisabled()\"></div>\r\n  <div class=\"items\" [@slideInOut]=\"smartSliderService.itemIndex\" (@slideInOut.done)=\"onTransitionEnd()\">\r\n    <ng-container *ngFor=\"let item of _items; let i=index\">\r\n      <div *ngIf=\"show(item)\" class=\"img-with-text\" [ngStyle]=\"{'margin': _itemMargin}\">\r\n        <div [className]=\"isLast(item) ? 'enter-item' : 'item'\">\r\n          <img *ngIf=\"item.image\" src=\"{{item.image}}\" alt=\"{{item.image}}\" class=\"slider-image\" [ngStyle]=\"{'height': smartSliderService.itemHeight, 'width': _width}\" (click)=\"onItemClick(item)\" draggable=\"false\" />\r\n          <span *ngIf=\"item.text\" (click)=\"onItemClick(item)\" class=\"{{_textPosition}}\">\r\n            {{item.text}}\r\n          </span>   \r\n        </div>        \r\n      </div>      \r\n    </ng-container>\r\n\r\n  </div>\r\n  <div *ngIf=\"_showNext\" class=\"arrow arrow-next\" (click)=\"onNext()\" [class.arrow-disabled]=\"isNextDisabled()\"></div>\r\n</div>\r\n",
            animations: [
                trigger('slideInOut', [
                    transition(':increment', top, { params: { inWidth: '100%', inHeight: '100%', inTiming: '1' } }),
                    transition(':decrement', bottom, { params: { inWidth: '100%', inHeight: '100%', inTiming: '1' } }),
                ]),
            ],
            styles: [":host{display:block;height:100%}.container{position:absolute;overflow:hidden;height:100%;cursor:-webkit-grab;cursor:grab}.slider-image{opacity:.8}.slider-image:hover{opacity:.9}.enter-item,.item{display:block;position:relative;text-align:center;color:#000}.bottom-left{position:absolute;bottom:8px;left:16px}.top-left{position:absolute;top:8px;left:16px}.top-right{position:absolute;top:8px;right:16px}.bottom-right{position:absolute;bottom:8px;right:16px}.centered{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}.items{display:inline-block}.items-left{transition:transform .2s}.img-with-text{cursor:pointer;align-items:center;vertical-align:top}.img-with-text img{border-radius:10px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-bottom{margin-left:-110px;margin-bottom:-20px}.arrow{text-align:center;width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:center;border-radius:100px;position:absolute;right:36%;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}.arrow-prev{transform:rotate(90deg);top:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}.arrow-next{transform:rotate(90deg);bottom:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}.arrow-disabled{cursor:default;opacity:.5}"]
        })
    ], SmartSliderVerticalComponent);
    return SmartSliderVerticalComponent;
}());
export { SmartSliderVerticalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLXZlcnRpY2FsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbWFydC1zbGlkZXIvIiwic291cmNlcyI6WyJsaWIvc21hcnQtc2xpZGVyL3NtYXJ0LXNsaWRlci12ZXJ0aWNhbC9zbWFydC1zbGlkZXItdmVydGljYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUc3RCxJQUFJLE1BQU0sR0FBRztJQUNYLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3pGLEtBQUssQ0FBQztRQUVKLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQzVDLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztRQUNGLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkksUUFBUSxFQUFFLElBQUk7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QUssQ0FBQyxrQkFBa0IsQ0FBQzt3RUFHekI7SUFJRDtRQURDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzswRUFHM0I7SUFJRDtRQURDLEtBQUssQ0FBQyxPQUFPLENBQUM7NkRBR2Q7SUFHRDtRQURDLE1BQU0sRUFBRTtnRUFDMkM7SUFHckQ7UUFERSxXQUFXLENBQUMsT0FBTyxDQUFDO21FQUtwQjtJQUdEO1FBREMsWUFBWSxDQUFDLGVBQWUsQ0FBQztnRUFHN0I7SUFwSFUsNEJBQTRCO1FBWHhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsK3FDQUFxRDtZQUVyRCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTtvQkFDcEIsVUFBVSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBQyxFQUFDLENBQUM7b0JBQzNGLFVBQVUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUMsRUFBQyxDQUFDO2lCQUMvRixDQUFDO2FBQ0g7O1NBQ0YsQ0FBQztPQUNXLDRCQUE0QixDQWlMeEM7SUFBRCxtQ0FBQztDQUFBLEFBakxELElBaUxDO1NBakxZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHF1ZXJ5LCBzdHlsZSwgYW5pbWF0ZSwgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFNtYXJ0U2xpZGVyU2VydmljZSB9IGZyb20gJy4uL3NtYXJ0LXNsaWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFNtYXJ0U2xpZGVySXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9zbWFydC1zbGlkZXItaXRlbSc7XG5cbmxldCBib3R0b20gPSBbXG4gIHF1ZXJ5KCc6ZW50ZXIsIDpsZWF2ZScsIHN0eWxlKHsgcG9zaXRpb246ICdmaXhlZCcsIGhlaWdodDogJzEwMCUnIH0pLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICBncm91cChbXG5cbiAgICBxdWVyeSgnOmxlYXZlJywgW3N0eWxlKHsgZGlzcGxheTogJ25vbmUnIH0pXSwge1xuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgfSksXG4gICAgcXVlcnkoJy5pdGVtJywgW3N0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSksIGFuaW1hdGUoJ3t7aW5UaW1pbmd9fXMgZWFzZS1vdXQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknIH0pKV0sIHtcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgIH0pLFxuICAgIHF1ZXJ5KCc6ZW50ZXInLCBbc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKScgfSksIGFuaW1hdGUoJ3t7aW5UaW1pbmd9fXMgZWFzZS1vdXQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pKV0sIHtcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgIH0pLFxuICBdKSxcblxuXTtcblxubGV0IHRvcCA9IFtcbiAgcXVlcnkoJzplbnRlciwgOmxlYXZlJywgc3R5bGUoeyBwb3NpdGlvbjogJ2ZpeGVkJywgaGVpZ2h0OiAnMTAwJScgfSksIHsgb3B0aW9uYWw6IHRydWUgfSksXG4gIGdyb3VwKFtcbiAgICBxdWVyeSgnOmxlYXZlJywgW3N0eWxlKHsgZGlzcGxheTogJ25vbmUnIH0pXSwge1xuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgfSksXG4gICAgcXVlcnkoJy5pdGVtJywgW3N0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfSksIGFuaW1hdGUoJ3t7aW5UaW1pbmd9fXMgZWFzZS1vdXQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pKV0sIHtcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgIH0pLFxuICAgIHF1ZXJ5KCc6ZW50ZXInLCBbc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyB9KSwgYW5pbWF0ZSgne3tpblRpbWluZ319cyBlYXNlLW91dCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSkpXSwge1xuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgfSksXG4gIF0pLFxuXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc21hcnQtc2xpZGVyLXZlcnRpY2FsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LXNsaWRlci12ZXJ0aWNhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NtYXJ0LXNsaWRlci12ZXJ0aWNhbC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2xpZGVJbk91dCcsIFtcbiAgICAgIHRyYW5zaXRpb24oJzppbmNyZW1lbnQnLCB0b3AsIHtwYXJhbXM6IHtpbldpZHRoOiAnMTAwJScsIGluSGVpZ2h0OiAnMTAwJScsIGluVGltaW5nOiAnMSd9fSksXG4gICAgICB0cmFuc2l0aW9uKCc6ZGVjcmVtZW50JywgYm90dG9tLCB7cGFyYW1zOiB7aW5XaWR0aDogJzEwMCUnLCBpbkhlaWdodDogJzEwMCUnLCBpblRpbWluZzogJzEnfX0pLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTbWFydFNsaWRlclZlcnRpY2FsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBfaXRlbXM9bmV3IEFycmF5PFNtYXJ0U2xpZGVySXRlbT4oKTtcbiAgQElucHV0KCdpdGVtcycpXG4gIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8U21hcnRTbGlkZXJJdGVtPikgeyAgICBcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICAgIHRoaXMuc21hcnRTbGlkZXJTZXJ2aWNlLnNldEl0ZW1zKHRoaXMuX2l0ZW1zLCB0aGlzLl9jZWxsTGltaXQpO1xuICB9XG5cbiAgX3Nob3dQcmV2aW91czogYm9vbGVhbj10cnVlO1xuICBASW5wdXQoJ3Nob3dQcmV2aW91cycpXG4gIHNldCBzaG93UHJldmlvdXModmFsdWU6IGJvb2xlYW4pIHsgICAgXG4gICAgdGhpcy5fc2hvd1ByZXZpb3VzID0gdmFsdWU7XG4gIH1cblxuICBfc2hvd05leHQ6IGJvb2xlYW49dHJ1ZTtcbiAgQElucHV0KCdzaG93TmV4dCcpXG4gIHNldCBzaG93TmV4dCh2YWx1ZTogYm9vbGVhbikgeyAgICBcbiAgICB0aGlzLl9zaG93TmV4dCA9IHZhbHVlO1xuICB9XG5cbiAgX3Nob3dEb3RzOiBib29sZWFuPWZhbHNlO1xuICBASW5wdXQoJ3Nob3dEb3RzJylcbiAgc2V0IHNob3dEb3RzKHZhbHVlOiBib29sZWFuKSB7ICAgIFxuICAgIHRoaXMuX3Nob3dEb3RzID0gdmFsdWU7XG4gIH1cblxuICBfYXV0b3BsYXk6IGJvb2xlYW49ZmFsc2U7XG4gIEBJbnB1dCgnYXV0b3BsYXknKVxuICBzZXQgYXV0b3BsYXkodmFsdWU6IGJvb2xlYW4pIHsgICAgXG4gICAgdGhpcy5fYXV0b3BsYXkgPSB2YWx1ZTtcbiAgfVxuXG4gIF9sb29wOiBib29sZWFuPWZhbHNlO1xuICBASW5wdXQoJ2xvb3AnKVxuICBzZXQgbG9vcCh2YWx1ZTogYm9vbGVhbikgeyAgICBcbiAgICB0aGlzLnNtYXJ0U2xpZGVyU2VydmljZS5pc0xvb3AgPSB2YWx1ZTsgXG4gICAgdGhpcy5fbG9vcCA9IHZhbHVlO1xuICB9XG5cbiAgX3BhdXNlT25Ib3ZlcjogYm9vbGVhbj1mYWxzZTtcbiAgQElucHV0KCdwYXVzZU9uSG92ZXInKVxuICBzZXQgcGF1c2VPbkhvdmVyKHZhbHVlOiBib29sZWFuKSB7ICAgIFxuICAgIHRoaXMuX3BhdXNlT25Ib3ZlciA9IHZhbHVlO1xuICB9XG4gIFxuICBfaXRlbU1hcmdpbjogc3RyaW5nPScxMHB4JztcbiAgQElucHV0KCdpdGVtTWFyZ2luJylcbiAgc2V0IGl0ZW1NYXJnaW4odmFsdWU6IHN0cmluZykgeyAgICBcbiAgICB0aGlzLl9pdGVtTWFyZ2luID0gdmFsdWU7XG4gIH1cblxuICBfaXRlbVBhZGRpbmc6IHN0cmluZz0nMHB4JztcbiAgQElucHV0KCdpdGVtUGFkZGluZycpXG4gIHNldCBpdGVtUGFkZGluZyh2YWx1ZTogc3RyaW5nKSB7ICAgIFxuICAgIHRoaXMuX2l0ZW1QYWRkaW5nID0gdmFsdWU7XG4gIH1cblxuICBfdGV4dFBvc2l0aW9uOiBzdHJpbmc9J2NlbnRlcmVkJztcbiAgQElucHV0KCd0ZXh0UG9zaXRpb24nKVxuICBzZXQgdGV4dFBvc2l0aW9uKHZhbHVlOiAnY2VudGVyZWQtdG9wJyB8ICdjZW50ZXJlZC1ib3R0b20nIHwgJ2NlbnRlcmVkJyB8ICdib3R0b20tcmlnaHQgJyB8ICd0b3AtcmlnaHQnIHwgJ3RvcC1sZWZ0JyB8ICdib3R0b20tbGVmdCcpIHsgICAgXG4gICAgdGhpcy5fdGV4dFBvc2l0aW9uID0gdmFsdWU7XG4gIH1cblxuICBfdGV4dENvbG9yOiBzdHJpbmc9J2JsYWNrJztcbiAgQElucHV0KCd0ZXh0Q29sb3InKVxuICBzZXQgdGV4dENvbG9yKHZhbHVlOiBzdHJpbmcpIHsgICAgXG4gICAgdGhpcy5fdGV4dENvbG9yID0gdmFsdWU7XG4gIH1cblxuICBfY2VsbExpbWl0OiBudW1iZXI9MTtcbiAgQElucHV0KCdjZWxsTGltaXQnKVxuICBzZXQgY2VsbExpbWl0KHZhbHVlOiBudW1iZXIpIHsgICAgXG4gICAgdGhpcy5fY2VsbExpbWl0ID0gdmFsdWU7XG4gICAgdGhpcy5zbWFydFNsaWRlclNlcnZpY2Uuc2V0SXRlbXModGhpcy5faXRlbXMsIHRoaXMuX2NlbGxMaW1pdCk7XG4gIH0gICAgICBcblxuICBfd2lkdGg6IHN0cmluZz0nMTAwJSc7XG4gIGNvbnRhaW5lcldpZHRoOiBzdHJpbmc9JzEwMCUnO1xuICBASW5wdXQoJ3dpZHRoJylcbiAgc2V0IHdpZHRoKHZhbHVlOiBzdHJpbmcpIHsgICAgXG4gICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnRhaW5lcldpZHRoID0gTnVtYmVyLnBhcnNlSW50KHZhbHVlKSs0MCsncHgnO1xuICB9XG5cbiAgX2F1dG9wbGF5SW50ZXJ2YWw6IG51bWJlcj0yMDAwO1xuICBASW5wdXQoJ2F1dG9wbGF5SW50ZXJ2YWwnKVxuICBzZXQgYXV0b3BsYXlJbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7ICAgIFxuICAgIHRoaXMuX2F1dG9wbGF5SW50ZXJ2YWwgPSB2YWx1ZTtcbiAgfVxuXG4gIF90cmFuc2l0aW9uRHVyYXRpb246IG51bWJlcj0wLjM7XG4gIEBJbnB1dCgndHJhbnNpdGlvbkR1cmF0aW9uJylcbiAgc2V0IHRyYW5zaXRpb25EdXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7ICAgIFxuICAgIHRoaXMuX3RyYW5zaXRpb25EdXJhdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgX2NsYXNzOiBzdHJpbmc9Jyc7XG4gIEBJbnB1dCgnY2xhc3MnKVxuICBzZXQgY2xhc3ModmFsdWU6IHN0cmluZykgeyAgICBcbiAgICB0aGlzLl9jbGFzcyA9IHZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcblx0Z2V0IGhvc3RDbGFzc2VzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFtcbiAgICAgIHRoaXMuX2NsYXNzXG5cdFx0XS5qb2luKCcgJyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5yZXNpemUoKTtcbiAgfVxuXG4gIGhlaWdodCA9ICcxMDAlJztcbiAgaXNOZXh0ID0gZmFsc2U7XG4gIHNtYXJ0U2xpZGVyU2VydmljZSA9IG5ldyBTbWFydFNsaWRlclNlcnZpY2UoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHsgXG4gICAgXG4gIH0gIFxuXG4gIGdldCBzbGlkZUluT3V0KCkge1xuICAgIHJldHVybiB7dmFsdWU6IHRoaXMuc21hcnRTbGlkZXJTZXJ2aWNlLml0ZW1JbmRleCwgcGFyYW1zOiB7aW5XaWR0aDogdGhpcy5fd2lkdGgsIGluSGVpZ2h0OiB0aGlzLmhlaWdodCwgaW5UaW1pbmc6IHRoaXMuX3RyYW5zaXRpb25EdXJhdGlvbn19O1xuICB9ICBcblxuXG4gIHByaXZhdGUgcmVzaXplKCkgeyAgICBcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcblxuICAgIHRoaXMuaGVpZ2h0ID0gKHBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSsncHgnO1xuICAgIHRoaXMuc21hcnRTbGlkZXJTZXJ2aWNlLnNldEhlaWdodChwYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodCk7ICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zbWFydFNsaWRlclNlcnZpY2Uuc2V0SXRlbXModGhpcy5faXRlbXMsIHRoaXMuX2NlbGxMaW1pdCk7ICAgIFxuICAgIHRoaXMucmVzaXplKCk7XG4gIH1cblxuICBvbkl0ZW1DbGljayhzZWxlY3RlZDogYW55KSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChzZWxlY3RlZCk7XG4gIH1cblxuICBpc05leHREaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zbWFydFNsaWRlclNlcnZpY2UuaXRlbUluZGV4ID09PSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgaXNQcmV2aW91c0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLnNtYXJ0U2xpZGVyU2VydmljZS5pdGVtSW5kZXg9PT0wO1xuICB9XG5cbiAgc2hvdyhpdGVtOiBTbWFydFNsaWRlckl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5zbWFydFNsaWRlclNlcnZpY2UuaXRlbXNUb1Nob3cuaW5jbHVkZXMoaXRlbSk7XG4gIH1cblxuICBvbk5leHQoKSB7XG4gICAgY29uc29sZS5sb2coJ2l0ZW1JbmRleCcsIHRoaXMuc21hcnRTbGlkZXJTZXJ2aWNlLml0ZW1JbmRleCk7XG4gICAgdGhpcy5zbWFydFNsaWRlclNlcnZpY2UubW92ZU5leHQoKTtcbiAgICB0aGlzLmlzTmV4dCA9IHRydWU7XG4gIH1cblxuICBvblByZXZpb3VzKCkge1xuICAgIHRoaXMuc21hcnRTbGlkZXJTZXJ2aWNlLm1vdmVQcmV2aW91cygpO1xuICAgIHRoaXMuaXNOZXh0ID0gZmFsc2U7XG4gIH1cblxuICBpc0xhc3QoaXRlbSkgeyAgICBcbiAgICByZXR1cm4gdGhpcy5zbWFydFNsaWRlclNlcnZpY2UuaXRlbXNUb1Nob3dbdGhpcy5pc05leHQ/dGhpcy5zbWFydFNsaWRlclNlcnZpY2UuaXRlbXNUb1Nob3cubGVuZ3RoLTE6MF0gPT09IGl0ZW07XG4gIH1cblxuICBvblRyYW5zaXRpb25FbmQoKSB7XG4gICAgdGhpcy5zbWFydFNsaWRlclNlcnZpY2Uuc2xpZGVyRG9uZSgpO1xuICB9XG59XG4iXX0=