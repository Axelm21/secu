// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  // Appel API pour l'inscription
  signup(user: any): Observable<any> {
    const url = `${this.apiUrl}/signup`;
    return this.http.post(url, user);
  }

  // Appel API pour la connexion
  login(credentials: any): Observable<any> {
    console.log('credentials  ,', credentials);
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, credentials);
  }
}
