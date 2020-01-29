import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { stringify } from 'querystring';
// import { faUserCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  username: string;
  show = true;
  id: number;
  constructor(private service: LoginServiceService, private router: Router) { }
  // icon = icons[faUserCircle];
  // faUserCircle = faUserCircle;
  ngOnInit() {
    this.username = this.service.name;
    console.log(this.username);
  }
  getDoctors() {
    this.show = false;
    this.router.navigateByUrl('/doctors');
  }
  getPatients() {
    this.show = false;
    this.id = this.service.userId;
    console.log(this.id);
    this.router.navigateByUrl('/patient/' + this.id);
  }

}
