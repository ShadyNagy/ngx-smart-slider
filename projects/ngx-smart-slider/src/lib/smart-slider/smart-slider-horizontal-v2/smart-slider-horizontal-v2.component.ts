import { AfterViewInit, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { SmartSliderItem } from '../../models/smart-slider-item';
import { ISmartSliderOptions, ISmartSliderOptionsInternal } from '../../models/smart-slider-options';
import { SmartSliderService } from '../smart-slider.service';

@Component({
  selector: 'smart-slider-horizontal-v2',
  templateUrl: './smart-slider-horizontal-v2.component.html',
  styleUrls: ['./smart-slider-horizontal-v2.component.scss']
})
export class SmartSliderHorizontalV2Component implements OnInit, AfterViewInit , OnDestroy {


  _smartSliderOptions: ISmartSliderOptionsInternal = {
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
  @Input('options')
  set smartSliderOptions(value: ISmartSliderOptions) {
    if (!value) {
      return;
    }

    if (value.textOptions) {
      if (value.textOptions.textPosition) {
        this._smartSliderOptions.textOptions.textPosition = value.textOptions.textPosition;
      }

      if (value.textOptions.textColor) {
        this._smartSliderOptions.textOptions.textColor = value.textOptions.textColor;
      }

      if (value.textOptions.textFontSize) {
        this._smartSliderOptions.textOptions.textFontSize = value.textOptions.textFontSize;
      }
    }

    if (value.itemOptions) {
      if (value.itemOptions.itemPadding) {
        this._smartSliderOptions.itemOptions.itemPadding = value.itemOptions.itemPadding;
      }

      if (value.itemOptions.itemWidth) {
        this._smartSliderOptions.itemOptions.itemWidth = value.itemOptions.itemWidth + 'px';
      }
    }

    if (value.arrows) {
      if (value.arrows.position) {
        this._smartSliderOptions.arrows.position = value.arrows.position;
      }
      if (value.arrows.size) {
        this._smartSliderOptions.arrows.size = value.arrows.size;
      }
    }

    if (value.height) {
      this._smartSliderOptions.height = value.height + 'px';
    }

    if (value.width) {
      this._smartSliderOptions.width = value.width + 'px';
    }

    if (value.padding) {
      this._smartSliderOptions.padding = value.padding;
    }

    if (value.overflow) {
      this._smartSliderOptions.overflow = value.overflow;
    }

    if (value.selectedColor) {
      this._smartSliderOptions.selectedColor = value.selectedColor;
    }

    if (value.hoverColor) {
      this._smartSliderOptions.hoverColor = value.hoverColor;
    }
  }

  _items=new Array<SmartSliderItem>();
  @Input('items')
  set items(value: Array<SmartSliderItem>) {
    this._items = value;
  }

  @Output()
  select: EventEmitter<SmartSliderItem> = new EventEmitter<SmartSliderItem>();

  itemsToShow = new Array<SmartSliderItem>();
  itemsCountInRow = 0;
  id = '';
  dataId = '';
  dataPosition = 'none';
  itemHoverBackground = '';
  itemHoverBackgroundColor = '';

  constructor(
    private sanitizer: DomSanitizer,
    private element: ElementRef) {
  }

  @HostBinding('style')
  get hostStyles(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle( [
      `height: ${this._smartSliderOptions.height}`,
      `width: ${this._smartSliderOptions.width}`,
      `padding: ${this._smartSliderOptions.padding}px`,
      `overflow: ${this._smartSliderOptions.overflow}`,
      `display: block`,
      `position: relative`
    ].join(';'));
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemsCountInRow();
  }

  ngOnInit() {
    this.id = SmartSliderService.randomHexWord();
    this.dataId = `div-data-${this.id}`;
    this.itemsToShow = this._items;
  }

  ngAfterViewInit(): void {
    this.updateItemsCountInRow();
  }

  ngOnDestroy(): void {
  }

  get arrowBottomDisabled() {
    return this.itemsToShow.length <= this.itemsCountInRow;
  }

  get arrowTopDisabled() {
    return this.itemsToShow.length === this._items.length;
  }

  get dataBlockHeight() {
    if (this._smartSliderOptions.arrows.position === 'center') {
      return'100%';
    }

    return '90%';
  }

  get arrowsWidth() {
    return this._smartSliderOptions.arrows.size * 2;
  }

  get arrowsPosition() {
    if (this._smartSliderOptions.arrows.position === 'top') {
      this.dataPosition = 'bottom';

      return 'top';
    }
    if (this._smartSliderOptions.arrows.position === 'bottom') {
      this.dataPosition = 'top';

      return 'bottom';
    }

    return 'none';
  }

  setItemStyles(isSelected: boolean) {
    if (isSelected) {
      return {
        background: `linear-gradient(${this._smartSliderOptions.hoverColor}, ${this._smartSliderOptions.hoverColor})`,
        'background-color': `${this._smartSliderOptions.hoverColor} !important`
      };
    }
    return {};
  }

  updateItemsCountInRow() {
    if (this._smartSliderOptions.itemOptions.itemWidth === '100%') {
      return;
    }

    const itemWidth = parseInt(this._smartSliderOptions.itemOptions.itemWidth) + (this._smartSliderOptions.itemOptions.itemPadding *2);
    const dataWidth = SmartSliderService.getNodeWidthByIdInsideElementRef(this.element, this.dataId);

    this.itemsCountInRow = parseInt((dataWidth / itemWidth).toString());
  }

  getPrevious() {
    if (this.itemsToShow.length === this._items.length) {
      return;
    }
    this.itemsToShow = this._items.slice(this._items.length - this.itemsToShow.length - this.itemsCountInRow);
  }

  getNext() {
    if (this.itemsToShow.length <= this.itemsCountInRow) {
      return;
    }
    this.itemsToShow = this.itemsToShow.slice(this.itemsCountInRow);
  }

  onItemClick(selected: SmartSliderItem) {
    this._items.forEach(x => x.isSelected = false);
    selected.isSelected = true;
    this.select.emit(selected);
  }
}
