import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authURL: any = 'http://localhost:3000/';
  redirectUrl: any;
  constructor(private http: HttpClient) {

  }

  get isLoggedIn() {
    return !!localStorage.getItem('demouser');
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('demouser');
  }

  login(employee): Observable<any> {
    return this.http.post(`${this.authURL}userapi/validate`, employee).pipe(
      tap(),
      map((data: any) => {
        // console.log(data);
        if (data.status === 200 && data.token !== '') {
          // console.log('not a valid user' + data.token);
          localStorage.setItem('demouser', data.token);
        }
        return data;
      })
    );
  }
}
