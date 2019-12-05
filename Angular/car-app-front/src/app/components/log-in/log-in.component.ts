import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email = '';
  password = '';
  sending = false;
  message = '';
  errorLogin = false;
  constructor(private userService: UserService,
              private router: Router ) {}

  ngOnInit() {}

  onSubmit() {
    this.sending = true;
    this.userService.logIn(this.email, this.password, (response) => {
      this.sending = false;
      this.router.navigate(['/home']);
    }, (err) => {
       this.sending = false;
       this.message = err.error;
       this.errorLogin=true;

    });
  }



}
