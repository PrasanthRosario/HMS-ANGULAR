import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private service : LoginServiceService, private router:Router) { }
username : string;
password : string;
users: any;
error:string;
show :boolean=false;

  ngOnInit() {

  }
  login(){
    this.service.username = this.username;
    this.service.password = this.password;
    //
    this.error="INVALID CREDENTIALS";
    this.service.login().subscribe(data=>{
      this.users = data;
      this.service.id = this.users.setMessage.pkUserId;
      this.service.role = this.users.setMessage.fkRoleId;
        if (this.service.role == 3) {
          this.router.navigateByUrl('/dashboard');
        } 
    }, error =>{
      this.show = true;
      console.log(error);
    });
  //  console.log(this.users);
  }
  create() {
    this.router.navigateByUrl('/create');
  }

}
