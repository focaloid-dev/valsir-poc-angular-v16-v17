import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { DepthComponent } from './depth/depth.component';

const routes: Routes = [
  {
    path: '',
    component: ColorComponent,
    title: 'Home page'
  },
  {
    path: ':color',
    component: DepthComponent,
    title: 'Depth'

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
