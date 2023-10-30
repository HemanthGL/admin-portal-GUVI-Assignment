import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch:  'full'
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'user/create',
    component: CreateUserComponent
  },
  {
    path: 'user/:id',
    component: ViewUserComponent
  },
  {
    path: 'user/edit/:id',
    component:EditUserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product/create',
    component: CreateProductComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'product/edit/:id',
    component: EditProductComponent
  },
  {
    path: 'market',
    component: MarketComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
