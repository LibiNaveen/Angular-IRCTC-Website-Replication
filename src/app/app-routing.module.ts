import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { RegisterAddressComponent } from './register-address/register-address.component';
import { RegisterBasicComponent } from './register-basic/register-basic.component';
import { RegisterPersonalComponent } from './register-personal/register-personal.component';
import { RegisterComponent } from './register/register.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EndPageComponent } from './end-page/end-page.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bookBtn', component: BookingDetailsComponent },
  { path: 'basic', component: RegisterBasicComponent },
  { path: 'address', component: RegisterAddressComponent },
  { path: 'personal', component: RegisterPersonalComponent },
  { path: 'passDetail', component: PassengerdetailsComponent },
  { path: 'payment', component:PaymentPageComponent  },
  { path: 'contact', component:ContactUsComponent  },
  { path: 'end', component:EndPageComponent  },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
