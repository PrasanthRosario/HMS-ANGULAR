import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PatientService } from '../patient.service';
import patient from "../patient";
import CustomValidator from "../validators";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  patient: patient = new patient();
  validate : CustomValidator = new CustomValidator();
  // id : string;
  object : any;
  createPatient = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(4)]),
    password : new FormControl('',[Validators.required,Validators.minLength(4)]),
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    fkRoleId : new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    phoneNumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12),this.validate.validatePhoneNumber]),
    weight: new FormControl('',[Validators.required]),
    bloodGroup: new FormControl('',[Validators.required,this.validate.validateBloodGroup])  
  },{updateOn:'blur'});
  constructor(private route: ActivatedRoute, private router: Router, private service: PatientService) { }
  
  ngOnInit() {
  }
  // create(username:string,password:string,firstname:string,lastname:string,city:string,state:string,phoneNumber:string,weight:number,bloodGroup:string,fkRoleId : number) {
  //   // console.log(id);   
  //    this.patient.username =  username;
  //     this.patient.firstname = firstname;
  //     this.patient.lastname = lastname;
  //     this.patient.password = password;
  //     this.patient.city = city;
  //     this.patient.state = state;
  //     this.patient.phoneNumber = phoneNumber;
  //     this.patient.weight = weight;
  //     this.patient.bloodGroup = bloodGroup;
  //     this.patient.fkRoleId = + fkRoleId;
  //     console.log(this.patient);
  //     this.service.createPatient(this.patient).subscribe(data =>{
  //       this.object=data;
  //       this.patient = this.object.setMessage;
  //       console.log(patient);
  //       this.router.navigateByUrl("/login");
  //  })
  // }
  get f() {
    return this.createPatient.controls;
  }
  create() {
    console.log(this.createPatient.value);
    this.service.createPatient(this.createPatient.value).subscribe(data =>{
      this.object=data;
      this.patient = this.object.setMessage;
      console.log(patient);
      this.router.navigateByUrl("/login");
 })

  }

}


 
 
 

