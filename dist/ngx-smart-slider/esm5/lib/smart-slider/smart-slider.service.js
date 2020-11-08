import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    SmartSliderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SmartSliderService_Factory() { return new SmartSliderService(); }, token: SmartSliderService, providedIn: "root" });
    SmartSliderService = __decorate([
        Injectable({ providedIn: 'root' })
    ], SmartSliderService);
    return SmartSliderService;
}());
export { SmartSliderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc21hcnQtc2xpZGVyLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LXNsaWRlci9zbWFydC1zbGlkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLdkQ7SUFlRTtRQWJBLGdCQUFXLEdBQUcsSUFBSSxLQUFLLEVBQW1CLENBQUM7UUFDM0MsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRVAsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFVBQUssR0FBRyxJQUFJLEtBQUssRUFBbUIsQ0FBQztJQUU3QixDQUFDO0lBRWpCLHNCQUFJLHdDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FB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SSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7YUFDcEI7aUJBQUs7Z0JBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUMxQjtTQUNGO2FBQUs7WUFDSixJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDOztJQWhTVSxrQkFBa0I7UUFEOUIsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLGtCQUFrQixDQWlTOUI7NkJBdFNEO0NBc1NDLEFBalNELElBaVNDO1NBalNZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNtYXJ0U2xpZGVySXRlbSB9IGZyb20gJy4uL21vZGVscy9zbWFydC1zbGlkZXItaXRlbSc7XG5pbXBvcnQgeyBJU21hcnRTbGlkZXJPcHRpb25zSW50ZXJuYWwgfSBmcm9tICcuLi9tb2RlbHMvc21hcnQtc2xpZGVyLW9wdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNtYXJ0U2xpZGVyU2VydmljZSB7XG5cbiAgaXRlbXNUb1Nob3cgPSBuZXcgQXJyYXk8U21hcnRTbGlkZXJJdGVtPigpO1xuICBpdGVtSW5kZXggPSAwO1xuICB3aWR0aCA9IDA7XG4gIGhlaWdodCA9IDA7XG4gIG1hcmdpbiA9IDA7XG4gIGhvcml6b250YWxNYXJnaW4gPSAwO1xuICB2ZXJ0aWNhbE1hcmdpbiA9IDA7XG4gIGlzTG9vcCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgbGltaXQgPSAwO1xuICBwcml2YXRlIHNsaWRlck1vdmluZyA9IGZhbHNlO1xuICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PFNtYXJ0U2xpZGVySXRlbT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdldCBtYXhJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGggPiB0aGlzLmxpbWl0ID8gdGhpcy5pdGVtcy5sZW5ndGggLSB0aGlzLmxpbWl0IDogMDtcbiAgfVxuXG4gIGdldCBpdGVtV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGggLyAodGhpcy5ob3Jpem9udGFsTWFyZ2luICogMiAqIHRoaXMubGltaXQpO1xuICB9XG5cbiAgZ2V0IGl0ZW1IZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0IC8gKHRoaXMudmVydGljYWxNYXJnaW4gKiAyICogdGhpcy5saW1pdCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0Tm9kZUJ5Q2xhc3NOYW1lSW5zaWRlRWxlbWVudFJlZihlbGVtZW50OiBFbGVtZW50UmVmLCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XTtcbiAgICAgIGlmIChjaGlsZE5vZGU/LmNsYXNzTGlzdCAmJiBjaGlsZE5vZGUuY2xhc3NMaXN0LmZpbmRJbmRleCh4ID0+IHggPT09IGNsYXNzTmFtZSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldE5vZGVXaWR0aEJ5Q2xhc3NOYW1lSW5zaWRlRWxlbWVudFJlZihlbGVtZW50OiBFbGVtZW50UmVmLCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGVCeUNsYXNzTmFtZUluc2lkZUVsZW1lbnRSZWYoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgc3RhdGljIGdldE5vZGVIZWlnaHRCeUNsYXNzTmFtZUluc2lkZUVsZW1lbnRSZWYoZWxlbWVudDogRWxlbWVudFJlZiwgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlQnlDbGFzc05hbWVJbnNpZGVFbGVtZW50UmVmKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZS5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0Tm9kZUJ5SWRJbnNpZGVFbGVtZW50UmVmKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIGlkOiBzdHJpbmcpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoY2hpbGROb2RlICYmIGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXROb2RlV2lkdGhCeUlkSW5zaWRlRWxlbWVudFJlZihlbGVtZW50OiBFbGVtZW50UmVmLCBpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5SWRJbnNpZGVFbGVtZW50UmVmKGVsZW1lbnQsIGlkKTtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgc3RhdGljIGdldE5vZGVIZWlnaHRCeUlkSW5zaWRlRWxlbWVudFJlZihlbGVtZW50OiBFbGVtZW50UmVmLCBpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5SWRJbnNpZGVFbGVtZW50UmVmKGVsZW1lbnQsIGlkKTtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlLmNsaWVudEhlaWdodDtcbiAgfVxuXG4gIHN0YXRpYyBnZXROb2RlQnlDbGFzc05hbWVJbnNpZGVOYXRpdmVFbGVtZW50KGVsZW1lbnQ6IGFueSwgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gZWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XTtcbiAgICAgIGlmIChjaGlsZE5vZGU/LmNsYXNzTGlzdCAmJiBjaGlsZE5vZGUuY2xhc3NMaXN0LmZpbmRJbmRleCh4ID0+IHggPT09IGNsYXNzTmFtZSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldE5vZGVXaWR0aEJ5Q2xhc3NOYW1lSW5zaWRlTmF0aXZlRWxlbWVudChlbGVtZW50OiBhbnksIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5Q2xhc3NOYW1lSW5zaWRlTmF0aXZlRWxlbWVudChlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUuY2xpZW50V2lkdGg7XG4gIH1cblxuICBzdGF0aWMgZ2V0Tm9kZUhlaWdodEJ5Q2xhc3NOYW1lSW5zaWRlTmF0aXZlRWxlbWVudChlbGVtZW50OiBhbnksIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5Q2xhc3NOYW1lSW5zaWRlTmF0aXZlRWxlbWVudChlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUuY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgc3RhdGljIGdldE5vZGVCeUlkSW5zaWRlTmF0aXZlRWxlbWVudChlbGVtZW50OiBhbnksIGlkOiBzdHJpbmcpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gZWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChjaGlsZE5vZGUgJiYgY2hpbGROb2RlLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldE5vZGVXaWR0aEJ5SWRJbnNpZGVOYXRpdmVFbGVtZW50KGVsZW1lbnQ6IGFueSwgaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGVCeUlkSW5zaWRlTmF0aXZlRWxlbWVudChlbGVtZW50LCBpZCk7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZS5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIHN0YXRpYyBnZXROb2RlSGVpZ2h0QnlJZEluc2lkZU5hdGl2ZUVsZW1lbnQoZWxlbWVudDogYW55LCBpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5SWRJbnNpZGVOYXRpdmVFbGVtZW50KGVsZW1lbnQsIGlkKTtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlLmNsaWVudEhlaWdodDtcbiAgfVxuXG4gIHN0YXRpYyByYW5kb21IZXhXb3JkKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICB9XG5cbiAgZ2V0SWQoaXRlbTogU21hcnRTbGlkZXJJdGVtLCBzbWFydFNsaWRlck9wdGlvbnM6IElTbWFydFNsaWRlck9wdGlvbnNJbnRlcm5hbCkge1xuICAgIGlmIChzbWFydFNsaWRlck9wdGlvbnM/Lm1hcHBlcj8uaWRNYXApIHtcbiAgICAgIHJldHVybiBpdGVtLmRhdGFbc21hcnRTbGlkZXJPcHRpb25zPy5tYXBwZXI/LmlkTWFwXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuXG4gIGdldFRleHQoaXRlbTogU21hcnRTbGlkZXJJdGVtLCBzbWFydFNsaWRlck9wdGlvbnM6IElTbWFydFNsaWRlck9wdGlvbnNJbnRlcm5hbCkge1xuICAgIGlmIChzbWFydFNsaWRlck9wdGlvbnM/Lm1hcHBlcj8udGV4dE1hcCkge1xuICAgICAgcmV0dXJuIGl0ZW0uZGF0YVtzbWFydFNsaWRlck9wdGlvbnM/Lm1hcHBlcj8udGV4dE1hcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW0udGV4dDtcbiAgfVxuXG4gIGdldEltYWdlKGl0ZW06IFNtYXJ0U2xpZGVySXRlbSwgc21hcnRTbGlkZXJPcHRpb25zOiBJU21hcnRTbGlkZXJPcHRpb25zSW50ZXJuYWwpIHtcbiAgICBpZiAoc21hcnRTbGlkZXJPcHRpb25zPy5tYXBwZXI/LmltYWdlTWFwKSB7XG4gICAgICByZXR1cm4gaXRlbS5kYXRhW3NtYXJ0U2xpZGVyT3B0aW9ucz8ubWFwcGVyPy5pbWFnZU1hcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW0uaW1hZ2U7XG4gIH1cblxuICBnZXRBbHQoaXRlbTogU21hcnRTbGlkZXJJdGVtLCBzbWFydFNsaWRlck9wdGlvbnM6IElTbWFydFNsaWRlck9wdGlvbnNJbnRlcm5hbCkge1xuICAgIGlmIChzbWFydFNsaWRlck9wdGlvbnM/Lm1hcHBlcj8uYWx0TWFwKSB7XG4gICAgICByZXR1cm4gaXRlbS5kYXRhW3NtYXJ0U2xpZGVyT3B0aW9ucz8ubWFwcGVyPy5hbHRNYXBdO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtLmFsdDtcbiAgfVxuXG4gIHNldExpbWl0KGNvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmxpbWl0ID0gY291bnQ7XG4gIH1cblxuICBnZXRMaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5saW1pdDtcbiAgfVxuXG4gIHNldEhvcml6b250YWxNYXJnaW4obWFyZ2luOiBudW1iZXIpIHtcbiAgICB0aGlzLmhvcml6b250YWxNYXJnaW4gID0gbWFyZ2luO1xuICB9XG5cbiAgc2V0VmVydGljYWxNYXJnaW4obWFyZ2luOiBudW1iZXIpIHtcbiAgICB0aGlzLnZlcnRpY2FsTWFyZ2luICA9IG1hcmdpbjtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoOiBudW1iZXIpIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIHNldEl0ZW1zKGl0ZW1zOiBBcnJheTxTbWFydFNsaWRlckl0ZW0+LCBsaW1pdDogbnVtYmVyID0gbnVsbCkge1xuICAgIGlmIChsaW1pdCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmxpbWl0ID0gaXRlbXMubGVuZ3RoO1xuICAgIH1lbHNlIHtcbiAgICAgIHRoaXMubGltaXQgPSBsaW1pdDtcbiAgICB9XG5cbiAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy51cGRhdGVJdGVtc1RvU2hvdygpO1xuICB9XG5cbiAgbW92ZU5leHQoKSB7XG4gICAgaWYgKHRoaXMuc2xpZGVyTW92aW5nKSAge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUl0ZW1JbmRleE5leHQoKTtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zVG9TaG93KCk7XG4gIH1cblxuICBtb3ZlUHJldmlvdXMoKSB7XG4gICAgaWYgKHRoaXMuc2xpZGVyTW92aW5nKSAge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUl0ZW1JbmRleFByZXZpb3VzKCk7XG4gICAgdGhpcy51cGRhdGVJdGVtc1RvU2hvdygpO1xuICB9XG5cbiAgc2xpZGVyRG9uZSgpIHtcbiAgICB0aGlzLnNsaWRlck1vdmluZyA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJdGVtc1RvU2hvdygpIHtcbiAgICB0aGlzLml0ZW1zVG9TaG93ID0gbmV3IEFycmF5PFNtYXJ0U2xpZGVySXRlbT4oKTtcbiAgICBsZXQgY250ID0gdGhpcy5pdGVtSW5kZXg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5saW1pdDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbY250XTtcbiAgICAgIGlmIChpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaXRlbXNUb1Nob3cucHVzaChpdGVtKTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb29wKSB7XG4gICAgICAgICAgY250ID0gMDtcbiAgICAgICAgICB0aGlzLml0ZW1zVG9TaG93LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNudCsrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSXRlbUluZGV4TmV4dCgpIHtcbiAgICBpZiAodGhpcy5pc0xvb3ApIHtcbiAgICAgIGlmICh0aGlzLml0ZW1JbmRleCA+PSB0aGlzLm1heEluZGV4KSB7XG4gICAgICAgIHRoaXMuaXRlbUluZGV4ID0gMDtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy5pdGVtSW5kZXgrKztcbiAgICAgICAgdGhpcy5zbGlkZXJNb3ZpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1lbHNlIHtcbiAgICAgIGlmICh0aGlzLml0ZW1JbmRleCA8IHRoaXMubWF4SW5kZXgpIHtcbiAgICAgICAgdGhpcy5pdGVtSW5kZXgrKztcbiAgICAgICAgdGhpcy5zbGlkZXJNb3ZpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSXRlbUluZGV4UHJldmlvdXMoKSB7XG4gICAgaWYgKHRoaXMuaXNMb29wKSB7XG4gICAgICBpZiAodGhpcy5pdGVtSW5kZXggPD0gMCkge1xuICAgICAgICB0aGlzLml0ZW1JbmRleCA9IDA7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMuaXRlbUluZGV4LS07XG4gICAgICAgIHRoaXMuc2xpZGVyTW92aW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9ZWxzZSB7XG4gICAgICBpZiAodGhpcy5pdGVtSW5kZXggPiAwKSB7XG4gICAgICAgIHRoaXMuaXRlbUluZGV4LS07XG4gICAgICAgIHRoaXMuc2xpZGVyTW92aW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==