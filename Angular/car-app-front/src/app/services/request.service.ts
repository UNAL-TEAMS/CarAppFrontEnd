import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  sendRequest(url: string, body: any, type: string, useAuth: boolean, okFunc: (response) => void, errFunc: (err) => void ){
    const config: any = {
      responseType: 'text'
    };
    if (useAuth && this.logInToken != null ) config.headers = new HttpHeaders({Authorization: this.logInToken});

    let request: Promise<any>;
    switch (type) {
      case REQUEST_TYPES.GET: request = this.http.get(url, config).toPromise(); break;
      case REQUEST_TYPES.POST: request = this.http.post(url, body, config).toPromise(); break;
      case REQUEST_TYPES.PUT: request = this.http.put(url, body, config).toPromise(); break;
    }

    request.then(okFunc).catch((err) => {
      console.error(err);
      errFunc(err);
    });
  }

  sendFile(url: string, file: File, type: string, useAuth: boolean, okFunc: (response) => void, errFunc: (err) => void ){
    const config: any = {
      responseType: 'text'
    };
    if (useAuth && this.logInToken != null ) config.headers = new HttpHeaders({Authorization: this.logInToken});

    const data = new FormData();
    data.append('file', file, file.name);

    let request: Promise<any>;
    switch (type) {
      case REQUEST_TYPES.POST: request = this.http.post(url, data, config).toPromise(); break;
      case REQUEST_TYPES.PUT: request = this.http.put(url, data, config).toPromise(); break;
    }

    request.then(okFunc).catch((err) => {
      console.error(err);
      errFunc(err);
    });
  }

  setTokens(logInToken, refreshToken){
    this.logInToken = logInToken;
    this.refreshToken = refreshToken;
  }

  isLogged(): boolean {
    return this.logInToken !== null;
  }
}

