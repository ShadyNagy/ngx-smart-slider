import { Component, OnInit, HostBinding, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { SmartSliderService } from '../smart-slider.service';
import { SmartSliderItem } from '../../models/smart-slider-item';

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

@Component({
  selector: 'smart-slider-vertical',
  templateUrl: './smart-slider-vertical.component.html',
  styleUrls: ['./smart-slider-vertical.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':increment', top, {params: {inWidth: '100%', inHeight: '100%', inTiming: '1'}}),
      transition(':decrement', bottom, {params: {inWidth: '100%', inHeight: '100%', inTiming: '1'}}),
    ]),
  ],
})
export class SmartSliderVerticalComponent implements OnInit {

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

  _width: string='100%';
  containerWidth: string='100%';
  @Input('width')
  set width(value: string) {    
    this._width = value;
    this.containerWidth = Number.parseInt(value)+40+'px';
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

  height = '100%';
  isNext = false;
  smartSliderService = new SmartSliderService();

  constructor(private element: ElementRef) { 
    
  }  

  get slideInOut() {
    return {value: this.smartSliderService.itemIndex, params: {inWidth: this._width, inHeight: this.height, inTiming: this._transitionDuration}};
  }  


  private resize() {    
    let parentElement = this.element.nativeElement.parentNode.parentNode as HTMLElement;

    this.height = (parentElement.clientHeight)+'px';
    this.smartSliderService.setHeight(parentElement.clientHeight);    
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
