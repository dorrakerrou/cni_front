import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PrincipalState } from '../shared/principal.state';
import { Principal } from '../shared/principal.model';
import { HomeService } from '../services/home.service';
import { DeptGen } from '../models/DeptGen';
import { MissionService } from '../services/mission.service';
import { MissionnaireService } from '../services/missionnaire.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dept: DeptGen; 
  showHideSideBar: boolean = false;
  private principal : Principal ; 
  private authenticat : boolean ; 
  private cin_user : String ; 
  constructor(private appService : AppService,private router : Router, private missionnaireService : MissionnaireService
    ,private store : Store<PrincipalState> , private homeService : HomeService) {
    
     }
  ngOnInit() {
    this.store.select('principal').subscribe(principal =>{
      this.principal = principal ;
    }) ; 
    this.cin_user = localStorage.getItem('username');
    console.log("username: "+this.cin_user) ; 
    this.DeptOfUsername() ; 
    var DeptGenVal = localStorage.getItem('deptGen') ; 
    var data = JSON.parse(DeptGenVal) ; 
    console.log('libelee arabe ',data.libA) ;
  
  }

  onShowSideBarChange(showHideSideBar){
    this.showHideSideBar = showHideSideBar;
  }
  logout(){
    localStorage.clear();
    this.appService.logout(()=>{
      this.router.navigateByUrl('/login');
    });
  }


  hasRoleUser(){
   let hasRole :Boolean =false ; 
    this.principal.authorities.forEach(item => {
      if (item.authority === 'ROLE_USER')
      {
        hasRole=true ;  
      }
      
    });
    return hasRole ; 
  }
  
  hasRoleAdmin(){
  let  hasRole :Boolean =false ; 
    this.principal.authorities.forEach(item => {
      if (item.authority === 'ROLE_ADMIN')
      {
      hasRole=true ; 
        
      }
      
    });
    return hasRole ; 
  }

  DeptOfUsername(){
    console.log("dkhalna lfonctions dept")
    this.missionnaireService.getDept(this.cin_user).subscribe(
      data => { this.dept=data;
      
        let key = 'deptGen';
        localStorage.setItem(key, JSON.stringify(this.dept));

      }
    ,
      error => {console.log(error); } , 
      () => {console.log("loading username was done") ; }
    )}
  }



