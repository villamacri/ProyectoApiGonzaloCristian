import { Routes } from '@angular/router';
import { AttractionListComponent} from './components/attraction-list-component/attraction-list-component';
import { AttractionItemComponent } from './components/attraction-item-component/attraction-item-component';

export const routes: Routes = [
  { path: '', 
    redirectTo: 'attractions', 
    pathMatch: 'full' },
  {
    path:'attractions',
    component: AttractionListComponent,
  },
  {
    path: 'attractions/:id',
    component: AttractionItemComponent,
  }


];