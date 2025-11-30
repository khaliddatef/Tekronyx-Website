import { Routes } from '@angular/router';
import { About } from '../components/about/about';
import { Home } from '../components/home/home';
import { Services } from '../components/service/services';
import { NotFound } from '../components/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home | Tekronyx  ' },
  { path: 'about', component: About, title: 'About | Tekronyx' },
  { path: 'services', component: Services, title: 'Services | Tekronyx' },
  { path: '**', component: NotFound, title: 'Error 404 ' }
];
