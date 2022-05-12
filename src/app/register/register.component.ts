import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name!:string;
  mail_id!:string;
  password!:string;
  mobilenumber!:string;
  role!:string;
  constructor(private http:HttpClient, private toastr:ToastrService) { }


  

  ngOnInit(): void {
  }

  register(){
    const userobj={
      "name":this.name,
      "mail_id":this.mail_id,
      "password":this.password,
      "mobilenumber":this.mobilenumber,
      "role":"user"
    };
  
const url="http://localhost:9000/User/register";
this.http.post(url,userobj).subscribe((res)=>{
  console.log(res);
  this.toastr.success('Successfully Registered');
  window.location.href="http://localhost:4200/login"
},(err)=>{
  console.log(err);
  this.toastr.error('Please re-enter the valid credentials');
})
  }
}

