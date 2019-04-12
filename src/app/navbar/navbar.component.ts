import { Component, OnInit } from '@angular/core';
import { DeptGen } from '../models/DeptGen';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  msg : String = 'off' ; 
  dept: DeptGen; 
  private cin_user : String ; 
  user:string;
  username:string;
  depart:String="" ; 
  dep:DeptGen = new DeptGen();
  constructor(public route:Router, private homeService : HomeService) {  }
  ngOnInit(){
  
   // this.nav.knowUser(this.user);
   this.cin_user = localStorage.getItem('username');
   console.log("username: "+this.cin_user) ; 
   this.DeptOfUsername() ; 
   var DeptGenVal = localStorage.getItem('deptGen') ; 
   var data = JSON.parse(DeptGenVal) ; 
   console.log('libelee arabe ',data.libA) ;
   this.depart=data.libA;
  }
  
 goTo()
 {
 this.msg='on' ; 
 }

 DeptOfUsername(){
  console.log("dkhalna lfonctions dept")
  this.homeService.getDept(this.cin_user).subscribe(
    data => { this.dept=data;
    
      let key = 'deptGen';
      localStorage.setItem(key, JSON.stringify(this.dept));

    }
  ,
    error => {console.log(error); } , 
    () => {console.log("loading username was done") ; }
  )}

}
