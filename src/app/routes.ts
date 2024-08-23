import { Routes } from '@angular/router';
import { DirectionsComponent } from './interview-start/directions/directions.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'directions',
  },
  {
    path: 'directions',
    component: DirectionsComponent,
  },
];
