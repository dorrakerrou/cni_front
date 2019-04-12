import { grade } from './grade';
import { fonction } from './fonction';
import { classe } from './classe';
import { categorie } from './categorie';

export class missionnaire {
  cin: String;
  matricule: String;
  nom: String;
  nomL: String;
  prenom: string;
  prenomL: String;
  nationalite: String;
  nationaliteL: String;
  datenaissance: Date;
  place_naissance: String;
  rib: String;
  date_cin: Date;
  place_cin: String;
  niveau: String;
  ministr: String;
  groupe: String;
  graade: grade;
  fonnction: fonction;
  classee: classe;
  cat: categorie;

  constructor(
    cin?: String,
    matricule?: String,
    nom?: String,
    nomL?: String,
    prenom?: string,
    prenomL?: String,
    nationalite?: String,
    nationaliteL?: String,
    datenaissance?: Date,
    place_naissance?: String,
    rib?: String,
    date_cin?: Date,
    place_cin?: String,
    niveau?: String,
    ministr?: String,
    groupe?: String,
    graade?: grade,
    fonnction?: fonction,
    classee?: classe,
    cat?: categorie
    // public  group?:number ,
    //   public  dept?:number 
  ) {
    // public  group?:number ,
    // public  dept?:number 
    this.graade = new grade();
    this.fonnction = new fonction();
    this.classee = new classe();
    this.cat = new categorie();

  };

}