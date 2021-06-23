import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token;

  constructor(
    private readonly http: HttpClient
  ) { }

  public async post(data) {
    return this.http.post('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login', data).toPromise();
  }

  public saveToken(token) {
    this.token = token;
  }

  public isUserLoged() {
    return this.token;
  }
}
