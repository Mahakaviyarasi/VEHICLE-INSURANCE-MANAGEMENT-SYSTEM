import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  // constructor(){}
  age!: number;
  value!:string;
  result!:number;

  CalculatePrem() {
    
    
    var basicPremium = parseInt(this.value)*(15000/100000);
    if(this.age<25){
     var loadings = basicPremium* 0.3; //40 percent 
    }else{
      var loadings = basicPremium* 0.4;
    }
      var discount = basicPremium* 0.2;
    var ncb = discount * 0.35;

    
    this.result = basicPremium + loadings - discount -ncb;
    console.log(this.result);
    

    }

}
