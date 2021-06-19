import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpStatus } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private httpStatus: BehaviorSubject<HttpStatus> = new BehaviorSubject(null);
  public httpStatus$ = this.httpStatus.asObservable();


  constructor(
    private http: HttpClient
  ) { }

  public post(data) {
    this.httpStatus.next(HttpStatus.Processing);
    this.http.post('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup', data, {}).subscribe(
      res => {
        this.httpStatus.next(HttpStatus.Success);
        console.log(res);
      },
      err => {
        this.httpStatus.next(HttpStatus.Error);
        console.log(err);
      }
    );
  }

  public setStatusForm(status: HttpStatus): void {
    this.httpStatus.next(status);
  }
}
