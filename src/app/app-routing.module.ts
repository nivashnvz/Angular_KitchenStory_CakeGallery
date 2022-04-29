import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SearchComponent } from './search/search.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"login" , component:LoginComponent},
  {path:"signup" , component:SignupComponent},
  {path:"forgot" , component:ForgotComponent},
  {path:"search" , component:SearchComponent},
  {path:"cart" , component:CartComponent},
  {path:"addcake" , component:AddcakeComponent},
  {path:"checkout" , component:CheckoutComponent , children:[
    {path:"", component:AddressComponent},
    {path:"address", component:AddressComponent},
    {path:"payment", component:PaymentComponent},

  ]},

  {path:"detail/:cakeid" , component:CakedetailComponent},
  {path:"orders" , component:OrdersComponent},
  {path:"**" , component:PagenotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
