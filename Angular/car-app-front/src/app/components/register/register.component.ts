import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import "./register.component.css";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerInfo = {
    name: '',
    email: '',
    ID: 0,
    password: '',
  };
  errorRegister=false;

  sending = false;
  message = '';

  constructor(private userService: UserService,
              private router: Router) {
    if (userService.isLogged()) router.navigate(['/home']);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.sending = true;
    this.userService.register(this.registerInfo.name, this.registerInfo.ID,
      this.registerInfo.email, this.registerInfo.password, (response) => {
      alert('usuario registrado');
      this.router.navigate(['/logIn']);
      this.sending = false;
    }, (err) => {
      console.log(err);
      this.message = err.error;
      this.errorRegister = true;
      this.sending = false;
    });
  }

}
