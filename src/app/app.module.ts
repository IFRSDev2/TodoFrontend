import { TasksComponent } from './registered-user/pages/home/components/tasks/tasks.component';
import { TaskComponent } from './registered-user/pages/home/components/task/task.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnregisteredUserComponent } from './unregistered-user/unregistered-user.component';
import { LoginComponent } from './unregistered-user/login/login.component';
import { RegisterComponent } from './unregistered-user/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisteredUserComponent } from './registered-user/registered-user.component';
import { HomeComponent } from './registered-user/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
      UnregisteredUserComponent,
      LoginComponent,
      RegisterComponent,
      RegisteredUserComponent,
      TaskComponent,
      TasksComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
