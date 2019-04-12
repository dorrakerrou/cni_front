import { Component, OnInit ,ViewChild} from '@angular/core';
import { MissionService } from '../services/mission.service';
import {MatSort , MatSortable ,MatTableDataSource ,MatPaginator} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mission } from '../models/mission';
import { MatPaginatorModule } from '@angular/material/paginator'; 
@Component({
  selector: 'app-listaa',
  templateUrl: './listaa.component.html',
  styleUrls: ['./listaa.component.css']
})
export class ListaaComponent implements OnInit {
@ViewChild(MatSort) sort : MatSort ; 
@ViewChild(MatPaginator) paginator: MatPaginator;   

  dataSource ;

missions : mission[] ; 
displayedColumns=['code_mission','objetA','objetF','date_debut'] ; 
 
constructor(private missionService : MissionService , 
        private http : HttpClient , 
        private router : Router) { }
        readonly url = 'http://localhost:8080/api/mission/listmission'
        getMissions():Observable<any> {
          return this.http.get(this.url) ; 
        }
        
  ngOnInit() {
    this.getMissions().subscribe(res =>{
    if(!res)
{
  return ; 
}
this.dataSource=new MatTableDataSource(res) ; 
this.dataSource.sort = this.sort ; 
this.dataSource.paginator = this.paginator;

    }) ; 

  }

}
