import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listbike',
  templateUrl: './listbike.component.html',
  styleUrls: ['./listbike.component.css']
})
export class ListbikeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  
  this.getAllBike();
  }
bikes:any;
getAllBike()
{
  const url="http://localhost:9000/User/Bikelist";
  this.http.get(url).subscribe((res)=>{
    this.bikes = res;
  },err=>{
  }
  )
}
}
