import { TokenService } from './../services/token/token.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpSentEvent, HttpHeaderResponse, HttpResponse, HttpHandler, HttpRequest, HttpProgressEvent, HttpUserEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
    | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    if (this.tokenService.hasToken()) {

      const token = this.tokenService.getToken();
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return next.handle(req);
  }
}
