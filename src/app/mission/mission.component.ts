import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder,Validators,ReactiveFormsModule  } from '@angular/forms';
import { MissionService } from '../services/mission.service';
import { mission } from '../models/mission';
import { Motcle } from '../models/Motcle';
import { budget } from '../models/budget';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  Avoirbudg:Boolean ; 
  show : Boolean  ; 
  datdepP:Date ; 
  datarrP:Date ; 
  mission: mission ; 
  cod : String ;
  codeMission : String ; 
  missionForm:FormGroup;
  date_debut:Date ; 
  currentYea: number;
  strr : String ; 
  motcles : Motcle [];
  d:Date = new Date() ; 
  year : number = this.d.getFullYear() ; 
  y:String = this.year.toString().substr(2,2) ; 
 
  constructor(private fb : FormBuilder , private missionService: MissionService) { 
    this.createForm() ; 
    this.currentYea = (new Date()).getFullYear() ;
   }
   
   loadMotcle()
   {this.missionService.getMotcle().subscribe(
     data => { this.motcles=data;},
     error => {console.log(error); } , 
     () => {console.log('loading motcles was done ')}
   )}
budgets : budget[] ; 
loadBudgets()
{this.missionService.getBudgets(this.cod).subscribe(
  data => { this.budgets=data;
  console.log('length',data.length) ;
if((data.length==0)||(data==null) || (data==undefined)){
  this.Avoirbudg=false ; 
  console.log(this.Avoirbudg) ;

}
else
this.Avoirbudg=true ;
console.log(this.Avoirbudg) ;
},
  error => {console.log(error); } , 
  () => {console.log('loading budgets was done ')}
)}
Avoirbudgproj:Boolean ; 
budgetsProjet:budget[] ; 
loadBudgetsProjet()
{this.missionService.getBudgetsProjet(this.cod).subscribe(
  data => { this.budgetsProjet=data;
    console.log(data.length) ; 
    if((data.length==0)||(data==null) || (data==undefined)){
      this.Avoirbudgproj=false ; 
      
      console.log('budproj',this.Avoirbudgproj) ;
    
    }
    else
    this.Avoirbudgproj=true ;
    console.log('budproj',this.Avoirbudgproj) ;
  },
  error => {console.log(error); } , 
  () => {console.log('loading budgets was done ')}
)}


  ngOnInit() {
    //this.mission=new mission() ; 
    this.currentYea = (new Date()).getFullYear() ; 
    this.strr=this.currentYea.toString() ;
    this.loadMotcle() ;
    var DeptGenVal = localStorage.getItem('deptGen') ; 
    var data = JSON.parse(DeptGenVal) ; 
    console.log('retrievedObject: ',data.code) ;
    this.cod=data.code ;
    console.log('cod'+this.cod) ;  
    console.log('d'+this.d) ; 
    console.log('year'+this.year) ; 
    console.log('y'+this.y) ; 
    this.reloadCode() ; 
    this.show=true ; 
    this.loadBudgets() ; 
    this.loadBudgetsProjet() ; 


  }
  createForm()
  {
    console.log('creation form') ; 
    this.missionForm = this.fb.group({
      numMission:['',Validators.required],
      code :['',Validators.required]  , 
      objeta: ['',Validators.required],
      objetl: ['',Validators.required],
      datdepP: ['',Validators.required],
      datarrP : ['',Validators.required],
      motcle :  ['',Validators.required] , 
  });
  }

  add(){
    const m = this.missionForm.value ;
    alert(JSON.stringify(m));
    this.missionService.addMission(m).subscribe(
      res => {
        this.mission=res ; 
          console.log("donne") ;   
          let key = 'num_mission';
          localStorage.setItem(key,this.missionForm.get('numMission').value);
          let key1 = 'datdepP';

          localStorage.setItem(key1, JSON.stringify(this.datdepP));
          let key2 = 'datarrP';

          localStorage.setItem(key2, JSON.stringify(this.datarrP));

          this.reloadCode() ; 
          this.createForm() ; 
          this.ngOnInit();
          this.show=false ;
         },
         error=>{console.log("erreur");}    
    )
  }

  reloadCode(){
  this.missionService.getLatestMissionCode(this.cod).subscribe(
  d=>{
    if((d==null) || (d==undefined) || (d.length ==0 ))
    {
      this.codeMission=this.y+"0001" ; 
      console.log('codeMissioNLOad'+this.codeMission) ; 
    
    }
    else 
    {
      this.codeMission=(Number(d)+1)+"" ;
      console.log('codeMissioNLOad'+this.codeMission) ; 

    }
    let key = 'num_mission';
 //  localStorage.setItem(key,JSON.stringify(this.codeMission));
  // localStorage.setItem(key,this.missionForm.get('numMission').value);
  //console.log('codeeee',this.missionForm.get('numMission').value);



  }) ; 
}
}