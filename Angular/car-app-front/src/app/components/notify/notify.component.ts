import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User, Car } from '../../interfaces/user.interface';
import * as moment from 'moment';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

export const NOTIFICATION_TYPE = {
  Kilometer: '5K',
  SOAT: 'SOAT',
  TecnoMecanica: 'TecnoMecanica',
};

interface Notification {
  car: Car;
  type: string;
  info: string;
}

@Component({
  selector: 'app-modal-notifications',
  templateUrl: './notify.modal.html'
})
export class NotifyModalComponent {
  @Input() useDate;
  @Input() title;
  @Input() description;
  @Output() sendEvent = new EventEmitter<any>();

  inputDate: Date;
  inputNumber: number;
  constructor(public activeModal: NgbActiveModal) {}

  send() {
    this.sendEvent.emit({number: this.inputNumber, date: this.inputDate});
    this.activeModal.close();
  }
}

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  severeNotifications: Notification[] = [];
  warningNotifications: Notification[] = [];

  updating = false;

  constructor(private userService: UserService,
              private router: Router,
              private modalService: NgbModal) {
    if (!userService.isLogged()) this.router.navigate(['/logIn']);
    this.loadNotifications();
  }

  ngOnInit() {
  }

  private loadNotifications() {
    this.severeNotifications = [], this.warningNotifications = [];
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
          else if (moment(car.lastTecDate).diff(moment(), 'week', true) <= 1) this.warningNotifications.push(
            {car, type: NOTIFICATION_TYPE.TecnoMecanica, info: 'Revisión tecnicomecánica próxima a vencer'});
        }

        if (car.lastSoatDate) {
          if (moment().isAfter(moment(car.lastSoatDate))) this.severeNotifications.push(
            {car, type: NOTIFICATION_TYPE.SOAT, info: 'SOAT vencido'});
          else if (moment(car.lastSoatDate).diff(moment(), 'week', true) <= 1) this.warningNotifications.push(
            {car, type: NOTIFICATION_TYPE.SOAT, info: 'SOAT próximo a vencer'});
        }
      }
    }, err => {});
  }

  updateValue(notification: Notification, severe: boolean){
    const modal = this.modalService.open(NotifyModalComponent, { centered: true });
    let title = '', description = '', useDate = true;
    switch (notification.type) {
      case NOTIFICATION_TYPE.SOAT:
        title = 'Actualización fecha del soat';
        description = 'Ingrese la nueva fecha de vencimiento del soat';
        break;
      case NOTIFICATION_TYPE.TecnoMecanica:
        title = 'Actualización fecha de la revisión tecnicomecánica';
        description = 'Ingrese la nueva fecha de vencimiento del la revisión tecnicomecánica';
        break;
      case NOTIFICATION_TYPE.Kilometer:
        title = 'Actualización de la revisión del kilometraje del vehiculo';
        description = 'Ingrese el kilometraje que tenia el vehiculo cuando hizo la revisión de 5k kilómetros';
        useDate = false;
        break;
    }

    modal.componentInstance.title = title;
    modal.componentInstance.description = description;
    modal.componentInstance.useDate = useDate;
    modal.componentInstance.sendEvent.subscribe((emmited) => {
      this.updating = true;
      let lastSoatUpdate, last5KUpdate, lastTecUpdate;
      switch (notification.type) {
        case NOTIFICATION_TYPE.SOAT: lastSoatUpdate = emmited.date; break;
        case NOTIFICATION_TYPE.TecnoMecanica: lastTecUpdate = emmited.date; break;
        case NOTIFICATION_TYPE.Kilometer: last5KUpdate = emmited.number; break;
      }
      this.userService.updateCar(notification.car._id, lastSoatUpdate, lastTecUpdate, last5KUpdate, () => {
        this.loadNotifications();
        this.updating = false;
      }, (err) => {
        this.updating = false;
      });
    });

  }
}
