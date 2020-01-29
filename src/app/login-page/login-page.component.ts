import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private service: LoginServiceService, private router: Router) { }
  username: string;
  password: string;
  users: any;
  error: string;
  show = false;
  label1 = 'SIGN IN';
  label2 = 'SIGN UP';
  color = '2ecc71';

  ngOnInit() {

  }
  login() {
    this.service.name = this.username;
    this.service.pass = this.password;
    //
    this.error = 'INVALID CREDENTIALS';
    this.service.login().subscribe(data => {
      this.users = data;
      this.service.userId = this.users.setMessage.pkUserId;
      this.service.roleId = this.users.setMessage.fkRoleId;
      // if (this.service.role === 3) {
      this.router.navigateByUrl('/dashboard');
      // }
    }, error => {
      this.show = true;
      console.log(error);
    });
    //  console.log(this.users);
  }
  create() {
    this.router.navigateByUrl('/create');
  }
  // back() {
  //   this.router.navigateByUrl('/login');
  //   window.Ev
  // }
}
