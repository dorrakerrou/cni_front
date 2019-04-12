import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private OperationSource = new BehaviorSubject<string> ("add") ; 
currentOperation= this.OperationSource.asObservable() ; 
constructor() { }
changeOperation(operation: string)
{this.OperationSource.next(operation) ; }
}
