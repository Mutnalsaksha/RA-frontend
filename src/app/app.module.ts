import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NavComponent} from "./nav/nav.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {OrderComponent} from "./order/order.component";
import {UserComponent} from "./user/user.component";
import {BookComponent} from "./book/book.component";
import {AddUserComponent} from "./adduser/adduser.component";
import {AddbulkComponent} from "./addbulk/addbulk.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        DashboardComponent,
        OrderComponent,
        UserComponent,
        BookComponent,
        AddUserComponent,
        AddbulkComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }