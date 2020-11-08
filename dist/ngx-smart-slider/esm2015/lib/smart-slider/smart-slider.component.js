import { __decorate } from "tslib";
import { Component, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
let SmartSliderComponent = class SmartSliderComponent {
    constructor(sanitizer) {
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
    set vertical(value) {
        this._vertical = value;
    }
    set items(value) {
        this._items = value;
    }
    set showPrevious(value) {
        this._showPrevious = value;
    }
    set showNext(value) {
        this._showNext = value;
    }
    set showDots(value) {
        this._showDots = value;
    }
    set autoplay(value) {
        this._autoplay = value;
    }
    set loop(value) {
        this._loop = value;
    }
    set pauseOnHover(value) {
        this._pauseOnHover = value;
    }
    set itemMargin(value) {
        this._itemMargin = value + 'px';
    }
    set itemPadding(value) {
        this._itemPadding = value + 'px';
    }
    set textPosition(value) {
        this._textPosition = value;
    }
    set textColor(value) {
        this._textColor = value;
    }
    set cellLimit(value) {
        this._cellLimit = value;
    }
    set height(value) {
        this._height = value + 10 + 'px';
    }
    set width(value) {
        this._width = value + 10 + 'px';
    }
    set autoplayInterval(value) {
        this._autoplayInterval = value;
    }
    set transitionDuration(value) {
        this._transitionDuration = value;
    }
    set class(value) {
        this._class = value;
    }
    get hostStyles() {
        return this.sanitizer.bypassSecurityTrustStyle([
            `height: ${this._height}`
        ].join(';'));
    }
    get hostClasses() {
        return [
            this._class
        ].join(' ');
    }
    onSelect(event) {
        this.select.emit(event);
    }
};
SmartSliderComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
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
export { SmartSliderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbWFydC1zbGlkZXIvIiwic291cmNlcyI6WyJsaWIvc21hcnQtc2xpZGVyL3NtYXJ0LXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFRcEUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFnSS9CLFlBQW9CLFNBQXNCO1FBQXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7UUE5SDFDLGNBQVMsR0FBVSxLQUFLLENBQUM7UUFNekIsV0FBTSxHQUFDLElBQUksS0FBSyxFQUFtQixDQUFDO1FBTXBDLGtCQUFhLEdBQVUsSUFBSSxDQUFDO1FBTTVCLGNBQVMsR0FBVSxJQUFJLENBQUM7UUFNeEIsY0FBUyxHQUFVLEtBQUssQ0FBQztRQU16QixjQUFTLEdBQVUsS0FBSyxDQUFDO1FBTXpCLFVBQUssR0FBVSxLQUFLLENBQUM7UUFNckIsa0JBQWEsR0FBVSxLQUFLLENBQUM7UUFNN0IsZ0JBQVcsR0FBUyxNQUFNLENBQUM7UUFNM0IsaUJBQVksR0FBUyxLQUFLLENBQUM7UUFNM0Isa0JBQWEsR0FBUyxVQUFVLENBQUM7UUFNakMsZUFBVSxHQUFTLE9BQU8sQ0FBQztRQU0zQixlQUFVLEdBQVMsQ0FBQyxDQUFDO1FBTXJCLFlBQU8sR0FBUyxNQUFNLENBQUM7UUFNdkIsV0FBTSxHQUFTLE1BQU0sQ0FBQztRQU10QixzQkFBaUIsR0FBUyxJQUFJLENBQUM7UUFNL0Isd0JBQW1CLEdBQVMsR0FBRyxDQUFDO1FBTWhDLFdBQU0sR0FBUyxFQUFFLENBQUM7UUFPbEIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFB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O0lBREMsS0FBSyxDQUFDLGNBQWMsQ0FBQzt3REFHckI7QUFJRDtJQURDLEtBQUssQ0FBQyxVQUFVLENBQUM7b0RBR2pCO0FBSUQ7SUFEQyxLQUFLLENBQUMsVUFBVSxDQUFDO29EQUdqQjtBQUlEO0lBREMsS0FBSyxDQUFDLFVBQVUsQ0FBQztvREFHakI7QUFJRDtJQURDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0RBR2I7QUFJRDtJQURDLEtBQUssQ0FBQyxjQUFjLENBQUM7d0RBR3JCO0FBSUQ7SUFEQyxLQUFLLENBQUMsWUFBWSxDQUFDO3NEQUduQjtBQUlEO0lBREMsS0FBSyxDQUFDLGFBQWEsQ0FBQzt1REFHcEI7QUFJRDtJQURDLEtBQUssQ0FBQyxjQUFjLENBQUM7d0RBR3JCO0FBSUQ7SUFEQyxLQUFLLENBQUMsV0FBVyxDQUFDO3FEQUdsQjtBQUlEO0lBREMsS0FBSyxDQUFDLFdBQVcsQ0FBQztxREFHbEI7QUFJRDtJQURDLEtBQUssQ0FBQyxRQUFRLENBQUM7a0RBR2Y7QUFJRDtJQURDLEtBQUssQ0FBQyxPQUFPLENBQUM7aURBR2Q7QUFJRDtJQURDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzs0REFHekI7QUFJRDtJQURDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs4REFHM0I7QUFJRDtJQURDLEtBQUssQ0FBQyxPQUFPLENBQUM7aURBR2Q7QUFHRDtJQURDLE1BQU0sRUFBRTtvREFDMkM7QUFHckQ7SUFERSxXQUFXLENBQUMsT0FBTyxDQUFDO3NEQUtwQjtBQUdGO0lBREUsV0FBVyxDQUFDLE9BQU8sQ0FBQzt1REFLcEI7QUE3SFUsb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLDJ0QkFBNEM7O0tBRTdDLENBQUM7R0FDVyxvQkFBb0IsQ0F1SWhDO1NBdklZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFNtYXJ0U2xpZGVySXRlbSB9IGZyb20gJy4uL21vZGVscy9zbWFydC1zbGlkZXItaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NtYXJ0LXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC1zbGlkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbWFydC1zbGlkZXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU21hcnRTbGlkZXJDb21wb25lbnQge1xuXG4gIF92ZXJ0aWNhbDogYm9vbGVhbj1mYWxzZTtcbiAgQElucHV0KCd2ZXJ0aWNhbCcpXG4gIHNldCB2ZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikgeyAgICBcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHZhbHVlO1xuICB9XG4gIFxuICBfaXRlbXM9bmV3IEFycmF5PFNtYXJ0U2xpZGVySXRlbT4oKTtcbiAgQElucHV0KCdpdGVtcycpXG4gIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8U21hcnRTbGlkZXJJdGVtPikgeyAgICBcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICB9XG5cbiAgX3Nob3dQcmV2aW91czogYm9vbGVhbj10cnVlO1xuICBASW5wdXQoJ3Nob3dQcmV2aW91cycpXG4gIHNldCBzaG93UHJldmlvdXModmFsdWU6IGJvb2xlYW4pIHsgICAgXG4gICAgdGhpcy5fc2hvd1ByZXZpb3VzID0gdmFsdWU7XG4gIH0gIFxuXG4gIF9zaG93TmV4dDogYm9vbGVhbj10cnVlO1xuICBASW5wdXQoJ3Nob3dOZXh0JylcbiAgc2V0IHNob3dOZXh0KHZhbHVlOiBib29sZWFuKSB7ICAgIFxuICAgIHRoaXMuX3Nob3dOZXh0ID0gdmFsdWU7XG4gIH1cblxuICBfc2hvd0RvdHM6IGJvb2xlYW49ZmFsc2U7XG4gIEBJbnB1dCgnc2hvd0RvdHMnKVxuICBzZXQgc2hvd0RvdHModmFsdWU6IGJvb2xlYW4pIHsgICAgXG4gICAgdGhpcy5fc2hvd0RvdHMgPSB2YWx1ZTtcbiAgfVxuXG4gIF9hdXRvcGxheTogYm9vbGVhbj1mYWxzZTtcbiAgQElucHV0KCdhdXRvcGxheScpXG4gIHNldCBhdXRvcGxheSh2YWx1ZTogYm9vbGVhbikgeyAgICBcbiAgICB0aGlzLl9hdXRvcGxheSA9IHZhbHVlO1xuICB9XG5cbiAgX2xvb3A6IGJvb2xlYW49ZmFsc2U7XG4gIEBJbnB1dCgnbG9vcCcpXG4gIHNldCBsb29wKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbG9vcCA9IHZhbHVlO1xuICB9XG5cbiAgX3BhdXNlT25Ib3ZlcjogYm9vbGVhbj1mYWxzZTtcbiAgQElucHV0KCdwYXVzZU9uSG92ZXInKVxuICBzZXQgcGF1c2VPbkhvdmVyKHZhbHVlOiBib29sZWFuKSB7ICAgIFxuICAgIHRoaXMuX3BhdXNlT25Ib3ZlciA9IHZhbHVlO1xuICB9XG4gIFxuICBfaXRlbU1hcmdpbjogc3RyaW5nPScxMHB4JztcbiAgQElucHV0KCdpdGVtTWFyZ2luJylcbiAgc2V0IGl0ZW1NYXJnaW4odmFsdWU6IG51bWJlcikgeyAgICBcbiAgICB0aGlzLl9pdGVtTWFyZ2luID0gdmFsdWUrJ3B4JztcbiAgfVxuXG4gIF9pdGVtUGFkZGluZzogc3RyaW5nPScwcHgnO1xuICBASW5wdXQoJ2l0ZW1QYWRkaW5nJylcbiAgc2V0IGl0ZW1QYWRkaW5nKHZhbHVlOiBudW1iZXIpIHsgICAgXG4gICAgdGhpcy5faXRlbVBhZGRpbmcgPSB2YWx1ZSsncHgnO1xuICB9XG5cbiAgX3RleHRQb3NpdGlvbjogc3RyaW5nPSdjZW50ZXJlZCc7XG4gIEBJbnB1dCgndGV4dFBvc2l0aW9uJylcbiAgc2V0IHRleHRQb3NpdGlvbih2YWx1ZTogJ2NlbnRlcmVkLXRvcCcgfCAnY2VudGVyZWQtYm90dG9tJyB8ICdjZW50ZXJlZCcgfCAnYm90dG9tLXJpZ2h0ICcgfCAndG9wLXJpZ2h0JyB8ICd0b3AtbGVmdCcgfCAnYm90dG9tLWxlZnQnKSB7ICAgIFxuICAgIHRoaXMuX3RleHRQb3NpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgX3RleHRDb2xvcjogc3RyaW5nPSdibGFjayc7XG4gIEBJbnB1dCgndGV4dENvbG9yJylcbiAgc2V0IHRleHRDb2xvcih2YWx1ZTogc3RyaW5nKSB7ICAgIFxuICAgIHRoaXMuX3RleHRDb2xvciA9IHZhbHVlO1xuICB9XG5cbiAgX2NlbGxMaW1pdDogbnVtYmVyPTE7XG4gIEBJbnB1dCgnY2VsbExpbWl0JylcbiAgc2V0IGNlbGxMaW1pdCh2YWx1ZTogbnVtYmVyKSB7ICAgIFxuICAgIHRoaXMuX2NlbGxMaW1pdCA9IHZhbHVlO1xuICB9ICAgICAgXG5cbiAgX2hlaWdodDogc3RyaW5nPScxMDAlJztcbiAgQElucHV0KCdoZWlnaHQnKVxuICBzZXQgaGVpZ2h0KHZhbHVlOiBudW1iZXIpIHsgICAgXG4gICAgdGhpcy5faGVpZ2h0ID0gdmFsdWUrMTArJ3B4JztcbiAgfVxuXG4gIF93aWR0aDogc3RyaW5nPScxMDAlJztcbiAgQElucHV0KCd3aWR0aCcpXG4gIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7ICAgIFxuICAgIHRoaXMuX3dpZHRoID0gdmFsdWUrMTArJ3B4JztcbiAgfVxuXG4gIF9hdXRvcGxheUludGVydmFsOiBudW1iZXI9MjAwMDtcbiAgQElucHV0KCdhdXRvcGxheUludGVydmFsJylcbiAgc2V0IGF1dG9wbGF5SW50ZXJ2YWwodmFsdWU6IG51bWJlcikgeyAgICBcbiAgICB0aGlzLl9hdXRvcGxheUludGVydmFsID0gdmFsdWU7XG4gIH1cblxuICBfdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXI9MC4zO1xuICBASW5wdXQoJ3RyYW5zaXRpb25EdXJhdGlvbicpXG4gIHNldCB0cmFuc2l0aW9uRHVyYXRpb24odmFsdWU6IG51bWJlcikgeyAgICBcbiAgICB0aGlzLl90cmFuc2l0aW9uRHVyYXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIF9jbGFzczogc3RyaW5nPScnO1xuICBASW5wdXQoJ2NsYXNzJylcbiAgc2V0IGNsYXNzKHZhbHVlOiBzdHJpbmcpIHsgICAgXG4gICAgdGhpcy5fY2xhc3MgPSB2YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKVxuICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZScpXG5cdGdldCBob3N0U3R5bGVzKCk6IFNhZmVTdHlsZSB7XG5cdFx0cmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSggIFtcbiAgICAgIGBoZWlnaHQ6ICR7dGhpcy5faGVpZ2h0fWBcblx0XHRdLmpvaW4oJzsnKSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcblx0Z2V0IGhvc3RDbGFzc2VzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFtcbiAgICAgIHRoaXMuX2NsYXNzXG5cdFx0XS5qb2luKCcgJyk7XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOkRvbVNhbml0aXplcikgeyBcblxuICB9ICBcblxuICBvblNlbGVjdChldmVudDogU21hcnRTbGlkZXJJdGVtKSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==