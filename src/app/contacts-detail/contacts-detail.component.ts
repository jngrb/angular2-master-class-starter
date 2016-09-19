import { Component /*, OnInit */ } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: 'contacts-detail.component.html',
  styleUrls: ['contacts-detail.component.css']
})
export class ContactsDetailComponent /* implements OnInit */ {

  contact: Contact;

  constructor(contactsService: ContactsService,
              route: ActivatedRoute) {
    let id = route.snapshot.params['id'];
    contactsService.getContact(id)
      .subscribe(contact => this.contact = contact);
  }

  /* ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contact = this.contactsService.getContact(id);
  } */

}
