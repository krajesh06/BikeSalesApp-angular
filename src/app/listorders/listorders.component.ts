import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.css']
})
export class ListordersComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllOrders();
  }
  orders:any;
  getAllOrders()
{
  const url="http://localhost:9000/Admin/Orderslist";
  this.http.get(url).subscribe((res)=>{
    this.orders = res;
  },err=>{
  }
  )
}
}
