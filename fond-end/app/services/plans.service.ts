import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsurancePlan } from './insurancePlans';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http:HttpClient) { }

  public addPlans(insurancePlan: InsurancePlan, userId:any):Observable<any>{
    // let userId=JSON.parse(localStorage.getItem("userId")!).userId;
    
    return this.http.post<any>(`${baseUrl}/insurancePlan/addPlan/${userId}`,insurancePlan);
  }


}
