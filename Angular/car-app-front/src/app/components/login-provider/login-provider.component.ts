import { Component, OnInit } from '@angular/core';
//import { ProviderService } from '../../services/user.service';
import { Router } from '@angular/router';
import "./login-provider.component.css";

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

  constructor(//private userService: UserService,
              private router: Router ) {
    //if (userService.isLogged()) router.navigate(['/home']);
  }

  ngOnInit() {}

  onSubmit() {
    this.sending = true;
    /*this.userService.logIn(this.email, this.password, (response) => {
      this.sending = false;
      this.router.navigate(['/home']);
    }, (err) => {
       this.sending = false;
       this.message = err.error;
       this.errorLogin = true;
    });
  }*/
  }
}
