import { Component } from '@angular/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [EmailComposer]
})
export class Tab1Page {
  constructor(private emailComposer: EmailComposer) {}
  emailOptions = {to: '', cc: '', bcc: '', subject: '', body: ''};
  async openEmail() {
    const email = {
      to: this.emailOptions.to,
      cc: this.emailOptions.cc,
      bcc: this.emailOptions.bcc,
      subject: this.emailOptions.subject,
      body: this.emailOptions.body
    };
    await this.emailComposer.open(email);
    console.log('opened');
  }
}
