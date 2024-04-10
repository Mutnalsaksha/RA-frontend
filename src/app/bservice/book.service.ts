import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getbooks(){
    return this.http.get("https://adminbackend-final-2.onrender.com/api/books");
  }
}
