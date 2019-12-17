import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-login-provider',
  templateUrl: './login-provider.component.html',
  styleUrls: ['./login-provider.component.css']
})
export class LoginProviderComponent implements OnInit {

  email = '';
  password = '';
  sending = false;
  message = '';
  errorLogin = false;

  constructor(private providerService: ProviderService,
              private router: Router ) {
    if (providerService.isLogged()) router.navigate(['/profileProvider']);
  }

  ngOnInit() {}

  onSubmit() {
    this.sending = true;
    this.providerService.logIn(this.email, this.password, (response) => {
      this.sending = false;
      this.router.navigate(['/profileProvider']);
    }, (err) => {
       this.sending = false;
       this.message = err.error;
       this.errorLogin = true;
    });
  }
}
