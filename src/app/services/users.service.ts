import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { profileUser } from '@models/user.model';
import { checkToken } from '@interceptors/token.interceptor';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = `${environment.API_URL}/app/api`;

  constructor(private http: HttpClient) {}
  getUsers() {
    //const token = this.tokenService.getToken();
    //console.log(token);
    return this.http.get<profileUser[]>(`${this.apiUrl}/users/all`, {
      context: checkToken(),
    });
  }
}
