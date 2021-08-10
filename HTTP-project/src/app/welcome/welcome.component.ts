import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Posts } from '../posts.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user={
    name:'',
    email:'',
    gender:''
  };
  num:number=0;
  clicked:boolean=false;
  constructor(
    private route:ActivatedRoute,
    private httpService:Posts,
    private router:Router) { }

  ngOnInit(): void {

    this.httpService.getUsers().subscribe(responseData=>{
      for(let email of responseData){
        if(email.email===this.user.email){
          this.user.name=email.name;
          this.user.gender=email.gender;   
          break;
        }
      }


    })

    this.route.queryParams.subscribe((param:Params)=>{
      this.user.name=param.name;
      this.user.email=param.email;
    });

    this.route.fragment.subscribe((value:string)=>{
      this.user.gender=value;
    })
  }

  show(){
    this.clicked=true;

    if(this.num===1){
      this.clicked=false;
      this.num=0;
    }else {
      this.num++;
    }
    


  }
  back(){
    this.router.navigate(['/log-in'])
  }

}
