import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { MsalGuard, MsalInterceptor, MsalInterceptorConfiguration, MsalModule, MsalRedirectComponent, MsalService, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
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
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: "9785ce4c-7b8d-470e-90d8-ea0be1fa87f4",
          authority: "https://login.microsoftonline.com/6b795dbc-0b12-4a90-8191-7e74b92697f1",
          redirectUri: "https://localhost:4200/"
        }
      }
      ),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ["user.read"]
        }
      },
      {
        interactionType: InteractionType.Popup,
        protectedResourceMap: new Map([
          ['https://graph.microsoft.com/v1.0/me',["user.read"]],
          ['localhost', ["api://7893cfa1-3908-49e6-b6b2-fda77793e9e3/api.scope"]],
        ])
      })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard
  ],
  bootstrap: [AppComponent,MsalRedirectComponent]
})
export class AppModule {

}
