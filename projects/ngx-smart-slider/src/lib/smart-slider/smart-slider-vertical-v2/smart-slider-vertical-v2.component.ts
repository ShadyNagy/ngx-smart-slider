import { AfterViewInit, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { SmartSliderItem } from '../../models/smart-slider-item';
import { ISmartSliderOptions, ISmartSliderOptionsInternal } from '../../models/smart-slider-options';
import { SmartSliderService } from '../smart-slider.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'smart-slider-vertical-v2',
  templateUrl: './smart-slider-vertical-v2.component.html',
  styleUrls: ['./smart-slider-vertical-v2.component.scss']
})
export class SmartSliderVerticalV2Component implements OnInit, AfterViewInit , OnDestroy {


  privateSmartSliderOptions: ISmartSliderOptionsInternal = {
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
  @Input('options')
  set smartSliderOptions(value: ISmartSliderOptions) {
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
  }

  privateItems = new Array<SmartSliderItem>();
  @Input('items')
  set items(value: Array<SmartSliderItem>) {
    this.privateItems = value;
  }

  @Output()
  selectItem: EventEmitter<SmartSliderItem> = new EventEmitter<SmartSliderItem>();

  itemsToShow = new Array<SmartSliderItem>();
  itemsCountInRow = 0;
  id = '';
  dataId = '';
  dataPosition = 'none';

  constructor(
    public smartSliderService: SmartSliderService,
    private sanitizer: DomSanitizer,
    private element: ElementRef) {
  }

  @HostBinding('style')
  get hostStyles(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle( [
      `height: ${this.privateSmartSliderOptions.height}`,
      `width: ${this.privateSmartSliderOptions.width}`,
      `padding: ${this.privateSmartSliderOptions.padding}px`,
      `overflow: ${this.privateSmartSliderOptions.overflow}`,
      `display: block`,
    ].join(';'));
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemsCountInRow();
  }

  ngOnInit() {
    this.id = SmartSliderService.randomHexWord();
    this.dataId = `div-data-${this.id}`;
    this.itemsToShow = this.privateItems;
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
    return this.itemsToShow.length === this.privateItems.length;
  }

  get dataBlockWidth() {
    if (this.privateSmartSliderOptions.arrows.position === 'center') {
      return'100%';
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

  setItemStyles(isSelected: boolean) {
    if (isSelected) {
      return {
        background: `linear-gradient(${this.privateSmartSliderOptions.hoverColor}, ${this.privateSmartSliderOptions.hoverColor})`,
        'background-color': `${this.privateSmartSliderOptions.hoverColor} !important`
      };
    }
    return {};
  }

  updateItemsCountInRow() {
    if (this.privateSmartSliderOptions.itemOptions.itemWidth === '100%') {
      return;
    }

    const itemWidth = parseInt(this.privateSmartSliderOptions.itemOptions.itemWidth, 10) +
      (this.privateSmartSliderOptions.itemOptions.itemPadding * 2);
    const dataWidth = SmartSliderService.getNodeWidthByIdInsideElementRef(this.element, this.dataId);

    this.itemsCountInRow = parseInt((dataWidth / itemWidth).toString(), 10);
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

  onItemClick(selected: SmartSliderItem) {
    if (this.itemsToShow) {
      this.itemsToShow.forEach(x => x.isSelected = false);
    }

    if (this.items) {
      this.items.forEach(x => x.isSelected = false);
    }
    selected.isSelected = true;
    this.selectItem.emit(selected);
  }
}
