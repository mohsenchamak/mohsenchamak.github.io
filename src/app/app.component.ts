import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JwtService } from './core-services/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chApp';
  constructor(private jwtService: JwtService, private router: Router) {}
  ngOnInit(): void {
    let date = new Date(this.jwtService.getExpiration());
    let currentDate = new Date();
    let compire = (date.getDate() === currentDate.getDate()) && (date.getTime() === currentDate.getTime());
    if (compire) {
      this.router.navigate(['/login']);
      this.jwtService.removeToken();
      this.jwtService.removeExpiration();
    }
  }
}
