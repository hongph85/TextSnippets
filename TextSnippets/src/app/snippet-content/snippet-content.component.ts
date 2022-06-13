import { Component, Input, OnInit } from '@angular/core';
import { TextSnippet } from '../snippet-sidebar/snippet-sidebar.component';

@Component({
  selector: 'app-snippet-content',
  templateUrl: './snippet-content.component.html',
  styleUrls: ['./snippet-content.component.css']
})
export class SnippetContentComponent implements OnInit {
  @Input() selectedSnippet: TextSnippet;
  searchText = '';
  constructor() {
 }

  ngOnInit(): void {
  }
}
