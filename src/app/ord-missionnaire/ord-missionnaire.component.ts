import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder,Validators,ReactiveFormsModule  } from '@angular/forms';
import { MissionnaireService } from '../services/missionnaire.service';
import { missionnaire } from '../models/missionnaire';
import { mission } from '../models/mission';
import { ordMiss } from '../models/Ord_Miss';
import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-ord-missionnaire',
  templateUrl: './ord-missionnaire.component.html',
  styleUrls: ['./ord-missionnaire.component.css']
})
export class OrdMissionnaireComponent implements OnInit {
  numMission:String ; 
  cin: string = '';
  existe : Boolean ; 
  OrdMissForm :FormGroup ; 
  missionnare : missionnaire ; 
  nom: String ; 
  prenom : String ; 
  Date_depart :Date =new Date(); 
  Date_arrivee:Date=new Date() ; 
  ordmiss : ordMiss ; 
  num_ordMiss:number; 
  num_miss :String ; 
  cod : String ;
  show1 : Boolean ;
  @Input()
  date_debut ; 

  
  constructor(private fb : FormBuilder , private missionService : MissionService) { 
    this.OrdMissForm = this.fb.group({
      cin: ['',Validators.required],
      datarrP: ['',Validators.required],
      datdepP: ['',Validators.required],
      code : ['',Validators.required],
      numMission:['',Validators.required] , 
      numord : ['',Validators.required] 
    }) ; 
  }

  add(){
    const m = this.OrdMissForm.value ;
    alert(JSON.stringify(m));
    this.missionService.addOrdMiss(m).subscribe(
      res => {
        this.ordmiss=res; 
          console.log("done ordMiss") ;  
          this.show1=true ; 

         },
         error=>{console.log("erreur");}    
    )
  }

  Search(cin)
  {
    return this.missionService.getOneMiss(cin).subscribe(
      data => { 
        if (data && data['cin']) {
        this.missionnare=data ; 
        this.nom=data['nom']; 
        this.prenom=data.prenom ; 
       //this.Date_arrivee=this.date_debut ; 
       //console.log(this.Date_arrivee) ;
       //this.Date_depart=this.mission.date_fin ; 
        console.log(this.nom , this.prenom) ; 
        console.log('lkitou el cin') ; 
        this.existe=true ; 
      }
     else 
     this.existe=false ; },
      error => {console.log(error); 
     } , 
      () => {console.log('loading classes was done ')}
    )
  }
    go(){
      this.cin='' ; 
    }
    
  ngOnInit() {
    this.num_miss = JSON.parse(localStorage.getItem('num_mission')) ;
   console.log('noumrou',this.num_miss); 
    this.num_ordMiss=4;
    var DeptGenVal = localStorage.getItem('deptGen') ; 
    var data = JSON.parse(DeptGenVal) ; 
    console.log('retrievedObject:',data.code) ;
    this.cod=data.code ;

   let dateString=localStorage.getItem('datdepP') ; 
 this.Date_depart = new Date(dateString);
 console.log('daate',this.Date_depart) ; 


 let dateString2=localStorage.getItem('datarrP') ; 
 this.Date_arrivee = new Date(dateString2);
console.log(this.Date_arrivee) ; 
this.show1=false;


  }

}