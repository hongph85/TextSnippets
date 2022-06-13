import { Component } from '@angular/core';
import { TextSnippet } from './snippet-sidebar/snippet-sidebar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedItem: TextSnippet;
  constructor() {
  }

  onSelected(item: TextSnippet) {
    this.selectedItem = item;
  }
}
