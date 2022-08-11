import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {JwtService} from "../core-services/jwt.service";
import {Router} from "@angular/router";
import { userModel } from './login-models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData: userModel;
  constructor(private service: LoginService, private jwtService: JwtService, private router: Router,) {
    this.userData = {
      userName: '',
      userPass: ''
    }
  }

  ngOnInit(): void {
  }

  login() {
    this.service.login(this.userData).subscribe(r=> {
      this.jwtService.setToken(r.token);
      this.jwtService.setExpiration(r.expiration);
      this.router.navigate(['main']);
    });
  }
}
