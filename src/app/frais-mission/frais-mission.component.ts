import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MissionService } from '../services/mission.service';
import { mission } from '../models/mission';
import { budget } from '../models/budget';
import { pays } from '../models/pays';

@Component({
  selector: 'app-frais-mission',
  templateUrl: './frais-mission.component.html',
  styleUrls: ['./frais-mission.component.css']
})
export class FraisMissionComponent implements OnInit {
  numMission : String ; 
  op:Boolean ; 
  checked:Boolean ; 
  OrdMissForm:FormGroup ; 
  payss: pays[] ; 
  cod :String;
  val_miss:Number; 
  val_trans:Number; 
  budget_mission:budget;
val_mission :String ; 
valeur_trans : String ; 
valeur_budget : Number ; 
val_budget:String ; 
  toggleEditable(event) {
    if ( event.target.checked ) {
        this.op= true;
    
   }
 else
     {this.op=false ;    }
}

  constructor(private fb : FormBuilder ,private  missionService : MissionService) { 
   
    this.OrdMissForm = this.fb.group({
      numMission: ['',Validators.required],
      numord: ['',Validators.required],
      cin  :['',Validators.required],
      codPays:['',Validators.required],
     //valeur:['',Validators.required],
     //valeurR:['',Validators.required],
     //supporte:['',Validators.required],
      codPrj:['',Validators.required],
      //observ:['',Validators.required],
      //aobserv:['',Validators.required],
      typetransport : ['',Validators.required],
      NVille : ['',Validators.required]
    }) ; 
  }

 
loadBudget(cod : String){this.missionService.getBudget(this.cod).subscribe(
    data => { this.budget_mission=data;
    console.log(this.budget_mission) ;
    this.val_miss=this.budget_mission.valeur_miss ; 
    console.log(this.budget_mission.valeur_miss) ; 
    this.val_mission=this.val_miss+'';
    this.val_trans=this.budget_mission.valeur_tr ; 
    this.valeur_trans=this.val_trans+''; 
    this.valeur_budget=+this.val_miss + +this.val_trans ; 
    this.val_budget=this.valeur_budget+'' ; 
    console.log(this.val_budget);
 },
    error => {console.log(error); } , 
    () => {console.log('loading budget was done ') ; }
  )}
  loadpays()
  {this.missionService.getPays().subscribe(
    data => { this.payss=data;},
    error => {console.log(error); } , 
    () => {console.log('loading pays was done ')}
  )}
  ngOnInit() {
    var DeptGenVal = localStorage.getItem('deptGen') ; 
    var data = JSON.parse(DeptGenVal) ; 
    console.log('retrievedObject:',data.code);
    this.cod=data.code;
    this.loadpays() ; 
    this.loadBudget(this.cod) ;
    this.numMission=JSON.parse(localStorage.getItem('num_mission'));
    console.log('op',this.op) ; 
  }

}
