import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment} from "@angular/router";
import {JwtService} from "./jwt.service";

@Injectable({
  providedIn: 'root'
})
export class CanLoadMainSectionService implements CanLoad {

  constructor(private jwtService: JwtService, private router: Router) {
  }

  canLoad(route: Route): boolean {
    const url = route.path;
    console.log('Url:' + url);
    if (this.jwtService.getToken()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
