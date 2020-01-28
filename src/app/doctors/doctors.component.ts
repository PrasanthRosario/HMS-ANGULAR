import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import Doctor from '../doctor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  object: any;
  doctorList: Doctor[];
  label: 'BACK';
  color: 'black';
  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit() {
    this.getDoctor();
  }
  getDoctor() {
    this.doctorService.getDoctors().subscribe(data => {
      this.object = data;
      this.doctorList = this.object.setMessage;
      console.log(this.doctorList);
    });
  }
  back() {
    this.router.navigateByUrl('/dashboard');
  }
  delete(id: string) {
    this.doctorService.deleteDoctor(id).subscribe(data => {
      this.object = data;
      console.log(this.object.setMessage);
      this.getDoctor();
      console.log(this.doctorList);
    });
  }
}
