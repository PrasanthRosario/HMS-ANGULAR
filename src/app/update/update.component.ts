import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PatientService } from '../patient.service';
import patient from "../patient";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  patient: patient = new patient();
  id: string;
  object: any;
  label: 'UPDATE';
  color: '#2ecc71';
  updatePatient : FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private service: PatientService) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.service.getPatient(this.route.snapshot.paramMap.get("id")).subscribe(data =>{
      this.object=data;
      this.patient = this.object.setMessage;
      console.log(this.patient);
      
  this.updatePatient = new FormGroup({
    pkUserId : new FormControl(),
    password : new FormControl(this.patient.password,[Validators.required,Validators.minLength(4)]),
    firstname: new FormControl(this.patient.firstname,[Validators.required]),
    lastname: new FormControl(this.patient.lastname,[Validators.required]),
    city: new FormControl(this.patient.city,[Validators.required]),
    state: new FormControl(this.patient.state,[Validators.required]),
    phoneNumber: new FormControl(this.patient.phoneNumber,[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
    weight: new FormControl(this.patient.weight,[Validators.required]),
    bloodGroup: new FormControl(this.patient.bloodGroup,[Validators.required])  
  },{updateOn:'blur'});
      
  });
}
get f() {
  return this.updatePatient.controls;
  }
  update() {
    this.updatePatient.patchValue({
      pkUserId : this.id
    });
    console.log(this.updatePatient.value);
    this.service.updatePatient(this.updatePatient.value).subscribe(data =>{
            this.object=data;
            this.patient = this.object.setMessage;
            console.log(patient);
            this.router.navigateByUrl("/dashboard");
       })
  }
 
  //  update(password:string,firstname:string,lastname:string,city:string,state:string,phoneNumber:string,weight:number,bloodGroup:string) {
  //   // console.log(id);   
  //    this.patient.pkUserId =  this.route.snapshot.paramMap.get("id");
  //     this.patient.firstname = firstname;
  //     this.patient.lastname = lastname;
  //     this.patient.password = password;
  //     this.patient.city = city;
  //     this.patient.state = state;
  //     this.patient.phoneNumber = phoneNumber;
  //     this.patient.weight = weight;
  //     this.patient.bloodGroup = bloodGroup;
  //     console.log(this.patient);
  //     this.service.updatePatient(this.patient).subscribe(data =>{
  //       this.object=data;
  //       this.patient = this.object.setMessage;
  //       console.log(patient);
  //       this.router.navigateByUrl("/dashboard");
  //  })
  // }


}