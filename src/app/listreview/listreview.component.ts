import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listreview',
  templateUrl: './listreview.component.html',
  styleUrls: ['./listreview.component.css']
})
export class ListreviewComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllReview();
  }
  reviews:any;
  getAllReview()
  {
    const url="http://localhost:9000/User/Bikelist";
    this.http.get(url).subscribe((res)=>{
      this.reviews = res;
    },err=>{
    }
    )
  }
}
