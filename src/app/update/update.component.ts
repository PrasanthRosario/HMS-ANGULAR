import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientService } from '../patient.service';
import patient from "../patient";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  patient: patient = new patient();
  // id : string;
  object : any;
  constructor(private route: ActivatedRoute, private router: Router, private service: PatientService) { }
  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get("id");
  }
 
   update(password:string,firstname:string,lastname:string,city:string,state:string,phoneNumber:string,weight:number,bloodGroup:string) {
    // console.log(id);   
     this.patient.pkUserId =  this.route.snapshot.paramMap.get("id");
      this.patient.firstname = firstname;
      this.patient.lastname = lastname;
      this.patient.password = password;
      this.patient.city = city;
      this.patient.state = state;
      this.patient.phoneNumber = phoneNumber;
      this.patient.weight = weight;
      this.patient.bloodGroup = bloodGroup;
      console.log(this.patient);
      this.service.updatePatient(this.patient).subscribe(data =>{
        this.object=data;
        this.patient = this.object.setMessage;
        console.log(patient);
        this.router.navigateByUrl("/dashboard");
   })
  }

}