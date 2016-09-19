import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';

// templateUrl: 'contacts.component.html',
@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  title = 'Angular 2 Master Class setup works!';
  name = 'Angular 2';
  contacts: Contact[] = CONTACT_DATA;
  contact: Contact = {
    id: 0,
    name: 'Diana Ellis',
    email: '',
    phone: '',
    birthday: '',
    website: '',
    image: '/assets/images/0.jpg',
    address: {
      street: '6554 Park Lane',
      zip: '43378',
      city: 'Rush',
      country: 'United States'
    }
  }
  contact2: Contact = {
    id: 1,
    name: 'Norbert Hubendubel',
    email: '',
    phone: '',
    birthday: '',
    website: '',
    image: '/assets/images/1.jpg',
    address: {
      street: '742 Evergreen Terrace',
      zip: '43378',
      city: 'Springfield',
      country: 'United States'
    }
  }
}
