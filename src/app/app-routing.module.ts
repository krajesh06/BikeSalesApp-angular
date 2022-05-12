import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ListbikeComponent } from './listbike/listbike.component';
import { ListordersComponent } from './listorders/listorders.component';
import { ListreviewComponent } from './listreview/listreview.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'listuser',component:ListuserComponent},
  {path:'login',component:LoginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'listbike',component:ListbikeComponent},
  {path:'listorders',component:ListordersComponent},
  {path:'listreview',component:ListreviewComponent},
  {path:'order',component:OrderComponent},
  {path:'review',component:ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
