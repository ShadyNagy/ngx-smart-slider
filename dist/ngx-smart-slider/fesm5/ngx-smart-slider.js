import { __decorate, __spread } from 'tslib';
import { EventEmitter, Input, Output, HostBinding, Component, ɵɵdefineInjectable, Injectable, ElementRef, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { query, style, group, animate, trigger, transition } from '@angular/animations';

var SmartSliderComponent = /** @class */ (function () {
    function SmartSliderComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this._vertical = false;
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
        this._width = '100%';
        this._autoplayInterval = 2000;
        this._transitionDuration = 0.3;
        this._class = '';
        this.select = new EventEmitter();
    }
    Object.defineProperty(SmartSliderComponent.prototype, "vertical", {
        set: function (value) {
            this._vertical = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "items", {
        set: function (value) {
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "showPrevious", {
        set: function (value) {
            this._showPrevious = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "showNext", {
        set: function (value) {
            this._showNext = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "showDots", {
        set: function (value) {
            this._showDots = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "autoplay", {
        set: function (value) {
            this._autoplay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "loop", {
        set: function (value) {
            this._loop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "pauseOnHover", {
        set: function (value) {
            this._pauseOnHover = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "itemMargin", {
        set: function (value) {
            this._itemMargin = value + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "itemPadding", {
        set: function (value) {
            this._itemPadding = value + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "textPosition", {
        set: function (value) {
            this._textPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "textColor", {
        set: function (value) {
            this._textColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "cellLimit", {
        set: function (value) {
            this._cellLimit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "height", {
        set: function (value) {
            this._height = value + 10 + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "width", {
        set: function (value) {
            this._width = value + 10 + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "autoplayInterval", {
        set: function (value) {
            this._autoplayInterval = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "transitionDuration", {
        set: function (value) {
            this._transitionDuration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "class", {
        set: function (value) {
            this._class = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "hostStyles", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustStyle([
                "height: " + this._height
            ].join(';'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderComponent.prototype, "hostClasses", {
        get: function () {
            return [
                this._class
            ].join(' ');
        },
        enumerable: true,
        configurable: true
    });
    SmartSliderComponent.prototype.onSelect = function (event) {
        this.select.emit(event);
    };
    SmartSliderComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    __decorate([
        Input('vertical')
    ], SmartSliderComponent.prototype, "vertical", null);
    __decorate([
        Input('items')
    ], SmartSliderComponent.prototype, "items", null);
    __decorate([
        Input('showPrevious')
    ], SmartSliderComponent.prototype, "showPrevious", null);
    __decorate([
        Input('showNext')
    ], SmartSliderComponent.prototype, "showNext", null);
    __decorate([
        Input('showDots')
    ], SmartSliderComponent.prototype, "showDots", null);
    __decorate([
        Input('autoplay')
    ], SmartSliderComponent.prototype, "autoplay", null);
    __decorate([
        Input('loop')
    ], SmartSliderComponent.prototype, "loop", null);
    __decorate([
        Input('pauseOnHover')
    ], SmartSliderComponent.prototype, "pauseOnHover", null);
    __decorate([
        Input('itemMargin')
    ], SmartSliderComponent.prototype, "itemMargin", null);
    __decorate([
        Input('itemPadding')
    ], SmartSliderComponent.prototype, "itemPadding", null);
    __decorate([
        Input('textPosition')
    ], SmartSliderComponent.prototype, "textPosition", null);
    __decorate([
        Input('textColor')
    ], SmartSliderComponent.prototype, "textColor", null);
    __decorate([
        Input('cellLimit')
    ], SmartSliderComponent.prototype, "cellLimit", null);
    __decorate([
        Input('height')
    ], SmartSliderComponent.prototype, "height", null);
    __decorate([
        Input('width')
    ], SmartSliderComponent.prototype, "width", null);
    __decorate([
        Input('autoplayInterval')
    ], SmartSliderComponent.prototype, "autoplayInterval", null);
    __decorate([
        Input('transitionDuration')
    ], SmartSliderComponent.prototype, "transitionDuration", null);
    __decorate([
        Input('class')
    ], SmartSliderComponent.prototype, "class", null);
    __decorate([
        Output()
    ], SmartSliderComponent.prototype, "select", void 0);
    __decorate([
        HostBinding('style')
    ], SmartSliderComponent.prototype, "hostStyles", null);
    __decorate([
        HostBinding('class')
    ], SmartSliderComponent.prototype, "hostClasses", null);
    SmartSliderComponent = __decorate([
        Component({
            selector: 'smart-slider',
            template: "<smart-slider-horizontal *ngIf=\"!_vertical\" [textColor]=\"_textColor\" [textPosition]=\"_textPosition\" [itemMargin]=\"_itemMargin\" [cellLimit]=\"_cellLimit\" [transitionDuration]=\"_transitionDuration\" [height]=\"_height\" [items]=\"_items\" [showPrevious]=\"_showPrevious\" [showNext]=\"_showNext\" (select)=\"onSelect($event)\"></smart-slider-horizontal>\r\n<smart-slider-vertical *ngIf=\"_vertical\" [textColor]=\"_textColor\" [textPosition]=\"_textPosition\" [itemMargin]=\"_itemMargin\" [cellLimit]=\"_cellLimit\" [transitionDuration]=\"_transitionDuration\" [width]=\"_width\" [items]=\"_items\" [showPrevious]=\"_showPrevious\" [showNext]=\"_showNext\" (select)=\"onSelect($event)\"></smart-slider-vertical>",
            styles: [":host{display:block;width:100%}.container{position:absolute;overflow:hidden;width:100%;cursor:-webkit-grab;cursor:grab}.slider-image{opacity:.8}.slider-image:hover{opacity:.9}.enter-item,.item{display:block;position:relative;text-align:center;color:#000}.bottom-left{position:absolute;bottom:8px;left:16px}.top-left{position:absolute;top:8px;left:16px}.top-right{position:absolute;top:8px;right:16px}.bottom-right{position:absolute;bottom:8px;right:16px}.centered{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}.items-left{transition:transform .2s}.img-with-text{display:inline-flex;cursor:pointer;align-items:center;vertical-align:top}.img-with-text img{border-radius:10px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-bottom{margin-left:-110px;margin-bottom:-20px}.arrow{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:center;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}.arrow-prev{transform:rotate(90deg);left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}.arrow-next{transform:rotate(90deg);right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}.arrow-disabled{cursor:default;opacity:.5}"]
        })
    ], SmartSliderComponent);
    return SmartSliderComponent;
}());

var SmartSliderService = /** @class */ (function () {
    function SmartSliderService() {
        this.itemsToShow = new Array();
        this.itemIndex = 0;
        this.width = 0;
        this.height = 0;
        this.margin = 0;
        this.horizontalMargin = 0;
        this.verticalMargin = 0;
        this.isLoop = false;
        this.limit = 0;
        this.sliderMoving = false;
        this.items = new Array();
    }
    Object.defineProperty(SmartSliderService.prototype, "maxIndex", {
        get: function () {
            return this.items.length > this.limit ? this.items.length - this.limit : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderService.prototype, "itemWidth", {
        get: function () {
            return this.width / (this.horizontalMargin * 2 * this.limit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSliderService.prototype, "itemHeight", {
        get: function () {
            return this.height / (this.verticalMargin * 2 * this.limit);
        },
        enumerable: true,
        configurable: true
    });
    SmartSliderService.getNodeByClassNameInsideElementRef = function (element, className) {
        // tslint:disable-next-line: prefer-for-of
        for (var index = 0; index < element.nativeElement.childNodes.length; index++) {
            var childNode = element.nativeElement.childNodes[index];
            if ((childNode === null || childNode === void 0 ? void 0 : childNode.classList) && childNode.classList.findIndex(function (x) { return x === className; }) > -1) {
                return childNode;
            }
        }
        return null;
    };
    SmartSliderService.getNodeWidthByClassNameInsideElementRef = function (element, className) {
        var node = this.getNodeByClassNameInsideElementRef(element, className);
        if (!node) {
            return 0;
        }
        return node.clientWidth;
    };
    SmartSliderService.getNodeHeightByClassNameInsideElementRef = function (element, className) {
        var node = this.getNodeByClassNameInsideElementRef(element, className);
        if (!node) {
            return 0;
        }
        return node.clientHeight;
    };
    SmartSliderService.getNodeByIdInsideElementRef = function (element, id) {
        // tslint:disable-next-line: prefer-for-of
        for (var index = 0; index < element.nativeElement.childNodes.length; index++) {
            var childNode = element.nativeElement.childNodes[index];
            if (childNode && childNode.id === id) {
                return childNode;
            }
        }
        return null;
    };
    SmartSliderService.getNodeWidthByIdInsideElementRef = function (element, id) {
        var node = this.getNodeByIdInsideElementRef(element, id);
        if (!node) {
            return 0;
        }
        return node.clientWidth;
    };
    SmartSliderService.getNodeHeightByIdInsideElementRef = function (element, id) {
        var node = this.getNodeByIdInsideElementRef(element, id);
        if (!node) {
            return 0;
        }
        return node.clientHeight;
    };
    SmartSliderService.getNodeByClassNameInsideNativeElement = function (element, className) {
        // tslint:disable-next-line: prefer-for-of
        for (var index = 0; index < element.childNodes.length; index++) {
            var childNode = element.childNodes[index];
            if ((childNode === null || childNode === void 0 ? void 0 : childNode.classList) && childNode.classList.findIndex(function (x) { return x === className; }) > -1) {
                return childNode;
            }
        }
        return null;
    };
    SmartSliderService.getNodeWidthByClassNameInsideNativeElement = function (element, className) {
        var node = this.getNodeByClassNameInsideNativeElement(element, className);
        if (!node) {
            return 0;
        }
        return node.clientWidth;
    };
    SmartSliderService.getNodeHeightByClassNameInsideNativeElement = function (element, className) {
        var node = this.getNodeByClassNameInsideNativeElement(element, className);
        if (!node) {
            return 0;
        }
        return node.clientHeight;
    };
    SmartSliderService.getNodeByIdInsideNativeElement = function (element, id) {
        // tslint:disable-next-line: prefer-for-of
        for (var index = 0; index < element.childNodes.length; index++) {
            var childNode = element.childNodes[index];
            if (childNode && childNode.id === id) {
                return childNode;
            }
        }
        return null;
    };
    SmartSliderService.getNodeWidthByIdInsideNativeElement = function (element, id) {
        var node = this.getNodeByIdInsideNativeElement(element, id);
        if (!node) {
            return 0;
        }
        return node.clientWidth;
    };
    SmartSliderService.getNodeHeightByIdInsideNativeElement = function (element, id) {
        var node = this.getNodeByIdInsideNativeElement(element, id);
        if (!node) {
            return 0;
        }
        return node.clientHeight;
    };
    SmartSliderService.randomHexWord = function () {
        return Math.floor(Math.random() * 16777215).toString(16);
    };
    SmartSliderService.prototype.getId = function (item, smartSliderOptions) {
        var _a, _b;
        if ((_a = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _a === void 0 ? void 0 : _a.idMap) {
            return item.data[(_b = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _b === void 0 ? void 0 : _b.idMap];
        }
        return item.id;
    };
    SmartSliderService.prototype.getText = function (item, smartSliderOptions) {
        var _a, _b;
        if ((_a = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _a === void 0 ? void 0 : _a.textMap) {
            return item.data[(_b = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _b === void 0 ? void 0 : _b.textMap];
        }
        return item.text;
    };
    SmartSliderService.prototype.getImage = function (item, smartSliderOptions) {
        var _a, _b;
        if ((_a = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _a === void 0 ? void 0 : _a.imageMap) {
            return item.data[(_b = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _b === void 0 ? void 0 : _b.imageMap];
        }
        return item.image;
    };
    SmartSliderService.prototype.getAlt = function (item, smartSliderOptions) {
        var _a, _b;
        if ((_a = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _a === void 0 ? void 0 : _a.altMap) {
            return item.data[(_b = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _b === void 0 ? void 0 : _b.altMap];
        }
        return item.alt;
    };
    SmartSliderService.prototype.setLimit = function (count) {
        this.limit = count;
    };
    SmartSliderService.prototype.getLimit = function () {
        return this.limit;
    };
    SmartSliderService.prototype.setHorizontalMargin = function (margin) {
        this.horizontalMargin = margin;
    };
    SmartSliderService.prototype.setVerticalMargin = function (margin) {
        this.verticalMargin = margin;
    };
    SmartSliderService.prototype.setWidth = function (width) {
        this.width = width;
    };
    SmartSliderService.prototype.setHeight = function (height) {
        this.height = height;
    };
    SmartSliderService.prototype.setItems = function (items, limit) {
        if (limit === void 0) { limit = null; }
        if (limit == null) {
            this.limit = items.length;
        }
        else {
            this.limit = limit;
        }
        this.items = items;
        this.updateItemsToShow();
    };
    SmartSliderService.prototype.moveNext = function () {
        if (this.sliderMoving) {
            return;
        }
        this.updateItemIndexNext();
        this.updateItemsToShow();
    };
    SmartSliderService.prototype.movePrevious = function () {
        if (this.sliderMoving) {
            return;
        }
        this.updateItemIndexPrevious();
        this.updateItemsToShow();
    };
    SmartSliderService.prototype.sliderDone = function () {
        this.sliderMoving = false;
    };
    SmartSliderService.prototype.updateItemsToShow = function () {
        this.itemsToShow = new Array();
        var cnt = this.itemIndex;
        for (var index = 0; index < this.limit; index++) {
            var item = this.items[cnt];
            if (index < this.items.length) {
                this.itemsToShow.push(item);
            }
            else {
                if (this.isLoop) {
                    cnt = 0;
                    this.itemsToShow.push(item);
                }
            }
            cnt++;
        }
    };
    SmartSliderService.prototype.updateItemIndexNext = function () {
        if (this.isLoop) {
            if (this.itemIndex >= this.maxIndex) {
                this.itemIndex = 0;
            }
            else {
                this.itemIndex++;
                this.sliderMoving = true;
            }
        }
        else {
            if (this.itemIndex < this.maxIndex) {
                this.itemIndex++;
                this.sliderMoving = true;
            }
        }
    };
    SmartSliderService.prototype.updateItemIndexPrevious = function () {
        if (this.isLoop) {
            if (this.itemIndex <= 0) {
                this.itemIndex = 0;
            }
            else {
                this.itemIndex--;
                this.sliderMoving = true;
            }
        }
        else {
            if (this.itemIndex > 0) {
                this.itemIndex--;
                this.sliderMoving = true;
            }
        }
    };
    SmartSliderService.ɵprov = ɵɵdefineInjectable({ factory: function SmartSliderService_Factory() { return new SmartSliderService(); }, token: SmartSliderService, providedIn: "root" });
    SmartSliderService = __decorate([
        Injectable({ providedIn: 'root' })
    ], SmartSliderService);
    return SmartSliderService;
}());

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

var imports = [
    SmartSliderModule,
];
var NgxSmartSliderModule = /** @class */ (function () {
    function NgxSmartSliderModule() {
    }
    NgxSmartSliderModule = __decorate([
        NgModule({
            declarations: [],
            imports: __spread([
                CommonModule
            ], imports),
            exports: __spread(imports)
        })
    ], NgxSmartSliderModule);
    return NgxSmartSliderModule;
}());

/*
 * Public API Surface of ngx-smart-slider
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxSmartSliderModule, SmartSliderComponent, SmartSliderHorizontalV2Component, SmartSliderModule, SmartSliderService, SmartSliderVerticalV2Component, SmartSliderHorizontalComponent as ɵa, SmartSliderVerticalComponent as ɵb };
//# sourceMappingURL=ngx-smart-slider.js.map
