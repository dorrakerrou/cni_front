import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MissionnaireComponent } from './missionnaire/missionnaire.component';
import { HomeComponent } from './home/home.component';
import { ListeMissionnaireComponent } from './liste-missionnaire/liste-missionnaire.component';
import { MissionComponent } from './mission/mission.component';
import { ListaaComponent } from './listaa/listaa.component';
import { OrdMissionnaireComponent } from './ord-missionnaire/ord-missionnaire.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ListeMissionComponent } from './liste-mission/liste-mission.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BarComponent } from './bar/bar.component';
import { AjoutMissionComponent } from './ajout-mission/ajout-mission.component';
import { HMissionComponent } from './h-mission/h-mission.component';
import { FraisMissionComponent } from './frais-mission/frais-mission.component';
import { BudgetDeptComponent } from './budget-dept/budget-dept.component';
import { BudgetProjComponent } from './budget-proj/budget-proj.component';
import { ProjetComponent } from './projet/projet.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path :'login' , component : LoginComponent} , 
  {path:'home' , component: HomeComponent },
  {path:'missionnaire' , component:MissionnaireComponent},
  {path:'liste-m',component:ListeMissionnaireComponent},
    {path:'mission',component:MissionComponent},
    {path : 'ord',component:OrdMissionnaireComponent},
    {path:'lista', component:ListaaComponent},
    {path:'change', component: ChangePassComponent} , 
    {path:'list' ,component:ListeMissionComponent} ,
    {path:'navbar',component:NavbarComponent} , 
    {path:'bar',component:BarComponent} ,
    {path:'ajout',component:AjoutMissionComponent} , 
    {path:'h-mission', component: HMissionComponent} , 
    {path:'frais' , component:FraisMissionComponent},
    {path:'budgetDept' , component:BudgetDeptComponent} , 
    {path:'budgetProj', component:BudgetProjComponent} ,
    {path:'projet', component:ProjetComponent},
    {path:'test', component:TestComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
