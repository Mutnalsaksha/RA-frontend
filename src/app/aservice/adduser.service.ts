import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  private apiUrl = 'https://adminbackend-final-2.onrender.com/api/contacts';

  constructor(private http: HttpClient) { }

  addUser(userData:any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
