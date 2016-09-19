import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { Contact } from './models/contact';

@Injectable()
export class ContactsService {

  possibleMiddleInitial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  contactData: Contact[];
 
  getRandomMiddleInitial(): string {
    return this.possibleMiddleInitial.charAt(Math.floor(Math.random() * this.possibleMiddleInitial.length));
  }

  constructor() {
    this.contactData = new Array<Contact>();
    for (var contact of CONTACT_DATA) {
      // clone the object
      var clone = Object.assign({}, contact);
      // and add a random middle initial
      var temp = clone.name.split(' ');
      clone.name = temp.join(' ' + this.getRandomMiddleInitial() + '. ');
      if (clone.email == '') {
        clone.email = 'no@thing.found';
      }
      if (clone.website == '') {
        clone.website = 'www.route.to/nowhere';
      }
      this.contactData[contact.id] = clone;
    }
  }
 
  getContacts(): Array<Contact> {
    return this.contactData;
  }

  getContact(id): Contact {
    return this.contactData[id];
  }
}
