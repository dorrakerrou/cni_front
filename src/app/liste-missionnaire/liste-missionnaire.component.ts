import { Component, OnInit, Input } from '@angular/core';
import { missionnaire } from '../models/missionnaire';
import { MissionnaireService } from '../services/missionnaire.service';

@Component({
  selector: 'app-liste-missionnaire',
  templateUrl: './liste-missionnaire.component.html',
  styleUrls: ['./liste-missionnaire.component.css']
})
export class ListeMissionnaireComponent implements OnInit {
  cod : String ;
  missionnaires: missionnaire[] ;
  searchText;

  @Input() msg ;
  constructor(private missionnaireService : MissionnaireService) { }

  operation: string ;
  selectedMissionnaire : missionnaire ; 
  ngOnInit() {
   this.initMiss() ;
   var DeptGenVal = localStorage.getItem('deptGen') ; 
   var data = JSON.parse(DeptGenVal) ; 
   console.log('retrievedObject: ',data.code) ;
   this.cod=data.code ;

  this.loadMissionaire() ;  }
  
  editOp()
  {
    this.operation='EDIT' ; 
  }
  removeOp()
  {
    this.operation="REMOVE" ; 
    
  }
  loadMissionaire()
  {this.missionnaireService.getMissionares(this.cod).subscribe(
    data => { this.missionnaires=data},
    error => {console.log('an error occured') } , 
    () => {console.log('loading missions was done ')}
  )

  }
  initMiss()
{
  this.selectedMissionnaire= new missionnaire() ; 
  
}}


