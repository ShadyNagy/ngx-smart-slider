import { Component, OnInit } from '@angular/core';
import { Item } from 'projects/ngx-smart-slider/src/lib/models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sample';
  result = '1234';
  isShowPrevious = true;
  isShowNext = true;

  items = new Array<Item>();

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
        text: '1',
        image: '/assets/images/1.jpg',
        alt: '1',
      }
    );
  }

  toggleShowPrevious() {
    this.isShowPrevious = !this.isShowPrevious;
  }

  toggleShowNext() {
    this.isShowNext = !this.isShowNext;
  }
}
