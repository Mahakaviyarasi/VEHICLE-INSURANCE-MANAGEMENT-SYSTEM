import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }


  public addPlans(payment: Payment):Observable<any>{
    let planId=localStorage.getItem("planId")
    return this.http.post<any>(`${baseUrl}/payment/addPayment/${planId}`,payment);
  }

}
 