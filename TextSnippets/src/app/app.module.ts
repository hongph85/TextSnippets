import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SnippetSidebarComponent } from './snippet-sidebar/snippet-sidebar.component';
import { SnippetContentComponent } from './snippet-content/snippet-content.component';
import { FilterSnippetComponent } from './snippet-sidebar/filter-snippet/filter-snippet.component';
import { FormsModule } from '@angular/forms';
import { HighlighterPipe } from './highlighter.pipe';
import { CreateSnippetComponent } from './snippet-sidebar/create-snippet/create-snippet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule
} from '@angular/material/dialog';
import {
  MatFormFieldModule
} from '@angular/material/form-field'
@NgModule({
  declarations: [
    AppComponent,
    SnippetSidebarComponent,
    SnippetContentComponent,
    FilterSnippetComponent,
    HighlighterPipe,
    CreateSnippetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
