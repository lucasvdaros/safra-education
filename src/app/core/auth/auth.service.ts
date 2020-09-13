import { ApiToken } from './../models/apiToken';
import { environment } from './../../../environments/environment';
import { LoginService } from './../services/login/login.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiToken: ApiToken;

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  authenticate(login: string, password: string) {

    return this.http.post(
      `${environment.apiUrl}/api/Login/`, { login, password })
      .pipe(
        tap((token: any) => {

          this.apiToken = token;

          this.loginService.setToken(this.apiToken.accessToken);
        })
      );
  }
}
