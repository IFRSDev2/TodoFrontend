import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnregisteredUserComponent } from './unregistered-user/unregistered-user.component';
import { LoginComponent } from './unregistered-user/login/login.component';
import { RegisterComponent } from './unregistered-user/register/register.component';

@NgModule({
  declarations: [	
    AppComponent,
      UnregisteredUserComponent,
      LoginComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
