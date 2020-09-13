import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';

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
  }

  logout(): void {
    this.tokenService.removeToken();    
  }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }
}
