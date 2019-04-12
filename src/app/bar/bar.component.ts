import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { DeptGen } from '../models/DeptGen';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  msg : String = 'off' ; 
  dept: DeptGen; 
  private cin_user : String ; 
  user:string;
  username:string;
  depart:String="" ; 
  dep:DeptGen = new DeptGen();
  constructor(public router:Router, private homeService : HomeService) {   }
  ngOnInit(){
    this.cin_user = localStorage.getItem('username');
    console.log("username: "+this.cin_user) ; 
    this.DeptOfUsername() ; 
    var DeptGenVal = localStorage.getItem('deptGen') ; 
    var data = JSON.parse(DeptGenVal) ; 
    console.log('libelee arabe ',data.libA) ;
    this.depart=data.libA;
   // this.nav.knowUser(this.user);
  
  }
  
 goto1()
 {
  this.router.navigateByUrl('/bar');
}
goto2()
 {
  this.router.navigateByUrl('/h-mission');
}
goto3()
{
this.router.navigateByUrl('/home')
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
  private _opened: boolean = false;

private _toggleSidebar() {
  this._opened = !this._opened;
}  

}
