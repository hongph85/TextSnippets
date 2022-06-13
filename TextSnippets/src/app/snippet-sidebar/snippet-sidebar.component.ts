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
  constructor(
    public http: HttpClient,
    public dialog: MatDialog) {
    http.get<TextSnippet[]>('/textsnippet').subscribe(result => {
      this.snippets = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

  onClick(item: TextSnippet) {
    this.onSelectedSnippet.emit(item);
  }

  onFilter(values: TextSnippet[]) {
    this.snippets = values;
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
}

export interface TextSnippet {
  text: string;
  title: string;
  id: number;
}

