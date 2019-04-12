import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../shared/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 
 
  constructor(private http: HttpClient) {
  }

  getDept(cin:String):Observable<any> 
  {console.log("belek 8alta lena ") ;
    return this.http.get('http://localhost:8080/mission_cni-0.0.1-SNAPSHOT/api/DeptOfUsername?username='+cin) ; 
  }
}
