import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, HostBinding, Component, ɵɵdefineInjectable, Injectable, ElementRef, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { query, style, group, animate, trigger, transition } from '@angular/animations';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
import * as ɵngcc2 from '@angular/common';

function SmartSliderComponent_smart_slider_horizontal_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "smart-slider-horizontal", 2);
    ɵngcc0.ɵɵlistener("select", function SmartSliderComponent_smart_slider_horizontal_0_Template_smart_slider_horizontal_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onSelect($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("textColor", ctx_r0._textColor)("textPosition", ctx_r0._textPosition)("itemMargin", ctx_r0._itemMargin)("cellLimit", ctx_r0._cellLimit)("transitionDuration", ctx_r0._transitionDuration)("height", ctx_r0._height)("items", ctx_r0._items)("showPrevious", ctx_r0._showPrevious)("showNext", ctx_r0._showNext);
} }
function SmartSliderComponent_smart_slider_vertical_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "smart-slider-vertical", 3);
    ɵngcc0.ɵɵlistener("select", function SmartSliderComponent_smart_slider_vertical_1_Template_smart_slider_vertical_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onSelect($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("textColor", ctx_r1._textColor)("textPosition", ctx_r1._textPosition)("itemMargin", ctx_r1._itemMargin)("cellLimit", ctx_r1._cellLimit)("transitionDuration", ctx_r1._transitionDuration)("width", ctx_r1._width)("items", ctx_r1._items)("showPrevious", ctx_r1._showPrevious)("showNext", ctx_r1._showNext);
} }
function SmartSliderHorizontalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("click", function SmartSliderHorizontalComponent_div_1_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onPrevious(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("arrow-disabled", ctx_r0.isPreviousDisabled());
} }
const _c0 = function (a0, a1) { return { "height": a0, "width": a1 }; };
function SmartSliderHorizontalComponent_ng_container_3_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 11);
    ɵngcc0.ɵɵlistener("click", function SmartSliderHorizontalComponent_ng_container_3_div_1_img_2_Template_img_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const item_r5 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onItemClick(item_r5); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate("src", item_r5.image, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵpropertyInterpolate("alt", item_r5.image);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(3, _c0, ctx_r8._height, ctx_r8.smartSliderService.itemWidth));
} }
function SmartSliderHorizontalComponent_ng_container_3_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 12);
    ɵngcc0.ɵɵlistener("click", function SmartSliderHorizontalComponent_ng_container_3_div_1_span_3_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); const item_r5 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onItemClick(item_r5); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r9._textPosition);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r5.text, " ");
} }
const _c1 = function (a0) { return { "margin": a0 }; };
function SmartSliderHorizontalComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelementStart(1, "div", 8);
    ɵngcc0.ɵɵtemplate(2, SmartSliderHorizontalComponent_ng_container_3_div_1_img_2_Template, 1, 6, "img", 9);
    ɵngcc0.ɵɵtemplate(3, SmartSliderHorizontalComponent_ng_container_3_div_1_span_3_Template, 2, 4, "span", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(4, _c1, ctx_r7._itemMargin));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("className", ctx_r7.isLast(item_r5) ? "enter-item" : "item");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r5.image);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r5.text);
} }
function SmartSliderHorizontalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, SmartSliderHorizontalComponent_ng_container_3_div_1_Template, 4, 6, "div", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.show(item_r5));
} }
function SmartSliderHorizontalComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("click", function SmartSliderHorizontalComponent_div_4_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onNext(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("arrow-disabled", ctx_r2.isNextDisabled());
} }
function SmartSliderVerticalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("click", function SmartSliderVerticalComponent_div_1_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onPrevious(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("arrow-disabled", ctx_r0.isPreviousDisabled());
} }
function SmartSliderVerticalComponent_ng_container_3_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 11);
    ɵngcc0.ɵɵlistener("click", function SmartSliderVerticalComponent_ng_container_3_div_1_img_2_Template_img_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const item_r5 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onItemClick(item_r5); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate("src", item_r5.image, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵpropertyInterpolate("alt", item_r5.image);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(3, _c0, ctx_r8.smartSliderService.itemHeight, ctx_r8._width));
} }
function SmartSliderVerticalComponent_ng_container_3_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 12);
    ɵngcc0.ɵɵlistener("click", function SmartSliderVerticalComponent_ng_container_3_div_1_span_3_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); const item_r5 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onItemClick(item_r5); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r9._textPosition);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r5.text, " ");
} }
function SmartSliderVerticalComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelementStart(1, "div", 8);
    ɵngcc0.ɵɵtemplate(2, SmartSliderVerticalComponent_ng_container_3_div_1_img_2_Template, 1, 6, "img", 9);
    ɵngcc0.ɵɵtemplate(3, SmartSliderVerticalComponent_ng_container_3_div_1_span_3_Template, 2, 4, "span", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(4, _c1, ctx_r7._itemMargin));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("className", ctx_r7.isLast(item_r5) ? "enter-item" : "item");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r5.image);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r5.text);
} }
function SmartSliderVerticalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, SmartSliderVerticalComponent_ng_container_3_div_1_Template, 4, 6, "div", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.show(item_r5));
} }
function SmartSliderVerticalComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("click", function SmartSliderVerticalComponent_div_4_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onNext(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("arrow-disabled", ctx_r2.isNextDisabled());
} }
const _c2 = function (a0) { return { "arrow-disabled": a0 }; };
function SmartSliderVerticalV2Component_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "i", 4);
    ɵngcc0.ɵɵlistener("click", function SmartSliderVerticalV2Component_i_0_Template_i_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.getPrevious(); });
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 5);
    ɵngcc0.ɵɵelement(2, "path", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("font-size", ctx_r0.privateSmartSliderOptions.arrows.size, "px");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c2, ctx_r0.arrowTopDisabled));
} }
function SmartSliderVerticalV2Component_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r8.privateSmartSliderOptions.textOptions.textPosition);
    ɵngcc0.ɵɵstyleProp("color", ctx_r8.privateSmartSliderOptions.textOptions.textColor)("font-size", ctx_r8.privateSmartSliderOptions.textOptions.textFontSize, "px");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.smartSliderService.getText(item_r6, ctx_r8.privateSmartSliderOptions));
} }
function SmartSliderVerticalV2Component_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵlistener("click", function SmartSliderVerticalV2Component_div_2_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); const item_r6 = ctx.$implicit; const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onItemClick(item_r6); });
    ɵngcc0.ɵɵelement(1, "img", 8);
    ɵngcc0.ɵɵtemplate(2, SmartSliderVerticalV2Component_div_2_span_2_Template, 2, 8, "span", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("padding", ctx_r1.privateSmartSliderOptions.itemOptions.itemPadding, "px")("width", ctx_r1.privateSmartSliderOptions.itemOptions.itemWidth);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.setItemStyles(item_r6.isSelected));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("width", "100%");
    ɵngcc0.ɵɵproperty("src", ctx_r1.smartSliderService.getImage(item_r6, ctx_r1.privateSmartSliderOptions), ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.smartSliderService.getText(item_r6, ctx_r1.privateSmartSliderOptions));
} }
function SmartSliderVerticalV2Component_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "i", 4);
    ɵngcc0.ɵɵlistener("click", function SmartSliderVerticalV2Component_i_3_Template_i_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.getNext(); });
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 10);
    ɵngcc0.ɵɵelement(2, "path", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("font-size", ctx_r2.privateSmartSliderOptions.arrows.size, "px");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c2, ctx_r2.arrowBottomDisabled));
} }
function SmartSliderVerticalV2Component_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelementStart(1, "i", 13);
    ɵngcc0.ɵɵlistener("click", function SmartSliderVerticalV2Component_div_4_Template_i_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.getPrevious(); });
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(2, "svg", 5);
    ɵngcc0.ɵɵelement(3, "path", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵnamespaceHTML();
    ɵngcc0.ɵɵelementStart(4, "i", 14);
    ɵngcc0.ɵɵlistener("click", function SmartSliderVerticalV2Component_div_4_Template_i_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.getNext(); });
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(5, "svg", 10);
    ɵngcc0.ɵɵelement(6, "path", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("float", ctx_r3.arrowsPosition);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("font-size", ctx_r3.privateSmartSliderOptions.arrows.size, "px");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c2, ctx_r3.arrowTopDisabled));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵstyleProp("font-size", ctx_r3.privateSmartSliderOptions.arrows.size, "px");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c2, ctx_r3.arrowBottomDisabled));
} }
function SmartSliderHorizontalV2Component_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "i", 5);
    ɵngcc0.ɵɵlistener("click", function SmartSliderHorizontalV2Component_i_0_Template_i_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.getPrevious(); });
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 6);
    ɵngcc0.ɵɵelement(2, "path", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("font-size", ctx_r0.privateSmartSliderOptions.arrows.size, "px");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c2, ctx_r0.arrowTopDisabled));
} }
function SmartSliderHorizontalV2Component_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r8.privateSmartSliderOptions.textOptions.textPosition);
    ɵngcc0.ɵɵstyleProp("color", ctx_r8.privateSmartSliderOptions.textOptions.textColor)("font-size", ctx_r8.privateSmartSliderOptions.textOptions.textFontSize, "px");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.smartSliderService.getText(item_r6, ctx_r8.privateSmartSliderOptions));
} }
function SmartSliderHorizontalV2Component_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵlistener("click", function SmartSliderHorizontalV2Component_div_2_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); const item_r6 = ctx.$implicit; const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onItemClick(item_r6); });
    ɵngcc0.ɵɵelement(1, "img", 9);
    ɵngcc0.ɵɵtemplate(2, SmartSliderHorizontalV2Component_div_2_span_2_Template, 2, 8, "span", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("padding", ctx_r1.privateSmartSliderOptions.itemOptions.itemPadding, "px")("width", ctx_r1.privateSmartSliderOptions.itemOptions.itemWidth);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.setItemStyles(item_r6.isSelected));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("width", "100%");
    ɵngcc0.ɵɵproperty("src", ctx_r1.smartSliderService.getImage(item_r6, ctx_r1.privateSmartSliderOptions), ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.smartSliderService.getText(item_r6, ctx_r1.privateSmartSliderOptions));
} }
function SmartSliderHorizontalV2Component_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "i", 11);
    ɵngcc0.ɵɵlistener("click", function SmartSliderHorizontalV2Component_i_3_Template_i_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.getNext(); });
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 12);
    ɵngcc0.ɵɵelement(2, "path", 13);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("font-size", ctx_r2.privateSmartSliderOptions.arrows.size, "px");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c2, ctx_r2.arrowBottomDisabled));
} }
function SmartSliderHorizontalV2Component_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵelementStart(1, "i", 15);
    ɵngcc0.ɵɵlistener("click", function SmartSliderHorizontalV2Component_div_4_Template_i_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.getPrevious(); });
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(2, "svg", 6);
    ɵngcc0.ɵɵelement(3, "path", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵnamespaceHTML();
    ɵngcc0.ɵɵelementStart(4, "i", 16);
    ɵngcc0.ɵɵlistener("click", function SmartSliderHorizontalV2Component_div_4_Template_i_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.getNext(); });
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(5, "svg", 12);
    ɵngcc0.ɵɵelement(6, "path", 13);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("float", ctx_r3.arrowsPosition);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("font-size", ctx_r3.privateSmartSliderOptions.arrows.size, "px");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c2, ctx_r3.arrowTopDisabled));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵstyleProp("font-size", ctx_r3.privateSmartSliderOptions.arrows.size, "px");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c2, ctx_r3.arrowBottomDisabled));
} }
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
SmartSliderComponent.ɵfac = function SmartSliderComponent_Factory(t) { return new (t || SmartSliderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer)); };
SmartSliderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SmartSliderComponent, selectors: [["smart-slider"]], hostVars: 4, hostBindings: function SmartSliderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleMap(ctx.hostStyles);
        ɵngcc0.ɵɵclassMap(ctx.hostClasses);
    } }, inputs: { vertical: "vertical", items: "items", showPrevious: "showPrevious", showNext: "showNext", showDots: "showDots", autoplay: "autoplay", loop: "loop", pauseOnHover: "pauseOnHover", itemMargin: "itemMargin", itemPadding: "itemPadding", textPosition: "textPosition", textColor: "textColor", cellLimit: "cellLimit", height: "height", width: "width", autoplayInterval: "autoplayInterval", transitionDuration: "transitionDuration", class: "class" }, outputs: { select: "select" }, decls: 2, vars: 2, consts: [[3, "textColor", "textPosition", "itemMargin", "cellLimit", "transitionDuration", "height", "items", "showPrevious", "showNext", "select", 4, "ngIf"], [3, "textColor", "textPosition", "itemMargin", "cellLimit", "transitionDuration", "width", "items", "showPrevious", "showNext", "select", 4, "ngIf"], [3, "textColor", "textPosition", "itemMargin", "cellLimit", "transitionDuration", "height", "items", "showPrevious", "showNext", "select"], [3, "textColor", "textPosition", "itemMargin", "cellLimit", "transitionDuration", "width", "items", "showPrevious", "showNext", "select"]], template: function SmartSliderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SmartSliderComponent_smart_slider_horizontal_0_Template, 1, 9, "smart-slider-horizontal", 0);
        ɵngcc0.ɵɵtemplate(1, SmartSliderComponent_smart_slider_vertical_1_Template, 1, 9, "smart-slider-vertical", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx._vertical);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._vertical);
    } }, directives: function () { return [ɵngcc2.NgIf, SmartSliderHorizontalComponent,
        SmartSliderVerticalComponent]; }, styles: ["[_nghost-%COMP%]{display:block;width:100%}.container[_ngcontent-%COMP%]{position:absolute;overflow:hidden;width:100%;cursor:-webkit-grab;cursor:grab}.slider-image[_ngcontent-%COMP%]{opacity:.8}.slider-image[_ngcontent-%COMP%]:hover{opacity:.9}.enter-item[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]{display:block;position:relative;text-align:center;color:#000}.bottom-left[_ngcontent-%COMP%]{position:absolute;bottom:8px;left:16px}.top-left[_ngcontent-%COMP%]{position:absolute;top:8px;left:16px}.top-right[_ngcontent-%COMP%]{position:absolute;top:8px;right:16px}.bottom-right[_ngcontent-%COMP%]{position:absolute;bottom:8px;right:16px}.centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom[_ngcontent-%COMP%]{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top[_ngcontent-%COMP%]{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}.items-left[_ngcontent-%COMP%]{transition:transform .2s}.img-with-text[_ngcontent-%COMP%]{display:inline-flex;cursor:pointer;align-items:center;vertical-align:top}.img-with-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-bottom[_ngcontent-%COMP%]{margin-left:-110px;margin-bottom:-20px}.arrow[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:center;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}.arrow-prev[_ngcontent-%COMP%]{transform:rotate(90deg);left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}.arrow-next[_ngcontent-%COMP%]{transform:rotate(90deg);right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}.arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}"] });
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
SmartSliderService.ɵfac = function SmartSliderService_Factory(t) { return new (t || SmartSliderService)(); };
SmartSliderService.ɵprov = ɵɵdefineInjectable({ factory: function SmartSliderService_Factory() { return new SmartSliderService(); }, token: SmartSliderService, providedIn: "root" });

let left = [
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
let right = [
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
let SmartSliderHorizontalComponent = class SmartSliderHorizontalComponent {
    constructor(element, sanitizer) {
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
    set items(value) {
        this._items = value;
        this.smartSliderService.setItems(this._items, this._cellLimit);
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
        this.smartSliderService.isLoop = value;
        this._loop = value;
    }
    set pauseOnHover(value) {
        this._pauseOnHover = value;
    }
    set itemMargin(value) {
        this._itemMargin = value;
    }
    set itemPadding(value) {
        this._itemPadding = value;
    }
    set textPosition(value) {
        this._textPosition = value;
    }
    set textColor(value) {
        this._textColor = value;
    }
    set cellLimit(value) {
        this._cellLimit = value;
        this.smartSliderService.setItems(this._items, this._cellLimit);
    }
    set height(value) {
        this._height = value;
        this.containerHeight = Number.parseInt(value) + 10 + 'px';
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
            `height: ${this.containerHeight}`
        ].join(';'));
    }
    get hostClasses() {
        return [
            this._class
        ].join(' ');
    }
    onResize() {
        this.resize();
    }
    get slideInOut() {
        return {
            value: this.smartSliderService.itemIndex,
            params: {
                inWidth: this.width,
                inHeight: this._height,
                inTiming: this._transitionDuration
            }
        };
    }
    resize() {
        let parentElement = this.element.nativeElement.parentNode.parentNode;
        this.width = (parentElement.clientWidth) + 'px';
        this.smartSliderService.setWidth(parentElement.clientWidth);
    }
    ngOnInit() {
        this.smartSliderService.setItems(this._items, this._cellLimit);
        this.resize();
    }
    onItemClick(selected) {
        this.select.emit(selected);
    }
    isNextDisabled() {
        return this.smartSliderService.itemIndex === this._items.length - 1;
    }
    isPreviousDisabled() {
        return this.smartSliderService.itemIndex === 0;
    }
    show(item) {
        return this.smartSliderService.itemsToShow.includes(item);
    }
    onNext() {
        console.log('itemIndex', this.smartSliderService.itemIndex);
        this.smartSliderService.moveNext();
        this.isNext = true;
    }
    onPrevious() {
        this.smartSliderService.movePrevious();
        this.isNext = false;
    }
    isLast(item) {
        return this.smartSliderService.itemsToShow[this.isNext ? this.smartSliderService.itemsToShow.length - 1 : 0] === item;
    }
    onTransitionEnd() {
        this.smartSliderService.sliderDone();
    }
};
SmartSliderHorizontalComponent.ɵfac = function SmartSliderHorizontalComponent_Factory(t) { return new (t || SmartSliderHorizontalComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer)); };
SmartSliderHorizontalComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SmartSliderHorizontalComponent, selectors: [["smart-slider-horizontal"]], hostVars: 4, hostBindings: function SmartSliderHorizontalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function SmartSliderHorizontalComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, ɵngcc0.ɵɵresolveWindow);
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleMap(ctx.hostStyles);
        ɵngcc0.ɵɵclassMap(ctx.hostClasses);
    } }, inputs: { items: "items", showPrevious: "showPrevious", showNext: "showNext", showDots: "showDots", autoplay: "autoplay", loop: "loop", pauseOnHover: "pauseOnHover", itemMargin: "itemMargin", itemPadding: "itemPadding", textPosition: "textPosition", textColor: "textColor", cellLimit: "cellLimit", height: "height", autoplayInterval: "autoplayInterval", transitionDuration: "transitionDuration", class: "class" }, outputs: { select: "select" }, decls: 5, vars: 12, consts: [[1, "container", 3, "ngStyle"], ["class", "arrow arrow-prev", 3, "arrow-disabled", "click", 4, "ngIf"], [1, "items", 3, "ngStyle"], [4, "ngFor", "ngForOf"], ["class", "arrow arrow-next", 3, "arrow-disabled", "click", 4, "ngIf"], [1, "arrow", "arrow-prev", 3, "click"], ["class", "img-with-text", 3, "ngStyle", 4, "ngIf"], [1, "img-with-text", 3, "ngStyle"], [3, "className"], ["class", "slider-image", "draggable", "false", 3, "src", "alt", "ngStyle", "click", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], ["draggable", "false", 1, "slider-image", 3, "src", "alt", "ngStyle", "click"], [3, "click"], [1, "arrow", "arrow-next", 3, "click"]], template: function SmartSliderHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, SmartSliderHorizontalComponent_div_1_Template, 1, 2, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵlistener("@slideInOut.done", function SmartSliderHorizontalComponent_Template_div_animation_slideInOut_done_2_listener() { return ctx.onTransitionEnd(); });
        ɵngcc0.ɵɵtemplate(3, SmartSliderHorizontalComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, SmartSliderHorizontalComponent_div_4_Template, 1, 2, "div", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(6, _c0, ctx.containerHeight, ctx.width));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._showPrevious);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@slideInOut", ctx.smartSliderService.itemIndex)("ngStyle", ɵngcc0.ɵɵpureFunction2(9, _c0, ctx.containerHeight, ctx.width));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx._items);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._showNext);
    } }, directives: [ɵngcc2.NgStyle, ɵngcc2.NgIf, ɵngcc2.NgForOf], styles: ["[_nghost-%COMP%]{display:block;width:100%}.container[_ngcontent-%COMP%]{position:absolute;overflow:hidden;width:100%;cursor:-webkit-grab;cursor:grab}.slider-image[_ngcontent-%COMP%]{opacity:.8}.slider-image[_ngcontent-%COMP%]:hover{opacity:.9}.enter-item[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]{display:block;position:relative;text-align:center;color:#000}.bottom-left[_ngcontent-%COMP%]{position:absolute;bottom:8px;left:16px}.top-left[_ngcontent-%COMP%]{position:absolute;top:8px;left:16px}.top-right[_ngcontent-%COMP%]{position:absolute;top:8px;right:16px}.bottom-right[_ngcontent-%COMP%]{position:absolute;bottom:8px;right:16px}.centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom[_ngcontent-%COMP%]{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top[_ngcontent-%COMP%]{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}.items[_ngcontent-%COMP%]{display:inline-block}.items-left[_ngcontent-%COMP%]{transition:transform .2s}.img-with-text[_ngcontent-%COMP%]{display:inline-flex;cursor:pointer;align-items:center;vertical-align:top}.img-with-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-bottom[_ngcontent-%COMP%]{margin-left:-110px;margin-bottom:-20px}.arrow[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:center;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}.arrow-prev[_ngcontent-%COMP%]{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}.arrow-next[_ngcontent-%COMP%]{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}.arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}"], data: { animation: [
            trigger('slideInOut', [
                transition(':increment', right, { params: { inWidth: '100%', inHeight: '100%', inTiming: '1' } }),
                transition(':decrement', left, { params: { inWidth: '100%', inHeight: '100%', inTiming: '1' } }),
            ]),
        ] } });
SmartSliderHorizontalComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer }
];
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

let bottom = [
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
let top = [
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
let SmartSliderVerticalComponent = class SmartSliderVerticalComponent {
    constructor(element) {
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
    set items(value) {
        this._items = value;
        this.smartSliderService.setItems(this._items, this._cellLimit);
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
        this.smartSliderService.isLoop = value;
        this._loop = value;
    }
    set pauseOnHover(value) {
        this._pauseOnHover = value;
    }
    set itemMargin(value) {
        this._itemMargin = value;
    }
    set itemPadding(value) {
        this._itemPadding = value;
    }
    set textPosition(value) {
        this._textPosition = value;
    }
    set textColor(value) {
        this._textColor = value;
    }
    set cellLimit(value) {
        this._cellLimit = value;
        this.smartSliderService.setItems(this._items, this._cellLimit);
    }
    set width(value) {
        this._width = value;
        this.containerWidth = Number.parseInt(value) + 40 + 'px';
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
    get hostClasses() {
        return [
            this._class
        ].join(' ');
    }
    onResize() {
        this.resize();
    }
    get slideInOut() {
        return { value: this.smartSliderService.itemIndex, params: { inWidth: this._width, inHeight: this.height, inTiming: this._transitionDuration } };
    }
    resize() {
        let parentElement = this.element.nativeElement.parentNode.parentNode;
        this.height = (parentElement.clientHeight) + 'px';
        this.smartSliderService.setHeight(parentElement.clientHeight);
    }
    ngOnInit() {
        this.smartSliderService.setItems(this._items, this._cellLimit);
        this.resize();
    }
    onItemClick(selected) {
        this.select.emit(selected);
    }
    isNextDisabled() {
        return this.smartSliderService.itemIndex === this._items.length - 1;
    }
    isPreviousDisabled() {
        return this.smartSliderService.itemIndex === 0;
    }
    show(item) {
        return this.smartSliderService.itemsToShow.includes(item);
    }
    onNext() {
        console.log('itemIndex', this.smartSliderService.itemIndex);
        this.smartSliderService.moveNext();
        this.isNext = true;
    }
    onPrevious() {
        this.smartSliderService.movePrevious();
        this.isNext = false;
    }
    isLast(item) {
        return this.smartSliderService.itemsToShow[this.isNext ? this.smartSliderService.itemsToShow.length - 1 : 0] === item;
    }
    onTransitionEnd() {
        this.smartSliderService.sliderDone();
    }
};
SmartSliderVerticalComponent.ɵfac = function SmartSliderVerticalComponent_Factory(t) { return new (t || SmartSliderVerticalComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SmartSliderVerticalComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SmartSliderVerticalComponent, selectors: [["smart-slider-vertical"]], hostVars: 2, hostBindings: function SmartSliderVerticalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function SmartSliderVerticalComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, ɵngcc0.ɵɵresolveWindow);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.hostClasses);
    } }, inputs: { items: "items", showPrevious: "showPrevious", showNext: "showNext", showDots: "showDots", autoplay: "autoplay", loop: "loop", pauseOnHover: "pauseOnHover", itemMargin: "itemMargin", itemPadding: "itemPadding", textPosition: "textPosition", textColor: "textColor", cellLimit: "cellLimit", width: "width", autoplayInterval: "autoplayInterval", transitionDuration: "transitionDuration", class: "class" }, outputs: { select: "select" }, decls: 5, vars: 8, consts: [[1, "container", 3, "ngStyle"], ["class", "arrow arrow-prev", 3, "arrow-disabled", "click", 4, "ngIf"], [1, "items"], [4, "ngFor", "ngForOf"], ["class", "arrow arrow-next", 3, "arrow-disabled", "click", 4, "ngIf"], [1, "arrow", "arrow-prev", 3, "click"], ["class", "img-with-text", 3, "ngStyle", 4, "ngIf"], [1, "img-with-text", 3, "ngStyle"], [3, "className"], ["class", "slider-image", "draggable", "false", 3, "src", "alt", "ngStyle", "click", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], ["draggable", "false", 1, "slider-image", 3, "src", "alt", "ngStyle", "click"], [3, "click"], [1, "arrow", "arrow-next", 3, "click"]], template: function SmartSliderVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, SmartSliderVerticalComponent_div_1_Template, 1, 2, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵlistener("@slideInOut.done", function SmartSliderVerticalComponent_Template_div_animation_slideInOut_done_2_listener() { return ctx.onTransitionEnd(); });
        ɵngcc0.ɵɵtemplate(3, SmartSliderVerticalComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, SmartSliderVerticalComponent_div_4_Template, 1, 2, "div", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(5, _c0, ctx.height, ctx.containerWidth));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._showPrevious);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@slideInOut", ctx.smartSliderService.itemIndex);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx._items);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._showNext);
    } }, directives: [ɵngcc2.NgStyle, ɵngcc2.NgIf, ɵngcc2.NgForOf], styles: ["[_nghost-%COMP%]{display:block;height:100%}.container[_ngcontent-%COMP%]{position:absolute;overflow:hidden;height:100%;cursor:-webkit-grab;cursor:grab}.slider-image[_ngcontent-%COMP%]{opacity:.8}.slider-image[_ngcontent-%COMP%]:hover{opacity:.9}.enter-item[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]{display:block;position:relative;text-align:center;color:#000}.bottom-left[_ngcontent-%COMP%]{position:absolute;bottom:8px;left:16px}.top-left[_ngcontent-%COMP%]{position:absolute;top:8px;left:16px}.top-right[_ngcontent-%COMP%]{position:absolute;top:8px;right:16px}.bottom-right[_ngcontent-%COMP%]{position:absolute;bottom:8px;right:16px}.centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom[_ngcontent-%COMP%]{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top[_ngcontent-%COMP%]{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}.items[_ngcontent-%COMP%]{display:inline-block}.items-left[_ngcontent-%COMP%]{transition:transform .2s}.img-with-text[_ngcontent-%COMP%]{cursor:pointer;align-items:center;vertical-align:top}.img-with-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-bottom[_ngcontent-%COMP%]{margin-left:-110px;margin-bottom:-20px}.arrow[_ngcontent-%COMP%]{text-align:center;width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:center;border-radius:100px;position:absolute;right:36%;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}.arrow-prev[_ngcontent-%COMP%]{transform:rotate(90deg);top:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}.arrow-next[_ngcontent-%COMP%]{transform:rotate(90deg);bottom:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}.arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}"], data: { animation: [
            trigger('slideInOut', [
                transition(':increment', top, { params: { inWidth: '100%', inHeight: '100%', inTiming: '1' } }),
                transition(':decrement', bottom, { params: { inWidth: '100%', inHeight: '100%', inTiming: '1' } }),
            ]),
        ] } });
SmartSliderVerticalComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
SmartSliderVerticalV2Component.ɵfac = function SmartSliderVerticalV2Component_Factory(t) { return new (t || SmartSliderVerticalV2Component)(ɵngcc0.ɵɵdirectiveInject(SmartSliderService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SmartSliderVerticalV2Component.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SmartSliderVerticalV2Component, selectors: [["smart-slider-vertical-v2"]], hostVars: 2, hostBindings: function SmartSliderVerticalV2Component_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function SmartSliderVerticalV2Component_resize_HostBindingHandler() { return ctx.onResize(); }, false, ɵngcc0.ɵɵresolveWindow);
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleMap(ctx.hostStyles);
    } }, inputs: { smartSliderOptions: ["options", "smartSliderOptions"], items: "items" }, outputs: { selectItem: "selectItem" }, decls: 5, vars: 11, consts: [["style", "width: 100%; position: relative", "class", "icon-a pointer", 3, "font-size", "ngClass", "click", 4, "ngIf"], [2, "overflow", "hidden", 3, "id"], ["class", "item-in-data", 3, "ngStyle", "padding", "width", "click", 4, "ngFor", "ngForOf"], ["style", "height: 100%; width: 10%; position: relative", 3, "float", 4, "ngIf"], [1, "icon-a", "pointer", 2, "width", "100%", "position", "relative", 3, "ngClass", "click"], ["viewBox", "0 0 1024 1024", "focusable", "false", "fill", "currentColor", "width", "1em", "height", "1em", "data-icon", "caret-up", "aria-hidden", "true"], ["d", "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"], [1, "item-in-data", 3, "ngStyle", "click"], [3, "src"], [3, "class", "color", "font-size", 4, "ngIf"], ["viewBox", "0 0 1024 1024", "focusable", "false", "fill", "currentColor", "width", "1em", "height", "1em", "data-icon", "caret-down", "aria-hidden", "true"], ["d", "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"], [2, "height", "100%", "width", "10%", "position", "relative"], [1, "icon-a", "arrow", "arrow-top", 3, "ngClass", "click"], [1, "icon-a", "arrow", "arrow-bottom", 3, "ngClass", "click"]], template: function SmartSliderVerticalV2Component_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SmartSliderVerticalV2Component_i_0_Template, 3, 5, "i", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, SmartSliderVerticalV2Component_div_2_Template, 3, 9, "div", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, SmartSliderVerticalV2Component_i_3_Template, 3, 5, "i", 0);
        ɵngcc0.ɵɵtemplate(4, SmartSliderVerticalV2Component_div_4_Template, 7, 12, "div", 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.privateSmartSliderOptions.arrows.position === "center");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("height", ctx.dataPosition === "none" ? "calc(100% - " + ctx.arrowsHeight + "px)" : "100%")("float", ctx.dataPosition)("width", ctx.dataBlockWidth);
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.dataId);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.itemsToShow);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.privateSmartSliderOptions.arrows.position === "center");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.privateSmartSliderOptions.arrows.position === "right" || ctx.privateSmartSliderOptions.arrows.position === "left");
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc2.NgClass, ɵngcc2.NgStyle], styles: [".icon-a[_ngcontent-%COMP%]{color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em}.icon-a[_ngcontent-%COMP%], .icon-a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline-block}.arrow[_ngcontent-%COMP%]{position:absolute;cursor:pointer}.pointer[_ngcontent-%COMP%]{cursor:pointer}.arrow-disabled[_ngcontent-%COMP%]{cursor:not-allowed!important;color:#bbb!important}.arrow-top[_ngcontent-%COMP%]{top:0}.arrow-bottom[_ngcontent-%COMP%]{bottom:0}.item-in-data[_ngcontent-%COMP%]{float:left;display:block;position:relative;text-align:center;color:#000;cursor:pointer}.bottom-left[_ngcontent-%COMP%]{position:absolute;bottom:8px;left:16px}.top-left[_ngcontent-%COMP%]{position:absolute;top:8px;left:16px}.top-right[_ngcontent-%COMP%]{position:absolute;top:8px;right:16px}.bottom-right[_ngcontent-%COMP%]{position:absolute;bottom:8px;right:16px}.centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom[_ngcontent-%COMP%]{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top[_ngcontent-%COMP%]{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}"] });
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

let SmartSliderHorizontalV2Component = class SmartSliderHorizontalV2Component {
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
            `position: relative`
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
    get dataBlockHeight() {
        if (this.privateSmartSliderOptions.arrows.position === 'center') {
            return '100%';
        }
        return '90%';
    }
    get arrowsWidth() {
        return this.privateSmartSliderOptions.arrows.size * 2;
    }
    get arrowsPosition() {
        if (this.privateSmartSliderOptions.arrows.position === 'top') {
            this.dataPosition = 'bottom';
            return 'top';
        }
        if (this.privateSmartSliderOptions.arrows.position === 'bottom') {
            this.dataPosition = 'top';
            return 'bottom';
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
SmartSliderHorizontalV2Component.ɵfac = function SmartSliderHorizontalV2Component_Factory(t) { return new (t || SmartSliderHorizontalV2Component)(ɵngcc0.ɵɵdirectiveInject(SmartSliderService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SmartSliderHorizontalV2Component.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SmartSliderHorizontalV2Component, selectors: [["smart-slider-horizontal-v2"]], hostVars: 2, hostBindings: function SmartSliderHorizontalV2Component_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function SmartSliderHorizontalV2Component_resize_HostBindingHandler() { return ctx.onResize(); }, false, ɵngcc0.ɵɵresolveWindow);
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleMap(ctx.hostStyles);
    } }, inputs: { smartSliderOptions: ["options", "smartSliderOptions"], items: "items" }, outputs: { selectItem: "selectItem" }, decls: 5, vars: 11, consts: [["style", "\n    height: 100%;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    float: left;\n  ", "class", "icon-a pointer", 3, "font-size", "ngClass", "click", 4, "ngIf"], [2, "overflow", "hidden", 3, "id"], ["class", "item-in-data", 3, "ngStyle", "padding", "width", "click", 4, "ngFor", "ngForOf"], ["style", "position: absolute; top: 50%; transform: translateY(-50%); right: 0px", "class", "icon-a pointer", 3, "font-size", "ngClass", "click", 4, "ngIf"], ["style", "height: 10%; width: 100%; position: relative", 3, "float", 4, "ngIf"], [1, "icon-a", "pointer", 2, "height", "100%", "position", "relative", "display", "flex", "justify-content", "center", "align-items", "center", "float", "left", 3, "ngClass", "click"], ["viewBox", "0 0 1024 1024", "focusable", "false", "fill", "currentColor", "width", "1em", "height", "1em", "data-icon", "caret-left", "aria-hidden", "true"], ["d", "M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"], [1, "item-in-data", 3, "ngStyle", "click"], [3, "src"], [3, "class", "color", "font-size", 4, "ngIf"], [1, "icon-a", "pointer", 2, "position", "absolute", "top", "50%", "transform", "translateY(-50%)", "right", "0px", 3, "ngClass", "click"], ["viewBox", "0 0 1024 1024", "focusable", "false", "fill", "currentColor", "width", "1em", "height", "1em", "data-icon", "caret-right", "aria-hidden", "true"], ["d", "M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"], [2, "height", "10%", "width", "100%", "position", "relative"], [1, "icon-a", "arrow", "arrow-left", 3, "ngClass", "click"], [1, "icon-a", "arrow", "arrow-right", 3, "ngClass", "click"]], template: function SmartSliderHorizontalV2Component_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SmartSliderHorizontalV2Component_i_0_Template, 3, 5, "i", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, SmartSliderHorizontalV2Component_div_2_Template, 3, 9, "div", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, SmartSliderHorizontalV2Component_i_3_Template, 3, 5, "i", 3);
        ɵngcc0.ɵɵtemplate(4, SmartSliderHorizontalV2Component_div_4_Template, 7, 12, "div", 4);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.privateSmartSliderOptions.arrows.position === "center");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("width", ctx.dataPosition === "none" ? "calc(100% - " + ctx.arrowsWidth + "px)" : "100%")("float", ctx.dataPosition)("height", ctx.dataBlockHeight);
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.dataId);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.itemsToShow);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.privateSmartSliderOptions.arrows.position === "center");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.privateSmartSliderOptions.arrows.position === "top" || ctx.privateSmartSliderOptions.arrows.position === "bottom");
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc2.NgClass, ɵngcc2.NgStyle], styles: [".icon-a[_ngcontent-%COMP%]{color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em}.icon-a[_ngcontent-%COMP%], .icon-a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline-block}.arrow[_ngcontent-%COMP%]{position:absolute;cursor:pointer}.pointer[_ngcontent-%COMP%]{cursor:pointer}.arrow-disabled[_ngcontent-%COMP%]{cursor:not-allowed!important;color:#bbb!important}.arrow-top[_ngcontent-%COMP%]{top:0}.arrow-bottom[_ngcontent-%COMP%]{bottom:0}.arrow-left[_ngcontent-%COMP%]{left:0}.arrow-right[_ngcontent-%COMP%]{right:0}.item-in-data[_ngcontent-%COMP%]{float:left;display:block;position:relative;text-align:center;color:#000;cursor:pointer}.bottom-left[_ngcontent-%COMP%]{position:absolute;bottom:8px;left:16px}.top-left[_ngcontent-%COMP%]{position:absolute;top:8px;left:16px}.top-right[_ngcontent-%COMP%]{position:absolute;top:8px;right:16px}.bottom-right[_ngcontent-%COMP%]{position:absolute;bottom:8px;right:16px}.centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom[_ngcontent-%COMP%]{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top[_ngcontent-%COMP%]{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}"] });
SmartSliderHorizontalV2Component.ctorParameters = () => [
    { type: SmartSliderService },
    { type: DomSanitizer },
    { type: ElementRef }
];
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

const declarations = [
    SmartSliderComponent,
    SmartSliderVerticalV2Component,
    SmartSliderHorizontalV2Component,
];
let SmartSliderModule = class SmartSliderModule {
};
SmartSliderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SmartSliderModule });
SmartSliderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SmartSliderModule_Factory(t) { return new (t || SmartSliderModule)(); }, imports: [[
            CommonModule,
            BrowserModule,
            FormsModule,
            BrowserAnimationsModule
        ]] });

const imports = [
    SmartSliderModule,
];
let NgxSmartSliderModule = class NgxSmartSliderModule {
};
NgxSmartSliderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxSmartSliderModule });
NgxSmartSliderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxSmartSliderModule_Factory(t) { return new (t || NgxSmartSliderModule)(); }, imports: [[
            CommonModule,
            ...imports,
        ],
        SmartSliderModule] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SmartSliderComponent, [{
        type: Component,
        args: [{
                selector: 'smart-slider',
                template: "<smart-slider-horizontal *ngIf=\"!_vertical\" [textColor]=\"_textColor\" [textPosition]=\"_textPosition\" [itemMargin]=\"_itemMargin\" [cellLimit]=\"_cellLimit\" [transitionDuration]=\"_transitionDuration\" [height]=\"_height\" [items]=\"_items\" [showPrevious]=\"_showPrevious\" [showNext]=\"_showNext\" (select)=\"onSelect($event)\"></smart-slider-horizontal>\r\n<smart-slider-vertical *ngIf=\"_vertical\" [textColor]=\"_textColor\" [textPosition]=\"_textPosition\" [itemMargin]=\"_itemMargin\" [cellLimit]=\"_cellLimit\" [transitionDuration]=\"_transitionDuration\" [width]=\"_width\" [items]=\"_items\" [showPrevious]=\"_showPrevious\" [showNext]=\"_showNext\" (select)=\"onSelect($event)\"></smart-slider-vertical>",
                styles: [":host{display:block;width:100%}.container{position:absolute;overflow:hidden;width:100%;cursor:-webkit-grab;cursor:grab}.slider-image{opacity:.8}.slider-image:hover{opacity:.9}.enter-item,.item{display:block;position:relative;text-align:center;color:#000}.bottom-left{position:absolute;bottom:8px;left:16px}.top-left{position:absolute;top:8px;left:16px}.top-right{position:absolute;top:8px;right:16px}.bottom-right{position:absolute;bottom:8px;right:16px}.centered{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}.items-left{transition:transform .2s}.img-with-text{display:inline-flex;cursor:pointer;align-items:center;vertical-align:top}.img-with-text img{border-radius:10px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-bottom{margin-left:-110px;margin-bottom:-20px}.arrow{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:center;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}.arrow-prev{transform:rotate(90deg);left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}.arrow-next{transform:rotate(90deg);right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}.arrow-disabled{cursor:default;opacity:.5}"]
            }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }]; }, { select: [{
            type: Output
        }], vertical: [{
            type: Input,
            args: ['vertical']
        }], items: [{
            type: Input,
            args: ['items']
        }], showPrevious: [{
            type: Input,
            args: ['showPrevious']
        }], showNext: [{
            type: Input,
            args: ['showNext']
        }], showDots: [{
            type: Input,
            args: ['showDots']
        }], autoplay: [{
            type: Input,
            args: ['autoplay']
        }], loop: [{
            type: Input,
            args: ['loop']
        }], pauseOnHover: [{
            type: Input,
            args: ['pauseOnHover']
        }], itemMargin: [{
            type: Input,
            args: ['itemMargin']
        }], itemPadding: [{
            type: Input,
            args: ['itemPadding']
        }], textPosition: [{
            type: Input,
            args: ['textPosition']
        }], textColor: [{
            type: Input,
            args: ['textColor']
        }], cellLimit: [{
            type: Input,
            args: ['cellLimit']
        }], height: [{
            type: Input,
            args: ['height']
        }], width: [{
            type: Input,
            args: ['width']
        }], autoplayInterval: [{
            type: Input,
            args: ['autoplayInterval']
        }], transitionDuration: [{
            type: Input,
            args: ['transitionDuration']
        }], class: [{
            type: Input,
            args: ['class']
        }], hostStyles: [{
            type: HostBinding,
            args: ['style']
        }], hostClasses: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SmartSliderService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SmartSliderHorizontalComponent, [{
        type: Component,
        args: [{
                selector: 'smart-slider-horizontal',
                template: "<div class=\"container\" [ngStyle]=\"{'height': containerHeight, 'width': width}\">\r\n  <div *ngIf=\"_showPrevious\" class=\"arrow arrow-prev\" (click)=\"onPrevious()\" [class.arrow-disabled]=\"isPreviousDisabled()\"></div>\r\n  <div class=\"items\" [@slideInOut]=\"smartSliderService.itemIndex\" [ngStyle]=\"{'height': containerHeight, 'width': width}\" (@slideInOut.done)=\"onTransitionEnd()\">\r\n    <ng-container *ngFor=\"let item of _items; let i=index\">\r\n      <div *ngIf=\"show(item)\" class=\"img-with-text\" [ngStyle]=\"{'margin': _itemMargin}\">\r\n        <div [className]=\"isLast(item) ? 'enter-item' : 'item'\">\r\n          <img *ngIf=\"item.image\" src=\"{{item.image}}\" alt=\"{{item.image}}\" class=\"slider-image\" [ngStyle]=\"{'height': _height, 'width': smartSliderService.itemWidth}\" (click)=\"onItemClick(item)\" draggable=\"false\" />\r\n          <span *ngIf=\"item.text\" (click)=\"onItemClick(item)\" class=\"{{_textPosition}}\">\r\n            {{item.text}}\r\n          </span>   \r\n        </div>        \r\n      </div>      \r\n    </ng-container>\r\n\r\n  </div>\r\n  <div *ngIf=\"_showNext\" class=\"arrow arrow-next\" (click)=\"onNext()\" [class.arrow-disabled]=\"isNextDisabled()\"></div>\r\n</div>\r\n",
                animations: [
                    trigger('slideInOut', [
                        transition(':increment', right, { params: { inWidth: '100%', inHeight: '100%', inTiming: '1' } }),
                        transition(':decrement', left, { params: { inWidth: '100%', inHeight: '100%', inTiming: '1' } }),
                    ]),
                ],
                styles: [":host{display:block;width:100%}.container{position:absolute;overflow:hidden;width:100%;cursor:-webkit-grab;cursor:grab}.slider-image{opacity:.8}.slider-image:hover{opacity:.9}.enter-item,.item{display:block;position:relative;text-align:center;color:#000}.bottom-left{position:absolute;bottom:8px;left:16px}.top-left{position:absolute;top:8px;left:16px}.top-right{position:absolute;top:8px;right:16px}.bottom-right{position:absolute;bottom:8px;right:16px}.centered{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}.items{display:inline-block}.items-left{transition:transform .2s}.img-with-text{display:inline-flex;cursor:pointer;align-items:center;vertical-align:top}.img-with-text img{border-radius:10px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-bottom{margin-left:-110px;margin-bottom:-20px}.arrow{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:center;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}.arrow-prev{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}.arrow-next{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}.arrow-disabled{cursor:default;opacity:.5}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.DomSanitizer }]; }, { select: [{
            type: Output
        }], items: [{
            type: Input,
            args: ['items']
        }], showPrevious: [{
            type: Input,
            args: ['showPrevious']
        }], showNext: [{
            type: Input,
            args: ['showNext']
        }], showDots: [{
            type: Input,
            args: ['showDots']
        }], autoplay: [{
            type: Input,
            args: ['autoplay']
        }], loop: [{
            type: Input,
            args: ['loop']
        }], pauseOnHover: [{
            type: Input,
            args: ['pauseOnHover']
        }], itemMargin: [{
            type: Input,
            args: ['itemMargin']
        }], itemPadding: [{
            type: Input,
            args: ['itemPadding']
        }], textPosition: [{
            type: Input,
            args: ['textPosition']
        }], textColor: [{
            type: Input,
            args: ['textColor']
        }], cellLimit: [{
            type: Input,
            args: ['cellLimit']
        }], height: [{
            type: Input,
            args: ['height']
        }], autoplayInterval: [{
            type: Input,
            args: ['autoplayInterval']
        }], transitionDuration: [{
            type: Input,
            args: ['transitionDuration']
        }], class: [{
            type: Input,
            args: ['class']
        }], hostStyles: [{
            type: HostBinding,
            args: ['style']
        }], hostClasses: [{
            type: HostBinding,
            args: ['class']
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SmartSliderVerticalComponent, [{
        type: Component,
        args: [{
                selector: 'smart-slider-vertical',
                template: "<div class=\"container\" [ngStyle]=\"{'height': height, 'width': containerWidth}\">\r\n  <div *ngIf=\"_showPrevious\" class=\"arrow arrow-prev\" (click)=\"onPrevious()\" [class.arrow-disabled]=\"isPreviousDisabled()\"></div>\r\n  <div class=\"items\" [@slideInOut]=\"smartSliderService.itemIndex\" (@slideInOut.done)=\"onTransitionEnd()\">\r\n    <ng-container *ngFor=\"let item of _items; let i=index\">\r\n      <div *ngIf=\"show(item)\" class=\"img-with-text\" [ngStyle]=\"{'margin': _itemMargin}\">\r\n        <div [className]=\"isLast(item) ? 'enter-item' : 'item'\">\r\n          <img *ngIf=\"item.image\" src=\"{{item.image}}\" alt=\"{{item.image}}\" class=\"slider-image\" [ngStyle]=\"{'height': smartSliderService.itemHeight, 'width': _width}\" (click)=\"onItemClick(item)\" draggable=\"false\" />\r\n          <span *ngIf=\"item.text\" (click)=\"onItemClick(item)\" class=\"{{_textPosition}}\">\r\n            {{item.text}}\r\n          </span>   \r\n        </div>        \r\n      </div>      \r\n    </ng-container>\r\n\r\n  </div>\r\n  <div *ngIf=\"_showNext\" class=\"arrow arrow-next\" (click)=\"onNext()\" [class.arrow-disabled]=\"isNextDisabled()\"></div>\r\n</div>\r\n",
                animations: [
                    trigger('slideInOut', [
                        transition(':increment', top, { params: { inWidth: '100%', inHeight: '100%', inTiming: '1' } }),
                        transition(':decrement', bottom, { params: { inWidth: '100%', inHeight: '100%', inTiming: '1' } }),
                    ]),
                ],
                styles: [":host{display:block;height:100%}.container{position:absolute;overflow:hidden;height:100%;cursor:-webkit-grab;cursor:grab}.slider-image{opacity:.8}.slider-image:hover{opacity:.9}.enter-item,.item{display:block;position:relative;text-align:center;color:#000}.bottom-left{position:absolute;bottom:8px;left:16px}.top-left{position:absolute;top:8px;left:16px}.top-right{position:absolute;top:8px;right:16px}.bottom-right{position:absolute;bottom:8px;right:16px}.centered{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}.items{display:inline-block}.items-left{transition:transform .2s}.img-with-text{cursor:pointer;align-items:center;vertical-align:top}.img-with-text img{border-radius:10px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-bottom{margin-left:-110px;margin-bottom:-20px}.arrow{text-align:center;width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:center;border-radius:100px;position:absolute;right:36%;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}.arrow-prev{transform:rotate(90deg);top:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}.arrow-next{transform:rotate(90deg);bottom:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}.arrow-disabled{cursor:default;opacity:.5}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { select: [{
            type: Output
        }], items: [{
            type: Input,
            args: ['items']
        }], showPrevious: [{
            type: Input,
            args: ['showPrevious']
        }], showNext: [{
            type: Input,
            args: ['showNext']
        }], showDots: [{
            type: Input,
            args: ['showDots']
        }], autoplay: [{
            type: Input,
            args: ['autoplay']
        }], loop: [{
            type: Input,
            args: ['loop']
        }], pauseOnHover: [{
            type: Input,
            args: ['pauseOnHover']
        }], itemMargin: [{
            type: Input,
            args: ['itemMargin']
        }], itemPadding: [{
            type: Input,
            args: ['itemPadding']
        }], textPosition: [{
            type: Input,
            args: ['textPosition']
        }], textColor: [{
            type: Input,
            args: ['textColor']
        }], cellLimit: [{
            type: Input,
            args: ['cellLimit']
        }], width: [{
            type: Input,
            args: ['width']
        }], autoplayInterval: [{
            type: Input,
            args: ['autoplayInterval']
        }], transitionDuration: [{
            type: Input,
            args: ['transitionDuration']
        }], class: [{
            type: Input,
            args: ['class']
        }], hostClasses: [{
            type: HostBinding,
            args: ['class']
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SmartSliderVerticalV2Component, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'smart-slider-vertical-v2',
                template: "<i\r\n  *ngIf=\"privateSmartSliderOptions.arrows.position === 'center'\"\r\n  style=\"width: 100%; position: relative\"\r\n  [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n  class=\"icon-a pointer\"\r\n  [ngClass]=\"{ 'arrow-disabled': arrowTopDisabled }\"\r\n  (click)=\"getPrevious()\"\r\n>\r\n  <svg\r\n    viewBox=\"0 0 1024 1024\"\r\n    focusable=\"false\"\r\n    fill=\"currentColor\"\r\n    width=\"1em\"\r\n    height=\"1em\"\r\n    data-icon=\"caret-up\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <path\r\n      d=\"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z\"\r\n    ></path>\r\n  </svg>\r\n</i>\r\n<div\r\n  id=\"{{ dataId }}\"\r\n  style=\"overflow: hidden\"\r\n  [style.height]=\"\r\n    dataPosition === 'none' ? 'calc(100% - ' + arrowsHeight + 'px)' : '100%'\r\n  \"\r\n  [style.float]=\"dataPosition\"\r\n  [style.width]=\"dataBlockWidth\"\r\n>\r\n  <!-- <img *ngFor=\"let item of itemsToShow\" class=\"item-in-data\" [src]=\"item.image\" [style.padding.px]=\"_itemPadding\" [style.width]=\"_itemWidth\" /> -->\r\n\r\n  <div\r\n    *ngFor=\"let item of itemsToShow; let i = index\"\r\n    class=\"item-in-data\"\r\n    [ngStyle]=\"setItemStyles(item.isSelected)\"\r\n    [style.padding.px]=\"privateSmartSliderOptions.itemOptions.itemPadding\"\r\n    [style.width]=\"privateSmartSliderOptions.itemOptions.itemWidth\"\r\n    (click)=\"onItemClick(item)\"\r\n  >\r\n    <img [src]=\"smartSliderService.getImage(item, privateSmartSliderOptions)\" [style.width]=\"'100%'\" />\r\n    <span\r\n      *ngIf=\"smartSliderService.getText(item, privateSmartSliderOptions)\"\r\n      class=\"{{ privateSmartSliderOptions.textOptions.textPosition }}\"\r\n      [style.color]=\"privateSmartSliderOptions.textOptions.textColor\"\r\n      [style.font-size.px]=\"privateSmartSliderOptions.textOptions.textFontSize\"\r\n      >{{ smartSliderService.getText(item, privateSmartSliderOptions) }}</span\r\n    >\r\n  </div>\r\n</div>\r\n<i\r\n  *ngIf=\"privateSmartSliderOptions.arrows.position === 'center'\"\r\n  style=\"width: 100%; position: relative\"\r\n  [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n  class=\"icon-a pointer\"\r\n  [ngClass]=\"{ 'arrow-disabled': arrowBottomDisabled }\"\r\n  (click)=\"getNext()\"\r\n>\r\n  <svg\r\n    viewBox=\"0 0 1024 1024\"\r\n    focusable=\"false\"\r\n    fill=\"currentColor\"\r\n    width=\"1em\"\r\n    height=\"1em\"\r\n    data-icon=\"caret-down\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <path\r\n      d=\"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z\"\r\n    ></path>\r\n  </svg>\r\n</i>\r\n\r\n<div\r\n  *ngIf=\"\r\n    privateSmartSliderOptions.arrows.position === 'right' ||\r\n    privateSmartSliderOptions.arrows.position === 'left'\r\n  \"\r\n  [style.float]=\"arrowsPosition\"\r\n  style=\"height: 100%; width: 10%; position: relative\"\r\n>\r\n  <i\r\n    class=\"icon-a arrow arrow-top\"\r\n    [ngClass]=\"{ 'arrow-disabled': arrowTopDisabled }\"\r\n    [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n    (click)=\"getPrevious()\"\r\n  >\r\n    <svg\r\n      viewBox=\"0 0 1024 1024\"\r\n      focusable=\"false\"\r\n      fill=\"currentColor\"\r\n      width=\"1em\"\r\n      height=\"1em\"\r\n      data-icon=\"caret-up\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <path\r\n        d=\"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z\"\r\n      ></path>\r\n    </svg>\r\n  </i>\r\n  <i\r\n    class=\"icon-a arrow arrow-bottom\"\r\n    [ngClass]=\"{ 'arrow-disabled': arrowBottomDisabled }\"\r\n    [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n    (click)=\"getNext()\"\r\n  >\r\n    <svg\r\n      viewBox=\"0 0 1024 1024\"\r\n      focusable=\"false\"\r\n      fill=\"currentColor\"\r\n      width=\"1em\"\r\n      height=\"1em\"\r\n      data-icon=\"caret-down\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <path\r\n        d=\"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z\"\r\n      ></path>\r\n    </svg>\r\n  </i>\r\n</div>\r\n",
                styles: [".icon-a{color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em}.icon-a,.icon-a svg{display:inline-block}.arrow{position:absolute;cursor:pointer}.pointer{cursor:pointer}.arrow-disabled{cursor:not-allowed!important;color:#bbb!important}.arrow-top{top:0}.arrow-bottom{bottom:0}.item-in-data{float:left;display:block;position:relative;text-align:center;color:#000;cursor:pointer}.bottom-left{position:absolute;bottom:8px;left:16px}.top-left{position:absolute;top:8px;left:16px}.top-right{position:absolute;top:8px;right:16px}.bottom-right{position:absolute;bottom:8px;right:16px}.centered{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}"]
            }]
    }], function () { return [{ type: SmartSliderService }, { type: ɵngcc1.DomSanitizer }, { type: ɵngcc0.ElementRef }]; }, { selectItem: [{
            type: Output
        }], smartSliderOptions: [{
            type: Input,
            args: ['options']
        }], items: [{
            type: Input,
            args: ['items']
        }], hostStyles: [{
            type: HostBinding,
            args: ['style']
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SmartSliderHorizontalV2Component, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'smart-slider-horizontal-v2',
                template: "<i\r\n  *ngIf=\"privateSmartSliderOptions.arrows.position === 'center'\"\r\n  style=\"\r\n    height: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    float: left;\r\n  \"\r\n  [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n  class=\"icon-a pointer\"\r\n  [ngClass]=\"{ 'arrow-disabled': arrowTopDisabled }\"\r\n  (click)=\"getPrevious()\"\r\n>\r\n  <svg\r\n    viewBox=\"0 0 1024 1024\"\r\n    focusable=\"false\"\r\n    fill=\"currentColor\"\r\n    width=\"1em\"\r\n    height=\"1em\"\r\n    data-icon=\"caret-left\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <path\r\n      d=\"M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z\"\r\n    ></path>\r\n  </svg>\r\n</i>\r\n<div\r\n  id=\"{{ dataId }}\"\r\n  style=\"overflow: hidden\"\r\n  [style.width]=\"\r\n    dataPosition === 'none' ? 'calc(100% - ' + arrowsWidth + 'px)' : '100%'\r\n  \"\r\n  [style.float]=\"dataPosition\"\r\n  [style.height]=\"dataBlockHeight\"\r\n>\r\n  <!-- <img *ngFor=\"let item of itemsToShow\" class=\"item-in-data\" [src]=\"item.image\" [style.padding.px]=\"_itemPadding\" [style.width]=\"_itemWidth\" /> -->\r\n\r\n  <div\r\n    *ngFor=\"let item of itemsToShow; let i = index\"\r\n    class=\"item-in-data\"\r\n    [ngStyle]=\"setItemStyles(item.isSelected)\"\r\n    [style.padding.px]=\"privateSmartSliderOptions.itemOptions.itemPadding\"\r\n    [style.width]=\"privateSmartSliderOptions.itemOptions.itemWidth\"\r\n    (click)=\"onItemClick(item)\"\r\n  >\r\n    <img [src]=\"smartSliderService.getImage(item, privateSmartSliderOptions)\" [style.width]=\"'100%'\" />\r\n    <span\r\n      *ngIf=\"smartSliderService.getText(item, privateSmartSliderOptions)\"\r\n      class=\"{{ privateSmartSliderOptions.textOptions.textPosition }}\"\r\n      [style.color]=\"privateSmartSliderOptions.textOptions.textColor\"\r\n      [style.font-size.px]=\"privateSmartSliderOptions.textOptions.textFontSize\"\r\n      >{{ smartSliderService.getText(item, privateSmartSliderOptions) }}</span\r\n    >\r\n  </div>\r\n</div>\r\n<i\r\n  *ngIf=\"privateSmartSliderOptions.arrows.position === 'center'\"\r\n  style=\"position: absolute; top: 50%; transform: translateY(-50%); right: 0px\"\r\n  [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n  class=\"icon-a pointer\"\r\n  [ngClass]=\"{ 'arrow-disabled': arrowBottomDisabled }\"\r\n  (click)=\"getNext()\"\r\n>\r\n  <svg\r\n    viewBox=\"0 0 1024 1024\"\r\n    focusable=\"false\"\r\n    fill=\"currentColor\"\r\n    width=\"1em\"\r\n    height=\"1em\"\r\n    data-icon=\"caret-right\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <path\r\n      d=\"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z\"\r\n    ></path>\r\n  </svg>\r\n</i>\r\n\r\n<div\r\n  *ngIf=\"\r\n    privateSmartSliderOptions.arrows.position === 'top' ||\r\n    privateSmartSliderOptions.arrows.position === 'bottom'\r\n  \"\r\n  [style.float]=\"arrowsPosition\"\r\n  style=\"height: 10%; width: 100%; position: relative\"\r\n>\r\n  <i\r\n    class=\"icon-a arrow arrow-left\"\r\n    [ngClass]=\"{ 'arrow-disabled': arrowTopDisabled }\"\r\n    [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n    (click)=\"getPrevious()\"\r\n  >\r\n    <svg\r\n      viewBox=\"0 0 1024 1024\"\r\n      focusable=\"false\"\r\n      fill=\"currentColor\"\r\n      width=\"1em\"\r\n      height=\"1em\"\r\n      data-icon=\"caret-left\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <path\r\n        d=\"M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z\"\r\n      ></path>\r\n    </svg>\r\n  </i>\r\n  <i\r\n    class=\"icon-a arrow arrow-right\"\r\n    [ngClass]=\"{ 'arrow-disabled': arrowBottomDisabled }\"\r\n    [style.font-size.px]=\"privateSmartSliderOptions.arrows.size\"\r\n    (click)=\"getNext()\"\r\n  >\r\n    <svg\r\n      viewBox=\"0 0 1024 1024\"\r\n      focusable=\"false\"\r\n      fill=\"currentColor\"\r\n      width=\"1em\"\r\n      height=\"1em\"\r\n      data-icon=\"caret-right\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <path\r\n        d=\"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z\"\r\n      ></path>\r\n    </svg>\r\n  </i>\r\n</div>\r\n",
                styles: [".icon-a{color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em}.icon-a,.icon-a svg{display:inline-block}.arrow{position:absolute;cursor:pointer}.pointer{cursor:pointer}.arrow-disabled{cursor:not-allowed!important;color:#bbb!important}.arrow-top{top:0}.arrow-bottom{bottom:0}.arrow-left{left:0}.arrow-right{right:0}.item-in-data{float:left;display:block;position:relative;text-align:center;color:#000;cursor:pointer}.bottom-left{position:absolute;bottom:8px;left:16px}.top-left{position:absolute;top:8px;left:16px}.top-right{position:absolute;top:8px;right:16px}.bottom-right{position:absolute;bottom:8px;right:16px}.centered{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.centered-bottom{position:absolute;top:105%;left:50%;transform:translate(-50%,-50%)}.centered-top{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%)}"]
            }]
    }], function () { return [{ type: SmartSliderService }, { type: ɵngcc1.DomSanitizer }, { type: ɵngcc0.ElementRef }]; }, { selectItem: [{
            type: Output
        }], smartSliderOptions: [{
            type: Input,
            args: ['options']
        }], items: [{
            type: Input,
            args: ['items']
        }], hostStyles: [{
            type: HostBinding,
            args: ['style']
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SmartSliderModule, { declarations: function () { return [SmartSliderComponent,
        SmartSliderVerticalV2Component,
        SmartSliderHorizontalV2Component,
        SmartSliderHorizontalComponent,
        SmartSliderVerticalComponent]; }, imports: function () { return [CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule]; }, exports: function () { return [SmartSliderComponent,
        SmartSliderVerticalV2Component,
        SmartSliderHorizontalV2Component]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SmartSliderModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ...declarations,
                    SmartSliderHorizontalComponent,
                    SmartSliderVerticalComponent,
                ],
                imports: [
                    CommonModule,
                    BrowserModule,
                    FormsModule,
                    BrowserAnimationsModule
                ],
                exports: [
                    ...declarations,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxSmartSliderModule, { imports: function () { return [CommonModule,
        SmartSliderModule]; }, exports: function () { return [SmartSliderModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxSmartSliderModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    CommonModule,
                    ...imports,
                ],
                exports: [
                    ...imports,
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-smart-slider
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxSmartSliderModule, SmartSliderComponent, SmartSliderHorizontalV2Component, SmartSliderModule, SmartSliderService, SmartSliderVerticalV2Component, SmartSliderHorizontalComponent as ɵa, SmartSliderVerticalComponent as ɵb };

//# sourceMappingURL=ngx-smart-slider.js.map