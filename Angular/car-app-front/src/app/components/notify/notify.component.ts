import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User, Car } from '../../interfaces/user.interface';
import * as moment from 'moment';

export const NOTIFICATION_TYPE = {
  Kilometer: '5K',
  SOAT: 'SOAT',
  TecnoMecanica: 'TecnoMecanica',
};

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  severeNotifications: {
    car: Car,
    type: string,
    info: string,
  }[] = [];

  warningNotifications: {
    car: Car,
    type: string,
    info: string,
  }[] = [];

  constructor(private userService: UserService,
              private router: Router) {
    if (!userService.isLogged()) this.router.navigate(['/logIn']);
    this.loadNotifications();
  }

  ngOnInit() {
  }

  private loadNotifications() {
    this.userService.getOwnUser((res) => {
      const user: User = JSON.parse(res);
      for (const car of user.cars) {
        if (car.last5krev) {
          if (car.last5krev + 5000 > car.currentKilometer) this.severeNotifications.push(
            {car, type: NOTIFICATION_TYPE.Kilometer, info: 'Revisión de 5 kilómetros necesaria'});
          else if (car.last5krev + 4800 > car.currentKilometer) this.warningNotifications.push(
            {car, type: NOTIFICATION_TYPE.Kilometer, info: 'Revisión de 5 kilómetros próxima a vencer'});
        }

        if (car.lastTecDate) {
          if (moment().isAfter(moment(car.lastTecDate))) this.severeNotifications.push(
            {car, type: NOTIFICATION_TYPE.TecnoMecanica, info: 'Revisión tecnicomecánica vencida'});
          else if (moment().diff(moment(car.lastTecDate), 'week', true) <= 1) this.warningNotifications.push(
            {car, type: NOTIFICATION_TYPE.TecnoMecanica, info: 'Revisión tecnicomecánica próxima a vencer'});
        }

        if (car.lastSoatDate) {
          if (moment().isAfter(moment(car.lastSoatDate))) this.severeNotifications.push(
            {car, type: NOTIFICATION_TYPE.SOAT, info: 'SOAT vencido'});
          else if (moment().diff(moment(car.lastSoatDate), 'week', true) <= 1) this.warningNotifications.push(
            {car, type: NOTIFICATION_TYPE.SOAT, info: 'SOAT próximo a vencer'});
        }

        console.log('Warning: ', this.warningNotifications);
        console.log('Urgent: ', this.severeNotifications);
      }
    }, err => {});
  }
}
