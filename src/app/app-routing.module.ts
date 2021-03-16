import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { NofoundComponent } from './nofound/nofound.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

const routes: Routes = [
  {path:'cart-details', component:CartDetailsComponent},
  {path:'product/:id', component:SingleProductComponent},
  { path: '', component:AllProductsComponent },
  {path:'**',redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
