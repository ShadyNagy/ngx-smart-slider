import { Component, OnInit } from '@angular/core';
import { SmartSliderItem } from 'projects/ngx-smart-slider/src/lib/models/smart-slider-item';
import { ISmartSliderOptions } from 'projects/ngx-smart-slider/src/lib/models/smart-slider-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sample';
  result = null;
  isShowPrevious = true;
  isShowNext = true;
  selectedTextPosition = 'centered';
  cellLimit = 3;

  listDataOptions: ISmartSliderOptions = {
    itemOptions: {
      itemPadding: 5,
      itemWidth: 200
    },
    arrows: {
      position: 'center'
    },
    height: 185
  };  

  itemsForList = [
    {
      text: 'dish 1',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 2',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 3',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 4',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 5',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 6',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 7',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 8',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 9',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 10',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 11',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 12',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 13',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 14',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 15',
      image: '/assets/images/test.jpg',
    },
    {
      text: 'dish 16',
      image: '/assets/images/test.jpg',
    },

  ];

  items = new Array<SmartSliderItem>();

  ngOnInit(): void {
    this.items.push(
      {
        text: '1',
        image: '/assets/images/1.jpg',
        alt: '1',
      },
      {
        text: '2',
        image: '/assets/images/2.jpg',
        alt: '2',
      },
      {
        text: '3',
        image: '/assets/images/3.jpg',
        alt: '3',
      },
      {
        text: '4',
        image: '/assets/images/1.jpg',
        alt: '4',
      },
      {
        text: '1',
        image: '/assets/images/1.jpg',
        alt: '1',
      },
      {
        text: '2',
        image: '/assets/images/2.jpg',
        alt: '2',
      },
      {
        text: '3',
        image: '/assets/images/3.jpg',
        alt: '3',
      },
      {
        text: '4',
        image: '/assets/images/1.jpg',
        alt: '4',
      },
      {
        text: '1',
        image: '/assets/images/1.jpg',
        alt: '1',
      },
      {
        text: '2',
        image: '/assets/images/2.jpg',
        alt: '2',
      },
      {
        text: '3',
        image: '/assets/images/3.jpg',
        alt: '3',
      },
      {
        text: '4',
        image: '/assets/images/1.jpg',
        alt: '4',
      }
    );
  }

  toggleShowPrevious() {
    this.isShowPrevious = !this.isShowPrevious;
  }

  toggleShowNext() {
    this.isShowNext = !this.isShowNext;
  }

  selectTextPosition(event) {
    console.log('event', event);
    this.selectedTextPosition = event;
  }

  onSelect(event: SmartSliderItem) {
    this.result = event.text;
  }

  changeCellLimit(value: number) {
    this.cellLimit = value;
  }
}
