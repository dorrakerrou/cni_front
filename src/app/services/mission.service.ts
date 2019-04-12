import { Injectable } from '@angular/core';
import { mission } from '../models/mission';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ordMiss } from '../models/Ord_Miss';
import { environment } from '../shared/environment';
import { budget } from '../models/budget';
import { budgetProjet } from '../models/budgetProjet';
import { Projet } from '../models/Projet';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  baseUrl = environment.baseUrl;

  missions : mission[];
  constructor(private http : HttpClient) { }

  getProjet(dept : String ) : Observable<any>{
    return this.http.get(this.baseUrl+'/api/listeProjetByDept?codeDept='+dept) ; 
  }
  getOneMiss(cin : String) : Observable<any>{
    return this.http.get(this.baseUrl+'/api/getOneMiss?cin='+cin) ; 
   }
  getMissions(codeDept: String):Observable<any> {
    return this.http.get(this.baseUrl+'/api/mission/listeMissionByDept?codeDept='+codeDept) ; 
  }

  addOrdMiss(o:ordMiss):Observable<any> {
    
    return this.http.post(this.baseUrl+'/api/addordMiss',o  ) ; 
  }
  
  addMission( mission : mission) : Observable<any>{
    console.log('el service') ; 
    return this.http.post(this.baseUrl+'/api/mission/add' ,mission  ) ; 
  }
  getMotcle():Observable<any> 
  {
    return this.http.get(this.baseUrl+'/api/allMotcle') ; 
  }

  getLatestMissionCode(code : String) :Observable<any>{
    return this.http.get(this.baseUrl+'/api/mission/latestMissionCode?codeDept='+code) ; 
  }
  getPays() :Observable<any>{
    return this.http.get(this.baseUrl+'/api/listPays') ; 
  }
  getBudget(code :String) :Observable<any>{
    return this.http.get(this.baseUrl+'/api/listbyDept?codeDept='+code) ; 
  }
  addBudgetDept(m :budget):Observable<any>{
    return this.http.post('http://localhost:8080/mission_cni-0.0.1-SNAPSHOT/api/addBudget' , m) ; 

  }
  addBudgetProj(m :budgetProjet):Observable<any>{
    return this.http.post(this.baseUrl+'/api/addBProjet', m) ; 
  }
  addProjet( p:Projet):Observable<any> {
    return this.http.post(this.baseUrl+'/api/addProjet', p) ;
  }

  getLatestProjetCode(code : String) : Observable<any>{
    return this.http.get(this.baseUrl+'/api/latestProjetCode?codeDept='+code) ;
  }

  getBudgets(code:String): Observable<any>{
    return this.http.get(this.baseUrl+'/api/listbyDept?codeDept='+code) ;
  }
  getBudgetsProjet(code:String):Observable<any>{
    return this.http.get(this.baseUrl+'/api/listBudgetProjetbydept?codeDept='+code) ; 

  }
}
