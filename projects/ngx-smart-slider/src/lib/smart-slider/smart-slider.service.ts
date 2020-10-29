import { ElementRef } from '@angular/core';
import { SmartSliderItem } from '../models/smart-slider-item';


export class SmartSliderService {

  itemsToShow = new Array<SmartSliderItem>();
  itemIndex = 0;
  width = 0;
  height = 0;
  margin = 0;
  horizontalMargin = 0;
  verticalMargin = 0;
  isLoop = false;

  private limit = 0;
  private sliderMoving = false;
  private items = new Array<SmartSliderItem>();

  constructor() { }

  get maxIndex() {
    return this.items.length > this.limit ? this.items.length - this.limit : 0;
  }

  get itemWidth() {
    return this.width / (this.horizontalMargin * 2 * this.limit);
  }

  get itemHeight() {
    return this.height / (this.verticalMargin * 2 * this.limit);
  }

  static getNodeByClassNameInsideElementRef(element: ElementRef, className: string) {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < element.nativeElement.childNodes.length; index++) {
      const childNode = element.nativeElement.childNodes[index];
      if (childNode?.classList && childNode.classList.findIndex(x => x === className) > -1) {
        return childNode;
      }
    }

    return null;
  }

  static getNodeWidthByClassNameInsideElementRef(element: ElementRef, className: string) {
    const node = this.getNodeByClassNameInsideElementRef(element, className);
    if (!node) {
      return 0;
    }

    return node.clientWidth;
  }

  static getNodeHeightByClassNameInsideElementRef(element: ElementRef, className: string) {
    const node = this.getNodeByClassNameInsideElementRef(element, className);
    if (!node) {
      return 0;
    }

    return node.clientHeight;
  }

  static getNodeByIdInsideElementRef(element: ElementRef, id: string) {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < element.nativeElement.childNodes.length; index++) {
      const childNode = element.nativeElement.childNodes[index] as HTMLElement;
      if (childNode && childNode.id === id) {
        return childNode;
      }
    }

    return null;
  }

  static getNodeWidthByIdInsideElementRef(element: ElementRef, id: string) {
    const node = this.getNodeByIdInsideElementRef(element, id);
    if (!node) {
      return 0;
    }

    return node.clientWidth;
  }

  static getNodeHeightByIdInsideElementRef(element: ElementRef, id: string) {
    const node = this.getNodeByIdInsideElementRef(element, id);
    if (!node) {
      return 0;
    }

    return node.clientHeight;
  }

  static getNodeByClassNameInsideNativeElement(element: any, className: string) {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < element.childNodes.length; index++) {
      const childNode = element.childNodes[index];
      if (childNode?.classList && childNode.classList.findIndex(x => x === className) > -1) {
        return childNode;
      }
    }

    return null;
  }

  static getNodeWidthByClassNameInsideNativeElement(element: any, className: string) {
    const node = this.getNodeByClassNameInsideNativeElement(element, className);
    if (!node) {
      return 0;
    }

    return node.clientWidth;
  }

  static getNodeHeightByClassNameInsideNativeElement(element: any, className: string) {
    const node = this.getNodeByClassNameInsideNativeElement(element, className);
    if (!node) {
      return 0;
    }

    return node.clientHeight;
  }

  static getNodeByIdInsideNativeElement(element: any, id: string) {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < element.childNodes.length; index++) {
      const childNode = element.childNodes[index] as HTMLElement;
      if (childNode && childNode.id === id) {
        return childNode;
      }
    }

    return null;
  }

  static getNodeWidthByIdInsideNativeElement(element: any, id: string) {
    const node = this.getNodeByIdInsideNativeElement(element, id);
    if (!node) {
      return 0;
    }

    return node.clientWidth;
  }

  static getNodeHeightByIdInsideNativeElement(element: any, id: string) {
    const node = this.getNodeByIdInsideNativeElement(element, id);
    if (!node) {
      return 0;
    }

    return node.clientHeight;
  }

  static randomHexWord() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  getId(item: SmartSliderItem) {
    if (item.idMap) {
      return item.data[item.idMap];
    }

    return item.id;
  }

  getText(item: SmartSliderItem) {
    if (item.textMap) {
      return item.data[item.textMap];
    }

    return item.text;
  }

  getImage(item: SmartSliderItem) {
    if (item.imageMap) {
      return item.data[item.imageMap];
    }

    return item.image;
  }

  getAlt(item: SmartSliderItem) {
    if (item.altMap) {
      return item.data[item.altMap];
    }

    return item.alt;
  }

  setLimit(count: number) {
    this.limit = count;
  }

  getLimit() {
    return this.limit;
  }

  setHorizontalMargin(margin: number) {
    this.horizontalMargin  = margin;
  }

  setVerticalMargin(margin: number) {
    this.verticalMargin  = margin;
  }

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  setItems(items: Array<SmartSliderItem>, limit: number = null) {
    if (limit == null) {
      this.limit = items.length;
    }else {
      this.limit = limit;
    }

    this.items = items;
    this.updateItemsToShow();
  }

  moveNext() {
    if (this.sliderMoving)  {
      return;
    }
    this.updateItemIndexNext();
    this.updateItemsToShow();
  }

  movePrevious() {
    if (this.sliderMoving)  {
      return;
    }
    this.updateItemIndexPrevious();
    this.updateItemsToShow();
  }

  sliderDone() {
    this.sliderMoving = false;
  }

  private updateItemsToShow() {
    this.itemsToShow = new Array<SmartSliderItem>();
    let cnt = this.itemIndex;

    for (let index = 0; index < this.limit; index++) {
      const item = this.items[cnt];
      if (index < this.items.length) {
        this.itemsToShow.push(item);
      }else {
        if (this.isLoop) {
          cnt = 0;
          this.itemsToShow.push(item);
        }
      }
      cnt++;
    }
  }

  private updateItemIndexNext() {
    if (this.isLoop) {
      if (this.itemIndex >= this.maxIndex) {
        this.itemIndex = 0;
      }else {
        this.itemIndex++;
        this.sliderMoving = true;
      }
    }else {
      if (this.itemIndex < this.maxIndex) {
        this.itemIndex++;
        this.sliderMoving = true;
      }
    }
  }

  private updateItemIndexPrevious() {
    if (this.isLoop) {
      if (this.itemIndex <= 0) {
        this.itemIndex = 0;
      }else {
        this.itemIndex--;
        this.sliderMoving = true;
      }
    }else {
      if (this.itemIndex > 0) {
        this.itemIndex--;
        this.sliderMoving = true;
      }
    }
  }
}
