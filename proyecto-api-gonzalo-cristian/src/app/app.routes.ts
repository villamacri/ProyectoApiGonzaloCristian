import { Routes } from '@angular/router';
import { EventListComponent } from './components/event-list-component/event-list-component';
import { EventDetail } from './pages/event-detail/event-detail';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    component: EventListComponent,
    pathMatch: 'full',
  },
  {
    path: 'events/:id',
    component: EventDetail,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
