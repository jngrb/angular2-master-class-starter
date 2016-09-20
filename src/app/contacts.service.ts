import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
//import { CONTACT_DATA } from './data/contact-data';
import { Contact } from './models/contact';
import { API_ENDPOINT_TOKEN } from './app.tokens'

@Injectable()
export class ContactsService {
  possibleMiddleInitial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  contactData: Contact[];
 
  getRandomMiddleInitial(): string {
    return this.possibleMiddleInitial.charAt(Math.floor(Math.random() * this.possibleMiddleInitial.length));
  }

  constructor(@Inject(API_ENDPOINT_TOKEN) private API_ENDPOINT: string,
              private http: Http) {
  }
 
  /*updateContacts() {
    this.contactData = new Array<Contact>();
    for (let contact of CONTACT_DATA) {
      // clone the object
      let clone = Object.assign({}, contact);
      // and add a random middle initial
      let temp = clone.name.split(' ');
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
    this.updateContacts();
    return this.contactData;
  }

  getContact(id: number): Contact {
    this.updateContacts();
    return this.contactData[id];
  }*/
  
  getContacts() {
    return this.http.get(this.API_ENDPOINT + 'api/contacts')
      .map(res => res.json().items);
  }

  getContact(id: number | string) {
    return this.http.get(this.API_ENDPOINT + `api/contacts/${id}`)
      .map(res => res.json().item);
  }

  updateContact(contact: Contact) {
    return this.http.put(this.API_ENDPOINT + `api/contacts/${contact.id}`, contact)
      .map(res => res.json().item);
  }
}
