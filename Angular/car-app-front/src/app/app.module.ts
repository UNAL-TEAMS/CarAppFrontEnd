import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarsComponent } from './components/cars/cars.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { NotifyComponent, NotifyModalComponent } from './components/notify/notify.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCarComponent } from './components/create-car/create-car.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginProviderComponent } from './components/login-provider/login-provider.component';
import { RegisterProviderComponent } from './components/register-provider/register-provider.component';
import { ProfileProviderComponent } from './components/profile-provider/profile-provider.component';
import { NavBarProviderComponent } from './components/nav-bar-provider/nav-bar-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    CarsComponent,
    ProvidersComponent,
    NotifyComponent,
    NotifyModalComponent,
    CreateCarComponent,
    LoginProviderComponent,
    RegisterProviderComponent,
    ProfileProviderComponent,
    NavBarProviderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  entryComponents: [NotifyModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
