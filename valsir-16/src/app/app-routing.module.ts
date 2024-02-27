import { ProductSpecificationComponent } from './components/product-specification/product-specification.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { DepthComponent } from './components/depth/depth.component';
import { PlateComponent } from './components/plate/plate.component';


const routes: Routes = [
  {
    path: '',
    component: PlateComponent,
    title: 'Home page'
  },
  {
    path: ':plate',
    component: ColorComponent,
    title: 'Color page'
  },
  {
    path: ':plate/:color',
    component: DepthComponent,
    title: 'Depth Page',
  },
  {
    path: ':plate/:color/:depth',
    component: ProductSpecificationComponent,
    title: 'Product Details',

  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
