import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import{HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListbikeComponent } from './listbike/listbike.component';
import { OrderComponent } from './order/order.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ListuserComponent } from './listuser/listuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ListordersComponent } from './listorders/listorders.component';
import { ListreviewComponent } from './listreview/listreview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ListbikeComponent,
    OrderComponent,
    ReviewsComponent,
    AdminloginComponent,
    ListuserComponent,
    ListordersComponent,
    ListreviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
