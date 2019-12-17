import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.css']
})
export class RegisterProviderComponent implements OnInit {

  registerInfo = {
    name: '',
    email: '',
    ID: 0,
    password: '',
  };
  errorRegister=false;

  sending = false;
  message = '';
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {/*
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
    });*/
  }

}
