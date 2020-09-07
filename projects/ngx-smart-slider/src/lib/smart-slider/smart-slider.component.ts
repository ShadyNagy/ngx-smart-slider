import { Component, OnInit, HostListener, HostBinding, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { SmartSliderService } from './smart-slider.service';

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
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
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
})
export class SmartSliderComponent implements OnInit {

  _items=[];
  @Input('items')
  set items(value: []) {    
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

  _class: string='';
  @Input('class')
  set class(value: string) {    
    this._class = value;
  }

  @HostBinding('class')
	get hostClasses(): string {
		return [
      this._class
		].join(' ');
  }
  
  itemIndex = 0;

  constructor() { }

  ngOnInit(): void {
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
}
