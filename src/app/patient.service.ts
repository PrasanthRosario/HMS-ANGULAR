import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import patient from "../patient";
import patient from './patient';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {
  };
  localUrl: string ; 
createPatient(patientData : patient)  {
  this.localUrl = 'http://localhost:8080/patients/create';
  return this.http.post<patient>(this.localUrl,patientData);
}

getPatient(id : string):Observable<JSON>  {
    this.localUrl = 'http://localhost:8080/patients/' + id;
    return this.http.get<JSON>(this.localUrl);
}
updatePatient(patientData : patient)  {

  // this.localUrl = 'http://localhost:8080/patients/update';
  return this.http.put<patient>('http://localhost:8080/patients/update',patientData);
}
}
