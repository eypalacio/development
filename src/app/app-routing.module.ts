import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepairComponent } from './repair/repair.component';
import { ConteoT24Component } from './conteo-t24/conteo-t24.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  {path:'',redirectTo:'/stepper',pathMatch:'full'},
  {path:'repair', component:RepairComponent},
  {path:'conteo', component:ConteoT24Component},
  {path:'stepper', component:StepperComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
