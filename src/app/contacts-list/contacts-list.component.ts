import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
// import { CONTACT_DATA } from '../data/contact-data';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent /*implements OnInit*/ {

  private terms$ = new Subject<string>();

  private contacts: Observable<Array<Contact>>; // = CONTACT_DATA;
  /* contact: Contact = {
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
  }*/
  
  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    //this.contacts = this.contactsService.getContacts();
    /*this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);*/
    // this.contactsService.getContacts()
    this.contacts = this.terms$.debounceTime(400)
      .distinctUntilChanged() // Observable<String>
      .switchMap(term => this.contactsService.search(term) /* Observable<Array<Contact>> */ )
      .merge(this.contactsService.getContacts()); // merge propagates the values by input order and time
  }

  search(text: string) : Observable<Array<Contact>> {
    return ;
  }
}
