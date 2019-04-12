import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }
    
  login(email:string, password:string ) {
      return this.http.post<User>('/api/login', {email, password}) ;
  }


















/*readonly rootUrl='http://localhost:8080' ; 
  constructor(private http: HttpClient) {
  }
    
  login(email:string, password:string ) {
      return this.http.post<User>('/api/login', {email, password}) ; 
          // this is just the HTTP call, 
          // we still need to handle the reception of the token
          
  }

userAuthentification(username , password)
{
var data ={userName : 'ikram' , 
id : 123 , 
role : "admin" 
}

console.log('service') ; 
var reqHeader = new HttpHeaders({ "content-type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache"}) ; 
return this.http.post(this.rootUrl+'/token',data,{headers:reqHeader}) ; 
}*/

}
