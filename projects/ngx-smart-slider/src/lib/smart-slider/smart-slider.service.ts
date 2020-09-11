import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class SmartSliderService {

  itemsToShow = new Array<Item>();
  private limit = 0;
  itemIndex = 0;
  width = 0;
  height = 0;
  margin = 0;
  horizontalMargin = 0;
  verticalMargin = 0;
  isLoop = false;

  private items = new Array<Item>();

  constructor() { }

  get maxIndex() {
    return this.items.length > this.limit ? this.items.length-this.limit: 0;
  }

  get itemWidth() {
    return this.width/(this.horizontalMargin*2*this.limit);
  }

  get itemHeight() {
    return this.height/(this.verticalMargin*2*this.limit);
  }  

  setLimit(count: number) {
    this.limit = count;    
  }

  getLimit() {
    return this.limit;
  }

  setHorizontalMargin(margin : number) {
    this.horizontalMargin  = margin;
  }

  setVerticalMargin(margin : number) {
    this.verticalMargin  = margin;
  }

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  setItems(items: Array<Item>, limit: number=null) {
    if(limit == null) {
      this.limit = items.length;
    }else {
      this.limit = limit;   
    }
    
    this.items = items;
    this.updateItemsToShow();
  }  

  moveNext() {
    this.updateItemIndexNext();
    this.updateItemsToShow();       
  }

  movePrevious() {
    this.updateItemIndexPrevious();
    this.updateItemsToShow();       
  }  

  private updateItemsToShow() {
    this.itemsToShow = new Array<Item>();
    let cnt = this.itemIndex;

    for (let index = 0; index < this.limit; index++) {
      const item = this.items[cnt];
      if(index < this.items.length) {
        this.itemsToShow.push(item);
      }else {
        if(this.isLoop) {
          cnt = 0;
          this.itemsToShow.push(item);
        }
      }
      cnt++;      
    } 
  }

  private updateItemIndexNext() {
    if(this.isLoop) {
      if(this.itemIndex >= this.maxIndex) {
        this.itemIndex = 0;
      }else {
        this.itemIndex++;
      }
    }else {
      if(this.itemIndex < this.maxIndex) {
        this.itemIndex++;
      }
    }
  }

  private updateItemIndexPrevious() {
    if(this.isLoop) {
      if(this.itemIndex <= 0) {
        this.itemIndex = 0;
      }else {
        this.itemIndex--;
      }
    }else {
      if(this.itemIndex > 0) {
        this.itemIndex--;
      }
    }
  }

}
