import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';

import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private tokenService: TokenService) {

    if (this.tokenService.hasToken()) {
      this.decodeAndNotify();
    }
  }

  setToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  private decodeAndNotify(): void {
    const token = this.tokenService.getToken();
    // const admin = jwt_decode(token);
  }

  logout(): void {
    this.tokenService.removeToken();
    // this.userSubject.next(null);
  }

  isLogged(): boolean {

    return this.tokenService.hasToken();
  }
}
