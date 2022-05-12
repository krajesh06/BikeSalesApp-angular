import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name!:string;
  password!:string;
  
  
  constructor(private http:HttpClient,private toastr:ToastrService){}
  
  ngOnInit(): void {

  }
  login(){
    const userobj={
      "name":this.name,
      "password":this.password
  };
  const url="http://localhost:9000/User/login";
     this.http.post(url,userobj).subscribe((res:any)=>{
       console.log(res);
       localStorage.setItem("LOGGED_IN_USER", JSON.stringify(res));
       localStorage.setItem("isLoggedIn", "true");
       localStorage.setItem("ROLE", res.role);
       this.toastr.success('Loggen in Successfully');
       window.location.href="http://localhost:4200/listuser"
     },(err)=>{
       console.log(err);
       this.toastr.error('Please re-enter your details');
     })
  }
}
