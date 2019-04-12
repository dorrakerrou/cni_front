import { Injectable } from '@angular/core';
import { missionnaire } from '../models/missionnaire';

@Injectable({
  providedIn: 'root'
})
export class ListeMissionnaireService {

  private missionnaires: missionnaire[]= [] ;

  constructor() {
    let m1: missionnaire = new missionnaire('11406260','ikram') ; 
    let m2 : missionnaire= new missionnaire('1162620','dorra') ; 
    this.missionnaires.push(m1) ; 
    this.missionnaires.push(m2) ; 

   }
   public getMissionnaires():missionnaire[]
   { return this.missionnaires ; 
   }
}
