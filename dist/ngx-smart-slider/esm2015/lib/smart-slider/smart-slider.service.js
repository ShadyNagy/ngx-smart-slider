import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let SmartSliderService = class SmartSliderService {
    constructor() {
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
    get maxIndex() {
        return this.items.length > this.limit ? this.items.length - this.limit : 0;
    }
    get itemWidth() {
        return this.width / (this.horizontalMargin * 2 * this.limit);
    }
    get itemHeight() {
        return this.height / (this.verticalMargin * 2 * this.limit);
    }
    static getNodeByClassNameInsideElementRef(element, className) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < element.nativeElement.childNodes.length; index++) {
            const childNode = element.nativeElement.childNodes[index];
            if ((childNode === null || childNode === void 0 ? void 0 : childNode.classList) && childNode.classList.findIndex(x => x === className) > -1) {
                return childNode;
            }
        }
        return null;
    }
    static getNodeWidthByClassNameInsideElementRef(element, className) {
        const node = this.getNodeByClassNameInsideElementRef(element, className);
        if (!node) {
            return 0;
        }
        return node.clientWidth;
    }
    static getNodeHeightByClassNameInsideElementRef(element, className) {
        const node = this.getNodeByClassNameInsideElementRef(element, className);
        if (!node) {
            return 0;
        }
        return node.clientHeight;
    }
    static getNodeByIdInsideElementRef(element, id) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < element.nativeElement.childNodes.length; index++) {
            const childNode = element.nativeElement.childNodes[index];
            if (childNode && childNode.id === id) {
                return childNode;
            }
        }
        return null;
    }
    static getNodeWidthByIdInsideElementRef(element, id) {
        const node = this.getNodeByIdInsideElementRef(element, id);
        if (!node) {
            return 0;
        }
        return node.clientWidth;
    }
    static getNodeHeightByIdInsideElementRef(element, id) {
        const node = this.getNodeByIdInsideElementRef(element, id);
        if (!node) {
            return 0;
        }
        return node.clientHeight;
    }
    static getNodeByClassNameInsideNativeElement(element, className) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < element.childNodes.length; index++) {
            const childNode = element.childNodes[index];
            if ((childNode === null || childNode === void 0 ? void 0 : childNode.classList) && childNode.classList.findIndex(x => x === className) > -1) {
                return childNode;
            }
        }
        return null;
    }
    static getNodeWidthByClassNameInsideNativeElement(element, className) {
        const node = this.getNodeByClassNameInsideNativeElement(element, className);
        if (!node) {
            return 0;
        }
        return node.clientWidth;
    }
    static getNodeHeightByClassNameInsideNativeElement(element, className) {
        const node = this.getNodeByClassNameInsideNativeElement(element, className);
        if (!node) {
            return 0;
        }
        return node.clientHeight;
    }
    static getNodeByIdInsideNativeElement(element, id) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < element.childNodes.length; index++) {
            const childNode = element.childNodes[index];
            if (childNode && childNode.id === id) {
                return childNode;
            }
        }
        return null;
    }
    static getNodeWidthByIdInsideNativeElement(element, id) {
        const node = this.getNodeByIdInsideNativeElement(element, id);
        if (!node) {
            return 0;
        }
        return node.clientWidth;
    }
    static getNodeHeightByIdInsideNativeElement(element, id) {
        const node = this.getNodeByIdInsideNativeElement(element, id);
        if (!node) {
            return 0;
        }
        return node.clientHeight;
    }
    static randomHexWord() {
        return Math.floor(Math.random() * 16777215).toString(16);
    }
    getId(item, smartSliderOptions) {
        var _a, _b;
        if ((_a = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _a === void 0 ? void 0 : _a.idMap) {
            return item.data[(_b = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _b === void 0 ? void 0 : _b.idMap];
        }
        return item.id;
    }
    getText(item, smartSliderOptions) {
        var _a, _b;
        if ((_a = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _a === void 0 ? void 0 : _a.textMap) {
            return item.data[(_b = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _b === void 0 ? void 0 : _b.textMap];
        }
        return item.text;
    }
    getImage(item, smartSliderOptions) {
        var _a, _b;
        if ((_a = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _a === void 0 ? void 0 : _a.imageMap) {
            return item.data[(_b = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _b === void 0 ? void 0 : _b.imageMap];
        }
        return item.image;
    }
    getAlt(item, smartSliderOptions) {
        var _a, _b;
        if ((_a = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _a === void 0 ? void 0 : _a.altMap) {
            return item.data[(_b = smartSliderOptions === null || smartSliderOptions === void 0 ? void 0 : smartSliderOptions.mapper) === null || _b === void 0 ? void 0 : _b.altMap];
        }
        return item.alt;
    }
    setLimit(count) {
        this.limit = count;
    }
    getLimit() {
        return this.limit;
    }
    setHorizontalMargin(margin) {
        this.horizontalMargin = margin;
    }
    setVerticalMargin(margin) {
        this.verticalMargin = margin;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    setItems(items, limit = null) {
        if (limit == null) {
            this.limit = items.length;
        }
        else {
            this.limit = limit;
        }
        this.items = items;
        this.updateItemsToShow();
    }
    moveNext() {
        if (this.sliderMoving) {
            return;
        }
        this.updateItemIndexNext();
        this.updateItemsToShow();
    }
    movePrevious() {
        if (this.sliderMoving) {
            return;
        }
        this.updateItemIndexPrevious();
        this.updateItemsToShow();
    }
    sliderDone() {
        this.sliderMoving = false;
    }
    updateItemsToShow() {
        this.itemsToShow = new Array();
        let cnt = this.itemIndex;
        for (let index = 0; index < this.limit; index++) {
            const item = this.items[cnt];
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
    }
    updateItemIndexNext() {
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
    }
    updateItemIndexPrevious() {
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
    }
};
SmartSliderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SmartSliderService_Factory() { return new SmartSliderService(); }, token: SmartSliderService, providedIn: "root" });
SmartSliderService = __decorate([
    Injectable({ providedIn: 'root' })
], SmartSliderService);
export { SmartSliderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc21hcnQtc2xpZGVyLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LXNsaWRlci9zbWFydC1zbGlkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLdkQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFlN0I7UUFiQSxnQkFBVyxHQUFHLElBQUksS0FBSyxFQUFtQixDQUFDO1FBQzNDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVQLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixVQUFLLEdBQUcsSUFBSSxLQUFLLEVBQW1CLENBQUM7SUFFN0IsQ0FBQztJQUVqQixJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElB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QztnQkFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDMUI7U0FDRjthQUFLO1lBQ0osSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQztDQUNGLENBQUE7O0FBalNZLGtCQUFrQjtJQUQ5QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsa0JBQWtCLENBaVM5QjtTQWpTWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTbWFydFNsaWRlckl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvc21hcnQtc2xpZGVyLWl0ZW0nO1xuaW1wb3J0IHsgSVNtYXJ0U2xpZGVyT3B0aW9uc0ludGVybmFsIH0gZnJvbSAnLi4vbW9kZWxzL3NtYXJ0LXNsaWRlci1vcHRpb25zJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTbWFydFNsaWRlclNlcnZpY2Uge1xuXG4gIGl0ZW1zVG9TaG93ID0gbmV3IEFycmF5PFNtYXJ0U2xpZGVySXRlbT4oKTtcbiAgaXRlbUluZGV4ID0gMDtcbiAgd2lkdGggPSAwO1xuICBoZWlnaHQgPSAwO1xuICBtYXJnaW4gPSAwO1xuICBob3Jpem9udGFsTWFyZ2luID0gMDtcbiAgdmVydGljYWxNYXJnaW4gPSAwO1xuICBpc0xvb3AgPSBmYWxzZTtcblxuICBwcml2YXRlIGxpbWl0ID0gMDtcbiAgcHJpdmF0ZSBzbGlkZXJNb3ZpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxTbWFydFNsaWRlckl0ZW0+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXQgbWF4SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoID4gdGhpcy5saW1pdCA/IHRoaXMuaXRlbXMubGVuZ3RoIC0gdGhpcy5saW1pdCA6IDA7XG4gIH1cblxuICBnZXQgaXRlbVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoIC8gKHRoaXMuaG9yaXpvbnRhbE1hcmdpbiAqIDIgKiB0aGlzLmxpbWl0KTtcbiAgfVxuXG4gIGdldCBpdGVtSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodCAvICh0aGlzLnZlcnRpY2FsTWFyZ2luICogMiAqIHRoaXMubGltaXQpO1xuICB9XG5cbiAgc3RhdGljIGdldE5vZGVCeUNsYXNzTmFtZUluc2lkZUVsZW1lbnRSZWYoZWxlbWVudDogRWxlbWVudFJlZiwgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF07XG4gICAgICBpZiAoY2hpbGROb2RlPy5jbGFzc0xpc3QgJiYgY2hpbGROb2RlLmNsYXNzTGlzdC5maW5kSW5kZXgoeCA9PiB4ID09PSBjbGFzc05hbWUpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXROb2RlV2lkdGhCeUNsYXNzTmFtZUluc2lkZUVsZW1lbnRSZWYoZWxlbWVudDogRWxlbWVudFJlZiwgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlQnlDbGFzc05hbWVJbnNpZGVFbGVtZW50UmVmKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZS5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIHN0YXRpYyBnZXROb2RlSGVpZ2h0QnlDbGFzc05hbWVJbnNpZGVFbGVtZW50UmVmKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5Q2xhc3NOYW1lSW5zaWRlRWxlbWVudFJlZihlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUuY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgc3RhdGljIGdldE5vZGVCeUlkSW5zaWRlRWxlbWVudFJlZihlbGVtZW50OiBFbGVtZW50UmVmLCBpZDogc3RyaW5nKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGNoaWxkTm9kZSAmJiBjaGlsZE5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0Tm9kZVdpZHRoQnlJZEluc2lkZUVsZW1lbnRSZWYoZWxlbWVudDogRWxlbWVudFJlZiwgaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGVCeUlkSW5zaWRlRWxlbWVudFJlZihlbGVtZW50LCBpZCk7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZS5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIHN0YXRpYyBnZXROb2RlSGVpZ2h0QnlJZEluc2lkZUVsZW1lbnRSZWYoZWxlbWVudDogRWxlbWVudFJlZiwgaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGVCeUlkSW5zaWRlRWxlbWVudFJlZihlbGVtZW50LCBpZCk7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZS5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0Tm9kZUJ5Q2xhc3NOYW1lSW5zaWRlTmF0aXZlRWxlbWVudChlbGVtZW50OiBhbnksIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF07XG4gICAgICBpZiAoY2hpbGROb2RlPy5jbGFzc0xpc3QgJiYgY2hpbGROb2RlLmNsYXNzTGlzdC5maW5kSW5kZXgoeCA9PiB4ID09PSBjbGFzc05hbWUpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXROb2RlV2lkdGhCeUNsYXNzTmFtZUluc2lkZU5hdGl2ZUVsZW1lbnQoZWxlbWVudDogYW55LCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGVCeUNsYXNzTmFtZUluc2lkZU5hdGl2ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgc3RhdGljIGdldE5vZGVIZWlnaHRCeUNsYXNzTmFtZUluc2lkZU5hdGl2ZUVsZW1lbnQoZWxlbWVudDogYW55LCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGVCeUNsYXNzTmFtZUluc2lkZU5hdGl2ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlLmNsaWVudEhlaWdodDtcbiAgfVxuXG4gIHN0YXRpYyBnZXROb2RlQnlJZEluc2lkZU5hdGl2ZUVsZW1lbnQoZWxlbWVudDogYW55LCBpZDogc3RyaW5nKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoY2hpbGROb2RlICYmIGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXROb2RlV2lkdGhCeUlkSW5zaWRlTmF0aXZlRWxlbWVudChlbGVtZW50OiBhbnksIGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlQnlJZEluc2lkZU5hdGl2ZUVsZW1lbnQoZWxlbWVudCwgaWQpO1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUuY2xpZW50V2lkdGg7XG4gIH1cblxuICBzdGF0aWMgZ2V0Tm9kZUhlaWdodEJ5SWRJbnNpZGVOYXRpdmVFbGVtZW50KGVsZW1lbnQ6IGFueSwgaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGVCeUlkSW5zaWRlTmF0aXZlRWxlbWVudChlbGVtZW50LCBpZCk7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZS5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICBzdGF0aWMgcmFuZG9tSGV4V29yZCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgfVxuXG4gIGdldElkKGl0ZW06IFNtYXJ0U2xpZGVySXRlbSwgc21hcnRTbGlkZXJPcHRpb25zOiBJU21hcnRTbGlkZXJPcHRpb25zSW50ZXJuYWwpIHtcbiAgICBpZiAoc21hcnRTbGlkZXJPcHRpb25zPy5tYXBwZXI/LmlkTWFwKSB7XG4gICAgICByZXR1cm4gaXRlbS5kYXRhW3NtYXJ0U2xpZGVyT3B0aW9ucz8ubWFwcGVyPy5pZE1hcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cblxuICBnZXRUZXh0KGl0ZW06IFNtYXJ0U2xpZGVySXRlbSwgc21hcnRTbGlkZXJPcHRpb25zOiBJU21hcnRTbGlkZXJPcHRpb25zSW50ZXJuYWwpIHtcbiAgICBpZiAoc21hcnRTbGlkZXJPcHRpb25zPy5tYXBwZXI/LnRleHRNYXApIHtcbiAgICAgIHJldHVybiBpdGVtLmRhdGFbc21hcnRTbGlkZXJPcHRpb25zPy5tYXBwZXI/LnRleHRNYXBdO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtLnRleHQ7XG4gIH1cblxuICBnZXRJbWFnZShpdGVtOiBTbWFydFNsaWRlckl0ZW0sIHNtYXJ0U2xpZGVyT3B0aW9uczogSVNtYXJ0U2xpZGVyT3B0aW9uc0ludGVybmFsKSB7XG4gICAgaWYgKHNtYXJ0U2xpZGVyT3B0aW9ucz8ubWFwcGVyPy5pbWFnZU1hcCkge1xuICAgICAgcmV0dXJuIGl0ZW0uZGF0YVtzbWFydFNsaWRlck9wdGlvbnM/Lm1hcHBlcj8uaW1hZ2VNYXBdO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtLmltYWdlO1xuICB9XG5cbiAgZ2V0QWx0KGl0ZW06IFNtYXJ0U2xpZGVySXRlbSwgc21hcnRTbGlkZXJPcHRpb25zOiBJU21hcnRTbGlkZXJPcHRpb25zSW50ZXJuYWwpIHtcbiAgICBpZiAoc21hcnRTbGlkZXJPcHRpb25zPy5tYXBwZXI/LmFsdE1hcCkge1xuICAgICAgcmV0dXJuIGl0ZW0uZGF0YVtzbWFydFNsaWRlck9wdGlvbnM/Lm1hcHBlcj8uYWx0TWFwXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbS5hbHQ7XG4gIH1cblxuICBzZXRMaW1pdChjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5saW1pdCA9IGNvdW50O1xuICB9XG5cbiAgZ2V0TGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGltaXQ7XG4gIH1cblxuICBzZXRIb3Jpem9udGFsTWFyZ2luKG1hcmdpbjogbnVtYmVyKSB7XG4gICAgdGhpcy5ob3Jpem9udGFsTWFyZ2luICA9IG1hcmdpbjtcbiAgfVxuXG4gIHNldFZlcnRpY2FsTWFyZ2luKG1hcmdpbjogbnVtYmVyKSB7XG4gICAgdGhpcy52ZXJ0aWNhbE1hcmdpbiAgPSBtYXJnaW47XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aDogbnVtYmVyKSB7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBzZXRJdGVtcyhpdGVtczogQXJyYXk8U21hcnRTbGlkZXJJdGVtPiwgbGltaXQ6IG51bWJlciA9IG51bGwpIHtcbiAgICBpZiAobGltaXQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5saW1pdCA9IGl0ZW1zLmxlbmd0aDtcbiAgICB9ZWxzZSB7XG4gICAgICB0aGlzLmxpbWl0ID0gbGltaXQ7XG4gICAgfVxuXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMudXBkYXRlSXRlbXNUb1Nob3coKTtcbiAgfVxuXG4gIG1vdmVOZXh0KCkge1xuICAgIGlmICh0aGlzLnNsaWRlck1vdmluZykgIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJdGVtSW5kZXhOZXh0KCk7XG4gICAgdGhpcy51cGRhdGVJdGVtc1RvU2hvdygpO1xuICB9XG5cbiAgbW92ZVByZXZpb3VzKCkge1xuICAgIGlmICh0aGlzLnNsaWRlck1vdmluZykgIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJdGVtSW5kZXhQcmV2aW91cygpO1xuICAgIHRoaXMudXBkYXRlSXRlbXNUb1Nob3coKTtcbiAgfVxuXG4gIHNsaWRlckRvbmUoKSB7XG4gICAgdGhpcy5zbGlkZXJNb3ZpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSXRlbXNUb1Nob3coKSB7XG4gICAgdGhpcy5pdGVtc1RvU2hvdyA9IG5ldyBBcnJheTxTbWFydFNsaWRlckl0ZW0+KCk7XG4gICAgbGV0IGNudCA9IHRoaXMuaXRlbUluZGV4O1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGltaXQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2NudF07XG4gICAgICBpZiAoaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLml0ZW1zVG9TaG93LnB1c2goaXRlbSk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9vcCkge1xuICAgICAgICAgIGNudCA9IDA7XG4gICAgICAgICAgdGhpcy5pdGVtc1RvU2hvdy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjbnQrKztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUl0ZW1JbmRleE5leHQoKSB7XG4gICAgaWYgKHRoaXMuaXNMb29wKSB7XG4gICAgICBpZiAodGhpcy5pdGVtSW5kZXggPj0gdGhpcy5tYXhJbmRleCkge1xuICAgICAgICB0aGlzLml0ZW1JbmRleCA9IDA7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMuaXRlbUluZGV4Kys7XG4gICAgICAgIHRoaXMuc2xpZGVyTW92aW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9ZWxzZSB7XG4gICAgICBpZiAodGhpcy5pdGVtSW5kZXggPCB0aGlzLm1heEluZGV4KSB7XG4gICAgICAgIHRoaXMuaXRlbUluZGV4Kys7XG4gICAgICAgIHRoaXMuc2xpZGVyTW92aW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUl0ZW1JbmRleFByZXZpb3VzKCkge1xuICAgIGlmICh0aGlzLmlzTG9vcCkge1xuICAgICAgaWYgKHRoaXMuaXRlbUluZGV4IDw9IDApIHtcbiAgICAgICAgdGhpcy5pdGVtSW5kZXggPSAwO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLml0ZW1JbmRleC0tO1xuICAgICAgICB0aGlzLnNsaWRlck1vdmluZyA9IHRydWU7XG4gICAgICB9XG4gICAgfWVsc2Uge1xuICAgICAgaWYgKHRoaXMuaXRlbUluZGV4ID4gMCkge1xuICAgICAgICB0aGlzLml0ZW1JbmRleC0tO1xuICAgICAgICB0aGlzLnNsaWRlck1vdmluZyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=