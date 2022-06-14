import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateSnippetComponent } from './create-snippet/create-snippet.component';
@Component({
  selector: 'app-snippet-sidebar',
  templateUrl: './snippet-sidebar.component.html',
  styleUrls: ['./snippet-sidebar.component.css']
})
export class SnippetSidebarComponent implements OnInit {
  public snippets?: TextSnippet[];
  @Output() onSelectedSnippet: EventEmitter<any> = new EventEmitter<any>();
  page = 1;
  itemsPerPage = 2;
  totalItems: any;
  hidePagingCtl: boolean;
  constructor(
    public http: HttpClient,
    public dialog: MatDialog) {
    this.gty(1);
  }

  ngOnInit(): void {
    this.hidePagingCtl = false;
  }

  onClick(item: TextSnippet) {
    this.onSelectedSnippet.emit(item);
  }

  onFilter(values: TextSnippet[]) {
    this.snippets = values;
    this.hidePagingCtl = true;
  }

  addNew() {
    let dialogRef = this.dialog.open(CreateSnippetComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snippets.push(result);
      }
    });
  }

  onDelete(id) {
    this.http.delete('/textsnippet/' + id).subscribe(result => {
      const indexOfObject = this.snippets.findIndex((object) => {
        return object.id === id;
      });

      if (indexOfObject !== -1) {
        this.snippets.splice(indexOfObject, 1);
      }
    }, error => console.error(error));
  }

  onEdit(snippet: TextSnippet) {
    let dialogRef = this.dialog.open(CreateSnippetComponent, { data: snippet });

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }

  gty(page: any) {
    this.http.get(`/textsnippet/items?page=${this.page}&size=${this.itemsPerPage}`).subscribe((result: any) => {
      this.snippets = result.items;
      this.totalItems = result.totalItems;
    }, error => console.error(error));
  }
}

export interface TextSnippet {
  text: string;
  title: string;
  id: number;
}

