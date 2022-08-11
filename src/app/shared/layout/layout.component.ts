import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {JwtService} from "../../core-services/jwt.service";

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  username: string = '';
  menuClosed = true;
  constructor(private router: Router, private jwtService: JwtService) {
  }

  ngOnInit(): void {
    this.router.navigate(['/list']);
  }


  open() {
    // @ts-ignore
    document.getElementById('content').style.width = '75%';
    // @ts-ignore
    document.getElementById('menu').style.width = '24.5%';
    this.menuClosed = false;
  }

  closeNav() {
    // @ts-ignore
    document.getElementById('content').style.width = '100%';
    // @ts-ignore
    document.getElementById('menu').style.width = '0';
    // @ts-ignore
    document.getElementById('content').style.transition = '0.5s';
    this.menuClosed = true;
  }

  goToForm() {
    this.router.navigate(['/form']);
  }

  goToList() {
    this.router.navigate(['/list']);
  }

  logOut() {
    this.router.navigate(['/login']);
    this.jwtService.removeToken();
    this.jwtService.removeExpiration();
  }
}
