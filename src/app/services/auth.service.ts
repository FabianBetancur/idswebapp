import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '@environments/environment';
import { profileUser } from '@models/user.model';
import { TokenService } from '@services/token.service';
import { ResponseLogin } from '@models/auth.module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.API_URL;
  user$ = new BehaviorSubject<profileUser | null>(null);
  constructor(private http: HttpClient, private tokenService: TokenService) {}
  login(user: string, password: string) {
    return this.http
      .post<ResponseLogin>(`${this.apiUrl}/app/api/auth/login`, {
        user,
        password,
      })
      .pipe(
        tap((response) => {
          this.tokenService.saveToken(response.accessToken);
          this.tokenService.saveRefreshToken(response.refreshToken);
        })
      );
  }
  refreshToken(token: string) {
    return this.http
      .post<ResponseLogin>(`${this.apiUrl}/app/api/auth/refresh-token`, {
        token,
      })
      .pipe(
        tap((response) => {
          this.tokenService.saveToken(response.accessToken);
          this.tokenService.saveRefreshToken(response.refreshToken);
        })
      );
  }
  logout() {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }
}
