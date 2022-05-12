import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  name!:string;
  phonenumber!:string;
  aadharnumber!:string;
  bikename!:string;
  color!:string;
  model!:string;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  order(){
    const userobj={
      "name":this.name,
      "phonenumber":this.phonenumber,
      "aadharnumber":this.aadharnumber,
      "bikename":this.bikename,
      "color":this.color,
      "model":this.model
    };
    const url="http://localhost:9000/User/order";
this.http.post(url,userobj).subscribe((res)=>{
  console.log(res);
  alert("successfully Ordered");
},(err)=>{
  console.log(err);
  alert("Please enter the valid Details");
})
  }
}

