import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { MissionnaireService } from '../services/missionnaire.service';
import { categorie } from '../models/categorie';

@Component({
  selector: 'app-ajout-mission',
  templateUrl: './ajout-mission.component.html',
  styleUrls: ['./ajout-mission.component.css']
})
export class AjoutMissionComponent implements OnInit {
ngOnInit(){
  this.loadcateg() ; 
}
  form:FormGroup;
  credentials = {
    userName: "",
    role: ""
  };
 // token:String ; 
  constructor(private fb:FormBuilder, 
               private authService: AuthService, 
               private router: Router , private appService : AppService ,private missionnaireService : MissionnaireService) {

      this.form = this.fb.group({
          userName: ['',Validators.required],
          id: ['',Validators.required]
      });
  }
  token : String='' ; 
  createTokenservice(){
    const m = this.form.value ;
    alert(JSON.stringify(m));
    this.appService.createToken(m).subscribe(
      data => { console.log(data) ;
       this.token =data ;
       let key = 'token';
       localStorage.setItem(key, JSON.stringify(this.token));
       this.loadcateg() ; 
},
      error => {console.log(error) ;
      console.log("haw fama ghalta") ;  } , 
      () => {console.log('loading token was done') ; 
      }
    );
    }

    categories : categorie [] ; 
    loadcateg()
    {this.missionnaireService.getCategories().subscribe(
      data => { this.categories=data;},
      error => {console.log(error); } , 
      () => {console.log('loading categories was done ')}
    )}



  login() {
      const val = this.form.value;
      if (val.email && val.password) {
          this.authService.login(val.email, val.password)
              .subscribe(
                  () => {
                      console.log("User is logged in");
                      this.router.navigateByUrl('/');
                  }
              );
      }
  }



}
