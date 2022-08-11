import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { loginResponse, userModel } from './login-models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(data: userModel): Observable<loginResponse>{
    return this.http.post<loginResponse>(environment.authentication.login, data);
  }
}
