import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private httpClient: HttpClient) { }

    get(name: string, area: number, email: string, city: number, os: string, skip: number, take: number): Observable<User[]> {

        let params = new HttpParams();
        params = params.append('name', name);
        params = params.append('email', email);
        params = params.append('os', os);
        params = params.append('skip', skip.toString());
        params = params.append('take', take.toString());
        params = (area > 0) ? params.append('area', area.toString()) : params.append('area', null);
        params = (city > 0) ? params.append('city', city.toString()) : params.append('city', null);

        return this.httpClient.get<User[]>(environment.apiUrl + '/common/user', { params });
    }
}