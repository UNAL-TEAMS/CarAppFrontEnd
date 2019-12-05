import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Car } from '../../interfaces/user.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];

  constructor(private userService: UserService,
              private router: Router) {
      if (!userService.isLogged()) this.router.navigate(['/logIn']);
      this.loadCars();
   }

  private loadCars() {
    this.userService.getOwnUser((response) => {
      this.cars = JSON.parse(response).cars;
    }, (err) => {});
  }

  ngOnInit() {
  }

  getCarImage(name: string): string {
    if (name) return environment.server_url + '/user/car_photo/' + name;
    return 'https://www.pngtube.com/myfile/detail/409-4092522_car-front-car-icon-png.png';
  }

  handleFileInput(files: FileList, car: Car) {
    console.log('here');
    const fileToUpload = files.item(0);
    this.userService.uploadCarImg(fileToUpload, car._id, (response) => {
      this.loadCars();
    }, (err) => {});
  }

}
