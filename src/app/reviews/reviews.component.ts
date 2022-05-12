import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  name!:string;
  phonenumber!:string;
  queries!:string;
  feedback!:string;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  review(){
    const userobj={
      "name":this.name,
      "phonenumber":this.phonenumber,
      "queries":this.queries,
      "feedback":this.feedback
    };
    const url="http://localhost:9000/User/reviews";
this.http.post(url,userobj).subscribe((res)=>{
  console.log(res);
  alert("Thank you for the response");
},(err)=>{
  console.log(err);
  alert("Please enter the valid Details");
})

}
}