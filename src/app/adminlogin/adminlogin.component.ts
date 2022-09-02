import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  name!:string;
  password!:string;
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  adminlogin(){
    const adminobj={
      "name":this.name,
      "password":this.password
  };
  const url="http://localhost:9000/Admin/login";
     this.http.post(url,adminobj).subscribe((res)=>{
       console.log(res);
       alert("Logged in");
       window.location.href="http://localhost:4200/listuser"
     },(err)=>{
       console.log(err);
       alert("Please enter correct Details");
     })
  }

}
