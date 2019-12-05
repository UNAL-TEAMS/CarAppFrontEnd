import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const REQUEST_TYPES = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private logInToken = null;
  private refreshToken = null;

  constructor(private http: HttpClient) {
    this.refreshToken = localStorage.getItem('refreshToken');
    this.logInToken = localStorage.getItem('logInToken');
  }

  private refreshTokens(okFunc: () => void, errFunc: (err) => void){
    const config: any = {
      responseType: 'text',
      headers: new HttpHeaders({Authorization: this.refreshToken}),
    };
    this.http.get(environment.server_url + '/service/refresh_log_in_token', config).toPromise().then((response) => {
      this.setTokens(response, this.refreshToken);
      console.log('Updated Token: ', this.logInToken);
      okFunc();
    }, errFunc);
  }

  private generalRequest(url: string, data: any, config: any, type: string, okFunc: (response) => void, errFunc: (err) => void){
    let request: Promise<any>;
    switch (type) {
      case REQUEST_TYPES.GET: request = this.http.get(url, config).toPromise(); break;
      case REQUEST_TYPES.POST: request = this.http.post(url, data, config).toPromise(); break;
      case REQUEST_TYPES.PUT: request = this.http.put(url, data, config).toPromise(); break;
    }

    request.then(okFunc).catch((err) => {
      console.error(err);
      console.log('Is death token: ', err.error === 'Death token' );
      if (err.error !== 'Death token') errFunc(err);
      else this.refreshTokens(() => this.generalRequest(url, data, config, type, okFunc, errFunc)
      , (err) => {
        console.log('error on refresh Token: ' , err);
        errFunc({error: 'Error on refresh Token'});
      });
    });
  }

  sendRequest(url: string, body: any, type: string, useAuth: boolean, okFunc: (response) => void, errFunc: (err) => void ){
    const config: any = {
      responseType: 'text'
    };
    if (useAuth && this.logInToken != null ) config.headers = new HttpHeaders({Authorization: this.logInToken});

    this.generalRequest(url, body, config, type, okFunc, errFunc);
  }

  sendFile(url: string, file: File, body: any, type: string, useAuth: boolean, okFunc: (response) => void, errFunc: (err) => void ){
    const config: any = {
      responseType: 'text'
    };
    if (useAuth && this.logInToken != null ) config.headers = new HttpHeaders({Authorization: this.logInToken});

    const data = new FormData();
    data.append('file', file, file.name);
    for (const tag in body) data.append(tag, body[tag]);

    this.generalRequest(url, data, config, type, okFunc, errFunc);
  }

  setTokens(logInToken, refreshToken) {
    this.logInToken = logInToken;
    this.refreshToken = refreshToken;
    localStorage.setItem('logInToken', logInToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  clearTokens() {
    localStorage.clear();
    this.logInToken = null;
    this.refreshToken = null;
  }

  isLogged(): boolean {
    return this.logInToken !== null;
  }
}

