import { Component, OnInit, HostBinding, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { SmartSliderService } from '../smart-slider.service';
import { SmartSliderItem } from '../../models/smart-slider-item';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

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

@Component({
  selector: 'smart-slider-horizontal',
  templateUrl: './smart-slider-horizontal.component.html',
  styleUrls: ['./smart-slider-horizontal.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':increment', right, {params: {inWidth: '100%', inHeight: '100%', inTiming: '1'}}),
      transition(':decrement', left, {params: {inWidth: '100%', inHeight: '100%', inTiming: '1'}}),
    ]),
  ],
})
export class SmartSliderHorizontalComponent implements OnInit {

  _items=new Array<SmartSliderItem>();
  @Input('items')
  set items(value: Array<SmartSliderItem>) {    
    this._items = value;
    this.smartSliderService.setItems(this._items, this._cellLimit);
  }

  _showPrevious: boolean=true;
  @Input('showPrevious')
  set showPrevious(value: boolean) {    
    this._showPrevious = value;
  }

  _showNext: boolean=true;
  @Input('showNext')
  set showNext(value: boolean) {    
    this._showNext = value;
  }

  _showDots: boolean=false;
  @Input('showDots')
  set showDots(value: boolean) {    
    this._showDots = value;
  }

  _autoplay: boolean=false;
  @Input('autoplay')
  set autoplay(value: boolean) {    
    this._autoplay = value;
  }

  _loop: boolean=false;
  @Input('loop')
  set loop(value: boolean) {    
    this.smartSliderService.isLoop = value; 
    this._loop = value;
  }

  _pauseOnHover: boolean=false;
  @Input('pauseOnHover')
  set pauseOnHover(value: boolean) {    
    this._pauseOnHover = value;
  }
  
  _itemMargin: string='10px';
  @Input('itemMargin')
  set itemMargin(value: string) {    
    this._itemMargin = value;
  }

  _itemPadding: string='0px';
  @Input('itemPadding')
  set itemPadding(value: string) {    
    this._itemPadding = value;
  }

  _textPosition: string='centered';
  @Input('textPosition')
  set textPosition(value: 'centered-top' | 'centered-bottom' | 'centered' | 'bottom-right ' | 'top-right' | 'top-left' | 'bottom-left') {    
    this._textPosition = value;
  }

  _textColor: string='black';
  @Input('textColor')
  set textColor(value: string) {    
    this._textColor = value;
  }

  _cellLimit: number=1;
  @Input('cellLimit')
  set cellLimit(value: number) {    
    this._cellLimit = value;
    this.smartSliderService.setItems(this._items, this._cellLimit);
  }      

  _height: string='100%';
  containerHeight: string='100%';
  @Input('height')
  set height(value: string) {    
    this._height = value;
    this.containerHeight = Number.parseInt(value)+10+'px';
  }

  _autoplayInterval: number=2000;
  @Input('autoplayInterval')
  set autoplayInterval(value: number) {    
    this._autoplayInterval = value;
  }

  _transitionDuration: number=0.3;
  @Input('transitionDuration')
  set transitionDuration(value: number) {    
    this._transitionDuration = value;
  }

  _class: string='';
  @Input('class')
  set class(value: string) {    
    this._class = value;
  }

  @Output()
  select: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('style')
	get hostStyles(): SafeStyle {
		return this.sanitizer.bypassSecurityTrustStyle(  [
      `height: ${this.containerHeight}`
		].join(';'));
  }

  @HostBinding('class')
	get hostClasses(): string {
		return [
      this._class
		].join(' ');
  }

  @HostListener('window:resize')
  onResize() {
    this.resize();
  }

  width = '100%';
  isNext = false;

  smartSliderService = new SmartSliderService();

  constructor(private element: ElementRef, private sanitizer:DomSanitizer) { 

  }  

  get slideInOut() {
    return {value: this.smartSliderService.itemIndex, params: {inWidth: this.width, inHeight: this._height, inTiming: this._transitionDuration}};
  }  


  private resize() {
    let parentElement = this.element.nativeElement.parentNode.parentNode as HTMLElement;

    this.width = (parentElement.clientWidth)+'px';
    this.smartSliderService.setWidth(parentElement.clientWidth);
    
  }

  ngOnInit(): void {
    this.smartSliderService.setItems(this._items, this._cellLimit);    
    this.resize();
  }

  onItemClick(selected: any) {
    this.select.emit(selected);
  }

  isNextDisabled() {
    return this.smartSliderService.itemIndex === this._items.length - 1;
  }

  isPreviousDisabled() {
    return this.smartSliderService.itemIndex===0;
  }

  show(item: SmartSliderItem) {
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
    return this.smartSliderService.itemsToShow[this.isNext?this.smartSliderService.itemsToShow.length-1:0] === item;
  }

  onTransitionEnd() {
    this.smartSliderService.sliderDone();
  }
}
