import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private http:HttpClient, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllUser();
  }
users:any;
getAllUser()
{
  const url="http://localhost:9000/Admin/listUser";
  this.http.get(url).subscribe((res)=>{
    this.users = res;
  },err=>{
  }
  )
}

deleteuser(name:any){;
  let cfm = confirm("Do you want to Delete this user ?");
  if(cfm){
  const url="http://localhost:9000/Admin/listUser/" + name;
  this.http.delete(url).subscribe((res)=>{
    console.log(res);
    this.toastrService.success("user deleted successfully");
    this.getAllUser();
  },(err)=>{
    this.toastrService.error("Sorry can cannot deleted");
  })
}

}
}
