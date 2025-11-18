import { Routes } from '@angular/router';
import { About } from '../components/about/about';
import { Contact } from '../components/contact/contact';
import { Home } from '../components/home/home';
import { Services } from '../components/service/services';
import { NotFound } from '../components/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'about', component: About, title: 'About' },
  { path: 'services', component: Services, title: 'Services' },
  { path: 'contact', component: Contact, title: 'Contact Us' },
  { path: '**', component: NotFound, title: 'Error 404 ' }
];
