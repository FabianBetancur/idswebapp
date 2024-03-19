import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { checkToken } from '@interceptors/token.interceptor';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = `${environment.API_URL}/app/api`;
  constructor(private http: HttpClient) {}
  sendEmail(content: string) {
    return this.http.post<any>(
      `${this.apiUrl}/email/send-email?content=${content}`,
      {
        context: checkToken(),
      }
    );
  }
}
