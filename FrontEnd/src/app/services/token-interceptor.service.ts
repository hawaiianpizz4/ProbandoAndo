import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  
  constructor(
    private authService: AuthService
  ){ }

  intercept(req: { clone: (arg0: { setHeader: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }){
    const tokenizeReq = req.clone({
      setHeader: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }
}
