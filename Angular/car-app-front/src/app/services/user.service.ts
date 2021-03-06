import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RequestService, REQUEST_TYPES } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = environment.server_url + '/user';

  constructor(private request: RequestService) {}

  logIn(email: string, password: string, okFunc: (response) => void, errFunc: (err) => void){
    this.request.sendRequest(this.URL + '/log_in', {email, password}, REQUEST_TYPES.POST, false, (response) => {
      response = JSON.parse(response);
      this.request.setTokens(response.log_in_token, response.refresh_token);
      okFunc(response);
    }, errFunc);
  }

  logOut() {
    this.request.clearTokens();
  }

  register(name: string, identification: number, email: string, password: string, okFunc: (response) => void, errFunc: (err) => void) {
    this.request.sendRequest(this.URL + '/create_user', {name, identification, email, password}, REQUEST_TYPES.PUT, false, okFunc, errFunc);
  }

  getOwnUser( okFunc: (response) => void, errFunc: (err) => void){
    this.request.sendRequest(this.URL + '/own_user', {}, REQUEST_TYPES.GET, true, okFunc, errFunc);
  }
  delCar(car_id: string, okFunc: (response) => void, errFunc: (err) => void) {
    this.request.sendRequest(this.URL + '/del_car', {car_id}, REQUEST_TYPES.POST, true, okFunc, errFunc);
  }
  uploadImg( file: File, okFunc: (response) => void, errFunc: (err) => void) {
    this.request.sendFile(this.URL + '/upload_avatar', file, {}, REQUEST_TYPES.POST, true, okFunc, errFunc );
  }

  uploadCarImg( file: File, carId: string, okFunc: (response) => void, errFunc: (err) => void) {
    this.request.sendFile(this.URL + '/upload_car_image', file, {car_id: carId}, REQUEST_TYPES.POST, true, okFunc, errFunc );
  }

  addCar(tradeMark: string, model: number, reference: string, licensePlate: string,
         lastSoatDate: Date, lastTecDate: Date, okFunc: (response) => void, errFunc: (err) => void) {
    const data = {
      trade_mark: tradeMark,
      license_plate: licensePlate,
      model, reference, lastSoatDate, lastTecDate
    };
    this.request.sendRequest(this.URL + '/add_car', data, REQUEST_TYPES.POST, true, okFunc, errFunc );
  }

  updateCar(carId: string, lastSoatDate: Date, lastTecDate: Date, last5krev: number, okFunc: (response) => void, errFunc: (err) => void){
    const data = { car_id: carId, lastSoatDate, lastTecDate, last5krev};
    this.request.sendRequest(this.URL + '/modify_car', data, REQUEST_TYPES.POST, true, okFunc, errFunc);
  }

  isLogged() {
    return this.request.isLogged();
  }
}
