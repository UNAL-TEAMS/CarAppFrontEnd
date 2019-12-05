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

  register(name: string, identification: number, email: string, password: string, okFunc: (response) => void, errFunc: (err) => void) {
    this.request.sendRequest(this.URL + '/create_user', {name, identification, email, password}, REQUEST_TYPES.PUT, false, okFunc, errFunc);
  }

  getOwnUser( okFunc: (response) => void, errFunc: (err) => void){
    this.request.sendRequest(this.URL + '/own_user', {}, REQUEST_TYPES.GET, true, okFunc, errFunc);
  }
  uploadImg( file: File, okFunc: (response) => void, errFunc: (err) => void) {
    this.request.sendFile(this.URL + '/upload_avatar', file, REQUEST_TYPES.POST, true, okFunc, errFunc );
  }

  isLogged(): boolean {
    return this.request.isLogged();
  }
}