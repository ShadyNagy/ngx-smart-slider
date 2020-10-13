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

  setItems(items: Array<SmartSliderItem>, limit: number=null) {
    if(limit == null) {
      this.limit = items.length;
    }else {
      this.limit = limit;   
    }
    
    this.items = items;
    this.updateItemsToShow();
  }  

  moveNext() {   
    if(this.sliderMoving)  {
      return;
    }
    this.updateItemIndexNext();
    this.updateItemsToShow();       
  }

  movePrevious() {  
    if(this.sliderMoving)  {
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
        this.sliderMoving = true;
      }
    }else {
      if(this.itemIndex < this.maxIndex) {
        this.itemIndex++;
        this.sliderMoving = true;
      }
    }
  }

  private updateItemIndexPrevious() {
    if(this.isLoop) {
      if(this.itemIndex <= 0) {
        this.itemIndex = 0;
      }else {
        this.itemIndex--;
        this.sliderMoving = true;
      }
    }else {
      if(this.itemIndex > 0) {
        this.itemIndex--;
        this.sliderMoving = true;
      }
    }
  }

}
