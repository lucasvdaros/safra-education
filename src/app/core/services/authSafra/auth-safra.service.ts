import { Injectable } from '@angular/core';
import { ApiToken } from '../../models/apiToken';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthSafraService {

    apiToken: ApiToken;
    safraToken: string;

    constructor(
        private http: HttpClient,
        private loginService: LoginService
    ) { }

    authenticate(login: string, password: string) {

        return this.http.post(
            `${environment.apiUrl}/safra-education-api/User/login`, { login, password })
            .pipe(
                tap((token: any) => {

                    this.safraToken = token.access_token;

                    this.loginService.setToken(this.safraToken);
                })
            );
    }
}