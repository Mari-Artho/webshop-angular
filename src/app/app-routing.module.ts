import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
//routing components
import { AdminComponent } from './components/admin/admin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ComfirmComponent } from './components/comfirm/comfirm.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'comfirm', component: ComfirmComponent},
  { path: 'detail/:id', component: DetailComponent},
  { path: '**', component: NotfoundComponent},
  //redirectTO & pathMatch displayed 'home componet' when status is http://localhoset:4200/.
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
