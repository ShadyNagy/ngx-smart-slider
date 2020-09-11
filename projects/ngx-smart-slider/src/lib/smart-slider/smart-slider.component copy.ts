import { Component, OnInit, HostBinding, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { Item } from '../models/item';

let left = [
  query(':enter, :leave', style({ position: 'fixed', width: '{{inWidth}}' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX({{moveMinus}})' }), animate('{{inTiming}}s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('{{inTiming}}s ease-out', style({ transform: 'translateX({{move}})' }))], {
      optional: true,
    }),
  ]),
];

let right = [
  query(':enter, :leave', style({ position: 'fixed', width: '{{inWidth}}' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX({{move}})' }), animate('{{inTiming}}s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('{{inTiming}}s ease-out', style({ transform: 'translateX({{moveMinus}})' }))], {
      optional: true,
    }),
  ]),
];

@Component({
  selector: 'smart-slider',
  templateUrl: './smart-slider.component.html',
  styleUrls: ['./smart-slider.component.scss'],
  animations: [
    trigger('animSlider', [
      transition(':increment', right, {params: {inWidth: '100%', inHeight: '100%', moveMinus: '-100%', move: '100%'}}),
      transition(':decrement', left, {params: {inWidth: '100%', inHeight: '100%', moveMinus: '-100%', move: '100%'}}),
    ]),
  ],
})
export class SmartSliderComponent implements OnInit {

  _items=new Array<Item>();
  @Input('items')
  set items(value: Array<Item>) {    
    this._items = value;
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
    this._loop = value;
  }

  _pauseOnHover: boolean=false;
  @Input('pauseOnHover')
  set pauseOnHover(value: boolean) {    
    this._pauseOnHover = value;
  }
  
  _itemMargin: string='10px';
  @Input('itemMargin')
  set itemMargin(value: number) {    
    this._itemMargin = value+'px';
  }

  _itemPadding: string='0px';
  @Input('itemPadding')
  set itemPadding(value: number) {    
    this._itemPadding = value+'px';
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
  }      

  _height: string='100%';
  containerHeight: string='100%';
  @Input('height')
  set height(value: number) {    
    this._height = value+10+'px';
    this.containerHeight = value+40+'px';
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

  @HostBinding('@animSlider') get animSlider() {
    return {value: this.itemIndex, params: {inWidth: this.width, inHeight: this._height, inTiming: this._transitionDuration, moveMinus: this.moveMinus, move: this.move}};
  }

  @HostBinding('class')
	get hostClasses(): string {
		return [
      this._class
		].join(' ');
  }

  get moveMinus() {
    return '-100%';
  }

  get move() {
    return '100%';
  }
  
  itemIndex = 0;
  width: string='100%';

  constructor(private element: ElementRef) { 

  }
  
  @HostListener('window:resize')
  onResize() {
    this.resize();
  }

  private resize() {
    this.width = (this.element.nativeElement.clientWidth-40)+'px';
  }

  ngOnInit(): void {
    if(this._items.length < this._cellLimit) {
      this._cellLimit = this._items.length;
    }
    this.resize();
  }

  onNext() {
    if (this.itemIndex != this._items.length - 1) {
      this.itemIndex++;
    }
  }

  onPrevious() {
    if (this.itemIndex > 0) {
      this.itemIndex--;
    }
  }

  onItemClick(selected: any) {
    this.select.emit(selected);
  }

  isNextDisabled() {
    return this.itemIndex === this._items.length - 1;
  }

  isPreviousDisabled() {
    return this.itemIndex===0;
  }  

  show(item: Item, index: number) {
    if(!item) {
      return false;
    }

    for (let i = 0; i < this._cellLimit; i++) {
      if(index === this.itemIndex+i)
      {
        return true;
      }
    }

    return false;
  }
}
