import { provide } from '@angular/core';
import { API_ENDPOINT_TOKEN } from './app.tokens';
import { environment } from './environment'
import { ContactsService } from './contacts.service';

export const apiUrlProvider = provide(API_ENDPOINT_TOKEN, { useValue: environment.apiUrl });
export const contactsServiceProvider = provide(ContactsService, { useClass: ContactsService });
