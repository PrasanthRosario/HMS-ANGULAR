import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/empty' ;
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

  localUrl = 'http://localhost:8080/login';
  private name: string;
  private pass: string;
  private userId: number;
  private roleId: number;
  public get username(): string {
    return this.name;
  }
  public set username(name: string) {
    this.name = name;
  }
  public get id(): number {
    return this.userId;
  }
  public set id(id: number) {
    this.userId = id;
  }
  public get role(): number {
    return this.roleId;
  }
  public set role(role: number) {
    this.roleId = role;
  }
  public get password(): string {
    return this.pass;
  }
  public set password(password: string) {
    this.password = password;
  }
  login(): Observable<any> {
    return this.http.post<JSON>((this.localUrl), {
      username: this.username, password: this.password
    }).pipe(catchError((error) => {
      console.log(error);
      return Observable.throw(error);
     } ));
    }
  }

