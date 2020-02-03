import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private http: HttpClient) {
  }

  localUrl = 'http://hospitalmanagement-env.jmgi9su3y3.us-east-1.elasticbeanstalk.com:8080/login';
  name: string;
  pass: string;
  userId: number;
  roleId: number;
  // public get username(): string {
  //   return this.name;
  // }
  // public set name(name: string) {
  //   this.name = name;
  // }
  // public get id(): number {
  //   return this.userId;
  // }
  // public set id(id: number) {
  //   this.userId = id;
  // }
  // public get role(): number {
  //   return this.roleId;
  // }
  // public set role(role: number) {
  //   this.roleId = role;
  // }
  // public get password(): string {
  //   return this.pass;
  // }
  // public set password(password: string) {
  //   this.password = password;
  // }
  login(): Observable<any> {
    return this.http.post<JSON>((this.localUrl), {
      username: this.name, password: this.pass
    }).pipe(catchError((error) => {
      console.log(error);
      return throwError(error);
    }));
  }
}
