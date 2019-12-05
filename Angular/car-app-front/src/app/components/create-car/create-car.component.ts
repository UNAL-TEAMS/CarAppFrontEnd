import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Car } from '../../interfaces/user.interface';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {


  car: Car = {
    trade_mark: '',
    model: 2019,
    reference: '',
    license_plate: '',
  };
  constructor(private userService: UserService,
              private router: Router) {
    if (!userService.isLogged()) this.router.navigate(['/logIn']);
  }

  ngOnInit() {
  }

  onSubmit(){

  }

}
