import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  /**
   * getting token in session storage
   * @return token from session storage
   */
  getToken(): string {
    return <string>window.sessionStorage.jwtToken;
  }

  /**
   * setting token from session storage
   * @param token token that must be saved in sessionstorage
   */
  setToken(token: string) {
    window.sessionStorage.jwtToken = token;
  }

  /**
   * remove token from session storage
   */
  removeToken() {
    window.sessionStorage.removeItem('jwtToken');
  }

  /**
   * setting expiration date to  storage
   * @param data that must be saved in sessionstorage
   */
  setExpiration(data: string) {
    window.sessionStorage.setItem('expiration', JSON.stringify(data));
  }
  /**
   * getting expiration date from session storage
   * @return expiration date from session storage
   */
  getExpiration() {
    return JSON.parse(<string>window.sessionStorage.getItem('expiration'));
  }
  /**
   * remove expiration date from session storage
   */
  removeExpiration() {
    window.sessionStorage.removeItem('expiration');
  }
}
