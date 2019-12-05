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
    lastSoatDate: undefined,
    lastTecDate: undefined,
  };

  sending = false;
  useLastTecDate = false;

  constructor(private userService: UserService,
              private router: Router) {
    if (!userService.isLogged()) this.router.navigate(['/logIn']);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.sending = true;
    let lastTechDate = this.car.lastTecDate;
    if (!this.useLastTecDate) lastTechDate = undefined;
    this.userService.addCar(this.car.trade_mark, this.car.model, this.car.reference,
      this.car.license_plate, this.car.lastSoatDate, lastTechDate, (response) => {
        this.router.navigate(['/car']);
        this.sending = false;
      }, (err) => {
        console.log(err.error);
        this.sending = false;
      });
  }

}
