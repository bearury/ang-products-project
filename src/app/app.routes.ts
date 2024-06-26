import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    title: 'App About Page',
    component: AboutComponent,
  },
  {
    path: '**',
    title: 'App NotFound Page',
    component: NotFoundComponent,
  },
];
