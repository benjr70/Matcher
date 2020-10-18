import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  loginUrl = 'auth/login';

  constructor(
    private http: HttpClient
  ) { }


  login(username: string, pass: string): any {
    return this.http.post<any>(this.loginUrl, {username, pass});
  }
}
