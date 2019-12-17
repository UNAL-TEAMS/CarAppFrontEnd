import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.css']
})
export class RegisterProviderComponent implements OnInit {

  registerInfo = {
    name: '',
    email: '',
    NIT: 0,
    password: '',
    phone: 0,
  };
  errorRegister = false;

  sending = false;
  message = '';
  constructor(private providerService: ProviderService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.sending = true;
    this.providerService.register(this.registerInfo.name, this.registerInfo.NIT,
      this.registerInfo.email, this.registerInfo.password, this.registerInfo.phone, {}, {}, {}, (response) => {
      alert('proveedor registrado');
      this.router.navigate(['/logInProvider']);
      this.sending = false;
    }, (err) => {
      console.log(err);
      this.message = err.error;
      this.errorRegister = true;
      this.sending = false;
    });
  }

}
