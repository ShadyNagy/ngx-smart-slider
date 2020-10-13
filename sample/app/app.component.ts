import { Component, OnInit } from '@angular/core';
import { SmartSliderItem } from 'projects/ngx-smart-slider/src/lib/models/smart-slider-item';

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
