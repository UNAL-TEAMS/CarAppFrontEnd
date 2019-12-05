import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { NotifyComponent } from './components/notify/notify.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'logIn', component: LogInComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'provider', component: ProvidersComponent},
  { path: 'car', component: CarsComponent},
  { path: 'notify', component: NotifyComponent},
  { path: '', redirectTo: '/logIn', pathMatch: 'full'},
  { path: '**', redirectTo: '/logIn', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
