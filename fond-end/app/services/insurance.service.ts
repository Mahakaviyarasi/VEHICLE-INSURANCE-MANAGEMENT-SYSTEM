import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(
    private http:HttpClient
  ) { }

// add insurance

 
  public addInsurance(insurance:any,userId:any):Observable<any>

  {
      //let userId=localStorage.getItem('user');
       return this.http.post(`${baseUrl}/Vehicle/addVehicle/${userId}`,insurance);
  }

  
  

}
