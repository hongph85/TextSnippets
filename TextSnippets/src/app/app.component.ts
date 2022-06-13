import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { TextSnippet } from './snippet-sidebar/snippet-sidebar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedItem: TextSnippet;
  constructor(private msalService: MsalService) {
  }
  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then(res => {
      if (res != null && res.account != null) {
        this.msalService.instance.setActiveAccount(res.account)
      }
    })
  }

  isLoggedin(): boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }

  login() {
    this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(response.account);
    })
  }

  logout() {
    this.msalService.logout();
  }

  onSelected(item: TextSnippet) {
    this.selectedItem = item;
  }
}
