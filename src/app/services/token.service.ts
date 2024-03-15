import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode, { JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private cookieService = inject(CookieService);
  constructor(/*private cookieService: CookieService*/) {}
  saveToken(token: string) {
    this.cookieService.set(
      'token-app',
      token,
      365,
      '/',
      undefined,
      true,
      'None'
    );
  }
  getToken() {
    return this.cookieService.get('token-app');
  }
  removeToken() {
    this.cookieService.delete('token-app');
  }
  /////////////////////////////////////////////////////7

  saveRefreshToken(token: string) {
    this.cookieService.set(
      'refresh-token-app',
      token,
      365,
      '/',
      undefined,
      true,
      'None'
    );
  }
  getRefreshToken() {
    return this.cookieService.get('refresh-token-app');
  }
  removeRefreshToken() {
    this.cookieService.delete('refresh-token-app');
  }
  ///////////////////////////////////////////////
  isValidToken() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const decodeToken = jwt_decode<JwtPayload>(token);
    if (decodeToken && decodeToken?.exp) {
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodeToken.exp);
      const today = new Date();
      return tokenDate.getTime() > today.getTime();
    }
    return false;
  }
  ///////////////////////////////////////////////
  isValidRefreshToken() {
    const token = this.getRefreshToken();
    if (!token) {
      return false;
    }
    const decodeToken = jwt_decode<JwtPayload>(token);
    if (decodeToken && decodeToken?.exp) {
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodeToken.exp);
      const today = new Date();
      return tokenDate.getTime() > today.getTime();
    }
    return false;
  }
}
