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
import { NotifyComponent, NotifyModalComponent, ProviderModalComponent } from './components/notify/notify.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCarComponent } from './components/create-car/create-car.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    ProviderModalComponent,
    CreateCarComponent,
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
  entryComponents: [
    NotifyModalComponent,
    ProviderModalComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
