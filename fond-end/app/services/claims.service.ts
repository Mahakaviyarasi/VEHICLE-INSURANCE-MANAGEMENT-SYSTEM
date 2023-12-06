import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claims } from './claims';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  getClaim(claimId: number) {
   return this.http.get(`${baseUrl}/claim/getById/${claimId}`);
  }

  constructor(private http:HttpClient) { }


  public doClaim(claims: Claims){
    
    let userId=JSON.parse(localStorage.getItem('user1')!).userId;
console.log(claims);
console.log(`${baseUrl}/claim/addClaim/${userId}`);
    return this.http.post(`${baseUrl}/claim/addClaim/${userId}`,claims);
  }

  public getClaims(){
   let userId=localStorage.getItem('user');
    return this.http.get(`${baseUrl}/claim/listAllClaims/`)
  }
}
