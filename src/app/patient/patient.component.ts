import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import Patient from '../patient';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})

export class PatientComponent implements OnInit {
  object: any;
  patient: Patient;
  label1: 'UPDATE';
  label2: 'BACK';
  color1: '#2ecc71';
  color2: 'black';
  constructor(private route: ActivatedRoute, private patientService: PatientService, private router: Router) { }

  ngOnInit() {
    this.patientService.getPatient(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.object = data;
      this.patient = this.object.setMessage;
      console.log(this.patient);
    });
  }
  back() {
    this.router.navigateByUrl('/dashboard');
  }
  update() {
    this.router.navigate(['update', this.route.snapshot.paramMap.get('id')]);
  }

}
