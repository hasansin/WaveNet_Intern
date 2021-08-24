import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css'],
})
export class NewComponentComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
