import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-create-snippet',
  templateUrl: './create-snippet.component.html',
  styleUrls: ['./create-snippet.component.css']
})
export class CreateSnippetComponent implements OnInit {
  http: HttpClient;
  item: any;
  constructor(http: HttpClient,
    public dialogRef: MatDialogRef<CreateSnippetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.http = http;
    this.item = data || {};
  }

  ngOnInit(): void {
  }

  save() {
    if (!this.item.id || this.item.id == 0) {
      this.http.post("/textsnippet", this.item).subscribe(result => {
        this.dialogRef.close(this.item);
      });
    }
    else { // edit mode
      this.http.put("/textsnippet", this.item).subscribe(result => {
        this.dialogRef.close(this.item);
      });
    }
  }
}
