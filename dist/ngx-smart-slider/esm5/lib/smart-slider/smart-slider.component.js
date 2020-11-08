import { __decorate } from "tslib";
import { Component, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
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
export { SmartSliderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbWFydC1zbGlkZXIvIiwic291cmNlcyI6WyJsaWIvc21hcnQtc2xpZGVyL3NtYXJ0LXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFRcEU7SUFnSUUsOEJBQW9CLFNBQXNCO1FBQXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7UUE5SDFDLGNBQVMsR0FBVSxLQUFLLENBQUM7UUFNekIsV0FBTSxHQUFDLElBQUksS0FBSyxFQUFtQixDQUFDO1FBTXBDLGtCQUFhLEdBQVUsSUFBSSxDQUFDO1FBTTVCLGNBQVMsR0FBVSxJQUFJLENBQUM7UUFNeEIsY0FBUyxHQUFVLEtBQUssQ0FBQztRQU16QixjQUFTLEdBQVUsS0FBSyxDQUFDO1FBTXpCLFVBQUssR0FBVSxLQUFLLENBQUM7UUFNckIsa0JBQWEsR0FBVSxLQUFLLENBQUM7UUFNN0IsZ0JBQVcsR0FBUyxNQUFNLENBQUM7UUFNM0IsaUJBQVksR0FBUyxLQUFLLENBQUM7UUFNM0Isa0JBQWEsR0FBUyxVQUFVLENBQUM7UUFNakMsZUFBVSxHQUFTLE9BQU8sQ0FBQztRQU0zQixlQUFVLEdBQVMsQ0FBQyxDQUFDO1FBTXJCLFlBQU8sR0FBUyxNQUFNLENBQUM7UUFNdkIsV0FBTSxHQUFTLE1BQU0sQ0FBQztRQU10QixzQkFBaUIsR0FBUyxJQUFJLENBQUM7UUFNL0Isd0JBQW1CLEdBQVMsR0FBRyxDQUFDO1FBTWhDLFdBQU0sR0FBUyxFQUFFLENBQUM7UUFPbEIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBbUJwRCxDQUFDO0lBOUhELHNCQUFJLDBDQUFRO2FBQVosVUFBYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksdUNBQUs7YUFBVCxVQUFVLEtBQTZCO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksOENBQVk7YUFBaEIsVUFBaUIsS0FBYztZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUlELHNCQUFJLDBDQUFRO2FBQVosVUFBYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksMENBQVE7YUFBWixVQUFhLEtBQWM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSwwQ0FBUTthQUFaLFVBQWEsS0FBYztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUlELHNCQUFJLHNDQUFJO2FBQVIsVUFBUyxLQUFjO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksOENBQVk7YUFBaEIsVUFBaUIsS0FBYztZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUlELHNCQUFJLDRDQUFVO2FBQWQsVUFBZSxLQUFhO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxHQUFDLElBQUksQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUlELHNCQUFJLDZDQUFXO2FBQWYsVUFBZ0IsS0FBYTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssR0FBQyxJQUFJLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSw4Q0FBWTthQUFoQixVQUFpQixLQUFtSDtZQUNsSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUlELHNCQUFJLDJDQUFTO2FBQWIsVUFBYyxLQUFhO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksMkNBQVM7YUFBYixVQUFjLEtBQWE7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSx3Q0FBTTthQUFWLFVBQVcsS0FBYTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBSUQsc0JBQUksdUNBQUs7YUFBVCxVQUFVLEtBQWE7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUlELHNCQUFJLGtEQUFnQjthQUFwQixVQUFxQixLQUFhO1lBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSxvREFBa0I7YUFBdEIsVUFBdUIsS0FBYTtZQUNsQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBSUQsc0JBQUksdUNBQUs7YUFBVCxVQUFVLEtBQWE7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFNRixzQkFBSSw0Q0FBVTthQUFkO1lBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFHO2dCQUM3QyxhQUFXLElBQUksQ0FBQyxPQUFTO2FBQzVCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDOzs7T0FBQTtJQUdGLHNCQUFJLDZDQUFXO2FBQWY7WUFDQyxPQUFPO2dCQUNILElBQUksQ0FBQyxNQUFNO2FBQ2QsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWixDQUFDOzs7T0FBQTtJQU9ELHVDQUFRLEdBQVIsVUFBUyxLQUFzQjtRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOztnQkFONkIsWUFBWTs7SUE1SDFDO1FBREMsS0FBSyxDQUFDLFVBQVUsQ0FBQzt3REFHakI7SUFJRDtRQURDLEtBQUssQ0FBQyxPQUFPLENBQUM7cURBR2Q7SUFJRDtRQURDLEtBQUssQ0FBQyxjQUFjLENBQUM7NERBR3JCO0lBSUQ7UUFEQyxLQUFLLENBQUMsVUFBVSxDQUFDO3dEQUdqQjtJQUlEO1FBREMsS0FBSyxDQUFDLFVBQVUsQ0FBQzt3REFHakI7SUFJRDtRQURDLEtBQUssQ0FBQyxVQUFVLENBQUM7d0RBR2pCO0lBSUQ7UUFEQyxLQUFLLENBQUMsTUFBTSxDQUFDO29EQUdiO0lBSUQ7UUFEQyxLQUFLLENBQUMsY0FBYyxDQUFDOzREQUdyQjtJQUlEO1FBREMsS0FBSyxDQUFDLFlBQVksQ0FBQzswREFHbkI7SUFJRDtRQURDLEtBQUssQ0FBQyxhQUFhLENBQUM7MkRBR3BCO0lBSUQ7UUFEQyxLQUFLLENBQUMsY0FBYyxDQUFDOzREQUdyQjtJQUlEO1FBREMsS0FBSyxDQUFDLFdBQVcsQ0FBQzt5REFHbEI7SUFJRDtRQURDLEtBQUssQ0FBQyxXQUFXLENBQUM7eURBR2xCO0lBSUQ7UUFEQyxLQUFLLENBQUMsUUFBUSxDQUFDO3NEQUdmO0lBSUQ7UUFEQyxLQUFLLENBQUMsT0FBTyxDQUFDO3FEQUdkO0lBSUQ7UUFEQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7Z0VBR3pCO0lBSUQ7UUFEQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7a0VBRzNCO0lBSUQ7UUFEQyxLQUFLLENBQUMsT0FBTyxDQUFDO3FEQUdkO0lBR0Q7UUFEQyxNQUFNLEVBQUU7d0RBQzJDO0lBR3JEO1FBREUsV0FBVyxDQUFDLE9BQU8sQ0FBQzswREFLcEI7SUFHRjtRQURFLFdBQVcsQ0FBQyxPQUFPLENBQUM7MkRBS3BCO0lBN0hVLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QiwydEJBQTRDOztTQUU3QyxDQUFDO09BQ1csb0JBQW9CLENBdUloQztJQUFELDJCQUFDO0NBQUEsQUF2SUQsSUF1SUM7U0F2SVksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgU21hcnRTbGlkZXJJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL3NtYXJ0LXNsaWRlci1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc21hcnQtc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LXNsaWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NtYXJ0LXNsaWRlci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbWFydFNsaWRlckNvbXBvbmVudCB7XG5cbiAgX3ZlcnRpY2FsOiBib29sZWFuPWZhbHNlO1xuICBASW5wdXQoJ3ZlcnRpY2FsJylcbiAgc2V0IHZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7ICAgIFxuICAgIHRoaXMuX3ZlcnRpY2FsID0gdmFsdWU7XG4gIH1cbiAgXG4gIF9pdGVtcz1uZXcgQXJyYXk8U21hcnRTbGlkZXJJdGVtPigpO1xuICBASW5wdXQoJ2l0ZW1zJylcbiAgc2V0IGl0ZW1zKHZhbHVlOiBBcnJheTxTbWFydFNsaWRlckl0ZW0+KSB7ICAgIFxuICAgIHRoaXMuX2l0ZW1zID0gdmFsdWU7XG4gIH1cblxuICBfc2hvd1ByZXZpb3VzOiBib29sZWFuPXRydWU7XG4gIEBJbnB1dCgnc2hvd1ByZXZpb3VzJylcbiAgc2V0IHNob3dQcmV2aW91cyh2YWx1ZTogYm9vbGVhbikgeyAgICBcbiAgICB0aGlzLl9zaG93UHJldmlvdXMgPSB2YWx1ZTtcbiAgfSAgXG5cbiAgX3Nob3dOZXh0OiBib29sZWFuPXRydWU7XG4gIEBJbnB1dCgnc2hvd05leHQnKVxuICBzZXQgc2hvd05leHQodmFsdWU6IGJvb2xlYW4pIHsgICAgXG4gICAgdGhpcy5fc2hvd05leHQgPSB2YWx1ZTtcbiAgfVxuXG4gIF9zaG93RG90czogYm9vbGVhbj1mYWxzZTtcbiAgQElucHV0KCdzaG93RG90cycpXG4gIHNldCBzaG93RG90cyh2YWx1ZTogYm9vbGVhbikgeyAgICBcbiAgICB0aGlzLl9zaG93RG90cyA9IHZhbHVlO1xuICB9XG5cbiAgX2F1dG9wbGF5OiBib29sZWFuPWZhbHNlO1xuICBASW5wdXQoJ2F1dG9wbGF5JylcbiAgc2V0IGF1dG9wbGF5KHZhbHVlOiBib29sZWFuKSB7ICAgIFxuICAgIHRoaXMuX2F1dG9wbGF5ID0gdmFsdWU7XG4gIH1cblxuICBfbG9vcDogYm9vbGVhbj1mYWxzZTtcbiAgQElucHV0KCdsb29wJylcbiAgc2V0IGxvb3AodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9sb29wID0gdmFsdWU7XG4gIH1cblxuICBfcGF1c2VPbkhvdmVyOiBib29sZWFuPWZhbHNlO1xuICBASW5wdXQoJ3BhdXNlT25Ib3ZlcicpXG4gIHNldCBwYXVzZU9uSG92ZXIodmFsdWU6IGJvb2xlYW4pIHsgICAgXG4gICAgdGhpcy5fcGF1c2VPbkhvdmVyID0gdmFsdWU7XG4gIH1cbiAgXG4gIF9pdGVtTWFyZ2luOiBzdHJpbmc9JzEwcHgnO1xuICBASW5wdXQoJ2l0ZW1NYXJnaW4nKVxuICBzZXQgaXRlbU1hcmdpbih2YWx1ZTogbnVtYmVyKSB7ICAgIFxuICAgIHRoaXMuX2l0ZW1NYXJnaW4gPSB2YWx1ZSsncHgnO1xuICB9XG5cbiAgX2l0ZW1QYWRkaW5nOiBzdHJpbmc9JzBweCc7XG4gIEBJbnB1dCgnaXRlbVBhZGRpbmcnKVxuICBzZXQgaXRlbVBhZGRpbmcodmFsdWU6IG51bWJlcikgeyAgICBcbiAgICB0aGlzLl9pdGVtUGFkZGluZyA9IHZhbHVlKydweCc7XG4gIH1cblxuICBfdGV4dFBvc2l0aW9uOiBzdHJpbmc9J2NlbnRlcmVkJztcbiAgQElucHV0KCd0ZXh0UG9zaXRpb24nKVxuICBzZXQgdGV4dFBvc2l0aW9uKHZhbHVlOiAnY2VudGVyZWQtdG9wJyB8ICdjZW50ZXJlZC1ib3R0b20nIHwgJ2NlbnRlcmVkJyB8ICdib3R0b20tcmlnaHQgJyB8ICd0b3AtcmlnaHQnIHwgJ3RvcC1sZWZ0JyB8ICdib3R0b20tbGVmdCcpIHsgICAgXG4gICAgdGhpcy5fdGV4dFBvc2l0aW9uID0gdmFsdWU7XG4gIH1cblxuICBfdGV4dENvbG9yOiBzdHJpbmc9J2JsYWNrJztcbiAgQElucHV0KCd0ZXh0Q29sb3InKVxuICBzZXQgdGV4dENvbG9yKHZhbHVlOiBzdHJpbmcpIHsgICAgXG4gICAgdGhpcy5fdGV4dENvbG9yID0gdmFsdWU7XG4gIH1cblxuICBfY2VsbExpbWl0OiBudW1iZXI9MTtcbiAgQElucHV0KCdjZWxsTGltaXQnKVxuICBzZXQgY2VsbExpbWl0KHZhbHVlOiBudW1iZXIpIHsgICAgXG4gICAgdGhpcy5fY2VsbExpbWl0ID0gdmFsdWU7XG4gIH0gICAgICBcblxuICBfaGVpZ2h0OiBzdHJpbmc9JzEwMCUnO1xuICBASW5wdXQoJ2hlaWdodCcpXG4gIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikgeyAgICBcbiAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZSsxMCsncHgnO1xuICB9XG5cbiAgX3dpZHRoOiBzdHJpbmc9JzEwMCUnO1xuICBASW5wdXQoJ3dpZHRoJylcbiAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIpIHsgICAgXG4gICAgdGhpcy5fd2lkdGggPSB2YWx1ZSsxMCsncHgnO1xuICB9XG5cbiAgX2F1dG9wbGF5SW50ZXJ2YWw6IG51bWJlcj0yMDAwO1xuICBASW5wdXQoJ2F1dG9wbGF5SW50ZXJ2YWwnKVxuICBzZXQgYXV0b3BsYXlJbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7ICAgIFxuICAgIHRoaXMuX2F1dG9wbGF5SW50ZXJ2YWwgPSB2YWx1ZTtcbiAgfVxuXG4gIF90cmFuc2l0aW9uRHVyYXRpb246IG51bWJlcj0wLjM7XG4gIEBJbnB1dCgndHJhbnNpdGlvbkR1cmF0aW9uJylcbiAgc2V0IHRyYW5zaXRpb25EdXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7ICAgIFxuICAgIHRoaXMuX3RyYW5zaXRpb25EdXJhdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgX2NsYXNzOiBzdHJpbmc9Jyc7XG4gIEBJbnB1dCgnY2xhc3MnKVxuICBzZXQgY2xhc3ModmFsdWU6IHN0cmluZykgeyAgICBcbiAgICB0aGlzLl9jbGFzcyA9IHZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlJylcblx0Z2V0IGhvc3RTdHlsZXMoKTogU2FmZVN0eWxlIHtcblx0XHRyZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCAgW1xuICAgICAgYGhlaWdodDogJHt0aGlzLl9oZWlnaHR9YFxuXHRcdF0uam9pbignOycpKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuXHRnZXQgaG9zdENsYXNzZXMoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gW1xuICAgICAgdGhpcy5fY2xhc3Ncblx0XHRdLmpvaW4oJyAnKTtcbiAgfVxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6RG9tU2FuaXRpemVyKSB7IFxuXG4gIH0gIFxuXG4gIG9uU2VsZWN0KGV2ZW50OiBTbWFydFNsaWRlckl0ZW0pIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19