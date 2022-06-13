import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Key } from 'protractor';
import { TextSnippet } from '../snippet-sidebar.component';

@Component({
  selector: 'app-filter-snippet',
  templateUrl: './filter-snippet.component.html',
  styleUrls: ['./filter-snippet.component.css']
})
export class FilterSnippetComponent implements OnInit {
  keyword: string;
  http: HttpClient;
  @Output() values: EventEmitter<any> = new EventEmitter<any>();
  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit(): void {
  }

  filter() {
    console.log(this.keyword);
    if (this.keyword && this.keyword != '') {
      this.http.get<TextSnippet[]>("/textsnippet/search?q=" + this.keyword).subscribe(result => {
        this.values.emit(result);
      });
    }
    else {
      this.http.get<TextSnippet[]>('/textsnippet').subscribe(result => {
        this.values.emit(result);
      }, error => console.error(error));
    }
  }
}
