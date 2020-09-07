import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample';
  result = '1234';
  isShowPrevious=true;
  isShowNext=true;

  items=[1,2,3];

  toggleShowPrevious() {
    this.isShowPrevious = !this.isShowPrevious;
  }

  toggleShowNext() {
    this.isShowNext = !this.isShowNext;
  }
}