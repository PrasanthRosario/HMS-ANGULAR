import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import patient from '../patient';
import CustomValidator from '../validators';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  patient: patient = new patient();
  validate: CustomValidator = new CustomValidator();
  // id : string;
  object: any;
  label: 'REGISTER';
  color: '#4CAF50';
  createPatient = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    fkRoleId: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10),
    Validators.maxLength(12), this.validate.validatePhoneNumber]),
    weight: new FormControl('', [Validators.required]),
    bloodGroup: new FormControl('', [Validators.required, this.validate.validateBloodGroup])
  }, { updateOn: 'blur' });
  constructor(private route: ActivatedRoute, private router: Router, private service: PatientService) { }
  ngOnInit() { }
  get f() {
    return this.createPatient.controls;
  }
  create() {
    console.log(this.createPatient.value);
    this.service.createPatient(this.createPatient.value).subscribe(data => {
      this.object = data;
      this.patient = this.object.setMessage;
      console.log(patient);
      this.router.navigateByUrl('login');
    });
  }
}
