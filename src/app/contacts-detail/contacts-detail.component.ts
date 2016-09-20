import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: 'contacts-detail.component.html',
  styleUrls: ['contacts-detail.component.css']
})
export class ContactsDetailComponent /* implements OnInit */ {

  @Input() contact: Contact;
  @Output() edit = new Subject<Contact>();
  @Output() back = new Subject();

  constructor() { }

  ngOnInit() {
  }
}
