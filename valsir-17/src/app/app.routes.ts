import { Routes } from '@angular/router';
import { DepthComponent } from './depth/depth.component';
import { ColorComponent } from './color/color.component';

export const routes: Routes = [
  {
    path: '',
    component: ColorComponent,
    title: 'Home page'
  },
  { path: ':color/:colorId', component: DepthComponent },
];
