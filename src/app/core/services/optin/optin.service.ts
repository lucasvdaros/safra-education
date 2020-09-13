import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OptinService {

    constructor(private http: HttpClient,) { }

    optIn(name: string, email: string, phone: string) {

        return this.http.post(
            `${environment.apiSafra}/accounts/v1/optin`, { name, email, phone })
            .pipe(
                tap((token: any) => {


                })
            );
    }
}
