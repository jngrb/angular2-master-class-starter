import { Component } from '@angular/core';

// templateUrl: 'contacts.component.html',
@Component({
  selector: 'trm-contacts-app',
  template: '<trm-contacts-header></trm-contacts-header>',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  title = 'Angular 2 Master Class setup works!';
}
