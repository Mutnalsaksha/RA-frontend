import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly baseUrl = 'https://rmsadmin-backend-2.onrender.com/api/contacts';

  constructor(private http:HttpClient) { }
  getusers(){
    return this.http.get(this.baseUrl);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${user._id}`, user);
  }

  deleteUser(user: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${user._id}`);
  }



}
