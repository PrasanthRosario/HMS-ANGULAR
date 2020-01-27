import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientService } from '../patient.service';
import patient from "../patient";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  patient: patient = new patient();
  // id : string;
  object : any;
  constructor(private route: ActivatedRoute, private router: Router, private service: PatientService) { }
 
  ngOnInit() {
  }
  create(username:string,password:string,firstname:string,lastname:string,city:string,state:string,phoneNumber:string,weight:number,bloodGroup:string,fkRoleId : number) {
    // console.log(id);   
     this.patient.username =  username;
      this.patient.firstname = firstname;
      this.patient.lastname = lastname;
      this.patient.password = password;
      this.patient.city = city;
      this.patient.state = state;
      this.patient.phoneNumber = phoneNumber;
      this.patient.weight = weight;
      this.patient.bloodGroup = bloodGroup;
      this.patient.fkRoleId = + fkRoleId;
      console.log(this.patient);
      this.service.createPatient(this.patient).subscribe(data =>{
        this.object=data;
        this.patient = this.object.setMessage;
        console.log(patient);
        this.router.navigateByUrl("/login");
   })
  }

}


 
 
 

