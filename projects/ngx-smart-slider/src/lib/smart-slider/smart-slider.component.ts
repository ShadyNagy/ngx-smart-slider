import { Component, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { SmartSliderItem } from '../models/smart-slider-item';

@Component({
  selector: 'smart-slider',
  templateUrl: './smart-slider.component.html',
  styleUrls: ['./smart-slider.component.scss'],
})
export class SmartSliderComponent {

  _vertical: boolean=false;
  @Input('vertical')
  set vertical(value: boolean) {    
    this._vertical = value;
  }
  
  _items=new Array<SmartSliderItem>();
  @Input('items')
  set items(value: Array<SmartSliderItem>) {    
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
  @Input('height')
  set height(value: number) {    
    this._height = value+10+'px';
  }

  _width: string='100%';
  @Input('width')
  set width(value: number) {    
    this._width = value+10+'px';
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
	get hostStyles(): string {
		return [
      `height: ${this._height}`
		].join(';');
  }

  @HostBinding('class')
	get hostClasses(): string {
		return [
      this._class
		].join(' ');
  }


  constructor() { 

  }  

  onSelect(event: SmartSliderItem) {
    this.select.emit(event);
  }
}
