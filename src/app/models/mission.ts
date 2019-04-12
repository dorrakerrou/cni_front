import { Motcle } from './Motcle';
import { DeptGen } from './DeptGen';
import { missionPK } from './missionPK';

export class mission {
	public numMission: String;
	public code:DeptGen ; 
	public objeta: String;
	public objetl: String;
	public datdepP: Date;
	public datarrP: Date;
	public motcle: Motcle;
	
	constructor(
		numMission?:String , 
		code  ?:DeptGen,
		objeta?: String,
		objetl?: String,
		datdepP?: Date,
		datarrP?: Date,
		motcle?: Motcle
	) 
	{
		this.motcle = new Motcle();
		
	}
}