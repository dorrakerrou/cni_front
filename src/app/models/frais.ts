import { mission } from './mission';
import { ordMiss } from './Ord_Miss';
import { missionnaire } from './missionnaire';
import { pays } from './pays';
import { Projet } from './Projet';

export class frais {
    constructor(public numMission? : mission ,
        public numord? : ordMiss , 
        public cin?  :missionnaire,
        public codPays?  :pays , 
        public valeurP?:Number , 
        public valeurR?:Number , 
        public supporte ?:Number , 
        public codPrj ?:Projet , 
        public observ ?:String , 
        public  NVille?:String,
    
    public  typetransport?:String ,
        public aobserv ?:String) 
         {
             this.numMission= new mission() ; 
             this.numord = new ordMiss() ; 
             this.cin= new missionnaire() ; 
             this.codPays=new pays() ; 
             this.codPrj = new Projet() ; 
         } 
}
