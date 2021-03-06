import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientComponent } from './patient/patient.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import {AuthGuard} from './auth.gaurd';


const routes: Routes = [
  {
    path : '',
    component : LoginPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    canActivate : [AuthGuard],
    component : DashboardComponent
  },
  {
    path : 'doctors',
    component : DoctorsComponent
  },
  {
    path : 'patient/:id',
    component : PatientComponent
  },
  {
    path : 'update/:id',
    component : UpdateComponent
  },
  {
    path : 'create',
    component : CreateComponent
  }
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
