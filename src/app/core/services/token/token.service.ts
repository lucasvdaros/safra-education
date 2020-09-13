import { Injectable } from '@angular/core';

const KEY = 'safraToken';
const KEY_SAFRA = 'safraBankToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token): void {
    window.localStorage.setItem(KEY, token);
  }

  getToken(): string {
    return window.localStorage.getItem(KEY);
  }

  removeToken(): void {
    window.localStorage.removeItem(KEY);
  }

  hasTokenSafra(): boolean {
    return !!this.getTokenSafra();
  }

  setTokenSafra(token): void {
    window.localStorage.setItem(KEY_SAFRA, token);
  }

  getTokenSafra(): string {
    return window.localStorage.getItem(KEY_SAFRA);
  }

  removeTokenSafra(): void {
    window.localStorage.removeItem(KEY_SAFRA);
  }
}
