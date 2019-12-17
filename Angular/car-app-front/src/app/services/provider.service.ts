import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RequestService, REQUEST_TYPES } from './request.service';
import { Service, Provider } from '../interfaces/provider.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private URL = environment.server_url + '/provider';

  constructor(private request: RequestService) {}

  register(name: string, NIT: number, email: string, password: string, phone: number,
           soat: Service, revTec: Service, rev5k: Service, okFunc: (response) => void, errFunc: (err) => void) {
    const data = {
      name, email, password, NIT, phone,
      services: {
        Soat: soat,
        RevTec: revTec,
        Rev5k: rev5k,
      }
    };
    this.request.sendRequest(this.URL + '/create_provider', data, REQUEST_TYPES.PUT, false, okFunc, errFunc);
  }

  logIn(email: string, password: string,  okFunc: (response) => void, errFunc: (err) => void){
    this.request.sendRequest(this.URL + '/log_in', {email, password}, REQUEST_TYPES.POST, false, (response) => {
      response = JSON.parse(response);
      this.request.setTokens(response.log_in_token, response.refresh_token);
      okFunc({});
    }, errFunc);
  }

  getOwn(okFunc: (response) => void, errFunc: (err) => void){
    this.request.sendRequest(this.URL + '/own_provider', {}, REQUEST_TYPES.GET, true, okFunc, errFunc);
  }

  modify(newData: Provider, okFunc: (response) => void, errFunc: (err) => void){
    newData.email = undefined;
    this.request.sendRequest(this.URL + '/modify_provider', newData, REQUEST_TYPES.POST, true, okFunc, errFunc);
  }


}
