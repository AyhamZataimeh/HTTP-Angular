import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../post.model';
import { Posts } from '../posts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  searchUser='';
  users=[];
  error=null;
  constructor(private httpService:Posts) { }

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(responsData=>{
      this.users=responsData;
      
     
    },error=>{
      this.error=error.message;

    })
  }

  deleteUsers(){
    this.httpService.deleteUsers().subscribe(_=>{
      this.users=[];
    
    })
   
  

  }

}
