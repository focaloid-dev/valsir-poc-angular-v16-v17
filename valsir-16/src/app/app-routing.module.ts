import { ProductSpecificationComponent } from './components/product-specification/product-specification.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { DepthComponent } from './components/depth/depth.component';


const routes: Routes = [
  {
    path: '',
    component: ColorComponent,
    title: 'Home page'
  },
  {
    path: ':color',
    component: DepthComponent,
    title: 'Depth',
  },
  {
    path: ':color/:depth',
    component: ProductSpecificationComponent,
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
