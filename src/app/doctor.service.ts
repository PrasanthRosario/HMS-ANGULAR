import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) {
  };
  localUrl: string ;

  getDoctors():Observable<JSON>  {
    this.localUrl = 'http://localhost:8080/doctors/getDoctors';
        return this.http.get<JSON>(this.localUrl);
    }
    deleteDoctor(id : string): Observable<JSON> {
      this.localUrl = 'http://localhost:8080/doctors/delete/' + id; 
      return this.http.delete<JSON>(this.localUrl);
    }
  }

