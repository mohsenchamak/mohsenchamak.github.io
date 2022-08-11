import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtService} from "../core-services/jwt.service";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private readonly jwtService: JwtService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.jwtService.getToken() || '';
    const headersConfig = {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json, */*',
      'Authorization': `Bearer ${token}`,
      'Cache-Control': 'no-cache, no-store'
    };

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    } else {
      // @ts-ignore
      delete headersConfig['Authorization'];
    }
    const request = req.clone({setHeaders: headersConfig});
    return next.handle(request);
  }
}
