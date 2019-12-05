import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'logIn', component: LogInComponent },
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: '/logIn', pathMatch: 'full'},
  { path: '**', redirectTo: '/logIn', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
