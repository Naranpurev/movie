import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../register';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  private usersUrl = "http://localhost:5000/users"
  constructor(private http:HttpClient) {

   }
   getUsers():Observable<Register[]> {
     return this.http.get<Register[]>(this.usersUrl);
   }
   addUser(user:Register):Observable<Register>{
     return this.http.post<Register>(this.usersUrl, user, httpOptions)
   }
}
