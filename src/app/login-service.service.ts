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
  };

  localUrl: string = 'http://localhost:8080/login';
  private _username: string;
  private _password: string;
  private _id: number;
  private _role: number;
  public get username(): string {
    return this._username;
  }
  public set username(name: string) {
    this._username = name;
  }
  public get id(): number {
    return this._id;
  }
  public set id(id: number) {
    this._id = id;
  }
  public get role(): number {
    return this._role;
  }
  public set role(role: number) {
    this._role = role;
  }
  public get password(): string {
    return this._password;
  }
  public set password(password: string) {
    this._password = password;
  }
  login(): Observable<any> {
    return this.http.post<JSON>((this.localUrl), {
      "username": this.username, "password": this.password
    }).pipe(catchError((error) => {
      console.log(error);
      return Observable.throw(error);
     } ));
    };
  }

